export function ContactSection() {
  return (
    <section id="kontakt" className="bg-resilium-warmSand py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-resilium-orange">Kontakt</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-resilium-charcoal md:text-5xl">
            Porozmawiajmy o właściwym kolejnym kroku.
          </h2>
          <p className="mt-5 text-base leading-8 text-resilium-charcoal md:text-lg">
            Opisz krótko sytuację, z którą pracujesz. Wrócimy z rekomendacją formatu:
            Personal Performance, Executive albo programu dla organizacji.
          </p>
        </div>
        <form className="light-card grid gap-4 rounded-lg p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-resilium-charcoal">
              Imię i nazwisko
              <input className="focus-ring min-h-12 rounded-md border border-resilium-gray px-4 text-sm font-medium text-resilium-charcoal" name="name" type="text" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-resilium-charcoal">
              E-mail
              <input className="focus-ring min-h-12 rounded-md border border-resilium-gray px-4 text-sm font-medium text-resilium-charcoal" name="email" type="email" />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-resilium-charcoal">
              Telefon
              <input className="focus-ring min-h-12 rounded-md border border-resilium-gray px-4 text-sm font-medium text-resilium-charcoal" name="phone" type="tel" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-resilium-charcoal">
              Obszar zainteresowania
              <select className="focus-ring min-h-12 rounded-md border border-resilium-gray bg-resilium-white px-4 text-sm font-medium text-resilium-charcoal" name="area" defaultValue="">
                <option value="" disabled>Wybierz obszar</option>
                <option>Personal Performance</option>
                <option>Executive</option>
                <option>For Organizations</option>
                <option>Nie wiem / chcę rekomendacji</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-resilium-charcoal">
            Wiadomość
            <textarea className="focus-ring min-h-36 rounded-md border border-resilium-gray px-4 py-3 text-sm font-medium text-resilium-charcoal" name="message" />
          </label>
          <button
            type="button"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-resilium-orange bg-resilium-orange px-5 py-3 text-sm font-bold text-resilium-white transition hover:bg-resilium-orange/90"
          >
            Wyślij zapytanie
          </button>
          <p className="text-xs leading-6 text-resilium-gray">
            Wysłanie formularza nie tworzy żadnego zobowiązania. Służy wyłącznie do ustalenia kolejnego kroku.
          </p>
        </form>
      </div>
    </section>
  );
}
