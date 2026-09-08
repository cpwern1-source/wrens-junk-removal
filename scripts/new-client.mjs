#!/usr/bin/env node
/**
 * new-client.mjs — scaffold a fresh client site from this template.
 *
 * Run inside a NEW clone of the template repo. It rewrites the business
 * identity in site.config.ts (name, owner, service, phone, email, domain,
 * service-area cities) and prints a checklist of what to finish by hand.
 *
 *   Interactive:   node scripts/new-client.mjs
 *   One-liner:     node scripts/new-client.mjs \
 *                    --name "Acme Plumbing" --owner "Sam Rivera" \
 *                    --service "Plumbing" --phone "406-555-0142" \
 *                    --email "sam@acmeplumbing.com" \
 *                    --cities "Bozeman,Belgrade,Big Sky" \
 *                    --domain "acmeplumbing.com"
 *
 * Zero dependencies — Node built-ins only. Always backs up the old config to
 * site.config.ts.bak before writing.
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONFIG = join(ROOT, "site.config.ts");

// ── arg parsing ───────────────────────────────────────────────────────────
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      out[key] = val;
    }
  }
  return out;
}

// ── helpers ─────────────────────────────────────────────────────────────
const slugify = (s) =>
  s.toLowerCase().trim().replace(/['".]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// US-style tel: href from a display phone. Adjust if you serve other regions.
function toPhoneHref(display) {
  const digits = display.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

// Replace `key: "..."` (single line) inside site.config.ts. Only the FIRST
// match is replaced — the identity fields we target each appear once.
function setStringField(src, key, value) {
  const re = new RegExp(`(\\b${key}:\\s*)"(?:[^"\\\\]|\\\\.)*"`);
  if (!re.test(src)) {
    console.warn(`  ⚠  could not find field "${key}" — skipped (edit site.config.ts by hand)`);
    return src;
  }
  const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return src.replace(re, `$1"${escaped}"`);
}

// Replace an array-of-strings field: `key: ["a", "b"]` (single line).
function setStringArrayField(src, key, values) {
  const re = new RegExp(`(\\b${key}:\\s*)\\[[^\\]]*\\]`);
  const rendered = "[" + values.map((v) => `"${v.replace(/"/g, '\\"')}"`).join(", ") + "]";
  if (!re.test(src)) {
    console.warn(`  ⚠  could not find array "${key}" — skipped`);
    return src;
  }
  return src.replace(re, `$1${rendered}`);
}

async function prompt(rl, question, fallback = "") {
  const suffix = fallback ? ` [${fallback}]` : "";
  const answer = (await rl.question(`${question}${suffix}: `)).trim();
  return answer || fallback;
}

// ── main ────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(CONFIG)) {
    console.error("✗ site.config.ts not found. Run this from the project root.");
    process.exit(1);
  }

  const args = parseArgs(process.argv.slice(2));
  let a = { ...args };

  const interactive = !args.name;
  if (interactive) {
    const rl = createInterface({ input: stdin, output: stdout });
    console.log("\n🛠  New client scaffold — answer a few questions (Enter accepts the default).\n");
    a.name = await prompt(rl, "Business name", "Acme Services");
    a.short = await prompt(rl, "Short name (buttons/footer)", a.name.split(" ")[0]);
    a.owner = await prompt(rl, "Owner first name", "the owner");
    a.service = await prompt(rl, 'Service noun (e.g. "Plumbing", "Junk Removal")', "Services");
    a.phone = await prompt(rl, "Phone (display, e.g. (406) 555-0142)", "(406) 555-0142");
    a.email = await prompt(rl, "Lead + public email", "hello@example.com");
    a.cities = await prompt(rl, "Service-area cities (comma separated)", "Bozeman, Belgrade, Big Sky");
    a.domain = await prompt(rl, "Production domain (no https://)", `${slugify(a.name)}.com`);
    a.region = await prompt(rl, "State/region code", "MT");
    rl.close();
  }

  const cities = (a.cities || "Bozeman, Belgrade, Big Sky")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
  const short = a.short || a.name.split(" ")[0];
  const region = a.region || "MT";

  // back up first
  copyFileSync(CONFIG, `${CONFIG}.bak`);

  let src = readFileSync(CONFIG, "utf8");
  src = setStringField(src, "name", a.name);
  src = setStringField(src, "shortName", short);
  src = setStringField(src, "owner", a.owner || "the owner");
  src = setStringField(src, "serviceNoun", a.service || "Services");
  src = setStringField(src, "phone", a.phone || "");
  src = setStringField(src, "phoneHref", toPhoneHref(a.phone || ""));
  src = setStringField(src, "email", a.email || "");
  src = setStringField(src, "region", region);
  src = setStringField(src, "baseCity", cities[0] || "");
  src = setStringField(src, "url", `https://${(a.domain || "").replace(/^https?:\/\//, "")}`);
  src = setStringArrayField(src, "serviceArea", cities);
  src = setStringArrayField(src, "locationOptions", [...cities, "Other / nearby"]);

  writeFileSync(CONFIG, src);

  console.log(`\n✓ site.config.ts updated for "${a.name}" (backup: site.config.ts.bak)\n`);
  console.log("Now finish these by hand — everything left is in site.config.ts + /public:\n");
  const todo = [
    "site.config.ts → theme.colors: paste the client's brand hex values",
    "site.config.ts → home.hero: headline, subhead, badges",
    "site.config.ts → home.services.items: the client's actual services",
    "site.config.ts → cities[]: intro copy + neighborhoods per city",
    "site.config.ts → home.faq / testimonials / about.story: real copy & reviews",
    "site.config.ts → quiz: reword the funnel questions for this trade",
    "/public/brand: replace logo + mark images (see assets paths in config)",
    "app/layout.tsx: swap the two next/font imports if changing typography",
    ".env.local: set GMAIL_USER, GMAIL_APP_PASSWORD, LEAD_EMAIL (see .env.local.example)",
    "Run: npm run build  → confirm green, then deploy (npx vercel --prod)",
  ];
  todo.forEach((t, i) => console.log(`  ${String(i + 1).padStart(2)}. ${t}`));
  console.log("\nTip: search the config for  ⚠️ SWAP  to find every must-change field.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
