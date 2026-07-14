import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cities } from "@/lib/cities";

export function ServiceAreas() {
  return (
    <Section id="service-areas" className="bg-cream-dark">
      <SectionHeading
        eyebrow="Where We Work"
        title="Serving the Gallatin Valley"
        subtitle="Proudly local. Tap your town for junk removal details near you."
      />
      <div className="grid gap-5 sm:grid-cols-3">
        {cities.map((city) => (
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
              Junk Removal in {city.name} →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
