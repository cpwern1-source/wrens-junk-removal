import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/lib/brand";
import { site } from "@/site.config";

export function ServiceAreas() {
  const { eyebrow, title, subtitle } = site.home.serviceAreas;
  return (
    <Section id="service-areas" className="bg-cream-dark">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid gap-5 sm:grid-cols-3">
        {site.cities.map((city) => (
          <Link
            key={city.slug}
            href={`/${city.slug}`}
            className="group flex flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-slate/10 transition-transform hover:-translate-y-1"
          >
            <span className="text-2xl">📍</span>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-forest">
              {city.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{city.blurb}</p>
            <span className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-sand-dark group-hover:text-forest">
              {business.serviceNoun} in {city.name} →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
