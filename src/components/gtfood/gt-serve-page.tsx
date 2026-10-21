"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

/* ================= Hero — green copy panel over photography ================= */

export function ServeHero() {
  const { lang } = useLang();
  return (
    <section className="relative w-full overflow-hidden bg-[var(--gt-green-deep)]">
      <img
        src="/images/gt/serve-hero.png"
        alt={tx(lang, "A GT delivery team member handing a meal tote to a resident at a Brooklyn brownstone doorway", "Un miembro del equipo de entrega de GT entrega una bolsa de comida a un residente en la puerta de un brownstone de Brooklyn")}
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
      />
      <div className="relative grid lg:grid-cols-[minmax(0,58%)_1fr] min-h-[420px] lg:min-h-[480px]">
        <div className="flex items-center bg-[var(--gt-green)]/90">
          <div className="w-full px-6 py-16 sm:px-10 lg:py-20 lg:pr-14 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="gold">{tx(lang, "Who We Serve", "A quién servimos")}</Eyebrow>
            <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.1] text-[38px] sm:text-[48px] lg:text-[56px] max-w-[560px]">
              {tx(lang, "Built for healthcare. Made for people.", "Hecho para el cuidado de la salud. Preparado para las personas.")}
            </h1>
            <p className="mt-6 text-white/85 text-[15.5px] leading-relaxed max-w-[520px]">
              {tx(
                lang,
                "GT is designed to work across the healthcare and community ecosystem without confusing who owns eligibility, referral, and service delivery responsibilities.",
                "GT está diseñado para trabajar en el ecosistema de salud y comunidad sin confundir quién es responsable de la elegibilidad, la referencia y la entrega del servicio.",
              )}
            </p>
          </div>
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}

/* ================= Audience cards ================= */

const AUDIENCES = [
  {
    number: "01",
    en: "Health Plans & Social Care Networks",
    es: "Planes de salud y Redes de Cuidado Social",
    enHeadline: "A food partner built for accountable service delivery.",
    esHeadline: "Un socio de alimentos preparado para una entrega de servicio responsable.",
    enDetail: "Documented workflow · Clinical oversight · Culturally relevant menu architecture · Reporting-ready records",
    esDetail: "Flujo documentado · Supervisión clínica · Arquitectura de menú culturalmente relevante · Registros listos para informar",
  },
  {
    number: "02",
    en: "Healthcare Providers & Care Teams",
    es: "Proveedores de salud y equipos de cuidado",
    enHeadline: "A clearer path from referral to food on the table.",
    esHeadline: "Un camino más claro desde la referencia hasta la comida en la mesa.",
    enDetail: "Referrals run through the member’s Social Care Network. GT handles the authorized food-service portion.",
    esDetail: "Las referencias pasan por la Red de Cuidado Social del miembro. GT se encarga de la parte autorizada del servicio de alimentos.",
  },
  {
    number: "03",
    en: "Community Organizations",
    es: "Organizaciones comunitarias",
    enHeadline: "Food programs built around communities you already know.",
    esHeadline: "Programas de alimentos construidos alrededor de las comunidades que usted ya conoce.",
    enDetail: "Culturally relevant meal and food-box programs where the service model and contract permit.",
    esDetail: "Programas de comidas y cajas de alimentos culturalmente relevantes, cuando el modelo de servicio y el contrato lo permiten.",
  },
  {
    number: "04",
    en: "Members & Families",
    es: "Miembros y familias",
    enHeadline: "Real food. Familiar flavors. Made with care.",
    esHeadline: "Comida de verdad. Sabores familiares. Hecha con cuidado.",
    enDetail: "GT does not determine eligibility or enroll members directly.",
    esDetail: "GT no determina la elegibilidad ni inscribe a los miembros directamente.",
  },
];

export function AudienceSections() {
  const { lang } = useLang();
  return (
    <section id="audiences" aria-label="Audiences" className="bg-white py-14 lg:py-20">
      <ul className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-5 lg:gap-6">
        {AUDIENCES.map((a) => (
          <li
            key={a.number}
            className="flex flex-col rounded-md border border-[var(--gt-border)] bg-[var(--gt-cream)]/60 p-7 lg:p-9 min-h-[260px]"
          >
            <span className="text-[12px] font-bold text-[var(--gt-rose)]">{a.number}</span>
            <h2 className="font-serif-display mt-3 text-[var(--gt-green)] font-bold leading-[1.2] text-[24px] lg:text-[28px] max-w-[420px]">
              {tx(lang, a.en, a.es)}
            </h2>
            <p className="font-serif-display mt-6 text-[var(--gt-ink)] text-[17px] lg:text-[18px] leading-snug">
              {tx(lang, a.enHeadline, a.esHeadline)}
            </p>
            <p className="mt-4 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{tx(lang, a.enDetail, a.esDetail)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ================= The handoff ================= */

const FLOW_STEPS = [
  { en: "SCN screening", es: "Evaluación de la SCN" },
  { en: "Eligibility assessment", es: "Determinación de elegibilidad" },
  { en: "Service authorization & referral", es: "Autorización y referencia del servicio" },
  { en: "GT food-service delivery", es: "Entrega del servicio de alimentos de GT" },
  { en: "Closed-loop documentation", es: "Documentación de ciclo cerrado" },
];

export function PartnershipFlow() {
  const { lang } = useLang();
  return (
    <section id="how-it-works" aria-labelledby="handoff-title" className="bg-[var(--gt-green)] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="gold">{tx(lang, "The Handoff", "La entrega")}</Eyebrow>
        <h2
          id="handoff-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[32px] lg:text-[42px]"
        >
          {tx(lang, "Clear roles. Cleaner service delivery.", "Roles claros. Una entrega de servicio más limpia.")}
        </h2>
        <ol className="mt-12 grid grid-cols-1 lg:grid-cols-5 lg:gap-x-3">
          {FLOW_STEPS.map((step, i) => (
            <li key={step.en} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gt-gold)] font-bold text-[18px] text-[var(--gt-green-deep)]">
                  {i + 1}
                </span>
                <p className="font-serif-display text-[22px] font-bold leading-snug text-white lg:mt-5 lg:max-w-[190px] lg:text-[20px]">
                  {tx(lang, step.en, step.es)}
                </p>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <>
                  <span
                    className="pointer-events-none absolute top-6 left-14 right-1 z-0 hidden items-center text-[var(--gt-gold)] lg:flex"
                    aria-hidden="true"
                  >
                    <span className="h-[2px] flex-1 bg-current" />
                    <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.4} />
                  </span>
                  <span className="flex py-3 pl-[14px] text-[var(--gt-gold)] lg:hidden" aria-hidden="true">
                    <ArrowDown className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-white/75 text-[15px] leading-relaxed max-w-[760px] lg:mt-12">
          {tx(
            lang,
            "The Social Care Network owns screening and eligibility. GT performs the authorized food service and returns documentation through the agreed channel.",
            "La Red de Cuidado Social es responsable de la evaluación y la elegibilidad. GT realiza el servicio de alimentos autorizado y devuelve la documentación por el canal acordado.",
          )}
        </p>
      </div>
    </section>
  );
}

/* ================= Closing band ================= */

export function ServeClosing() {
  const { lang } = useLang();
  return (
    <section id="partner" className="bg-[var(--gt-rose-soft)]">
      <div className="max-w-[1320px] mx-auto px-6 py-14 lg:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <h2 className="font-serif-display text-[var(--gt-green)] font-bold leading-[1.18] text-[28px] lg:text-[36px] max-w-[680px]">
          {tx(lang, "Different audiences. One standard of care and accountability.", "Públicos distintos. Un solo estándar de cuidado y responsabilidad.")}
        </h2>
        <a
          href="/contact"
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
        >
          {tx(lang, "Start a Conversation", "Inicie una conversación")} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
