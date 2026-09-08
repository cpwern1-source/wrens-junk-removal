import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/site.config";

export function WhatWeTake() {
  const { eyebrow, title, subtitle, takeHeading, skipHeading, skipNote, takeList, skipList } =
    site.home.whatWeTake;
  return (
    <Section className="bg-cream-dark">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-7 shadow-card md:col-span-2">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-forest">
            {takeHeading}
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-ink-soft sm:grid-cols-2">
            {takeList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-forest">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate/30 bg-white/60 p-7">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink-soft">
            {skipHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {skipList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-slate">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate">{skipNote}</p>
        </div>
      </div>
    </Section>
  );
}
