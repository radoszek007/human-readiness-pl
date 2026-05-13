"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 text-resilium-white">
      <div className="section-shell flex h-16 items-center justify-between gap-6 rounded-lg border border-resilium-white/28 bg-resilium-blueDeep/90 px-4 shadow-panel backdrop-blur-2xl supports-[backdrop-filter]:bg-resilium-blueDeep/86">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="Resilium">
          <Image
            src="/logo-cele.png"
            alt="Resilium"
            width={170}
            height={121}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Nawigacja główna">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-1 py-2 text-sm font-semibold text-resilium-white transition hover:text-resilium-offWhite"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#sciezki" className="min-h-11 px-4 py-2">
            Wybierz program
          </ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-resilium-white/24 bg-resilium-blueDark/80 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="section-shell mt-2 rounded-lg border border-resilium-white/28 bg-resilium-blueDeep/94 shadow-panel backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-resilium-white hover:bg-resilium-white/10 hover:text-resilium-offWhite"
              >
                {item.label}
              </Link>
            ))}
            <div onClick={() => setOpen(false)}>
              <ButtonLink href="/#sciezki" className="mt-2 w-full">
                Wybierz program
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
