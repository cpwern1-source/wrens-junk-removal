import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-sand text-ink hover:bg-sand-dark shadow-card",
  secondary: "bg-forest text-cream hover:bg-forest-dark",
  outline: "border-2 border-cream/80 text-cream hover:bg-cream/10",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
} & Omit<ComponentProps<typeof Link>, "href">;

export function LinkButton({ href, variant = "primary", size = "md", className, ...rest }: LinkButtonProps) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  if (external) {
    return <a href={href} className={classes(variant, size, className)} {...(rest as object)} />;
  }
  return <Link href={href} className={classes(variant, size, className)} {...rest} />;
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentProps<"button">;

export function Button({ variant = "primary", size = "md", className, ...rest }: ButtonProps) {
  return <button className={classes(variant, size, className)} {...rest} />;
}
