import type { Metadata } from "next";
import { business } from "@/lib/brand";
import { Section, SectionHeading, PhotoSlot, Container } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `About ${business.owner} | Locally Owned Junk Removal`,
  description: `Meet ${business.owner}, the local owner of ${business.name}. Born and raised in the Gallatin Valley, serving Bozeman, Belgrade & Big Sky.`,
};

const values = [
  { icon: "🤝", title: "Locally Owned", text: "A real neighbor, not a national franchise. Your money stays in the valley." },
  { icon: "⏰", title: "On Time, Every Time", text: "We show up when we say we will and keep you posted along the way." },
  { icon: "💪", title: "We Do the Lifting", text: "You don't move a thing. Point us to the junk and consider it gone." },
  { icon: "♻️", title: "Responsible Disposal", text: "We donate and recycle whatever we can before anything hits the landfill." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream">
        <Container className="py-16 sm:py-20">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-sand">
            About {business.name}
          </p>
          <h1 className="heading-xl max-w-3xl text-4xl sm:text-5xl">
            A Local You Can Count On
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/85">
            {business.name} is owned and operated by {business.owner} — born, raised, and rooted in
            the Gallatin Valley.
          </p>
        </Container>
      </section>

      {/* Story */}
      <Section className="bg-cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* TODO: SWAP — a real photo of Chase */}
          <PhotoSlot label="Portrait of Chase / on the job" ratio="aspect-[4/5]" />
          <div>
            <SectionHeading
              align="left"
              eyebrow={`Meet ${business.owner}`}
              title="Local Roots, Hard Work"
            />
            <div className="space-y-4 text-ink-soft">
              {/* TODO: SWAP — Wren's real bio. Template paragraphs below. */}
              <p>
                {business.owner} grew up right here in the Gallatin Valley and started{" "}
                {business.name} on a simple idea: treat people like neighbors and do honest, reliable
                work. <span className="text-slate">[Add Chase&apos;s real story here.]</span>
              </p>
              <p>
                <span className="text-slate">
                  [Why he started the business, what he loves about the area, a personal detail that
                  builds trust.]
                </span>
              </p>
              <p>
                Today he helps homeowners, landlords, and businesses across Bozeman, Belgrade, and
                Big Sky clear out whatever they no longer need — quickly, fairly, and without the
                hassle.
              </p>
            </div>
            <div className="mt-7">
              <LinkButton href="/quote" variant="secondary" size="lg">
                Get a Quote from {business.owner} →
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-cream-dark">
        <SectionHeading eyebrow="Why Folks Hire Us" title="The Wren's Difference" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
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
