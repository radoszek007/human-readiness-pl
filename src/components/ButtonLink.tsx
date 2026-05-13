import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-resilium-orange text-resilium-white border border-resilium-orange shadow-glow hover:bg-resilium-orange/90",
        variant === "secondary" &&
          "border border-resilium-white/20 bg-resilium-white/8 text-resilium-white hover:border-resilium-white/34 hover:bg-resilium-white/12",
        variant === "light" &&
          "border border-resilium-blue bg-resilium-white text-resilium-blue hover:border-resilium-orange hover:text-resilium-orange",
        className
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
