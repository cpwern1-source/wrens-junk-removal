import type { Metadata } from "next";
// FONTS: the one thing not driven by site.config.ts — Next.js needs fonts
// declared statically. To rebrand typography, swap these two imports (and the
// names in site.config.ts → theme.fonts, which is documentation only).
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/brand";
import { site } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { JsonLd, localBusinessSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const titleDefault = `${business.name} | ${site.seo.titleTagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: titleDefault,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [...site.seo.keywords],
  openGraph: {
    title: titleDefault,
    description: business.description,
    url: business.url,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: site.seo.ogImage,
        width: site.assets.logoWidth,
        height: site.assets.logoHeight,
        alt: `${business.name} logo`,
      },
    ],
  },
  robots: { index: true, follow: true },
};

// Brand palette → CSS custom properties. globals.css maps these onto the
// design's color slots, so changing site.config.ts colors restyles the site.
const c = site.theme.colors;
const themeVars: React.CSSProperties = {
  "--brand-primary": c.primary,
  "--brand-primary-dark": c.primaryDark,
  "--brand-primary-light": c.primaryLight,
  "--brand-base": c.base,
  "--brand-base-dark": c.baseDark,
  "--brand-ink": c.ink,
  "--brand-ink-soft": c.inkSoft,
  "--brand-accent": c.accent,
  "--brand-accent-dark": c.accentDark,
  "--brand-muted": c.muted,
} as React.CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`} style={themeVars}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
