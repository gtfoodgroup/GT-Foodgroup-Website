"use client";

import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Eye,
  LockKeyhole,
  Archive,
  FileCheck2,
  BadgeCheck,
} from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

const CUISINES = [
  { image: "/images/gt/cuisine-dominicana.png", label: "Dominicana" },
  { image: "/images/gt/cuisine-boricua.png", label: "Boricua" },
  { image: "/images/gt/cuisine-caribbean.png", label: "Caribeña" },
  { image: "/images/gt/cuisine-mexican.png", label: "Mexicana" },
  { image: "/images/gt/cuisine-peruvian.png", label: "Peruana" },
];

export function GtCuisines() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 250, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="gt-cuisine-grid max-w-[1320px] mx-auto px-6 grid gap-12 items-center">
        <div>
          <Eyebrow>{tx(lang, "Made For New York", "Hecho para Nueva York")}</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[34px] lg:text-[42px]">
            {tx(lang, "Food that looks familiar because it is.", "Comida que se ve familiar porque lo es.")}
          </h2>
          <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed">
            {tx(
              lang,
              "A variety of cuisine lines inspired by the cultures and communities that make New York home.",
              "Varias líneas de cocina inspiradas en las culturas y comunidades que hacen de Nueva York un hogar.",
            )}
          </p>
          <a
            href="/menus"
            className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
          >
            {tx(lang, "See What’s Cooking", "Vea qué se cocina")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative">
          <button
            aria-label={tx(lang, "Scroll cuisines left", "Desplazar cocinas a la izquierda")}
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[var(--gt-green)] hover:bg-[var(--gt-cream)] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x pb-2"
          >
            {CUISINES.map((c) => (
              <figure key={c.label} className="shrink-0 w-[170px] snap-start text-center group cursor-pointer">
                <div className="overflow-hidden rounded-md">
                  { }
                  <img
                    src={c.image}
                    alt={tx(lang, `${c.label} cuisine dish`, `Plato de cocina ${c.label}`)}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] font-bold tracking-[0.1em] uppercase text-[var(--gt-ink)] group-hover:text-[var(--gt-green)] transition-colors">
                  {c.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <button
            aria-label={tx(lang, "Scroll cuisines right", "Desplazar cocinas a la derecha")}
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[var(--gt-green)] hover:bg-[var(--gt-cream)] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* Approved, launch-safe standards only. HACCP, cold-chain, and HIPAA tiles stay off until GT confirms current proof. */
const STANDARDS = [
  { icon: ClipboardCheck, en: "Clinical Menu Oversight", es: "Supervisión clínica del menú" },
  { icon: FileCheck2, en: "Signed Diet Order Workflow", es: "Flujo de orden dietética firmada" },
  { icon: Eye, en: "Four-Eyes Verification", es: "Verificación de cuatro ojos" },
  { icon: Archive, en: "10-Year Record Retention", es: "Conservación de registros por 10 años" },
  { icon: BadgeCheck, en: "FIMC-Aligned Standards", es: "Estándares alineados con FIMC" },
  { icon: LockKeyhole, en: "Privacy-Conscious Operations", es: "Operaciones conscientes de la privacidad" },
];

export function GtHealthcare() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-cream)] py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>{tx(lang, "Built For Healthcare", "Hecho para el cuidado de la salud")}</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.18] text-[34px] lg:text-[42px]">
            {tx(lang, "Food people want to eat. Standards you can trust.", "Comida que la gente quiere comer. Estándares en los que se puede confiar.")}
          </h2>
          <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[520px]">
            {tx(
              lang,
              "Clinical menu oversight, documented verification, and long-term record retention — so your teams can focus on the people you serve.",
              "Supervisión clínica del menú, verificación documentada y conservación de registros a largo plazo, para que sus equipos se enfoquen en las personas a quienes sirven.",
            )}
          </p>
          <a
            href="/our-standards"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
          >
            {tx(lang, "Our Standards", "Nuestros estándares")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {STANDARDS.map(({ icon: Icon, en, es }) => (
            <li
              key={en}
              className="flex flex-col items-center justify-center text-center gap-3 rounded-md bg-white border border-[var(--gt-border)] px-4 py-6 min-h-[132px]"
            >
              <Icon className="w-7 h-7 text-[var(--gt-green)]" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[13px] font-semibold text-[var(--gt-ink)] leading-snug">{tx(lang, en, es)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
