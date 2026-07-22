"use server";

import { put } from "@vercel/blob";
import nodemailer from "nodemailer";
import { z } from "zod";
import { business } from "@/lib/brand";

const leadSchema = z.object({
  items: z.string().min(1),
  volume: z.string().min(1),
  location: z.string().min(1),
  access: z.string().default("Not specified"),
  timing: z.string().min(1),
  name: z.string().min(1, "Name is required").max(120),
  phone: z.string().min(7, "A valid phone is required").max(40),
  email: z.string().email().optional().or(z.literal("")),
  preferredContact: z.string().default("Text"),
});

type Lead = z.infer<typeof leadSchema> & { photoUrls: string[] };

export async function submitQuote(
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  // 1) Validate the answers
  const parsed = leadSchema.safeParse({
    items: formData.get("items"),
    volume: formData.get("volume"),
    location: formData.get("location"),
    access: formData.get("access"),
    timing: formData.get("timing"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    preferredContact: formData.get("preferredContact"),
  });

  if (!parsed.success) {
    return { ok: false, error: "Please fill in your name and phone number." };
  }

  // 2) Upload any photos to Vercel Blob (skipped gracefully if not configured)
  const photoUrls: string[] = [];
  const photos = formData.getAll("photos").filter((p): p is File => p instanceof File && p.size > 0);
  if (photos.length && process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      for (const photo of photos.slice(0, 6)) {
        const safeName = photo.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
        const blob = await put(`quotes/${Date.now()}-${safeName}`, photo, {
          access: "public",
          addRandomSuffix: true,
        });
        photoUrls.push(blob.url);
      }
    } catch (err) {
      console.error("[submitQuote] photo upload failed:", err);
      // Non-fatal — still deliver the lead without photos
    }
  }

  const lead: Lead = { ...parsed.data, photoUrls };

  // 3) Notify Chase (email now; SMS seam for later)
  try {
    await notifyLead(lead);
  } catch (err) {
    console.error("[submitQuote] notify failed:", err);
    return { ok: false, error: "We couldn't send your request. Please call us instead." };
  }

  return { ok: true };
}

/**
 * Single place that turns a lead into a notification.
 * 👉 Add SMS later by dropping a Twilio call right below the email send —
 *    no other code changes needed.
 */
async function notifyLead(lead: Lead) {
  const subject = `🗑️ New Quote Request — ${lead.name} (${lead.location})`;
  const html = leadEmailHtml(lead);

  // --- EMAIL (Gmail via SMTP + App Password) ---
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.LEAD_EMAIL || business.email;

  if (!gmailUser || !gmailAppPassword) {
    // Not yet configured — log so the funnel still works end-to-end in dev.
    console.warn(
      "[notifyLead] GMAIL_USER / GMAIL_APP_PASSWORD not set. Lead captured but NOT emailed:\n",
      JSON.stringify(lead, null, 2)
    );
    return;
  }

  // Gmail sends as the authenticated account; a display name is fine, but the
  // address is always rewritten to gmailUser, so default the From to it.
  const from = process.env.LEAD_FROM || `Wren's Quotes <${gmailUser}>`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: lead.email || undefined,
    subject,
    html,
  });

  // --- SMS seam (later) ---
  // await sendSms(business.phoneHref, `New quote from ${lead.name} in ${lead.location}. Check email.`);
}

function leadEmailHtml(lead: Lead): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;color:#41505b;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#1e2a33">${value}</td></tr>`;

  const photos = lead.photoUrls.length
    ? `<p style="margin:16px 12px 0;font-weight:600;color:#41505b">Photos:</p>` +
      lead.photoUrls
        .map(
          (u) =>
            `<a href="${u}" style="display:inline-block;margin:8px 4px"><img src="${u}" alt="job photo" width="140" style="border-radius:8px;border:1px solid #ddd"/></a>`
        )
        .join("")
    : `<p style="margin:16px 12px 0;color:#8fa0ad">No photos attached.</p>`;

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#f5f1e6;padding:24px;border-radius:12px">
    <h2 style="color:#2f4a33;margin:0 0 4px">New Junk Removal Quote Request</h2>
    <p style="color:#41505b;margin:0 0 16px">From the website quiz funnel</p>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden">
      ${row("Name", lead.name)}
      ${row("Phone", `<a href="tel:${lead.phone}">${lead.phone}</a>`)}
      ${row("Email", lead.email ? `<a href="mailto:${lead.email}">${lead.email}</a>` : "—")}
      ${row("Preferred", lead.preferredContact)}
      ${row("Location", lead.location)}
      ${row("Items", lead.items)}
      ${row("Volume", lead.volume)}
      ${row("Access", lead.access)}
      ${row("Timing", lead.timing)}
    </table>
    ${photos}
  </div>`;
}
