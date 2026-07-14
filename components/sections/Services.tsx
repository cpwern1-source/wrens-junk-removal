import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section id="services" className="bg-cream">
      <SectionHeading
        eyebrow="What We Haul"
        title="Full-Service Junk Removal"
        subtitle="If it's junk and it's not hazardous, we'll take it. Here's the kind of work we do every day."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
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
