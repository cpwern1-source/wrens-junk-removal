/**
 * Wren's Junk Removal — single source of truth for business info.
 *
 * 👉 TODO: SWAP — fill in Wren's real phone, email, and links here.
 *    Every button, footer, and schema reads from this file, so you only
 *    change it in one place.
 */

export const business = {
  name: "Wren's Junk Removal",
  shortName: "Wren's",
  owner: "Chase",
  tagline: "No job too big or too small.",
  description:
    "Full-service junk removal and disposal serving Bozeman, Belgrade & Big Sky. Locally owned. We do the heavy lifting — you just point.",

  // Contact info — Chase
  phone: "(330) 503-0349", // display format
  phoneHref: "+13305030349", // tel: link format (no spaces/parens)
  email: "cpwern1@gmail.com", // public-facing + where leads are sent

  // Service area
  serviceArea: ["Bozeman", "Belgrade", "Big Sky"],
  region: "MT",
  baseCity: "Bozeman",

  // Hours (used in schema + footer) — TODO: SWAP if different
  hours: "Mon–Sat, 7am–7pm",

  // TODO: SWAP — set once a custom domain is live (e.g. https://wrensjunkremoval.com)
  url: "https://wrens-junk-removal-delta.vercel.app",
  googleBusinessUrl: "", // paste the Google Business Profile link when created

  // Social — TODO: SWAP / leave blank to hide
  facebookUrl: "",
  instagramUrl: "",
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/#service-areas" },
] as const;
