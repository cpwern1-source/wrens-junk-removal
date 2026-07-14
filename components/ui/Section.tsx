import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} mb-10 sm:mb-14`}>
      {eyebrow && (
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-sand-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="heading-xl text-3xl text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink-soft">{subtitle}</p>}
    </div>
  );
}

/**
 * Marked placeholder for a photo Carson will swap in later.
 * Renders a labeled dashed box so empty slots are obvious in the template.
 */
export function PhotoSlot({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate/60 bg-cream-dark/50 text-center ${className}`}
    >
      <span className="px-4 font-display text-xs font-semibold uppercase tracking-widest text-slate">
        📷 {label}
      </span>
    </div>
  );
}
