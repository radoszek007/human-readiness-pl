import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactSection";
import { SectionHeading } from "@/components/SectionHeading";
import { coreSteps, credibilityBullets, icons, pathCards } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="dark-surface overflow-hidden py-24 text-resilium-white md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-resilium-orange">Human Readiness System</p>
            <h1 className="mt-5 text-5xl font-bold leading-[0.98] md:text-7xl">
              Resilium
              <span className="mt-4 block text-3xl leading-tight text-resilium-white/88 md:text-5xl">
                System wytrenowanych reakcji dla mentalnej, komunikacyjnej i fizycznej gotowości.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-resilium-white/76 md:text-xl">
              Pomagamy ludziom, liderom i organizacjom zachować orientację, komunikować się jasno i działać profesjonalnie wtedy, gdy rośnie presja.
            </p>
            <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
              <ButtonLink href="#sciezki">Wybierz właściwą ścieżkę</ButtonLink>
              <ButtonLink href="#jak-dziala" variant="secondary">Jak działa Resilium</ButtonLink>
              <ButtonLink href="https://check.resilium.cz" variant="secondary" target="_blank" rel="noreferrer">
                Uruchom readiness check
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm font-medium text-resilium-white/58">
              Praktyczny trening ciała, uwagi, decyzji i działania w wymagających sytuacjach.
            </p>
          </div>
          <div className="relative min-h-[380px]">
            <div className="absolute inset-6 rounded-full bg-resilium-orange/18 blur-3xl" />
            <div className="glass-panel relative flex min-h-[380px] items-center justify-center rounded-lg p-10">
              <Image
                src="/resilium-logo.png"
                alt=""
                width={460}
                height={441}
                priority
                className="h-auto w-full max-w-[380px] opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell">
          <SectionHeading
            title="Gdy presja rośnie, sama wiedza nie wystarcza. Trzeba działać."
            text="W spokojnych warunkach większość ludzi wie, co powinna zrobić. W trudnej sytuacji liczy się to, czy potrafią utrzymać orientację, komunikację, granice i zdolność wykonania właściwego kroku."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Presja", "Stres, niepewność, odpowiedzialność, przeciążenie i szybkie decyzje."],
              ["Konflikt", "Nacisk, emocje, granice, eskalacja i komunikacja z wymagającymi ludźmi."],
              ["Ryzyko", "Przestrzeń, bezpieczeństwo osobiste, fizyczna niepewność i konieczność działania na czas."]
            ].map(([title, text]) => (
              <Card key={title} title={title} text={text} icon={icons.CircleDot} />
            ))}
          </div>
        </div>
      </section>

      <section id="sciezki" className="bg-resilium-offWhite py-20">
        <div className="section-shell">
          <SectionHeading
            title="Wybierz, gdzie Resilium ma pomóc."
            text="Każdy obszar korzysta z tego samego rdzenia metodycznego. Różni się sytuacją, językiem, intensywnością i formą pracy."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pathCards.map((card) => (
              <article key={card.title} className="light-card flex rounded-lg p-6">
                <div className="flex min-h-full flex-col">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-resilium-orange">{card.title}</p>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-resilium-charcoal">{card.headline}</h3>
                  <p className="mt-4 text-sm leading-7 text-resilium-charcoal">{card.text}</p>
                  <ul className="mt-5 grid gap-2 text-sm font-semibold text-resilium-charcoal">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-resilium-orange" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={card.href} variant="light" className="mt-7 w-full">
                    {card.cta}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jak-dziala" className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell">
          <SectionHeading
            light
            title="Resilium pracuje z całą reakcją człowieka."
            text="Presja nie dzieje się tylko w głowie. Wpływa na ciało, głos, uwagę, komunikację, przestrzeń i decyzje. Dlatego Resilium łączy przygotowanie mentalne, komunikacyjne i fizyczne."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {coreSteps.map((step) => (
              <Card key={step.title} dark title={step.title} text={step.text} icon={step.icon} />
            ))}
          </div>
          <ButtonLink href="/method" className="mt-9">Poznaj metodykę</ButtonLink>
        </div>
      </section>

      <section className="bg-resilium-warmSand py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg bg-resilium-offWhite p-5">
            <Image
              src="/instructor.png"
              alt="Radim Končítek"
              width={1080}
              height={1080}
              className="aspect-square w-full rounded-md object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Doświadczenie"
              title="Praktyczny system oparty na doświadczeniu."
              text="Resilium stworzył Radim Končítek, ekspert w obszarze bezpieczeństwa osobistego, odporności psychofizycznej, komunikacji kryzysowej i podejmowania decyzji pod presją. Podejście łączy pracę z ciałem, komunikacją, granicami, przestrzenią i praktycznym treningiem wymagających sytuacji."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credibilityBullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 rounded-md border border-resilium-gray bg-resilium-white px-4 py-3 text-sm font-semibold text-resilium-charcoal">
                  <icons.CheckCircle2 className="h-4 w-4 flex-none text-resilium-orange" aria-hidden="true" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-resilium-blueDark py-20 text-resilium-white">
        <div className="section-shell flex flex-col gap-7 py-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl">Nie wiesz, która ścieżka jest właściwa?</h2>
            <p className="mt-4 text-base leading-8 text-resilium-white/72">
              Napisz do nas. Pomożemy określić, czy większy sens ma trening indywidualny, współpraca Executive czy program dla organizacji.
            </p>
          </div>
          <ButtonLink href="#kontakt" className="md:flex-none">Pomóżcie mi wybrać program</ButtonLink>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
