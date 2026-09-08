import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/site.config";

export function HowItWorks() {
  const { eyebrow, title, steps, cta } = site.home.howItWorks;
  return (
    <Section id="how-it-works" className="bg-forest text-cream">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="relative rounded-2xl bg-cream/5 p-7 ring-1 ring-cream/10">
            <span className="font-display text-5xl font-bold text-sand/80">{step.number}</span>
            <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-tight text-cream">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">{step.blurb}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <LinkButton href="/quote" variant="primary" size="lg">
          {cta}
        </LinkButton>
      </div>
    </Section>
  );
}
