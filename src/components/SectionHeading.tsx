import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, text, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-resilium-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={clsx("mt-3 text-3xl font-bold leading-tight md:text-5xl", light ? "text-resilium-white" : "text-resilium-charcoal")}>
        {title}
      </h2>
      {text ? (
        <p className={clsx("mt-5 text-base leading-8 md:text-lg", light ? "text-resilium-white/74" : "text-resilium-charcoal")}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
