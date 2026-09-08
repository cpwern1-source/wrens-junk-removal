import type { Metadata } from "next";
import { business, fill } from "@/lib/brand";
import { site } from "@/site.config";
import { Section, SectionHeading, PhotoSlot, Container } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

const a = site.about;

export const metadata: Metadata = {
  title: fill(`About {owner} | Locally Owned ${business.serviceNoun}`),
  description: fill(
    `Meet {owner}, the local owner of {name}. Born and raised in the ${business.regionLong}, serving ${business.serviceArea.join(", ")}.`
  ),
};

/** Render a story paragraph, styling any [bracketed prompts] in muted color. */
function StoryParagraph({ text }: { text: string }) {
  const parts = fill(text).split(/(\[[^\]]*\])/g);
  return (
    <p>
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <span key={i} className="text-slate">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream">
        <Container className="py-16 sm:py-20">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-sand">
            {fill(a.heroEyebrow)}
          </p>
          <h1 className="heading-xl max-w-3xl text-4xl sm:text-5xl">{a.heroTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/85">{fill(a.heroSubhead)}</p>
        </Container>
      </section>

      {/* Story */}
      <Section className="bg-cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <PhotoSlot label={a.photoLabel} ratio="aspect-[4/5]" />
          <div>
            <SectionHeading align="left" eyebrow={fill(a.storyEyebrow)} title={a.storyTitle} />
            <div className="space-y-4 text-ink-soft">
              {a.story.map((p, i) => (
                <StoryParagraph key={i} text={p} />
              ))}
            </div>
            <div className="mt-7">
              <LinkButton href="/quote" variant="secondary" size="lg">
                {fill("Get a Quote from {owner} →")}
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-cream-dark">
        <SectionHeading eyebrow={a.valuesEyebrow} title={a.valuesTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-6 shadow-card">
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
