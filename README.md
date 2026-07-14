# Wren's Junk Removal

Funnel-first marketing site for **Wren's Junk Removal** — serving Bozeman, Belgrade & Big Sky, MT.
Built with Next.js (App Router) + Tailwind v4, deployed on Vercel. Every page funnels to the
`/quote` quiz, which emails Wren a clean lead (photos included).

---

## 🟢 Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

The quiz funnel works out of the box in dev — if email isn't configured yet, leads are logged to
the server console so you can still test the whole flow.

---

## ✅ The swap list (fill these in to go live)

Everything you need to personalize is marked in code with `TODO: SWAP`. The big ones:

| What | Where |
|------|-------|
| **Phone & email** | `lib/brand.ts` — single source of truth, updates the whole site |
| **Lead email + Resend key** | `.env.local` (see `.env.local.example`) |
| **Wren's About bio** | `app/about/page.tsx` (look for `[Add Wren's real story here.]`) |
| **Photos** (hero, about, etc.) | Dashed "📷" boxes on the site = `<PhotoSlot>` placeholders. Hero uses `public/truck.webp` |
| **Real testimonials** | `lib/content.ts` → `testimonials` |
| **Services / FAQ / city copy** | `lib/content.ts` and `lib/cities.ts` |
| **Google Business Profile URL** | `lib/brand.ts` → `googleBusinessUrl` |
| **Production domain** | `lib/brand.ts` → `url` (used by SEO + sitemap) |

To replace the logo, overwrite `public/logo.jpg`. To replace the hero image, overwrite
`public/truck.webp`.

---

## 📨 Lead delivery (email now, SMS later)

1. Sign up free at [resend.com](https://resend.com), create an API key.
2. Put it in `.env.local` as `RESEND_API_KEY`, set `LEAD_EMAIL` to Wren's Gmail.
3. To send from a branded address, verify your domain in Resend and update `LEAD_FROM` in `.env.local`.

**Photos** are uploaded to **Vercel Blob**. Create a Blob store in the Vercel dashboard
(Storage → Blob) — `BLOB_READ_WRITE_TOKEN` is added automatically. Without it, leads still send,
just without photo links.

**Adding SMS later:** open `app/actions.ts`, find `notifyLead()`. There's a one-line seam right
after the email send — drop a Twilio call there and you're done. No other changes needed.

---

## 🚀 Deploy to Vercel

```bash
npx vercel            # link & preview deploy
npx vercel --prod     # production
```

Then in the Vercel dashboard → Project → Settings → Environment Variables, add:
`RESEND_API_KEY`, `LEAD_EMAIL`, `LEAD_FROM` (and `BLOB_READ_WRITE_TOKEN` is auto-added with a Blob store).

---

## 🔎 SEO notes

- `LocalBusiness` + `FAQPage` JSON-LD schema is baked in.
- Dedicated landing pages per city: `/bozeman`, `/belgrade`, `/big-sky` (add more in `lib/cities.ts`).
- `sitemap.xml` and `robots.txt` are generated automatically.
- **Biggest off-site win:** set up a free **Google Business Profile** for Wren and paste the link
  into `lib/brand.ts`. For local "junk removal near me" searches, that matters as much as the site.
