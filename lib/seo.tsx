import { business } from "@/lib/brand";
import { site } from "@/site.config";

/**
 * LocalBusiness JSON-LD. Strong signal for local "junk removal near me" search.
 * Used site-wide in the root layout; city pages add their own areaServed.
 */
export function localBusinessSchema(city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: `${business.url}${site.seo.ogImage}`,
    "@id": business.url,
    url: business.url,
    telephone: business.phoneHref,
    email: business.email,
    priceRange: "$$",
    description: business.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: city ?? business.baseCity,
      addressRegion: business.region,
      addressCountry: "US",
    },
    areaServed: business.serviceArea.map((name) => ({
      "@type": "City",
      name: `${name}, ${business.region}`,
    })),
    openingHours: business.openingHoursSchema,
    sameAs: [business.facebookUrl, business.instagramUrl, business.googleBusinessUrl].filter(Boolean),
  };
}

/** Renders a JSON-LD <script> tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
