import type { MetadataRoute } from "next";
import { business } from "@/lib/brand";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url.replace(/\/$/, "");
  const staticRoutes = ["", "/quote"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...cityRoutes];
}
