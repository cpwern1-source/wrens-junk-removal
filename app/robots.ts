import type { MetadataRoute } from "next";
import { business } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  const base = business.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
