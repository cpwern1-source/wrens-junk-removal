import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/brand";
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

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Junk Removal in Bozeman, Belgrade & Big Sky`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "junk removal Bozeman",
    "junk removal Belgrade MT",
    "junk removal Big Sky",
    "junk hauling Bozeman",
    "furniture removal",
    "appliance removal",
    "estate cleanout Bozeman",
    "construction debris removal",
  ],
  openGraph: {
    title: `${business.name} | Junk Removal in Bozeman, Belgrade & Big Sky`,
    description: business.description,
    url: business.url,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/wrens-logo.webp",
        width: 1264,
        height: 848,
        alt: `${business.name} logo`,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
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
