import { Section, PhotoSlot } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { fill } from "@/lib/brand";
import { site } from "@/site.config";

export function AboutTeaser() {
  const a = site.home.aboutTeaser;
  return (
    <Section className="bg-cream">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <PhotoSlot label={a.photoLabel} ratio="aspect-[4/3]" />

        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-sand-dark">
            {a.eyebrow}
          </p>
          <h2 className="heading-xl text-3xl text-ink sm:text-4xl">{a.title}</h2>
          <p className="mt-4 text-lg text-ink-soft">{fill(a.body1)}</p>
          <p className="mt-3 text-ink-soft">{fill(a.body2)}</p>
          <div className="mt-7">
            <LinkButton href="/about" variant="secondary" size="lg">
              {fill(a.cta)}
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
