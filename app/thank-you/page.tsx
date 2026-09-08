import type { Metadata } from "next";
import { business, fill } from "@/lib/brand";
import { site } from "@/site.config";
import { Container } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thanks — Quote Request Received",
  description: "Your quote request has been received. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="bg-forest text-cream">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sand text-4xl">
          ✅
        </div>
        <h1 className="heading-xl mt-6 text-4xl sm:text-5xl">{site.thankYou.title}</h1>
        <p className="mt-4 max-w-md text-lg text-cream/85">{fill(site.thankYou.body)}</p>
        <p className="mt-2 text-cream/70">{site.thankYou.subBody}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={`tel:${business.phoneHref}`} variant="primary" size="lg">
            Call {business.phone}
          </LinkButton>
          <LinkButton href="/" variant="outline" size="lg">
            Back to Home
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
