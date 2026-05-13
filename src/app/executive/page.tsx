import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { executiveAudience, executiveFormats, executiveTraining, executiveUseCases, icons } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resilium Executive | Decyzje i autorytet pod presją",
  description:
    "Dyskretna indywidualna praca dla właścicieli firm, CEO i menedżerów. Osobiste protokoły decyzji, komunikacji i stabilności pod presją."
};

export default function ExecutivePage() {
  return (
    <>
      <PageHero
        label="Resilium Executive"
        title="Zachowaj osąd, autorytet i decyzyjność pod presją."
        text="Resilium Executive to indywidualna praca dla właścicieli firm, CEO i menedżerów, którzy podejmują decyzje w niepewności, prowadzą ludzi w wymagających sytuacjach i potrzebują utrzymać stabilność wtedy, gdy presja rośnie."
        primary="Umów dyskretną konsultację"
        primaryHref="#kontakt"
        secondary="Jak przebiega współpraca"
        secondaryHref="#formaty"
        note="Dyskretna współpraca indywidualna. Bez publicznej ekspozycji. Bez motywacyjnego teatru."
      />

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading
            title="Najtrudniejsze decyzje nie przychodzą w idealnych warunkach."
            text="Właściciele firm i menedżerowie często podejmują decyzje wtedy, gdy brakuje pełnych danych, presja otoczenia rośnie, a każde zawahanie wpływa na ludzi, finanse i reputację. W takich sytuacjach sama wiedza nie wystarcza. Decyduje zdolność utrzymania stabilności, odróżnienia spraw istotnych od szumu i działania bez zbędnej reaktywności."
          />
        </div>
      </section>

      <section className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Dla kogo jest Resilium Executive" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {executiveAudience.map((item) => (
              <Card key={item.title} title={item.title} text={item.text} icon={icons.Building2} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell">
          <SectionHeading light title="Kiedy praca Executive ma największy sens" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {executiveUseCases.map(([title, text]) => (
              <Card key={title} dark title={title} text={text} icon={icons.CircleDot} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading title="Osobiste protokoły dla presji, konfliktu i decyzji" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {executiveTraining.map((item) => (
              <Card key={item.title} title={item.title} text={item.text} icon={icons.ShieldCheck} />
            ))}
          </div>
        </div>
      </section>

      <section id="formaty" className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading title="Formaty współpracy" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {executiveFormats.map((format) => (
              <Card key={format.title} title={format.title} meta={format.meta} text={format.text} icon={icons.BadgeCheck} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-5xl">Praktyczny trening reakcji w odpowiedzialności.</h2>
            <p className="mt-4 text-base leading-8 text-resilium-white/72">
              Resilium Executive nie jest motywacyjnym coachingiem ani procesem terapeutycznym.
              Pracuje z realną reakcją lidera: ciałem, uwagą, głosem, decyzjami,
              komunikacją i przeniesieniem do konkretnych sytuacji.
            </p>
          </div>
          <ButtonLink href="#kontakt" className="md:flex-none">Umów dyskretną konsultację Executive</ButtonLink>
        </div>
      </section>

      <FAQ
        items={[
          ["Czy Resilium Executive to coaching?", "Wykorzystuje rozmowę i refleksję, ale jego rdzeniem jest praktyczny trening reakcji, decyzji i komunikacji pod presją."],
          ["Czy to terapia?", "Nie. Resilium Executive nie jest terapią ani usługą medyczną."],
          ["Czy współpraca jest dyskretna?", "Tak. Dyskrecja jest podstawową częścią formatu."],
          ["Jak rozpoznam, że to dla mnie?", "Jeśli często podejmujesz decyzje pod presją, prowadzisz trudne rozmowy albo wiesz, że Twoja reakcja wpływa na innych, warto umówić konsultację wstępną."]
        ].map(([question, answer]) => ({ question, answer }))}
      />

      <ContactSection />
    </>
  );
}
