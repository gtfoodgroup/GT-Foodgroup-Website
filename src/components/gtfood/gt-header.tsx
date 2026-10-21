"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Sprout, X } from "lucide-react";
import { LanguageTabs, tx, useLang } from "./language";

export function GtLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/gt/gt-official-logo.jpg"
      alt=""
      className={className}
    />
  );
}

export function GtLeafLogo({
  light = false,
  className = "w-10 h-7",
}: {
  light?: boolean;
  className?: string;
}) {
  const color = light ? "#FAF8F3" : "#006747";
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <path d="M6 26 C 16 24, 30 18, 40 6" />
        <path d="M14 24 C 13 19, 15 15, 20 12 C 21 17, 19 21, 14 24 Z" fill={color} fillOpacity="0.15" />
        <path d="M22 20 C 22 15, 25 11, 30 9 C 30 14, 27 18, 22 20 Z" fill={color} fillOpacity="0.15" />
        <path d="M30 15 C 31 11, 34 8, 38 7 C 37 11, 34 14, 30 15 Z" fill={color} fillOpacity="0.15" />
      </g>
    </svg>
  );
}

/* Desktop nav = the six primary sections per brand spec.
   Home lives in the logo link; Our Standards remains reachable from
   the homepage footer and the mobile menu. */
const NAV_LINKS: { href: string; mobileOnly?: boolean; en: string; es: string }[] = [
  { href: "/programs", en: "Programs", es: "Programas" },
  { href: "/menus", en: "Menus & Culture", es: "Menús y cultura" },
  { href: "/clinical-authority", en: "Clinical Authority", es: "Autoridad clínica" },
  { href: "/who-we-serve", en: "Who We Serve", es: "A quién servimos" },
  { href: "/about", en: "About", es: "Nosotros" },
  { href: "/contact", en: "Contact", es: "Contacto" },
  { href: "/", en: "Home", es: "Inicio", mobileOnly: true },
  { href: "/our-standards", en: "Our Standards", es: "Nuestros estándares", mobileOnly: true },
];

function useActiveNav() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/programs") return pathname.startsWith("/programs");
    if (href === "/menus") return pathname === "/menus" || pathname.startsWith("/menus/") || pathname.startsWith("/menus-culture");
    if (href === "/clinical-authority") return pathname.startsWith("/clinical-authority");
    if (href === "/who-we-serve") return pathname.startsWith("/who-we-serve");
    if (href === "/our-standards") return pathname.startsWith("/our-standards");
    if (href === "/about") return pathname.startsWith("/about");
    if (href === "/contact") return pathname.startsWith("/contact");
    return false;
  };
}

export default function GtHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = useActiveNav();
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[var(--gt-green-deep)] text-white">
        <div className="max-w-[1320px] mx-auto px-6 h-11 flex items-center justify-between gap-4 text-[11px] tracking-[0.14em] font-semibold uppercase">
          <p className="hidden lg:block truncate">
            {tx(lang, "Good food. Stronger people. Brighter communities.", "Buena comida. Personas más fuertes. Comunidades más brillantes.")}
          </p>
          <div className="ml-auto flex items-center gap-4">
            <LanguageTabs />
            <p className="hidden sm:flex items-center gap-1.5">
              {tx(lang, "Proudly Serving New York", "Servimos a Nueva York")}
              <Sprout className="w-3.5 h-3.5 text-[var(--gt-gold)]" />
            </p>
          </div>
        </div>
      </div>

      {/* Main header — white, ~88px on desktop */}
      <header
        className={`bg-white transition-shadow ${
          scrolled ? "shadow-[0_2px_16px_rgba(20,44,37,0.18)]" : ""
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-[72px] xl:h-[88px] flex items-center justify-between gap-6">
          {/* Horizontal GT logo — links Home (~300px on desktop) */}
          <a href="/" className="shrink-0" aria-label={tx(lang, "GT Food Group home", "Inicio de GT Food Group")}>
            <GtLogo className="h-11 w-auto xl:h-[62px]" />
          </a>

          {/* Desktop nav */}
          <nav aria-label={tx(lang, "Main navigation", "Navegación principal")} className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.filter((link) => !link.mobileOnly).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 whitespace-nowrap rounded-full text-[13.5px] font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-[var(--gt-green)] text-white"
                    : "text-[var(--gt-ink)] hover:text-[var(--gt-green)] hover:bg-[var(--gt-green)]/5"
                }`}
              >
                {tx(lang, link.en, link.es)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[13.5px] font-bold px-5 py-3 transition-colors"
            >
              {tx(lang, "Partner With Us", "Colabore con GT")} <ArrowRight className="w-4 h-4" />
            </a>
            <button
              aria-label={mobileOpen ? tx(lang, "Close menu", "Cerrar menú") : tx(lang, "Open menu", "Abrir menú")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-[var(--gt-green)] p-1"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu — full nav incl. Home & Our Standards + Partner CTA */}
        <div
          className={`xl:hidden overflow-hidden transition-[max-height] duration-300 border-t border-[var(--gt-border)] ${
            mobileOpen ? "max-h-[640px]" : "max-h-0"
          }`}
          inert={!mobileOpen}
        >
          <nav aria-label={tx(lang, "Mobile navigation", "Navegación móvil")} className="px-6 py-4 overflow-y-auto max-h-[70vh]">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-[var(--gt-border)] last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3.5 text-[15px] font-semibold ${
                      isActive(link.href) ? "text-[var(--gt-green)]" : "text-[var(--gt-ink)]"
                    }`}
                  >
                    {tx(lang, link.en, link.es)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 mb-2 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gt-gold)] text-[var(--gt-green-deep)] text-[14px] font-bold px-5 py-3.5"
            >
              {tx(lang, "Partner With Us", "Colabore con GT")} <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
