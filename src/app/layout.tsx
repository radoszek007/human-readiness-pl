import type { Metadata } from "next";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://resilium.pl"),
  title: {
    default: "Resilium | System trenowanych reakcji na presję, konflikt i ryzyko",
    template: "%s | Resilium"
  },
  description:
    "Resilium pomaga ludziom, liderom i organizacjom zachować orientację, komunikować się jasno i działać profesjonalnie w sytuacjach presji, konfliktu i ryzyka.",
  openGraph: {
    title: "Resilium | System trenowanych reakcji na presję, konflikt i ryzyko",
    description:
      "Praktyczny trening ciała, uwagi, decyzji i działania w wymagających sytuacjach.",
    url: "https://resilium.pl",
    siteName: "Resilium",
    locale: "pl_PL",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
