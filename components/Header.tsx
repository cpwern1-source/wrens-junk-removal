"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { business, nav } from "@/lib/brand";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-dark/40 bg-forest-dark/95 backdrop-blur supports-[backdrop-filter]:bg-forest-dark/85">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/wren-mark.webp"
            alt={`${business.name} logo`}
            width={500}
            height={500}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="font-display text-lg font-bold uppercase leading-none tracking-tight text-cream sm:text-xl">
            {business.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold uppercase tracking-wide text-cream/80 transition-colors hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phoneHref}`}
            className="font-display text-sm font-semibold uppercase tracking-wide text-sand transition-colors hover:text-cream"
          >
            {business.phone}
          </a>
          <LinkButton href="/quote" variant="primary" size="md">
            Get a Quote
          </LinkButton>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cream md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-cream/10 bg-forest-dark px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-display text-base font-semibold uppercase tracking-wide text-cream/90 hover:bg-cream/5"
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/quote" variant="primary" size="lg" className="mt-3 w-full">
              Get a Quote
            </LinkButton>
          </div>
        </nav>
      )}
    </header>
  );
}
