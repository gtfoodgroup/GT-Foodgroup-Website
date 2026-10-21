"use client";

import { ArrowRight } from "lucide-react";
import { GtLogo } from "./gt-header";
import { tx, useLang } from "./language";

const LINKS = [
  { href: "/programs", en: "Programs", es: "Programas" },
  { href: "/menus", en: "Menus & Culture", es: "Menús y cultura" },
  { href: "/who-we-serve", en: "Who We Serve", es: "A quién servimos" },
  { href: "/contact", en: "Contact", es: "Contacto" },
];

export default function GtNotFound() {
  const { lang } = useLang();
  return (
    <div className="max-w-[760px] mx-auto px-6 py-24 lg:py-32 text-center">
      <GtLogo className="mx-auto h-16 w-auto" />
      <p className="mt-6 text-[12px] font-bold tracking-[0.22em] uppercase text-[var(--gt-rose)]">
        {tx(lang, "404 · Page not found", "404 · Página no encontrada")}
      </p>
      <h1 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.1] text-[38px] sm:text-[48px] lg:text-[56px]">
        {tx(lang, "This table isn’t set.", "Esta mesa no está servida.")}
      </h1>
      <p className="mt-5 text-[var(--gt-body)] text-[16px] leading-relaxed max-w-[520px] mx-auto">
        {tx(
          lang,
          "The page you’re looking for may have moved. Start from the homepage or head straight to one of these.",
          "Es posible que la página que busca se haya movido. Empiece por el inicio o vaya directo a una de estas.",
        )}
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
      >
        {tx(lang, "Back to home", "Volver al inicio")} <ArrowRight className="w-4 h-4" />
      </a>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-[14px] font-semibold text-[var(--gt-green)] underline-offset-4 hover:underline">
              {tx(lang, link.en, link.es)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
