import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  text: string;
  icon?: LucideIcon;
  meta?: string;
  dark?: boolean;
  children?: React.ReactNode;
};

export function Card({ title, text, icon: Icon, meta, dark = false, children }: CardProps) {
  return (
    <article
      className={clsx(
        "rounded-lg p-6",
        dark ? "glass-panel text-resilium-white" : "light-card text-resilium-charcoal"
      )}
    >
      {Icon ? (
        <div className={clsx("mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md", dark ? "bg-resilium-white/10 text-resilium-orange" : "bg-resilium-orange/10 text-resilium-orange")}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      ) : null}
      {meta ? (
        <p className={clsx("mb-2 text-xs font-bold uppercase tracking-[0.18em]", dark ? "text-resilium-white/52" : "text-resilium-gray")}>
          {meta}
        </p>
      ) : null}
      <h3 className="text-xl font-bold leading-snug">{title}</h3>
      <p className={clsx("mt-3 text-sm leading-7", dark ? "text-resilium-white/72" : "text-resilium-charcoal")}>{text}</p>
      {children}
    </article>
  );
}
