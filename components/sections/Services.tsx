import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/site.config";

export function Services() {
  const { eyebrow, title, subtitle, items } = site.home.services;
  return (
    <Section id="services" className="bg-cream">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-slate/20 bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
