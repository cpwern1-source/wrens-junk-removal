import Image from "next/image";
import Link from "next/link";
import { business, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand / NAP */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/wren-mark.webp"
              alt={`${business.name} logo`}
              width={500}
              height={500}
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-lg font-bold uppercase tracking-tight text-cream">
              {business.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{business.description}</p>
          <p className="mt-4 text-sm">
            Serving {business.serviceArea.join(", ")} & the {business.baseCity} area.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-cream">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${business.phoneHref}`} className="hover:text-sand">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-sand">
                {business.email}
              </a>
            </li>
            <li>{business.hours}</li>
            {business.googleBusinessUrl && (
              <li>
                <a href={business.googleBusinessUrl} className="hover:text-sand" target="_blank" rel="noreferrer">
                  Find us on Google
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-cream">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sand">
                  {item.label}
                </Link>
              </li>
            ))}
            {business.serviceArea.map((city) => (
              <li key={city}>
                <Link href={`/${city.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-sand">
                  Junk Removal in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {/* year is static-safe */}2026 {business.name}. Locally owned & operated.
          </p>
          <p>Bozeman · Belgrade · Big Sky, MT</p>
        </div>
      </div>
    </footer>
  );
}
