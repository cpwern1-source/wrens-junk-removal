import { Section, PhotoSlot } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { business } from "@/lib/brand";

export function AboutTeaser() {
  return (
    <Section className="bg-cream">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* TODO: SWAP — a real photo of Chase / the truck / a job site */}
        <PhotoSlot label="Photo of Chase / the crew" ratio="aspect-[4/3]" />

        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-sand-dark">
            Locally Owned
          </p>
          <h2 className="heading-xl text-3xl text-ink sm:text-4xl">
            Born & Raised in the Gallatin Valley
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            {business.name} is owned and operated by {business.owner}, a local who knows these
            towns because he grew up in them. When you book with us, you&apos;re hiring a neighbor —
            not a national chain.
          </p>
          <p className="mt-3 text-ink-soft">
            {/* TODO: SWAP — Wren's real story / hook goes here */}
            Reliable, friendly, and on time. We treat your property like our own and leave the space
            cleaner than we found it.
          </p>
          <div className="mt-7">
            <LinkButton href="/about" variant="secondary" size="lg">
              Meet {business.owner} →
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
