import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { coreSteps, icons, personalAudience, personalBenefits, personalFormats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resilium Personal Performance | Osobista skuteczność i stabilność pod presją",
  description:
    "Praktyczny trening dla osób, które chcą lepiej radzić sobie z presją, granicami, decyzjami i wymagającymi sytuacjami w codziennym życiu."
};

export default function PersonalPerformancePage() {
  return (
    <>
      <PageHero
        label="Resilium Personal Performance"
        title="Opanuj presję. Działaj pewniej. Żyj spokojniej."
        text="Resilium Personal Performance to praktyczny trening dla osób, które chcą lepiej pracować ze stresem, granicami, decyzjami i własną reakcją w wymagających sytuacjach."
        primary="Chcę zacząć"
        primaryHref="#kontakt"
        secondary="Jak działa trening"
        secondaryHref="#trening"
        badges={["praktyczny trening", "zero pasywnego wykładu", "ciało, uwaga, granice, działanie", "przeniesienie do codziennego życia"]}
      />

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading
            title="W spokoju wiesz, co robić. Pod presją decyduje reakcja."
            text="Stres, konflikt albo niepewność często uruchamiają automatyczne reakcje. Człowiek zamiera, wybucha, rezygnuje ze swoich granic albo długo wraca do równowagi. Resilium uczy tworzyć trenowane sposoby działania, które pomagają zachować stabilność i działać z większą pewnością."
          />
        </div>
      </section>

      <section className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Co w sobie wzmocnisz" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {personalBenefits.map((item) => (
              <Card key={item.title} title={item.title} text={item.text} icon={icons.BadgeCheck} />
            ))}
          </div>
        </div>
      </section>

      <section id="trening" className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell">
          <SectionHeading
            light
            title="Ciało. Uwaga. Granice. Działanie."
            text="Resilium Personal Performance nie opiera się na biernym słuchaniu. Pracuje z prostymi ćwiczeniami, sytuacjami modelowymi i refleksją, aby uczestnik zabrał ze sobą użyteczny sposób działania."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {coreSteps.map((step) => (
              <Card key={step.title} dark title={step.title === "Decyzja" ? "Granice" : step.title} text={step.title === "Decyzja" ? "Jaśniejsza komunikacja i bezpieczniejsza praca z przestrzenią." : step.title === "Działanie" ? "Konkretny krok zamiast zamrożenia albo chaosu." : step.text} icon={step.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading title="Dla kogo jest Personal Performance" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {personalAudience.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-resilium-gray bg-resilium-white px-4 py-4 text-sm font-semibold text-resilium-charcoal">
                <icons.CheckCircle2 className="h-4 w-4 flex-none text-resilium-orange" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Jak możesz zacząć" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {personalFormats.map((format) => (
              <Card key={format.title} title={format.title} text={format.text} icon={icons.Sparkles} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl">Na pierwszym treningu droga się nie kończy</h2>
            <p className="mt-4 text-base leading-8 text-resilium-white/72">
              Po pierwszym programie możesz kontynuować pracę przez kolejny warsztat, pracę indywidualną, trening społecznościowy albo przeniesienie zasad Resilium do środowiska zawodowego.
            </p>
          </div>
          <ButtonLink href="#kontakt" className="md:flex-none">Chcę zacząć z Personal Performance</ButtonLink>
        </div>
      </section>

      <FAQ
        items={[
          ["Czy to terapia?", "Nie. Resilium nie jest terapią ani usługą medyczną. To praktyczny trening reakcji, stabilności, granic i podejmowania decyzji."],
          ["Czy muszę być sprawny fizycznie?", "Nie. Ćwiczenia są proste i służą pracy z ciałem oraz reakcją, a nie wynikowi sportowemu."],
          ["Czy to samoobrona?", "Resilium wykorzystuje zasady bezpieczeństwa osobistego, ale celem jest szersza zdolność działania pod presją, w konflikcie i niepewności."],
          ["Czy program jest dla początkujących?", "Tak. Program jest prowadzony stopniowo i bezpiecznie."]
        ].map(([question, answer]) => ({ question, answer }))}
      />

      <ContactSection />
    </>
  );
}
