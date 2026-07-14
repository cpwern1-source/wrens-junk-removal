"use client";

/** Reusable selectable chip / card primitives for the quiz steps. */

export function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border-2 px-5 py-2.5 text-left font-medium transition-colors ${
        selected
          ? "border-forest bg-forest text-cream"
          : "border-slate/30 bg-white text-ink hover:border-forest/50"
      }`}
    >
      {label}
    </button>
  );
}

export function OptionCard({
  label,
  hint,
  icon,
  selected,
  onClick,
}: {
  label: string;
  hint?: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors ${
        selected
          ? "border-forest bg-forest/5 ring-1 ring-forest"
          : "border-slate/25 bg-white hover:border-forest/50"
      }`}
    >
      {icon && <span className="text-3xl">{icon}</span>}
      <span>
        <span className="block font-display text-lg font-semibold uppercase tracking-tight text-ink">
          {label}
        </span>
        {hint && <span className="block text-sm text-ink-soft">{hint}</span>}
      </span>
      <span
        className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-forest bg-forest text-cream" : "border-slate/40"
        }`}
      >
        {selected && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  );
}
