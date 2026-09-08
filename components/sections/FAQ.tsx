import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/site.config";
import { JsonLd } from "@/lib/seo";

export function FAQ() {
  const { eyebrow, title, items } = site.home.faq;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Section id="faq" className="bg-cream-dark">
      <JsonLd data={schema} />
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mx-auto max-w-3xl divide-y divide-slate/20 overflow-hidden rounded-2xl bg-white shadow-card">
        {items.map((f) => (
          <details key={f.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink">
              {f.q}
              <span className="text-sand transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
