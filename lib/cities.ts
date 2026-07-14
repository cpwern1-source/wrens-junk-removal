/**
 * Per-city data powering /[city] landing pages and the Service Areas section.
 * Each city gets its own SEO-targeted page at /<slug>.
 */

export type City = {
  slug: string;
  name: string;
  blurb: string; // short, used on home cards
  intro: string; // longer, used on the city page
  neighborhoods: string[]; // local signal for SEO copy
};

export const cities: City[] = [
  {
    slug: "bozeman",
    name: "Bozeman",
    blurb: "Same-week junk removal across Bozeman and the surrounding Gallatin Valley.",
    intro:
      "From downtown to the foothills, Wren's Junk Removal helps Bozeman homeowners, landlords, and businesses clear out the stuff they're done with. Garage cleanouts, old furniture, appliance hauling, remodel debris — no job too big or too small.",
    neighborhoods: ["Downtown", "The Northside", "Four Corners", "MSU area", "Story Mill"],
  },
  {
    slug: "belgrade",
    name: "Belgrade",
    blurb: "Fast, friendly junk hauling for Belgrade homes and businesses.",
    intro:
      "Belgrade is growing fast, and we're here to help you keep your space clear. Wren's Junk Removal handles everything from single-item pickups to full property cleanouts across Belgrade and the surrounding area — with upfront pricing and a neighbor who shows up on time.",
    neighborhoods: ["Downtown Belgrade", "Gallatin Gateway", "Churchill", "Manhattan"],
  },
  {
    slug: "big-sky",
    name: "Big Sky",
    blurb: "Reliable junk removal for Big Sky homes, rentals, and job sites.",
    intro:
      "Whether it's a vacation rental turnover, a construction site, or a mountain home cleanout, Wren's Junk Removal makes Big Sky junk disappear. We handle the haul up and down the canyon so you don't have to.",
    neighborhoods: ["Town Center", "Meadow Village", "Mountain Village", "Gallatin Canyon"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
