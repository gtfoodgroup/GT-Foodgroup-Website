"use client";

import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

/* ================= Hero — green copy panel, brownstones right ================= */

export function AboutHero() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-green)]">
      <div className="grid lg:grid-cols-[minmax(0,58%)_1fr]">
        <div className="flex items-center">
          <div className="w-full px-6 py-16 sm:px-10 lg:py-24 lg:pr-14 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="gold">{tx(lang, "About GT Food Group", "Sobre GT Food Group")}</Eyebrow>
            <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.1] text-[36px] sm:text-[46px] lg:text-[54px] max-w-[640px]">
              {tx(
                lang,
                "A New York food company built around culture, care, and accountability.",
                "Una compañía de alimentos de Nueva York construida sobre la cultura, el cuidado y la responsabilidad.",
              )}
            </h1>
          </div>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]">
          <img
            src="/images/gt/about-brownstones.jpg"
            alt={tx(lang, "A row of Brooklyn brownstones with black iron stoop railings", "Una hilera de brownstones de Brooklyn con barandales de hierro en la escalinata")}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Position + three principles ================= */

const PRINCIPLES = [
  {
    en: "Clinical Rigor",
    es: "Rigor clínico",
    enText: "Nutrition standards should be built into the food, not added as an afterthought.",
    esText: "Los estándares de nutrición deben estar en la comida, no añadirse después.",
  },
  {
    en: "Cultural Relevance",
    es: "Relevancia cultural",
    enText: "The food should look and taste familiar to the people receiving it.",
    esText: "La comida debe verse y saber familiar para quienes la reciben.",
  },
  {
    en: "Operational Accountability",
    es: "Responsabilidad operativa",
    enText: "The service must be supported by documentation, clear responsibilities, and reliable follow-through.",
    esText: "El servicio debe apoyarse en documentación, responsabilidades claras y un seguimiento confiable.",
  },
];

export function Position() {
  const { lang } = useLang();
  return (
    <section id="position" aria-labelledby="position-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">{tx(lang, "Our Position", "Nuestra posición")}</Eyebrow>
        <h2
          id="position-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px] max-w-[760px]"
        >
          {tx(
            lang,
            "Food company first. Healthcare-grade discipline throughout.",
            "Primero, una compañía de alimentos. Disciplina de nivel clínico en todo el trabajo.",
          )}
        </h2>
        <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[760px]">
          {tx(
            lang,
            "GT currently operates in healthcare food service, including New York’s HRSN environment. We are a food-service partner—not a Social Care Network, health plan, or eligibility authority.",
            "GT opera hoy en el servicio de alimentos para el cuidado de la salud, incluido el entorno HRSN de Nueva York. Somos un socio de servicio de alimentos: no una Red de Cuidado Social, un plan de salud ni una autoridad de elegibilidad.",
          )}
        </p>

        <ul className="mt-12 grid md:grid-cols-3 gap-4 lg:gap-5">
          {PRINCIPLES.map((item) => (
            <li key={item.en} className="rounded-md border border-[var(--gt-border)] bg-white px-6 py-6">
              <span className="block h-[3px] w-10 bg-[var(--gt-gold)]" aria-hidden="true" />
              <h3 className="font-serif-display mt-4 text-[var(--gt-ink)] font-bold text-[20px] leading-snug">
                {tx(lang, item.en, item.es)}
              </h3>
              <p className="mt-2.5 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{tx(lang, item.enText, item.esText)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Leadership ================= */

export function Leadership() {
  const { lang } = useLang();
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="bg-[var(--gt-green)] py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="gold">{tx(lang, "Leadership", "Liderazgo")}</Eyebrow>
        <h2
          id="leadership-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[30px] lg:text-[40px]"
        >
          {tx(lang, "People accountable for the work.", "Personas responsables del trabajo.")}
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12 lg:gap-20">
          <article>
            <h3 className="font-serif-display text-white font-bold text-[24px] lg:text-[28px]">Salvatore Gigante</h3>
            <p className="mt-3 text-[13px] font-bold text-[var(--gt-gold)]">{tx(lang, "Chief Executive Officer", "Director ejecutivo")}</p>
            <p className="mt-3 text-white/80 text-[14px]">{tx(lang, "Operations · Compliance · Strategy", "Operaciones · Cumplimiento · Estrategia")}</p>
          </article>

          <article>
            <h3 className="font-serif-display text-white font-bold text-[24px] lg:text-[28px]">
              Maya Feller, MS, RD, CDN
            </h3>
            <p className="mt-3 text-[13px] font-bold text-[var(--gt-gold)] leading-relaxed max-w-[460px]">
              {tx(
                lang,
                "Founding Clinical Advisor · Supervising Registered Dietitian Nutritionist of Record",
                "Asesora clínica fundadora · Nutricionista dietista registrada supervisora de registro",
              )}
            </p>
            <a
              href="/clinical-authority"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              {tx(lang, "Clinical Authority", "Autoridad clínica")} <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================= Close ================= */

export function MadeInNYClosing() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="close-title" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_40%]"
        style={{ backgroundImage: 'url("/images/gt/brooklyn-bridge-twilight.jpg")' }}
        role="img"
        aria-label={tx(
          lang,
          "The Brooklyn Bridge and Manhattan skyline at twilight",
          "El puente de Brooklyn y el horizonte de Manhattan al anochecer",
        )}
      />
      <div className="absolute inset-0 bg-[#142C25]/78" aria-hidden="true" />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <h2
          id="close-title"
          className="font-serif-display text-white font-bold leading-[1.15] text-[34px] lg:text-[48px] max-w-[640px]"
        >
          {tx(
            lang,
            "Made in New York. For the families that make New York.",
            "Hecho en Nueva York. Para las familias que hacen Nueva York.",
          )}
        </h2>
        <div className="lg:text-right lg:max-w-[360px]">
          <p className="font-serif-display text-white text-[20px] lg:text-[24px] italic leading-snug">
            {tx(
              lang,
              "Culture, care, and accountability — from our kitchen to a New York doorstep.",
              "Cultura, cuidado y responsabilidad: de nuestra cocina al umbral de una puerta en Nueva York.",
            )}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
          >
            {tx(lang, "Start a Conversation", "Inicie una conversación")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
