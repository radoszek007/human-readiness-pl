import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type PageHeroProps = {
  label: string;
  title: string;
  text: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  note?: string;
  badges?: string[];
};

export function PageHero({ label, title, text, primary, primaryHref, secondary, secondaryHref, note, badges }: PageHeroProps) {
  return (
    <section className="dark-surface overflow-hidden py-24 text-resilium-white md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-resilium-orange">{label}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.04] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-resilium-white/76 md:text-xl">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primary}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">{secondary}</ButtonLink>
          </div>
          {note ? <p className="mt-5 text-sm font-medium text-resilium-white/56">{note}</p> : null}
          {badges?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-md border border-resilium-white/14 bg-resilium-white/8 px-3 py-2 text-xs font-semibold text-resilium-white/72">
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative min-h-[340px]">
          <div className="absolute inset-8 rounded-full bg-resilium-orange/16 blur-3xl" />
          <div className="glass-panel relative flex min-h-[340px] items-center justify-center rounded-lg p-10">
            <Image
              src="/resilium-logo.png"
              alt=""
              width={420}
              height={403}
              priority
              className="h-auto w-full max-w-[360px] opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
