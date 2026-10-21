"use client";

import { tx, useLang } from "./language";
import {
  ArrowRight,
  Apple,
  ClipboardList,
  CookingPot,
  Egg,
  HeartHandshake,
  HeartPulse,
  House,
  Info,
  Leaf,
  Scale,
  Truck,
  Users,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { GtLeafLogo } from "./gt-header";

/* ================= Hero — green copy panel, skyline meal on the right ================= */

export function ProgramsHero() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-green)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex items-center overflow-hidden">
          <div className="absolute -left-10 -bottom-16 text-white/[0.08] pointer-events-none" aria-hidden="true">
            <Leaf className="w-80 h-80 rotate-[16deg]" strokeWidth={0.7} />
          </div>
          <div className="relative z-10 w-full px-6 py-16 sm:px-10 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))] lg:pr-14">
            <p className="text-[12px] font-bold tracking-[0.22em] uppercase text-[var(--gt-gold)]">
              {tx(lang, "Our Programs", "Nuestros programas")}
            </p>
            <h1 className="font-serif-display mt-4 text-white font-bold leading-[1.08] text-[38px] sm:text-[48px] lg:text-[56px] max-w-[520px]">
              {tx(lang, "Nutrition programs built around the people you serve.", "Programas de nutrición construidos alrededor de las personas a quienes usted sirve.")}
            </h1>
            <p className="mt-6 text-white/85 text-[15.5px] leading-relaxed max-w-[460px]">
              {tx(
                lang,
                "GT Food Group supports healthcare and community partners with culturally relevant nutrition services built around clear clinical and operational workflows.",
                "GT Food Group apoya a socios de salud y comunidad con servicios de nutrición culturalmente relevantes, construidos sobre flujos clínicos y operativos claros.",
              )}
            </p>
            <a
              href="#partner"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              {tx(lang, "Partner With Us", "Colabore con GT")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">
          <img
            src="/images/gt/programs-hero-skyline.jpg"
            alt={tx(lang, "A bowl of grains and grilled vegetables in front of the New York City skyline at sunset", "Un bowl de granos y vegetales a la parrilla frente al horizonte de la ciudad de Nueva York al atardecer")}
            className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Program detail sections — alternating image/copy ================= */

type StripItem = { icon: React.ElementType; label: string };

type ProgramDetail = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  strip: StripItem[];
  cta?: { label: string; href: string };
  image: string;
  alt: string;
};

const DETAILS: ProgramDetail[] = [
  {
    id: "medically-tailored-meals",
    eyebrow: "Medically Tailored Meals",
    headline: "Nutrition designed around specific clinical needs.",
    body: "GT’s medically tailored meal programs combine culturally familiar food with Registered Dietitian Nutritionist-led menu standards and member-specific Diet Order workflows.",
    strip: [
      { icon: HeartPulse, label: "RDN-led menu development" },
      { icon: CookingPot, label: "Culturally relevant cuisine" },
      { icon: ClipboardList, label: "Member-specific clinical workflow" },
      { icon: Truck, label: "Documented service delivery" },
    ],
    cta: { label: "Clinical Authority", href: "/clinical-authority" },
    image: "/images/gt/programs-mtm-plate.jpg",
    alt: "Grilled salmon with grains, broccoli, and roasted vegetables",
  },
  {
    id: "home-delivered-meals",
    eyebrow: "Clinically Appropriate Home-Delivered Meals",
    headline: "Nutritious food without losing familiarity.",
    body: "Fresh-prepared meals designed for members who need dependable nutrition support within healthful guidelines — while keeping familiar flavors and culturally relevant food at the center of the experience.",
    strip: [
      { icon: Scale, label: "Balanced portions" },
      { icon: UtensilsCrossed, label: "Culturally familiar menus" },
      { icon: CookingPot, label: "Fresh-prepared meals" },
      { icon: House, label: "Reliable home delivery" },
    ],
    image: "/images/gt/programs-hdm-bowl.jpg",
    alt: "Rice, black beans, plantains, and chicken in a white bowl",
  },
  {
    id: "food-prescription-boxes",
    eyebrow: "Food Prescription Boxes",
    headline: "Fresh ingredients for the way families actually cook.",
    body: "GT Food Group combines fresh produce, proteins, dairy, and culturally relevant staples into thoughtfully structured food boxes designed around nutritional needs and familiar ways of preparing food at home.",
    strip: [
      { icon: Apple, label: "Fresh produce" },
      { icon: Egg, label: "Proteins and dairy" },
      { icon: Wheat, label: "Culturally relevant staples" },
      { icon: ClipboardList, label: "RDN-guided composition where clinically required" },
    ],
    cta: { label: "Explore Our Menus", href: "/menus" },
    image: "/images/gt/programs-produce-box.jpg",
    alt: "A GT Food Group box filled with fresh vegetables",
  },
];

const DETAIL_ES: Record<string, { eyebrow: string; headline: string; body: string; alt: string; strip: string[]; cta?: string }> = {
  "medically-tailored-meals": {
    eyebrow: "Comidas médicamente adaptadas",
    headline: "Nutrición diseñada alrededor de necesidades clínicas específicas.",
    body: "Los programas de comidas médicamente adaptadas de GT combinan comida culturalmente familiar con estándares de menú dirigidos por una nutricionista dietista registrada y flujos de orden dietética específicos para cada miembro.",
    alt: "Salmón a la parrilla con granos, brócoli y vegetales asados",
    strip: ["Desarrollo de menú dirigido por RDN", "Cocina culturalmente relevante", "Flujo clínico específico del miembro", "Entrega de servicio documentada"],
    cta: "Autoridad clínica",
  },
  "home-delivered-meals": {
    eyebrow: "Comidas a domicilio clínicamente apropiadas",
    headline: "Comida nutritiva sin perder lo familiar.",
    body: "Comidas recién preparadas para miembros que necesitan un apoyo nutricional confiable dentro de pautas saludables, manteniendo los sabores familiares y la comida culturalmente relevante en el centro de la experiencia.",
    alt: "Arroz, habichuelas negras, plátanos y pollo en un bowl blanco",
    strip: ["Porciones equilibradas", "Menús culturalmente familiares", "Comidas recién preparadas", "Entrega confiable a domicilio"],
  },
  "food-prescription-boxes": {
    eyebrow: "Cajas de prescripción de alimentos",
    headline: "Ingredientes frescos para la forma en que las familias realmente cocinan.",
    body: "GT Food Group combina productos frescos, proteínas, lácteos y básicos culturalmente relevantes en cajas de alimentos pensadas según las necesidades nutricionales y las formas familiares de cocinar en casa.",
    alt: "Una caja de GT Food Group llena de vegetales frescos",
    strip: ["Productos frescos", "Proteínas y lácteos", "Básicos culturalmente relevantes", "Composición guiada por RDN cuando se requiere clínicamente"],
    cta: "Explore nuestros menús",
  },
};

export function ProgramDetailSections() {
  const { lang } = useLang();
  return (
    <div id="programs-detail">
      {DETAILS.map((d, i) => {
        const es = DETAIL_ES[d.id];
        const flip = i % 2 === 1;
        return (
          <section
            key={d.id}
            id={d.id}
            aria-labelledby={`${d.id}-title`}
            className="bg-white"
          >
            <div className="grid lg:grid-cols-2">
              <div
                className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] ${
                  flip ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={d.image}
                  alt={tx(lang, d.alt, es.alt)}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className={`flex items-center ${flip ? "lg:order-1" : ""}`}>
                <div className="w-full px-6 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-16">
                  <div className="max-w-[580px]">
                    <Eyebrow tone="rose">{tx(lang, d.eyebrow, es.eyebrow)}</Eyebrow>
                    <h2
                      id={`${d.id}-title`}
                      className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.14] text-[30px] lg:text-[38px] max-w-[500px]"
                    >
                      {tx(lang, d.headline, es.headline)}
                    </h2>
                    <p className="mt-4 text-[var(--gt-body)] text-[15.5px] leading-relaxed">
                      {tx(lang, d.body, es.body)}
                    </p>

                    <ul className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:divide-x sm:divide-[var(--gt-border)]">
                      {d.strip.map(({ icon: Icon, label }, stripIndex) => (
                        <li key={label} className="flex flex-col items-center text-center px-3">
                          <Icon
                            className="w-6 h-6 text-[var(--gt-green)]"
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                          <span className="mt-2 text-[12px] font-semibold text-[var(--gt-ink)] leading-snug">
                            {tx(lang, label, es.strip[stripIndex])}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {d.cta && (
                      <a
                        href={d.cta.href}
                        className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[13.5px] font-bold px-6 py-3 transition-colors"
                      >
                        {tx(lang, d.cta.label, es.cta ?? d.cta.label)} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

/* ================= HRSN workflow — numbered steps with explicit ownership ================= */

type Owner = "scn" | "rdn" | "gt";

const OWNER_LABEL: Record<Owner, string> = {
  scn: "Social Care Network",
  rdn: "Registered Dietitian",
  gt: "GT Food Group",
};

const STEPS: { title: string; text: string; owner: Owner }[] = [
  {
    title: "SCN Screening & Eligibility",
    text: "The Social Care Network screens the member and determines eligibility.",
    owner: "scn",
  },
  {
    title: "Service Authorization",
    text: "The authorized service is referred through the appropriate network workflow.",
    owner: "scn",
  },
  {
    title: "Clinical Nutrition Workflow",
    text: "Where required, a member-specific Diet Order is issued under Registered Dietitian Nutritionist supervision.",
    owner: "rdn",
  },
  {
    title: "GT Food Service",
    text: "GT prepares and delivers the authorized meal or food-box service.",
    owner: "gt",
  },
  {
    title: "Documentation & Ongoing Review",
    text: "Service documentation supports renewal, modification, or completion of the authorized service.",
    owner: "gt",
  },
];

const STEP_ES = [
  { title: "Evaluación y elegibilidad de la SCN", text: "La Red de Cuidado Social evalúa al miembro y determina la elegibilidad.", owner: "Red de Cuidado Social" },
  { title: "Autorización del servicio", text: "El servicio autorizado se refiere a través del flujo correspondiente de la red.", owner: "Red de Cuidado Social" },
  { title: "Flujo de nutrición clínica", text: "Cuando se requiere, se emite una orden dietética específica del miembro bajo la supervisión de una nutricionista dietista registrada.", owner: "Dietista registrada" },
  { title: "Servicio de alimentos de GT", text: "GT prepara y entrega la comida o la caja de alimentos autorizada.", owner: "GT Food Group" },
  { title: "Documentación y revisión continua", text: "La documentación del servicio apoya la renovación, la modificación o la conclusión del servicio autorizado.", owner: "GT Food Group" },
];

export function HrsnWorkflow() {
  const { lang } = useLang();
  return (
    <section
      aria-labelledby="hrsn-title"
      className="relative bg-[var(--gt-green-deep)] overflow-hidden"
    >
      <div className="absolute -right-6 -top-4 opacity-[0.12] pointer-events-none" aria-hidden="true">
        <GtLeafLogo light className="w-[260px] h-[175px]" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 py-16 lg:py-20">
        <Eyebrow tone="gold">{tx(lang, "How The Program Works", "Cómo funciona el programa")}</Eyebrow>
        <h2
          id="hrsn-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[32px] lg:text-[44px] max-w-[820px]"
        >
          {tx(lang, "Clear responsibilities from eligibility to delivery.", "Responsabilidades claras, desde la elegibilidad hasta la entrega.")}
        </h2>

        <ol className="mt-12 grid gap-9 lg:grid-cols-5 lg:gap-x-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex lg:block">
              {i < STEPS.length - 1 && (
                <span
                  className="hidden lg:flex items-center absolute top-[18px] left-[48px] -right-4 text-[var(--gt-gold)]"
                  aria-hidden="true"
                >
                  <span className="h-[1.5px] flex-1 bg-[var(--gt-gold)]" />
                  <ArrowRight className="-ml-1.5 w-4 h-4" strokeWidth={2.2} />
                </span>
              )}
              <span className="relative z-10 w-9 h-9 shrink-0 rounded-full bg-[var(--gt-gold)] flex items-center justify-center font-bold text-[15px] text-[var(--gt-green-deep)]">
                {i + 1}
              </span>
              <div className="ml-4 lg:ml-0 lg:mt-4">
                <h3 className="text-white font-bold text-[15px] leading-snug">{tx(lang, s.title, STEP_ES[i].title)}</h3>
                <p className="mt-2 text-white/75 text-[13px] leading-relaxed">
                  <span className="sr-only">{tx(lang, "Responsible", "Responsable")}: {tx(lang, OWNER_LABEL[s.owner], STEP_ES[i].owner)}. </span>
                  {tx(lang, s.text, STEP_ES[i].text)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 flex items-start sm:items-center justify-center gap-2.5 rounded-md bg-[var(--gt-rose-soft)] px-5 py-3 text-center text-[var(--gt-rose)] text-[13.5px] font-semibold leading-relaxed">
          <Info className="w-4.5 h-4.5 shrink-0 mt-0.5 sm:mt-0" strokeWidth={2.2} aria-hidden="true" />
          <span>
            {tx(
              lang,
              "GT does not screen, enroll, or determine HRSN eligibility. Eligibility remains with the member’s Social Care Network.",
              "GT no evalúa, no inscribe ni determina la elegibilidad de HRSN. La elegibilidad permanece con la Red de Cuidado Social del miembro.",
            )}
          </span>
        </p>
      </div>
    </section>
  );
}

/* ================= More ways we support partners ================= */

// Only capabilities with `verified: true` are published; flip after sign-off on launch menus/contracts.
const CAPABILITIES: {
  icon: React.ElementType;
  title: string;
  text: string;
  verified: boolean;
}[] = [
  {
    icon: UtensilsCrossed,
    title: "Specialty & Cultural Menus",
    text: "Menu solutions designed around cultural, religious, texture, and dietary needs where GT’s verified capabilities permit.",
    verified: true,
  },
  {
    icon: Users,
    title: "Clinical Nutrition Support",
    text: "RDN-led menu and Diet Order coordination integrated with the authorized service workflow.",
    verified: true,
  },
  {
    icon: HeartHandshake,
    title: "Maternal & Family Nutrition",
    text: "Food support designed around pregnancy, postpartum, and family-centered nutrition programs where contracted.",
    verified: true,
  },
];

const CAPABILITY_ES = [
  { title: "Menús especiales y culturales", text: "Soluciones de menú diseñadas según necesidades culturales, religiosas, de textura y dietéticas, cuando las capacidades verificadas de GT lo permiten." },
  { title: "Apoyo de nutrición clínica", text: "Coordinación de menú y orden dietética dirigida por RDN, integrada al flujo del servicio autorizado." },
  { title: "Nutrición materna y familiar", text: "Apoyo alimentario diseñado para el embarazo, el posparto y los programas de nutrición centrados en la familia, cuando existe un contrato." },
];

export function GtPartnerSupport() {
  const { lang } = useLang();
  const published = CAPABILITIES.filter((c) => c.verified);
  if (published.length === 0) return null;

  return (
    <section aria-label={tx(lang, "More ways we support partners", "Otras formas en que apoyamos a los socios")} className="bg-[var(--gt-cream)] py-14 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">{tx(lang, "More Ways We Support Partners", "Otras formas de apoyar a los socios")}</Eyebrow>
        <div className="mt-7 grid md:grid-cols-3 gap-5">
          {published.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex items-start gap-5 rounded-md bg-[var(--gt-rose-soft)] p-6">
              <Icon className="w-8 h-8 shrink-0 text-[var(--gt-rose)]" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3 className="font-serif-display text-[var(--gt-ink)] font-bold text-[18px] leading-snug">
                  {tx(lang, title, CAPABILITY_ES[i].title)}
                </h3>
                <p className="mt-2 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{tx(lang, text, CAPABILITY_ES[i].text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Closing CTA — warm band, leaves left, skyline right ================= */

export function ProgramsCtaBand() {
  const { lang } = useLang();
  return (
    <section
      id="partner"
      aria-labelledby="partner-title"
      className="relative bg-[var(--gt-cream-deep)] overflow-hidden"
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-[45%]" aria-hidden="true">
        <img
          src="/images/gt/programs-cta-skyline.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gt-cream-deep)] via-[var(--gt-cream-deep)]/70 to-transparent" />
      </div>

      <div className="absolute -left-6 bottom-0 text-[var(--gt-green)]/25 pointer-events-none" aria-hidden="true">
        <Leaf className="w-40 h-40 -rotate-12" strokeWidth={0.9} />
      </div>
      <div className="absolute left-24 -bottom-6 text-[var(--gt-green)]/20 pointer-events-none hidden sm:block" aria-hidden="true">
        <Leaf className="w-24 h-24 rotate-[30deg]" strokeWidth={0.9} />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-16 lg:py-20 text-center">
        <h2
          id="partner-title"
          className="font-serif-display mx-auto text-[var(--gt-green)] font-bold leading-[1.15] text-[32px] lg:text-[42px] max-w-[680px]"
        >
          {tx(lang, "Start with the population you need to serve.", "Empiece por la población a la que necesita servir.")}
        </h2>
        <p className="mt-4 mx-auto text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[560px]">
          {tx(
            lang,
            "Tell us the geography, service model, and member experience you are trying to build. We’ll show you how GT can fit.",
            "Cuéntenos la geografía, el modelo de servicio y la experiencia del miembro que quiere construir. Le mostraremos cómo puede encajar GT.",
          )}
        </p>
        <a
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
        >
          {tx(lang, "Begin a Partnership Conversation", "Inicie una conversación de colaboración")} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
