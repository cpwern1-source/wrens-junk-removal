/**
 * ============================================================================
 *  site.config.ts — THE ONE FILE YOU EDIT PER CLIENT
 * ============================================================================
 *
 *  This is the single source of truth for an entire client site. Everything a
 *  visitor reads or a search engine indexes — business info, brand colors,
 *  every headline, the services list, the service-area pages, the quote quiz —
 *  lives here. Components just render this data; they contain no client copy.
 *
 *  To spin up a NEW client:
 *    1. Run  `node scripts/new-client.mjs "Acme Plumbing"`  (scaffolds a fresh
 *       copy of this file with placeholders), OR copy/edit this file by hand.
 *    2. Fill in everything marked  ⚠️ SWAP  below.
 *    3. Drop the client's logo + photos into /public/brand  (see TEMPLATE.md).
 *    4. Set the lead-email env vars in .env.local  (see .env.local.example).
 *    5. `npm run build` to confirm it's green, then deploy.
 *
 *  Fonts are the one thing not driven from here — Next.js needs them declared
 *  statically. Swap them in app/layout.tsx (documented there). Everything else
 *  is in this file.
 * ============================================================================
 */

export type Service = { icon: string; title: string; blurb: string };
export type Step = { number: string; title: string; blurb: string };
export type Faq = { q: string; a: string };
export type Testimonial = { quote: string; name: string; location: string };
export type Value = { icon: string; title: string; text: string };
export type VolumeOption = { value: string; label: string; hint: string; icon: string };
export type TimingOption = { value: string; label: string; hint: string };

export type City = {
  slug: string;
  name: string;
  blurb: string; // short, used on home cards
  intro: string; // longer, used on the city page
  neighborhoods: string[]; // local signal for SEO copy
};

export const site = {
  // ──────────────────────────────────────────────────────────────────────
  //  BUSINESS — ⚠️ SWAP every field
  // ──────────────────────────────────────────────────────────────────────
  business: {
    name: "Wren's Junk Removal",
    shortName: "Wren's",
    owner: "Chase",
    tagline: "No job too big or too small.",
    serviceNoun: "Junk Removal", // used in labels like "Junk Removal in Bozeman"
    description:
      "Full-service junk removal and disposal serving Bozeman, Belgrade & Big Sky. Locally owned. We do the heavy lifting — you just point.",

    phone: "(330) 503-0349", // display format
    phoneHref: "+13305030349", // tel: link format (no spaces/parens)
    email: "cpwern1@gmail.com", // public-facing + where leads are sent

    serviceArea: ["Bozeman", "Belgrade", "Big Sky"],
    region: "MT",
    baseCity: "Bozeman",
    regionLong: "Gallatin Valley", // used in copy like "Serving the Gallatin Valley"

    hours: "Mon–Sat, 7am–7pm",
    openingHoursSchema: "Mo-Sa 07:00-19:00", // schema.org format for SEO

    url: "https://wrensjunkremoval.com", // ⚠️ SWAP once live
    googleBusinessUrl: "", // paste the Google Business Profile link when created
    facebookUrl: "",
    instagramUrl: "",
    copyrightLine: "Locally owned & operated.",
  },

  // ──────────────────────────────────────────────────────────────────────
  //  NAV — top navigation links
  // ──────────────────────────────────────────────────────────────────────
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Service Areas", href: "/#service-areas" },
    { label: "About", href: "/about" },
  ],

  // ──────────────────────────────────────────────────────────────────────
  //  THEME — brand colors (drive the whole site via CSS variables)
  //  These map to the design's color "slots". Change the hex, change the site.
  //  Fonts: swap in app/layout.tsx (Next.js requires static font declarations).
  // ──────────────────────────────────────────────────────────────────────
  theme: {
    colors: {
      primary: "#2f4a33", // main brand color (headers, hero)
      primaryDark: "#233a28", // header/footer bar
      primaryLight: "#3c5e42", // gradient accents
      base: "#f5f1e6", // page background
      baseDark: "#ece5d3", // alternating section background
      ink: "#1e2a33", // headings / body text
      inkSoft: "#41505b", // secondary text
      accent: "#c7a86a", // CTA / buttons / highlights
      accentDark: "#b08f4f", // button hover
      muted: "#8fa0ad", // supporting / borders
    },
    // Documentation only — actually applied in app/layout.tsx:
    fonts: { sans: "Inter", display: "Oswald" },
  },

  // ──────────────────────────────────────────────────────────────────────
  //  SEO — used by <head> metadata, sitemap, robots
  // ──────────────────────────────────────────────────────────────────────
  seo: {
    titleTagline: "Junk Removal in Bozeman, Belgrade & Big Sky",
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
    ogImage: "/brand/wrens-logo.webp",
  },

  // ──────────────────────────────────────────────────────────────────────
  //  BRAND ASSETS — image paths in /public
  // ──────────────────────────────────────────────────────────────────────
  assets: {
    logo: "/brand/wrens-logo.webp", // large hero logo
    logoWidth: 1264,
    logoHeight: 848,
    mark: "/brand/wren-mark.webp", // square icon (header + footer)
  },

  // ──────────────────────────────────────────────────────────────────────
  //  HOME PAGE COPY
  // ──────────────────────────────────────────────────────────────────────
  home: {
    hero: {
      badge: "Bozeman · Belgrade · Big Sky",
      headline: "Junk Gone.",
      headlineAccent: "No Hassle.", // rendered in the accent color on its own line
      subhead:
        "Full-service junk removal & disposal across the Gallatin Valley. No job too big or too small. We do the heavy lifting — you just point.",
      bullets: ["✅ Upfront pricing", "✅ Locally owned", "✅ We load everything"],
      badgeTop: "Same-week",
      badgeBottom: "pickup available",
      imageAlt: "Wren's Junk Removal — pickup truck loaded with junk, Bozeman Montana",
    },

    services: {
      eyebrow: "What We Haul",
      title: "Full-Service Junk Removal",
      subtitle:
        "If it's junk and it's not hazardous, we'll take it. Here's the kind of work we do every day.",
      items: [
        { icon: "🛋️", title: "Furniture & Mattresses", blurb: "Couches, beds, dressers, desks — hauled out and disposed of right." },
        { icon: "🧊", title: "Appliances", blurb: "Fridges, washers, dryers, water heaters, hot tubs — we take it all." },
        { icon: "🏚️", title: "Garage & Estate Cleanouts", blurb: "Full garages, basements, attics, and whole-property cleanouts." },
        { icon: "🌲", title: "Yard & Landscaping Debris", blurb: "Branches, brush, fencing, sod, and seasonal yard waste." },
        { icon: "🔨", title: "Construction Debris", blurb: "Remodel and demo debris, drywall, lumber, flooring, and more." },
        { icon: "🏢", title: "Commercial & Rentals", blurb: "Offices, retail, landlords, and turnover cleanouts between tenants." },
      ] as Service[],
    },

    howItWorks: {
      eyebrow: "Dead Simple",
      title: "How It Works",
      cta: "Start My Quote →",
      steps: [
        { number: "01", title: "Tell Us What You've Got", blurb: "Answer a few quick questions and snap a photo or two. Takes about a minute." },
        { number: "02", title: "Get a Fast Quote", blurb: "Chase reviews it and texts or emails you an upfront price — no surprises." },
        { number: "03", title: "We Haul It Away", blurb: "We show up on time, do all the lifting and loading, and sweep up after." },
      ] as Step[],
    },

    whatWeTake: {
      eyebrow: "The Short List",
      title: "What We Take",
      subtitle:
        "Pretty much everything that isn't hazardous. If you're not sure, just ask in your quote.",
      takeHeading: "✅ We Take",
      skipHeading: "🚫 We Can't Take",
      skipNote: "Hazardous materials require a specialized hauler.",
      takeList: [
        "Furniture & mattresses",
        "Appliances & electronics",
        "Hot tubs",
        "Yard & landscaping debris",
        "Construction & remodel debris",
        "Garage, basement & estate cleanouts",
        "Office & commercial junk",
        "Just about anything non-hazardous",
      ],
      skipList: [
        "Hazardous chemicals & paint",
        "Asbestos",
        "Wet paint & solvents",
        "Medical / biohazard waste",
      ],
    },

    aboutTeaser: {
      eyebrow: "Locally Owned",
      title: "Born & Raised in the Gallatin Valley",
      // {name} and {owner} tokens are filled in from business.* at render time.
      body1:
        "{name} is owned and operated by {owner}, a local who knows these towns because he grew up in them. When you book with us, you're hiring a neighbor — not a national chain.",
      body2:
        "Reliable, friendly, and on time. We treat your property like our own and leave the space cleaner than we found it.",
      cta: "Meet {owner} →",
      photoLabel: "Photo of Chase / the crew",
    },

    serviceAreas: {
      eyebrow: "Where We Work",
      title: "Serving the Gallatin Valley",
      subtitle: "Proudly local. Tap your town for junk removal details near you.",
    },

    testimonials: {
      eyebrow: "Word of Mouth",
      title: "What Neighbors Say",
      subtitle: "Real reviews go here as they roll in. (Placeholders for now.)",
      // ⚠️ SWAP — replace with real customer reviews once they come in.
      items: [
        { quote: "Placeholder review — drop a real one here. Chase was on time, friendly, and cleared our whole garage in under an hour.", name: "Customer Name", location: "Bozeman, MT" },
        { quote: "Placeholder review — swap in a real testimonial. Quick quote, fair price, and they handled a heavy old hot tub no problem.", name: "Customer Name", location: "Belgrade, MT" },
        { quote: "Placeholder review — add a genuine quote here. Booked it from my phone in two minutes and the junk was gone the next day.", name: "Customer Name", location: "Big Sky, MT" },
      ] as Testimonial[],
    },

    faq: {
      eyebrow: "Good to Know",
      title: "Frequently Asked Questions",
      items: [
        { q: "How much does junk removal cost?", a: "Pricing depends on how much junk you have and what it is. The fastest way to get an exact price is to fill out our quick quote form with a couple of photos — you'll get an upfront, no-obligation quote back by text or email." },
        { q: "What areas do you serve?", a: "We serve Bozeman, Belgrade, Big Sky, and the surrounding Gallatin Valley. Not sure if you're in range? Send a quote request and we'll let you know." },
        { q: "Do I need to move everything outside first?", a: "Nope. We do all the heavy lifting. Point us to the items — in the garage, basement, upstairs, wherever — and we'll carry it all out for you." },
        { q: "Is there a job too big or too small?", a: "No job too big or too small — that's the whole idea. One mattress or an entire estate cleanout, we've got you covered." },
        { q: "How fast can you come out?", a: "Often same-week, sometimes same-day depending on the schedule. Let us know your timing in the quote form and we'll do our best to work around you." },
        { q: "What do you do with the junk?", a: "We dispose of everything responsibly — donating and recycling whatever we can, and hauling the rest to the proper facilities so you don't have to." },
      ] as Faq[],
    },

    ctaBand: {
      title: "Ready to Get Rid of It?",
      subtitle: "Get a fast, no-obligation quote. No job too big or too small.",
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  //  ABOUT PAGE COPY  ({name}/{owner} tokens filled from business.*)
  // ──────────────────────────────────────────────────────────────────────
  about: {
    heroEyebrow: "About {name}",
    heroTitle: "A Local You Can Count On",
    heroSubhead:
      "{name} is owned and operated by {owner} — born, raised, and rooted in the Gallatin Valley.",
    storyEyebrow: "Meet {owner}",
    storyTitle: "Local Roots, Hard Work",
    photoLabel: "Portrait of Chase / on the job",
    // ⚠️ SWAP — the owner's real bio. Bracketed spans render in muted color as prompts.
    story: [
      "{owner} grew up right here in the Gallatin Valley and started {name} on a simple idea: treat people like neighbors and do honest, reliable work. [Add Chase's real story here.]",
      "[Why he started the business, what he loves about the area, a personal detail that builds trust.]",
      "Today he helps homeowners, landlords, and businesses across Bozeman, Belgrade, and Big Sky clear out whatever they no longer need — quickly, fairly, and without the hassle.",
    ],
    valuesEyebrow: "Why Folks Hire Us",
    valuesTitle: "The Wren's Difference",
    values: [
      { icon: "🤝", title: "Locally Owned", text: "A real neighbor, not a national franchise. Your money stays in the valley." },
      { icon: "⏰", title: "On Time, Every Time", text: "We show up when we say we will and keep you posted along the way." },
      { icon: "💪", title: "We Do the Lifting", text: "You don't move a thing. Point us to the junk and consider it gone." },
      { icon: "♻️", title: "Responsible Disposal", text: "We donate and recycle whatever we can before anything hits the landfill." },
    ] as Value[],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  QUOTE PAGE + THANK-YOU PAGE COPY
  // ──────────────────────────────────────────────────────────────────────
  quote: {
    title: "Get Your Free Quote",
    subtitle: "Takes about a minute. No job too big or too small. No obligation, no pressure.",
    phonePrompt: "Prefer to talk? Call or text",
  },
  thankYou: {
    title: "You're All Set!",
    // {owner} token filled from business.owner
    body: "Thanks for reaching out. {owner} will review your request and get back to you with a quote — usually within a few hours.",
    subBody: "Keep an eye on your phone or email.",
  },

  // ──────────────────────────────────────────────────────────────────────
  //  CITY / SERVICE-AREA PAGES  ({city} token filled per page)
  // ──────────────────────────────────────────────────────────────────────
  cityPage: {
    heroCtaCall: "Call", // "Call (330) ..." rendered with the phone
    servicesEyebrow: "What We Haul in {city}",
    servicesTitle: "Full-Service Junk Removal",
    servicesSubtitle: "No job too big or too small — homeowners, landlords, and businesses alike.",
    localEyebrow: "Proudly Local",
    localTitle: "Serving All of {city}",
    // {owner} + {city} + neighborhood list are composed at render time.
    localBody:
      "We cover {city} and the surrounding area. Wherever you are, {owner} will get your junk hauled away fast.",
    ctaTitle: "{city} — Let's Clear It Out",
  },
  cities: [
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
  ] as City[],

  // ──────────────────────────────────────────────────────────────────────
  //  QUOTE QUIZ — the funnel. Each list drives one step.
  // ──────────────────────────────────────────────────────────────────────
  quiz: {
    itemOptions: [
      "Furniture",
      "Appliances",
      "Mattresses",
      "Yard / landscaping debris",
      "Garage / basement cleanout",
      "Construction debris",
      "Hot tub",
      "Estate cleanout",
      "Other",
    ],
    volumeOptions: [
      { value: "A few items", label: "A Few Items", hint: "Single pieces, fits in a pickup corner", icon: "📦" },
      { value: "Half a truck", label: "Half a Truck", hint: "A room's worth of stuff", icon: "🛻" },
      { value: "Full truck", label: "Full Truck", hint: "A garage or large room", icon: "🚚" },
      { value: "Multiple loads", label: "Multiple Loads", hint: "Whole house / big cleanout", icon: "🏚️" },
      { value: "Not sure", label: "Not Sure", hint: "We'll figure it out from your photos", icon: "🤔" },
    ] as VolumeOption[],
    locationOptions: ["Bozeman", "Belgrade", "Big Sky", "Other / nearby"],
    accessOptions: [
      "Curbside / driveway",
      "Inside the home",
      "Stairs involved",
      "Heavy or oversized items",
    ],
    timingOptions: [
      { value: "ASAP", label: "ASAP", hint: "As soon as you can" },
      { value: "This week", label: "This Week", hint: "Sometime in the next few days" },
      { value: "Flexible", label: "I'm Flexible", hint: "Whenever works best" },
    ] as TimingOption[],
    contactMethods: ["Text", "Call", "Email"],
    totalSteps: 7, // photos + contact handled together as the last screens

    // Step prompts + button labels. Edit to re-word the funnel per client.
    copy: {
      itemsTitle: "What are you getting rid of?",
      itemsSubtitle: "Pick all that apply.",
      volumeTitle: "Roughly how much?",
      volumeSubtitle: "A rough idea is plenty — photos help us nail it.",
      locationTitle: "Where's the job?",
      locationSubtitle: "So we know we can get to you.",
      accessTitle: "How's the access?",
      accessSubtitle: "Optional — helps us bring the right gear. Pick any that apply.",
      timingTitle: "When do you need it gone?",
      timingSubtitle: "We'll do our best to work around you.",
      photosTitle: "Add a photo or two",
      photosSubtitle: "Optional, but it's the fastest way to an accurate quote. Snap a pic of the pile.",
      photosCta: "Tap to add photos",
      contactTitle: "Where do we send your quote?",
      contactSubtitle: "We'll get back to you fast — usually within a few hours.",
      contactMethodLabel: "Best way to reach you",
      continueLabel: "Continue →",
      submitLabel: "Get My Quote →",
      submittingLabel: "Sending…",
    },
  },
} as const;

export type SiteConfig = typeof site;
