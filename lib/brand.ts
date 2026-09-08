import { site } from "@/site.config";

/**
 * Business info + nav, sourced from the single site.config.ts.
 * Import `business` and `nav` anywhere; edit the values in site.config.ts.
 */
export const business = site.business;
export const nav = site.nav;

/**
 * Replace {token} placeholders in copy strings with business values.
 * Supported tokens: {name} {shortName} {owner} {region} {regionLong} {baseCity}
 * plus anything you pass in `extra` (e.g. { city: "Bozeman" }).
 */
export function fill(text: string, extra: Record<string, string> = {}): string {
  const map: Record<string, string> = {
    name: business.name,
    shortName: business.shortName,
    owner: business.owner,
    serviceNoun: business.serviceNoun,
    region: business.region,
    regionLong: business.regionLong,
    baseCity: business.baseCity,
    ...extra,
  };
  return text.replace(/\{(\w+)\}/g, (m, key) => map[key] ?? m);
}
