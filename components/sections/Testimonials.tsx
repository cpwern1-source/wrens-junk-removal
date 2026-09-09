import { Section, SectionHeading } from "@/components/ui/Section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Word of Mouth"
        title="What Neighbors Say"
        subtitle="A few words from recent customers around the valley."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
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
