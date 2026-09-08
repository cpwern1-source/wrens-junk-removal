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
  metaDescription?: string; // SEO override for <meta description>; falls back to a generic one
  commonJobs?: string[]; // city-specific jobs — unique on-page content for local SEO
};

export const cities: City[] = [
  {
    slug: "bozeman",
    name: "Bozeman",
    blurb: "Same-week junk removal across Bozeman and the surrounding Gallatin Valley.",
    intro:
      "From downtown to the foothills, Wren's Junk Removal helps Bozeman homeowners, landlords, and businesses clear out the stuff they're done with. Garage cleanouts, old furniture, appliance hauling, remodel debris — no job too big or too small.",
    neighborhoods: ["Downtown", "The Northside", "Four Corners", "MSU area", "Story Mill"],
    commonJobs: [
      "Garage & basement cleanouts",
      "Furniture & appliance removal",
      "Estate & moving cleanouts",
      "Construction & remodel debris",
      "Hot tub removal",
      "Yard waste & debris",
    ],
  },
  {
    slug: "belgrade",
    name: "Belgrade",
    blurb: "Fast, friendly junk hauling for Belgrade homes and businesses.",
    intro:
      "Belgrade is growing fast, and we're here to help you keep your space clear. Wren's Junk Removal handles everything from single-item pickups to full property cleanouts across Belgrade and the surrounding area — with upfront pricing and a neighbor who shows up on time.",
    neighborhoods: ["Downtown Belgrade", "Gallatin Gateway", "Churchill", "Manhattan"],
    commonJobs: [
      "Single-item pickups",
      "Full property cleanouts",
      "Furniture & appliance removal",
      "Garage & shed cleanouts",
      "Construction debris",
      "Rental turnovers",
    ],
  },
  {
    slug: "big-sky",
    name: "Big Sky",
    blurb: "Reliable junk removal for Big Sky homes, rentals, and job sites.",
    intro:
      "Junk removal in Big Sky comes with its own challenges — narrow mountain driveways, vacation-rental turnovers on a tight deadline, and the long haul down the canyon to the nearest disposal site. Wren's Junk Removal handles all of it. From Mountain Village condos and Meadow Village homes to Town Center job sites, we load, haul, and dispose of whatever you're done with, so you never have to make the trip to Bozeman yourself. Locally owned, upfront pricing, and no job too big or too small.",
    neighborhoods: ["Town Center", "Meadow Village", "Mountain Village", "Gallatin Canyon"],
    metaDescription:
      "Junk removal in Big Sky, MT. Wren's Junk Removal handles vacation-rental cleanouts, construction debris, and furniture & appliance hauling across Mountain Village, Meadow Village & Town Center. Free quotes — we haul it down the canyon so you don't have to.",
    commonJobs: [
      "Vacation rental & Airbnb turnovers",
      "Construction & remodel debris",
      "Mountain home & cabin cleanouts",
      "Furniture & appliance removal",
      "Hot tub & deck teardowns",
      "Post-season resort cleanups",
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
