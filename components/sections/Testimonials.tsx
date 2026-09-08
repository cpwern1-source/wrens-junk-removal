import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/site.config";

export function Testimonials() {
  const { eyebrow, title, subtitle, items } = site.home.testimonials;
  return (
    <Section className="bg-cream">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <figure key={i} className="flex flex-col rounded-2xl border border-slate/20 bg-white p-7 shadow-card">
            <div className="text-sand" aria-hidden>
              ★★★★★
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-slate/15 pt-4">
              <span className="font-display font-semibold uppercase tracking-wide text-ink">
                {t.name}
              </span>
              <span className="block text-xs text-slate">{t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
