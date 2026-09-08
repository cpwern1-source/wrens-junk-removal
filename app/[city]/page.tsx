import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business, fill } from "@/lib/brand";
import { cities, getCity } from "@/lib/cities";
import { site } from "@/site.config";
import { Section, SectionHeading, Container } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd, localBusinessSchema } from "@/lib/seo";

const services = site.home.services.items;
const cp = site.cityPage;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `${business.serviceNoun} in ${city.name}, ${business.region}`,
    description: `${business.name} — fast, friendly ${business.serviceNoun.toLowerCase()} & hauling in ${city.name}, ${business.region}. ${business.tagline} Get a free quote today.`,
    alternates: { canonical: `/${city.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const t = (s: string) => fill(s, { city: city.name });
  const neighborhoodLine =
    city.neighborhoods.length > 1
      ? `${city.neighborhoods.slice(0, -1).join(", ")} and ${city.neighborhoods.slice(-1)}`
      : city.neighborhoods.join("");

  return (
    <>
      <JsonLd data={localBusinessSchema(city.name)} />

      {/* Hero */}
      <section className="bg-forest text-cream">
        <Container className="py-16 sm:py-20">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-sand">
            📍 {city.name}, {business.region}
          </p>
          <h1 className="heading-xl max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {business.serviceNoun} in {city.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/85">{city.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/quote" variant="primary" size="lg">
              Get a Free Quote →
            </LinkButton>
            <LinkButton href={`tel:${business.phoneHref}`} variant="outline" size="lg">
              {cp.heroCtaCall} {business.phone}
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Services recap */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow={t(cp.servicesEyebrow)}
          title={cp.servicesTitle}
          subtitle={cp.servicesSubtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate/20 bg-white p-6 shadow-card">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Local areas */}
      <Section className="bg-cream-dark">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow={cp.localEyebrow} title={t(cp.localTitle)} />
            <p className="text-ink-soft">
              {t(cp.localBody)} We cover {neighborhoodLine}, and everywhere in between.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {city.neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full bg-white px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-forest shadow-card"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-sand">
        <Container className="flex flex-col items-center gap-6 py-14 text-center">
          <h2 className="heading-xl text-3xl text-ink sm:text-4xl">{t(cp.ctaTitle)}</h2>
          <LinkButton href="/quote" variant="secondary" size="lg">
            Get My Free Quote →
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
