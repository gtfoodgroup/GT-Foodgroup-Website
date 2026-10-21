"use client";

import { ArrowRight, LockKeyhole } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

/* ================= Hero ================= */

export function StandardsHero() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-green)]">
      <div className="max-w-[1320px] mx-auto px-6 py-16 lg:py-24">
        <Eyebrow tone="gold">{tx(lang, "Our Standards", "Nuestros estándares")}</Eyebrow>
        <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.12] text-[36px] sm:text-[46px] lg:text-[54px] max-w-[760px]">
          {tx(lang, "Food people want to eat. Standards healthcare organizations can trust.", "Comida que la gente quiere comer. Estándares en los que las organizaciones de salud pueden confiar.")}
        </h1>
        <p className="mt-8 text-white/85 text-[15.5px] leading-relaxed max-w-[640px]">
          {tx(
            lang,
            "GT’s operating model is designed to keep clinical oversight, service documentation, and member dignity visible from menu design through delivery.",
            "El modelo operativo de GT está diseñado para mantener visibles la supervisión clínica, la documentación del servicio y la dignidad del miembro, desde el diseño del menú hasta la entrega.",
          )}
        </p>
      </div>
    </section>
  );
}

/* ================= Launch-safe proof points ================= */

type ProofPoint = {
  en: string;
  es: string;
  enText: string;
  esText: string;
  /** Hide a proof point until its supporting claim is confirmed current. */
  current: boolean;
};

const PROOF_POINTS: ProofPoint[] = [
  {
    en: "Signed Diet Order Workflow",
    es: "Flujo de orden dietética firmada",
    enText: "A signed Diet Order is maintained before meal service where required.",
    esText: "Se mantiene una orden dietética firmada antes del servicio de comidas, cuando se requiere.",
    current: true,
  },
  {
    en: "Four-Eyes Verification",
    es: "Verificación de cuatro ojos",
    enText: "A second qualified review supports manifest accuracy before release.",
    esText: "Una segunda revisión calificada apoya la exactitud del manifiesto antes de la salida.",
    current: true,
  },
  {
    en: "10-Year Record Retention",
    es: "Conservación de registros por 10 años",
    enText: "Documentation retained for long-term accountability.",
    esText: "Documentación conservada para una responsabilidad a largo plazo.",
    current: true,
  },
  {
    en: "HIPAA-Compliant Operations & BAAs",
    es: "Operaciones y BAA conforme a HIPAA",
    enText: "Operations and business associate agreements handled as HIPAA-compliant.",
    esText: "Operaciones y acuerdos de socio comercial manejados como conformes con HIPAA.",
    current: false,
  },
  {
    en: "FIMC-Aligned Standards",
    es: "Estándares alineados con FIMC",
    enText: "Menu standards align to applicable Food Is Medicine Coalition nutrition standards.",
    esText: "Los estándares del menú se alinean con los estándares de nutrición aplicables de Food Is Medicine Coalition.",
    current: true,
  },
];

function GoldBar() {
  return <span className="block h-[3px] w-10 bg-[var(--gt-gold)]" aria-hidden="true" />;
}

export function ApprovedProofPoints() {
  const { lang } = useLang();
  const published = PROOF_POINTS.filter((point) => point.current);
  if (published.length === 0) return null;

  return (
    <section aria-labelledby="proof-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">{tx(lang, "Launch-Safe Proof Points", "Puntos de prueba seguros para el lanzamiento")}</Eyebrow>
        <h2
          id="proof-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[32px] lg:text-[42px] max-w-[620px]"
        >
          {tx(lang, "Built to be documented, not merely described.", "Hecho para documentarse, no solo para describirse.")}
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {published.map((point) => (
            <li key={point.en} className="rounded-md border border-[var(--gt-border)] bg-white px-6 py-6">
              <GoldBar />
              <h3 className="font-serif-display mt-4 text-[var(--gt-ink)] font-bold text-[19px] leading-snug">
                {tx(lang, point.en, point.es)}
              </h3>
              <p className="mt-3 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{tx(lang, point.enText, point.esText)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Governance, documentation, privacy, food safety ================= */

const PILLARS = [
  {
    enEyebrow: "Clinical Governance",
    esEyebrow: "Gobernanza clínica",
    en: "Clinical language stays clinical.",
    es: "El lenguaje clínico sigue siendo clínico.",
    enText: "RDN-led Master Menu and Diet Order workflows keep clinical nutrition decisions with licensed dietitians.",
    esText: "Los flujos del menú maestro y de la orden dietética, dirigidos por RDN, mantienen las decisiones de nutrición clínica con dietistas licenciadas.",
  },
  {
    enEyebrow: "Documentation",
    esEyebrow: "Documentación",
    en: "Proof lives in the record.",
    es: "La prueba vive en el registro.",
    enText: "Service documentation, verification steps, and retention practices support partner oversight.",
    esText: "La documentación del servicio, los pasos de verificación y las prácticas de conservación apoyan la supervisión de los socios.",
  },
  {
    enEyebrow: "Privacy",
    esEyebrow: "Privacidad",
    en: "Public site, minimal data.",
    es: "Sitio público, datos mínimos.",
    enText: "The public website collects business contact information only and is not a member intake portal.",
    esText: "El sitio público solo recoge datos de contacto de negocios y no es un portal de inscripción de miembros.",
  },
  {
    enEyebrow: "Food Safety & Delivery",
    esEyebrow: "Inocuidad y entrega",
    en: "Publish only what is verified.",
    es: "Publicar solo lo que está verificado.",
    enText: "Specific food-safety, cold-chain, specialty capability, and delivery claims stay gated until confirmed.",
    esText: "Las afirmaciones específicas sobre inocuidad, cadena de frío, capacidades especiales y entrega permanecen reservadas hasta que se confirmen.",
  },
];

export function StandardsPillars() {
  const { lang } = useLang();
  return (
    <section aria-label={tx(lang, "Operating standards", "Estándares operativos")} className="bg-[var(--gt-green)] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-x-16 gap-y-14 lg:gap-y-24">
        {PILLARS.map((item) => (
          <div key={item.enEyebrow}>
            <Eyebrow tone="gold">{tx(lang, item.enEyebrow, item.esEyebrow)}</Eyebrow>
            <h2 className="font-serif-display mt-4 text-white font-bold leading-[1.18] text-[26px] lg:text-[32px]">
              {tx(lang, item.en, item.es)}
            </h2>
            <p className="mt-6 lg:mt-10 text-white/80 text-[14px] leading-relaxed max-w-[460px]">{tx(lang, item.enText, item.esText)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= Partner diligence ================= */

const DOWNLOADS = [
  { en: "Capabilities Brochure", es: "Folleto de capacidades", enText: "Program overview for decision committees.", esText: "Resumen del programa para comités de decisión." },
  { en: "Compliance Quick Reference", es: "Referencia rápida de cumplimiento", enText: "Core operating controls for credentialing review.", esText: "Controles operativos centrales para la revisión de credenciales." },
  { en: "Sample Menu Card", es: "Tarjeta de menú de muestra", enText: "Representative cuisine and menu design under appropriate review.", esText: "Cocina y diseño de menú representativos, bajo la revisión correspondiente." },
];

export function DiligenceDownloads() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="downloads-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">{tx(lang, "Partner Diligence", "Diligencia del socio")}</Eyebrow>
        <h2
          id="downloads-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px]"
        >
          {tx(lang, "What a healthcare partner should be able to ask for.", "Lo que un socio de salud debe poder solicitar.")}
        </h2>
        <ul className="mt-10 grid md:grid-cols-3 gap-4 lg:gap-5">
          {DOWNLOADS.map((item) => (
            <li key={item.en} className="flex flex-col rounded-md border border-[var(--gt-border)] bg-white px-6 py-6">
              <GoldBar />
              <h3 className="font-serif-display mt-4 text-[var(--gt-ink)] font-bold text-[20px] leading-snug">
                {tx(lang, item.en, item.es)}
              </h3>
              <p className="mt-2.5 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{tx(lang, item.enText, item.esText)}</p>
              <a
                href="/contact"
                className="mt-auto pt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
              >
                {tx(lang, "Request a copy", "Solicite una copia")} <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-start gap-3 text-[var(--gt-body)] text-[13.5px] leading-relaxed max-w-[760px]">
          <LockKeyhole className="w-4.5 h-4.5 shrink-0 text-[var(--gt-green)]" aria-hidden="true" />
          <span>{tx(lang, "Confidential materials are shared under a controlled process, not as open downloads.", "Los materiales confidenciales se comparten mediante un proceso controlado, no como descargas abiertas.")}</span>
        </p>
      </div>
    </section>
  );
}
