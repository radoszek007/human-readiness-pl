import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { coreSteps, icons, readinessLayers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Metodyka Resilium | Ciało, uwaga, decyzja i działanie",
  description:
    "Metodyka Resilium łączy przygotowanie mentalne, komunikacyjne, fizyczne i zespołowe w praktyczny system działania pod presją."
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        label="Metodyka Resilium"
        title="Ciało, uwaga, decyzja i działanie w jednym systemie."
        text="Resilium pracuje z całą reakcją człowieka. Presja wpływa na ciało, uwagę, głos, komunikację, przestrzeń i decyzje. Dlatego trening łączy przygotowanie mentalne, komunikacyjne i fizyczne."
        primary="Wybierz program"
        primaryHref="/#sciezki"
        secondary="Porozmawiajmy"
        secondaryHref="#kontakt"
      />

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading
            title="Model Resilium"
            text="Pod presją człowiek potrzebuje prostego, przećwiczonego porządku. Model Ciało - Uwaga - Decyzja - Działanie pomaga wrócić do orientacji i wykonać właściwy krok."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {coreSteps.map((step) => (
              <Card key={step.title} title={step.title} text={step.text} icon={step.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell">
          <SectionHeading
            light
            title="C.O.R.E."
            text="C.O.R.E. porządkuje reakcję w sytuacji, w której łatwo stracić jasność. To prosty schemat do praktycznego treningu i przeniesienia do codziennych decyzji."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["Check", "sprawdź siebie, otoczenie i ryzyko"],
              ["Observe", "obserwuj, co naprawdę się dzieje"],
              ["Resolve", "zdecyduj o właściwym sposobie działania"],
              ["Execute", "działaj jasno i na czas"]
            ].map(([title, text]) => (
              <Card key={title} dark title={title} text={text} icon={icons.CircleDot} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Cztery warstwy przygotowania" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {readinessLayers.map((layer) => (
              <Card key={layer.title} title={layer.title} text={layer.text} icon={layer.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl">Metodyka ma prowadzić do działania.</h2>
            <p className="mt-4 text-base leading-8 text-resilium-white/72">
              Dlatego każdy program Resilium kończy się praktycznymi zasadami, które można wykorzystać w realnych sytuacjach.
            </p>
          </div>
          <ButtonLink href="/#sciezki" className="md:flex-none">Wybierz właściwy program</ButtonLink>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
