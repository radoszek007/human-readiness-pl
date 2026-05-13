import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-resilium-white/10 bg-resilium-blueDeep py-12 text-resilium-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/logo-cele.png" alt="Resilium" width={180} height={128} className="h-14 w-auto object-contain" />
          <p className="mt-5 max-w-md text-sm leading-7 text-resilium-white/72">
            System trenowanych reakcji na presję, konflikt i ryzyko dla osób indywidualnych,
            liderów oraz organizacji.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-resilium-white/55">Programy</h2>
          <div className="mt-4 grid gap-3 text-sm text-resilium-white/76">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-resilium-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-resilium-white/55">Kontakt</h2>
          <p className="mt-4 text-sm leading-7 text-resilium-white/72">
            Formularz na stronie jest przygotowany jako statyczny punkt kontaktu do późniejszego podłączenia.
          </p>
          <Link href="/#kontakt" className="mt-4 inline-flex text-sm font-semibold text-resilium-orange hover:text-resilium-offWhite">
            Przejdź do formularza
          </Link>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-resilium-white/10 pt-6 text-xs text-resilium-white/46">
        © {new Date().getFullYear()} Resilium. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
