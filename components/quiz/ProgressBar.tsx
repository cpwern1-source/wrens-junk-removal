export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">
        <span>
          Step {current} of {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-cream-dark">
        <div
          className="h-full rounded-full bg-sand transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
