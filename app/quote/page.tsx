import type { Metadata } from "next";
import { business, fill } from "@/lib/brand";
import { site } from "@/site.config";
import { Container } from "@/components/ui/Section";
import { QuoteQuiz } from "@/components/QuoteQuiz";

export const metadata: Metadata = {
  title: fill(`Get a Free ${business.serviceNoun} Quote`),
  description: fill(
    `Answer a few quick questions and {owner} will send you a fast, no-obligation quote for ${business.serviceNoun.toLowerCase()} in ${business.serviceArea.join(", ")}.`
  ),
  robots: { index: true, follow: true },
};

export default function QuotePage() {
  return (
    <section className="bg-cream-dark py-12 sm:py-16">
      <Container>
        <div className="mb-8 text-center">
          <h1 className="heading-xl text-3xl text-ink sm:text-4xl lg:text-5xl">{site.quote.title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">{site.quote.subtitle}</p>
        </div>
        <QuoteQuiz />
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-slate">
          {site.quote.phonePrompt}{" "}
          <a href={`tel:${business.phoneHref}`} className="font-semibold text-forest underline">
            {business.phone}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
