# Local Service Site — Template Playbook

This repo is a **reusable template** for local service-business marketing sites
(junk removal, plumbing, landscaping, pressure washing, movers, cleaning — any
trade that books jobs through a "get a quote" funnel). One config file drives an
entire site, so you can stand up a new client fast and consistently.

The live example is **Wren's Junk Removal**. Everything below is how you turn a
fresh copy of this repo into the next client's site.

---

## The one file: `site.config.ts`

`site.config.ts` in the project root is the **single source of truth**. Business
info, brand colors, every headline, the services list, service-area pages, FAQ,
testimonials, and the quote quiz all live there. The React components contain no
client copy — they just render this file.

Change it, run `npm run build`, deploy. That's a client site.

There are only **three swap zones** to make a site fully a client's own:

| Zone | Where | What |
|------|-------|------|
| 1. Content & copy | `site.config.ts` | ~everything a visitor reads |
| 2. Brand assets | `/public/brand/*` | logo + square mark (and any photos) |
| 3. Fonts (optional) | `app/layout.tsx` | the two `next/font` imports |

Lead delivery (email) is configured per client in `.env.local` — see
`.env.local.example` and the README.

---

## Fast path: the scaffold script

From a fresh clone, run:

```bash
npm run new-client
# or non-interactive:
node scripts/new-client.mjs \
  --name "Acme Plumbing" --owner "Sam" --service "Plumbing" \
  --phone "(406) 555-0142" --email "sam@acmeplumbing.com" \
  --cities "Bozeman,Belgrade,Big Sky" --domain "acmeplumbing.com"
```

It rewrites the **business identity** in `site.config.ts` (name, owner, service
noun, phone, email, domain, service-area cities — and derives the `tel:` href and
canonical URL), backs the old file up to `site.config.ts.bak`, and prints a
checklist of what to finish by hand.

It does **not** invent copy. Marketing text, services, city intros, FAQ, and
reviews are the parts that make a site good — you write those in the config.

---

## Full checklist per client

1. **Identity** — run `npm run new-client` (or edit the `business` block by hand).
2. **Brand colors** — `site.config.ts → theme.colors`. Paste the client's hex
   values. These flow through CSS variables to the whole site; no other file to
   touch. (Grab colors from the client's logo.)
3. **Logo + mark** — replace the images in `/public/brand/` and point
   `site.config.ts → assets` at them. `logo` is the big hero image; `mark` is the
   square icon in the header/footer.
4. **Home copy** — `home.hero` (headline, subhead, badges), `home.services.items`
   (the client's real services), `home.faq`, `home.testimonials`, `home.aboutTeaser`.
5. **Service-area pages** — `cities[]`. Each city becomes an SEO page at `/<slug>`.
   Give each a real `intro` and `neighborhoods` — that's the local-SEO payload.
6. **About page** — `about.story` (the owner's real bio) and `about.values`.
7. **The quote funnel** — `quiz`. Reword `itemOptions`, `volumeOptions`, and the
   step prompts in `quiz.copy` for the trade (a plumber isn't asking "how much
   junk").
8. **SEO** — `seo.keywords` and `seo.titleTagline`.
9. **Lead email** — set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `LEAD_EMAIL` in
   `.env.local` (each client needs its own inbox). See README → "Lead delivery".
10. **Fonts (optional)** — to change typography, swap the two `next/font/google`
    imports in `app/layout.tsx` and update `theme.fonts` (documentation).
11. **Verify** — `npm run build`. It must be green (TypeScript + all pages
    prerender) before you deploy.
12. **Deploy** — `npx vercel --prod`, then add the env vars in the Vercel
    dashboard.

> Tip: search `site.config.ts` for **⚠️ SWAP** to jump to every must-change field.

---

## How the theming works (so you can trust it)

Colors are defined once in `site.config.ts → theme.colors`. `app/layout.tsx`
injects them as `--brand-*` CSS variables on `<html>`. `app/globals.css` maps
those onto the design's color slots (`--color-forest`, `--color-sand`, …), which
Tailwind turns into the utility classes the components use (`bg-forest`,
`text-sand`). So one hex change in the config restyles the entire site, and the
component class names never change between clients.

The color slot names (forest / cream / sand / ink / slate) are historical — read
them as **roles**: forest = primary, cream = page background, sand = accent/CTA,
ink = text, slate = muted/borders.

---

## What's client-specific vs. shared

- **Client-specific:** `site.config.ts`, `/public/brand/*`, `.env.local`, the
  `next/font` imports.
- **Shared machinery (rarely touched):** everything in `components/`, `lib/`, and
  the page shells in `app/`. Improvements here benefit every client site — keep
  them generic and config-driven.
