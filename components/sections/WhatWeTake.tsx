import { Section, SectionHeading } from "@/components/ui/Section";
import { takeList, skipList } from "@/lib/content";

export function WhatWeTake() {
  return (
    <Section className="bg-cream-dark">
      <SectionHeading
        eyebrow="The Short List"
        title="What We Take"
        subtitle="Pretty much everything that isn't hazardous. If you're not sure, just ask in your quote."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-7 shadow-card md:col-span-2">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-forest">
            ✅ We Take
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
            🚫 We Can't Take
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {skipList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-slate">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate">Hazardous materials require a specialized hauler.</p>
        </div>
      </div>
    </Section>
  );
}
