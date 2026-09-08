import { site, type City } from "@/site.config";

/**
 * Per-city data powering /[city] landing pages and the Service Areas section.
 * Edit the list in site.config.ts → `cities`.
 */
export type { City };

export const cities: City[] = site.cities;

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
