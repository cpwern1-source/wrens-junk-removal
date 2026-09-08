import Image from "next/image";
import { business } from "@/lib/brand";
import { site } from "@/site.config";
import { Container } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export function Hero() {
  const h = site.home.hero;
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      {/* Subtle mountain-tone gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-dark via-forest to-forest-light opacity-90" />
      <Container className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-sand">
            {h.badge}
          </p>
          <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl">
            {h.headline}
            <br />
            <span className="text-sand">{h.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85">{h.subhead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/quote" variant="primary" size="lg">
              Get a Free Quote →
            </LinkButton>
            <LinkButton href={`tel:${business.phoneHref}`} variant="outline" size="lg">
              Call {business.phone}
            </LinkButton>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/80">
            {h.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero emblem — the brand's first impression */}
        <div className="relative">
          <div className="rounded-3xl bg-cream p-5 ring-4 ring-cream/10 shadow-card sm:p-8">
            <Image
              src={site.assets.logo}
              alt={h.imageAlt}
              width={site.assets.logoWidth}
              height={site.assets.logoHeight}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-sand px-5 py-4 text-ink shadow-card sm:block">
            <p className="font-display text-2xl font-bold leading-none">{h.badgeTop}</p>
            <p className="text-xs font-semibold uppercase tracking-wide">{h.badgeBottom}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
