import Link from "next/link";
import { business } from "@/lib/brand";

/**
 * Mobile-only sticky bar so the funnel + phone are always one tap away.
 * Hidden on md+ where the header CTA is always visible.
 */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-forest-dark/30 bg-forest-dark md:hidden">
      <a
        href={`tel:${business.phoneHref}`}
        className="flex items-center justify-center gap-2 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-cream"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Call
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center bg-sand py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink"
      >
        Get a Quote
      </Link>
    </div>
  );
}
