import type { Metadata } from "next";
import { business } from "@/lib/brand";
import { Container } from "@/components/ui/Section";
import { QuoteQuiz } from "@/components/QuoteQuiz";

export const metadata: Metadata = {
  title: "Get a Free Junk Removal Quote",
  description: `Answer a few quick questions and ${business.owner} will send you a fast, no-obligation quote for junk removal in Bozeman, Belgrade, or Big Sky.`,
  robots: { index: true, follow: true },
};

export default function QuotePage() {
  return (
    <section className="bg-cream-dark py-12 sm:py-16">
      <Container>
        <div className="mb-8 text-center">
          <h1 className="heading-xl text-3xl text-ink sm:text-4xl lg:text-5xl">
            Get Your Free Quote
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">
            Takes about a minute. {business.tagline} No obligation, no pressure.
          </p>
        </div>
        <QuoteQuiz />
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-slate">
          Prefer to talk? Call or text{" "}
          <a href={`tel:${business.phoneHref}`} className="font-semibold text-forest underline">
            {business.phone}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
