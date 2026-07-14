/**
 * Quiz funnel configuration. Each option list drives one step.
 * Keep labels short — they render as tappable chips/cards.
 */

export const itemOptions = [
  "Furniture",
  "Appliances",
  "Mattresses",
  "Yard / landscaping debris",
  "Garage / basement cleanout",
  "Construction debris",
  "Hot tub",
  "Estate cleanout",
  "Other",
];

export const volumeOptions = [
  { value: "A few items", label: "A Few Items", hint: "Single pieces, fits in a pickup corner", icon: "📦" },
  { value: "Half a truck", label: "Half a Truck", hint: "A room's worth of stuff", icon: "🛻" },
  { value: "Full truck", label: "Full Truck", hint: "A garage or large room", icon: "🚚" },
  { value: "Multiple loads", label: "Multiple Loads", hint: "Whole house / big cleanout", icon: "🏚️" },
  { value: "Not sure", label: "Not Sure", hint: "We'll figure it out from your photos", icon: "🤔" },
];

export const locationOptions = ["Bozeman", "Belgrade", "Big Sky", "Other / nearby"];

export const accessOptions = [
  "Curbside / driveway",
  "Inside the home",
  "Stairs involved",
  "Heavy or oversized items",
];

export const timingOptions = [
  { value: "ASAP", label: "ASAP", hint: "As soon as you can" },
  { value: "This week", label: "This Week", hint: "Sometime in the next few days" },
  { value: "Flexible", label: "I'm Flexible", hint: "Whenever works best" },
];

export const contactMethods = ["Text", "Call", "Email"];

export type QuoteData = {
  items: string[];
  volume: string;
  location: string;
  access: string[];
  timing: string;
  photoCount: number;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
};

// Total interactive steps (photos + contact handled together as the last screens)
export const TOTAL_STEPS = 7;
