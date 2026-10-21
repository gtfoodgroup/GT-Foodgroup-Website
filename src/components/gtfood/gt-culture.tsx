"use client";

import { ArrowRight, Award, BookOpen, Tv } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

export default function GtCulture() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-green-deep)]">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="max-w-[1320px] ml-auto w-full px-6 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))] lg:pr-16 py-20 lg:py-28">
            <Eyebrow tone="gold">{tx(lang, "Culture Matters", "La cultura importa")}</Eyebrow>
            <h2 className="font-serif-display mt-5 text-white font-bold leading-[1.15] text-[38px] lg:text-[50px] max-w-[420px]">
              {tx(lang, "Familiar food. Thoughtfully prepared.", "Comida familiar. Preparada con cuidado.")}
            </h2>
            <p className="mt-6 text-white/85 text-[16px] leading-relaxed max-w-[460px]">
              {tx(
                lang,
                "Puerto Rican, Dominican, Caribbean, Mexican, Peruvian, Southern — and the many other flavors that make New York feel like home.",
                "Puertorriqueña, dominicana, caribeña, mexicana, peruana, del sur — y los muchos otros sabores que hacen que Nueva York se sienta como en casa.",
              )}
            </p>
            <a
              href="/menus"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              {tx(lang, "Explore Our Menus", "Explore nuestros menús")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[380px] lg:min-h-[560px]">
          { }
          <img
            src="/images/gt/culture-bowl.png"
            alt={tx(lang, "A bowl of seasoned yellow rice with grilled chicken, black beans and cilantro", "Un bowl de arroz amarillo sazonado con pollo a la parrilla, habichuelas negras y cilantro")}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

const CREDENTIALS = [
  { icon: BookOpen, en: "Author", es: "Autora", enDetail: "Eating From Our Roots", esDetail: "Eating From Our Roots" },
  { icon: Tv, en: "National Nutrition Expert", es: "Experta nacional en nutrición", enDetail: "Good Morning America", esDetail: "Good Morning America" },
  { icon: Award, en: "Clinical Leadership", es: "Liderazgo clínico", enDetail: "Supervising RDN of Record", esDetail: "RDN supervisora de registro" },
];

export function GtClinicalAuthority() {
  const { lang } = useLang();
  return (
    <section className="relative bg-[var(--gt-rose-soft)] overflow-hidden">
      {/* Floral line-art decoration */}
      <svg
        viewBox="0 0 220 220"
        className="hidden lg:block absolute right-4 top-16 w-[240px] h-[240px] text-[var(--gt-rose)]/45 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="150" cy="70" r="14" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="150"
            cy="34"
            rx="11"
            ry="24"
            transform={`rotate(${deg} 150 70)`}
          />
        ))}
        <path d="M150 84 C 148 130, 140 170, 110 205" />
        <path d="M143 140 C 128 134, 118 124, 114 110 C 130 114, 140 124, 143 140 Z" />
        <path d="M128 175 C 112 172, 100 164, 94 152 C 110 154, 122 162, 128 175 Z" />
      </svg>

      <div className="grid lg:grid-cols-2 relative z-10">
        {/* Portrait — full-bleed left half */}
        <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[680px]">
          <img
            src="/images/gt/maya-brownstone.jpg"
            alt={tx(lang, "Maya Feller seated on brownstone steps", "Maya Feller sentada en los escalones de un brownstone")}
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            loading="lazy"
          />
        </div>

        {/* Bio */}
        <div className="flex items-center">
        <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20 lg:pr-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
          <Eyebrow tone="rose">{tx(lang, "Clinical Authority", "Autoridad clínica")}</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.08] text-[38px] lg:text-[52px] max-w-[460px]">
            Maya Feller, MS, RD, CDN
          </h2>
          <p className="font-serif-display mt-4 text-[var(--gt-rose)] text-[22px] lg:text-[26px] leading-snug">
            {tx(lang, "Where clinical nutrition meets cultural relevance.", "Donde la nutrición clínica se encuentra con la relevancia cultural.")}
          </p>
          <p className="mt-6 text-[var(--gt-body)] text-[15px] leading-relaxed max-w-[560px]">
            {tx(
              lang,
              "Maya Feller is the founder and lead dietitian at Maya Feller Nutrition, a Brooklyn-based nutrition practice, a nationally recognized nutrition expert, and author of Eating from Our Roots.",
              "Maya Feller es la fundadora y dietista principal de Maya Feller Nutrition, una práctica de nutrición en Brooklyn, una experta en nutrición reconocida a nivel nacional y autora de Eating from Our Roots.",
            )}
          </p>
          <p className="mt-4 text-[var(--gt-body)] text-[15px] leading-relaxed max-w-[560px]">
            {tx(
              lang,
              "As GT Food Group’s Founding Clinical Advisor & Supervising RDN of Record, Maya brings a patient-centered, culturally humble approach to the clinical nutrition standards behind our programs.",
              "Como asesora clínica fundadora y RDN supervisora de registro de GT Food Group, Maya aporta un enfoque centrado en la persona y culturalmente humilde a los estándares de nutrición clínica de nuestros programas.",
            )}
          </p>
          <p className="mt-4 text-[13.5px] text-[var(--gt-body)]/85 leading-relaxed max-w-[560px]">
            {tx(
              lang,
              "Maya does not screen, enroll, or refer members. The Social Care Network determines eligibility.",
              "Maya no evalúa, no inscribe ni refiere a los miembros. La Red de Cuidado Social determina la elegibilidad.",
            )}
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {CREDENTIALS.map(({ icon: Icon, en, es, enDetail, esDetail }) => (
              <div key={en} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[var(--gt-rose)]" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--gt-ink)]">
                    {tx(lang, en, es)}
                  </p>
                  <p className="text-[13px] text-[var(--gt-body)] mt-1 leading-snug">{tx(lang, enDetail, esDetail)}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/clinical-authority"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[var(--gt-rose)] hover:bg-[var(--gt-rose-deep)] text-white text-[14px] font-bold px-6 py-3.5 transition-colors"
          >
            {tx(lang, "Meet Maya", "Conozca a Maya")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
