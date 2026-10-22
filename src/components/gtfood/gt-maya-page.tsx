"use client";

import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

/* ================= Hero — portrait left, pink title panel right ================= */

export function MayaHero() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-rose-soft)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]">
          <img
            src="/images/gt/maya-brownstone.jpg"
            alt={tx(lang, "Maya Feller seated on brownstone steps", "Maya Feller sentada en los escalones de un brownstone")}
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          />
        </div>

        <div className="flex items-center">
          <div className="w-full px-6 py-14 sm:px-10 lg:px-16 lg:py-20 lg:pr-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="rose">{tx(lang, "Clinical Authority", "Autoridad clínica")}</Eyebrow>
            <h1 className="font-serif-display mt-5 text-[var(--gt-green)] font-bold leading-[1.08] text-[40px] sm:text-[50px] lg:text-[58px]">
              Maya Feller, MS, RD, CDN
            </h1>
            <p className="font-serif-display mt-6 text-[var(--gt-rose)] text-[20px] sm:text-[22px] lg:text-[24px] leading-snug">
              {tx(lang, "Founding Clinical Advisor · Supervising RDN of Record", "Asesora clínica fundadora · RDN supervisora de registro")}
            </p>
            <span className="mt-6 block h-[2px] w-full max-w-[460px] bg-[var(--gt-gold)]" aria-hidden="true" />
            <p className="mt-6 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[460px]">
              {tx(lang, "Overseeing the Master Menu and supervising the clinical work behind every Diet Order.", "Supervisa el menú maestro y el trabajo clínico detrás de cada orden dietética.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= About + credentials card ================= */

const CREDENTIALS = [
  { en: "Education", es: "Educación", enDetail: "MS, Clinical Nutrition · New York University", esDetail: "MS, Nutrición clínica · Universidad de Nueva York" },
  { en: "Licensure", es: "Licencia", enDetail: "RD · CDN — New York", esDetail: "RD · CDN — Nueva York" },
  { en: "Practice", es: "Práctica", enDetail: "Maya Feller Nutrition · Brooklyn", esDetail: "Maya Feller Nutrition · Brooklyn" },
  { en: "Serving New York", es: "Sirviendo a Nueva York", enDetail: "Since 2014", esDetail: "Desde 2014" },
  { en: "Languages", es: "Idiomas", enDetail: "English · Spanish", esDetail: "Inglés · Español" },
];

export function AboutMaya() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="about-maya-title" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <Eyebrow tone="rose">{tx(lang, "About Maya", "Sobre Maya")}</Eyebrow>
          <h2
            id="about-maya-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.12] text-[34px] lg:text-[44px] max-w-[560px]"
          >
            {tx(lang, "Nutrition expertise grounded in culture.", "Experiencia en nutrición con raíces en la cultura.")}
          </h2>
          <p className="mt-6 text-[var(--gt-body)] text-[16px] leading-relaxed max-w-[560px]">
            {tx(
              lang,
              "Founder and lead dietitian at Maya Feller Nutrition, a Brooklyn-based virtual nutrition clinic. Maya’s approach is inclusive, anti-bias, patient-centered, and culturally humble.",
              "Fundadora y dietista principal de Maya Feller Nutrition, una clínica virtual de nutrición en Brooklyn. El enfoque de Maya es inclusivo, libre de prejuicios, centrado en la persona y culturalmente humilde.",
            )}
          </p>
          <img
            src="/images/gt/maya-cooking.jpg"
            alt={tx(lang, "Maya Feller cooking at a kitchen counter", "Maya Feller cocinando en la encimera de una cocina")}
            className="mt-10 w-full max-w-[560px] aspect-[4/3] object-cover object-[center_25%]"
            loading="lazy"
          />
        </div>

        <dl className="bg-[var(--gt-rose-soft)] px-7 py-7 sm:px-8">
          {CREDENTIALS.map(({ en, es, enDetail, esDetail }, i) => (
            <div
              key={en}
              className={`py-4 ${i < CREDENTIALS.length - 1 ? "border-b-2 border-[var(--gt-gold)]" : ""} ${i === 0 ? "pt-0" : ""}`}
            >
              <dt className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--gt-rose)]">{tx(lang, en, es)}</dt>
              <dd className="mt-1.5 text-[15px] text-[var(--gt-ink)] leading-snug">{tx(lang, enDetail, esDetail)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ================= Authored works (titles only) + national platform (type, not logos) ================= */

const WORKS = [
  {
    title: "Eating from Our Roots",
    enMeta: "80+ Healthy Home-Cooked Favorites from Cultures Around the World · goop Press, 2023",
    esMeta: "Más de 80 favoritos caseros y saludables de culturas de todo el mundo · goop Press, 2023",
  },
  { title: "The Southern Comfort Food Diabetes Cookbook", enMeta: "2019", esMeta: "2019" },
];

const OUTLETS = [
  "Good Morning America",
  "Everyday Health",
  "SHAPE",
  "Parents",
  "Aspen Ideas Festival",
  "TODAY",
  "The New York Times",
  "Tamron Hall",
  "Oprah Daily",
  "Food Network",
  "Well+Good",
  "Martha Stewart",
];

export function WorksAndPlatform() {
  const { lang } = useLang();
  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div aria-labelledby="works-title">
          <Eyebrow tone="rose">{tx(lang, "Authored Works", "Obras publicadas")}</Eyebrow>
          <h2
            id="works-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px] max-w-[540px]"
          >
            {tx(lang, "Nutrition shaped by culture, experience, and evidence.", "Nutrición formada por la cultura, la experiencia y la evidencia.")}
          </h2>
          <ul className="mt-8 space-y-7">
            {WORKS.map(({ title, enMeta, esMeta }) => (
              <li key={title}>
                <h3 className="font-serif-display text-[var(--gt-green)] font-bold text-[22px] lg:text-[26px] leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-[13.5px] text-[var(--gt-body)] leading-relaxed">{tx(lang, enMeta, esMeta)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div aria-labelledby="platform-title">
          <Eyebrow tone="rose">{tx(lang, "National Platform", "Plataforma nacional")}</Eyebrow>
          <h2
            id="platform-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px]"
          >
            {tx(lang, "A trusted voice in nutrition.", "Una voz de confianza en nutrición.")}
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {OUTLETS.map((name) => (
              <li key={name} className="text-[14.5px] font-bold text-[var(--gt-ink)]">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================= Role at GT — green band, gold-topped cards ================= */

const ROLES = [
  { en: "Master Menu Oversight", es: "Supervisión del menú maestro", enText: "Oversees Master Menu standards and clinical review.", esText: "Supervisa los estándares del menú maestro y la revisión clínica." },
  { en: "Diet Order Supervision", es: "Supervisión de la orden dietética", enText: "Supervises clinical work behind member-specific Diet Orders.", esText: "Supervisa el trabajo clínico detrás de las órdenes dietéticas específicas de cada miembro." },
  { en: "Recipe & Menu Changes", es: "Cambios de receta y menú", enText: "Clinical changes move through RDN review.", esText: "Los cambios clínicos pasan por la revisión de la RDN." },
  { en: "Clinical Parameters", es: "Parámetros clínicos", enText: "Helps establish nutrient parameters.", esText: "Ayuda a establecer los parámetros de nutrientes." },
  { en: "Food Prescription Boxes", es: "Cajas de prescripción de alimentos", enText: "Oversees the clinical framework for box composition.", esText: "Supervisa el marco clínico de la composición de las cajas." },
  { en: "Clinical Quality Review", es: "Revisión de calidad clínica", enText: "Supports recurring clinical QA and documentation review.", esText: "Apoya la revisión clínica recurrente de calidad y documentación." },
];

export function MayaRole() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="role-title" className="bg-[var(--gt-green)] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="gold">{tx(lang, "Maya’s Role at GT", "El papel de Maya en GT")}</Eyebrow>
        <h2
          id="role-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[32px] lg:text-[44px]"
        >
          {tx(lang, "Clinical oversight that reaches the plate.", "Supervisión clínica que llega al plato.")}
        </h2>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {ROLES.map(({ en, es, enText, esText }) => (
            <li key={en} className="border-t-[3px] border-[var(--gt-gold)] bg-white/[0.07] px-6 py-6">
              <h3 className="font-serif-display text-white font-bold text-[20px] leading-snug">{tx(lang, en, es)}</h3>
              <p className="mt-2.5 text-white/75 text-[13.5px] leading-relaxed">{tx(lang, enText, esText)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Workflow + independence ================= */

const STEPS = [
  { en: "SCN Screening & Eligibility", es: "Evaluación y elegibilidad de la SCN" },
  { en: "Service Authorization", es: "Autorización del servicio" },
  { en: "Clinical Nutrition Workflow", es: "Flujo de nutrición clínica" },
  { en: "GT Food Service", es: "Servicio de alimentos de GT" },
  { en: "Ongoing Review", es: "Revisión continua" },
];

export function ClinicalWorkflow() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="workflow-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <h2
          id="workflow-title"
          className="flex items-center gap-3 text-[11.5px] font-bold tracking-[0.22em] uppercase text-[var(--gt-rose)]"
        >
          <span className="h-px w-8 bg-[var(--gt-rose)]" aria-hidden="true" />
          {tx(lang, "How the Workflow Fits Together", "Cómo encaja el flujo de trabajo")}
        </h2>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">
          {STEPS.map((step, i) => (
            <li key={step.en} className="flex items-center gap-4 lg:block">
              <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--gt-gold)] flex items-center justify-center font-bold text-[15px] text-[var(--gt-green-deep)]">
                {i + 1}
              </span>
              <p className="lg:mt-4 text-[14px] font-bold text-[var(--gt-ink)] leading-snug">{tx(lang, step.en, step.es)}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 rounded-md bg-[var(--gt-rose-soft)] px-6 py-4 text-center text-[14px] font-semibold text-[var(--gt-rose)] leading-relaxed">
          {tx(
            lang,
            "Maya does not screen, enroll, or refer members. Program eligibility is determined by the member’s Social Care Network.",
            "Maya no evalúa, no inscribe ni refiere a los miembros. La elegibilidad del programa la determina la Red de Cuidado Social del miembro.",
          )}
        </p>
      </div>
    </section>
  );
}
