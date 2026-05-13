import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  cooperationSteps,
  icons,
  organizationAudience,
  organizationBenefits,
  organizationImpact,
  organizationPrograms,
  readinessLayers
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Resilium for Organizations | Przygotowanie zespołów na presję, konflikt i ryzyko",
  description:
    "Programy dla firm, instytucji i zespołów. Praktyczny trening przygotowania ludzi na presję, konflikt, komunikację kryzysową i sytuacje ryzyka."
};

export default function OrganizationsPage() {
  return (
    <>
      <PageHero
        label="Resilium for Organizations"
        title="Przygotuj ludzi na presję, konflikt i ryzyko."
        text="Resilium for Organizations pomaga firmom, instytucjom i zespołom trenować reakcje na sytuacje, w których rośnie stres, pojawia się konflikt, naruszane są granice albo pojawia się ryzyko bezpieczeństwa."
        primary="Umów konsultację dla organizacji"
        primaryHref="#kontakt"
        secondary="Zobacz programy"
        secondaryHref="#programy"
      />

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading
            title="W trudnych sytuacjach nie decydują tylko procedury. Decydują ludzie."
            text="Organizacja może mieć regulaminy, szkolenia i procesy. Jeśli jednak ludzie pod presją tracą orientację, komunikację albo zdolność działania, sytuacja zaczyna się rozpadać. Resilium łączy procesy z praktycznym przygotowaniem człowieka."
          />
        </div>
      </section>

      <section className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Gdzie Resilium ma największy wpływ" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {organizationImpact.map(([title, text]) => (
              <Card key={title} title={title} text={text} icon={icons.CircleDot} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading title="Co zyskuje organizacja" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {organizationBenefits.map((item) => (
              <Card key={item.title} title={item.title} text={item.text} icon={icons.BadgeCheck} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell">
          <SectionHeading light title="Cztery warstwy przygotowania" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {readinessLayers.map((layer) => (
              <Card key={layer.title} dark title={layer.title} text={layer.text} icon={layer.icon} />
            ))}
          </div>
        </div>
      </section>

      <section id="programy" className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Programy Resilium for Organizations" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {organizationPrograms.map((program) => (
              <Card key={program.title} title={program.title} meta={program.subtitle} text={program.text} icon={icons.ShieldCheck} />
            ))}
          </div>
          <p className="mt-6 rounded-md border border-resilium-gray bg-resilium-white px-5 py-4 text-sm font-semibold text-resilium-charcoal">
            OMEGA jest modułem specjalistycznym. Nie jest główną twarzą Resilium.
          </p>
        </div>
      </section>

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading title="Jak przebiega współpraca" />
          <div className="mt-10 grid gap-4">
            {cooperationSteps.map(([title, text], index) => (
              <article key={title} className="light-card grid gap-4 rounded-lg p-5 md:grid-cols-[80px_1fr] md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-resilium-orange text-lg font-bold text-resilium-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-resilium-charcoal">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-resilium-charcoal">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Dla firm, instytucji i zespołów" />
          <div className="mt-10 flex flex-wrap gap-3">
            {organizationAudience.map((item) => (
              <span key={item} className="rounded-md border border-resilium-gray bg-resilium-white px-4 py-3 text-sm font-semibold text-resilium-charcoal">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl">Przygotuj zespół do działania, zanim sytuacja zrobi się trudna.</h2>
            <p className="mt-4 text-base leading-8 text-resilium-white/72">
              Dobierzemy poziom programu, scenariusze i formę pracy do realnego środowiska organizacji.
            </p>
          </div>
          <ButtonLink href="#kontakt" className="md:flex-none">Umów konsultację dla organizacji</ButtonLink>
        </div>
      </section>

      <FAQ
        items={[
          ["Czy to szkolenie z samoobrony?", "Nie. Resilium wykorzystuje zasady bezpieczeństwa osobistego, ale głównym celem jest przygotowanie człowieka i zespołu do działania pod presją, w konflikcie i ryzyku."],
          ["Czy trening jest bezpieczny?", "Tak. Trening jest prowadzony stopniowo i profesjonalnie. Ma być bezpieczny, ale nie bierny."],
          ["Czy program można dopasować do naszego środowiska?", "Tak. Scenariusze przygotowujemy zgodnie z realnością klienta."],
          ["Czy program jest odpowiedni dla szkół i urzędów?", "Tak. Środowiska z kontaktem z ludźmi i opinią publiczną należą do najmocniejszych zastosowań Resilium."]
        ].map(([question, answer]) => ({ question, answer }))}
      />

      <ContactSection />
    </>
  );
}
