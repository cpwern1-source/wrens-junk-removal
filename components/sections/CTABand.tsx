import { business } from "@/lib/brand";
import { site } from "@/site.config";
import { Container } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export function CTABand() {
  const { title, subtitle } = site.home.ctaBand;
  return (
    <section className="bg-sand">
      <Container className="flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <h2 className="heading-xl text-3xl text-ink sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="max-w-xl text-lg text-ink/80">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/quote" variant="secondary" size="lg">
            Get My Free Quote →
          </LinkButton>
          <LinkButton
            href={`tel:${business.phoneHref}`}
            variant="ghost"
            size="lg"
            className="border-2 border-ink/20"
          >
            Or Call {business.phone}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
