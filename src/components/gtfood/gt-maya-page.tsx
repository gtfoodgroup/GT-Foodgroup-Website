"use client";

import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

const LINKS = [
  { href: "https://mayafellernutrition.com/eatingfromourroots/", label: "https://mayafellernutrition.com/eatingfromourroots/" },
  { href: "https://mayafellernutrition.com/southern-comfort-food-diabetes-cookbook/", label: "https://mayafellernutrition.com/southern-comfort-food-diabetes-cookbook/" },
  { href: "https://www.youtube.com/channel/UCy_DdOEnyk_qWEv6zOsVtTA", label: "https://www.youtube.com/channel/UCy_DdOEnyk_qWEv6zOsVtTA" },
  { href: "https://www.instagram.com/mayafellerrd/?hl=en", label: "https://www.instagram.com/mayafellerrd/?hl=en" },
];

function LeafPattern() {
  return (
    <svg className="pointer-events-none absolute -right-6 top-6 h-[88%] w-[58%] text-[var(--gt-rose)] opacity-25" viewBox="0 0 360 520" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4">
        <path d="M250 40c40 50 30 120-10 160" />
        <path d="M250 70c28 8 48 28 52 52-30 2-52-12-64-36" />
        <path d="M246 110c22 18 28 46 14 70-24-8-40-28-42-52" />
        <path d="M180 150c50 20 90 70 80 140" />
        <path d="M190 190c30 6 52 28 56 56-32 0-54-16-66-40" />
        <path d="M200 240c24 16 32 42 18 66-26-6-44-26-48-50" />
        <path d="M300 220c36 40 24 110-16 150" />
        <path d="M292 250c26 10 42 32 40 58-28-4-48-22-56-46" />
        <path d="M120 300c46 10 86 48 90 110" />
        <path d="M140 340c28 4 50 24 56 50-30 2-52-12-64-36" />
        <path d="M210 380c30 18 40 48 22 76-28-4-48-26-52-52" />
      </g>
    </svg>
  );
}

/* ================= Hero — portrait left, pink title panel right ================= */

export function MayaHero() {
  const { lang } = useLang();
  return (
    <section className="bg-[var(--gt-rose-soft)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
          <img
            src="/images/gt/maya-portrait.jpg"
            alt={tx(lang, "Maya Feller at the table with a fresh salad", "Maya Feller en la mesa con una ensalada fresca")}
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          />
        </div>

        <div className="relative flex items-center overflow-hidden">
          <LeafPattern />
          <div className="relative w-full px-6 py-14 sm:px-10 lg:px-16 lg:py-20 lg:pr-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="rose">{tx(lang, "Clinical Authority", "Autoridad clínica")}</Eyebrow>
            <h1 className="font-serif-display mt-5 max-w-[560px] text-[42px] font-bold leading-[1.02] text-[var(--gt-rose)] sm:text-[54px] lg:text-[64px]">
              Maya Feller, MS, RD, CDN
            </h1>
            <p className="font-serif-display mt-6 max-w-[480px] text-[20px] leading-snug text-[var(--gt-ink)] sm:text-[22px]">
              {tx(
                lang,
                "Founding Clinical Advisor · Supervising Registered Dietitian Nutritionist of Record",
                "Asesora clínica fundadora · Nutricionista dietista registrada supervisora de registro",
              )}
            </p>
            <p className="mt-5 max-w-[460px] text-[15.5px] leading-relaxed text-[var(--gt-body)]">
              {tx(
                lang,
                "GT Food Group’s Supervising Registered Dietitian Nutritionist of Record, and the clinical voice behind every Master Menu.",
                "Nutricionista dietista registrada supervisora de registro de GT Food Group, y la voz clínica detrás de cada menú maestro.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= About + credentials + kitchen portrait ================= */

const CREDENTIALS = [
  {
    en: "Education",
    es: "Educación",
    enLines: ["MS, Clinical Nutrition", "New York University"],
    esLines: ["MS, Nutrición clínica", "Universidad de Nueva York"],
  },
  {
    en: "Licensure",
    es: "Licencia",
    enLines: ["Registered Dietitian", "Certified Dietitian Nutritionist —", "New York"],
    esLines: ["Dietista registrada", "Nutricionista dietista certificada —", "Nueva York"],
  },
  {
    en: "Practice",
    es: "Práctica",
    enLines: ["Founder & Lead Dietitian", "Maya Feller Nutrition · Brooklyn"],
    esLines: ["Fundadora y dietista principal", "Maya Feller Nutrition · Brooklyn"],
  },
  {
    en: "Serving New York",
    es: "Sirviendo a Nueva York",
    enLines: ["Since 2014"],
    esLines: ["Desde 2014"],
  },
];

export function AboutMaya() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="about-maya-title" className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1320px] items-start gap-8 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.92fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-10">
        <div>
          <Eyebrow tone="rose">{tx(lang, "About Maya", "Sobre Maya")}</Eyebrow>
          <h2
            id="about-maya-title"
            className="font-serif-display mt-4 max-w-[420px] text-[34px] font-bold leading-[1.12] text-[var(--gt-green)] lg:text-[42px]"
          >
            {tx(lang, "Nutrition expertise grounded in culture.", "Experiencia en nutrición con raíces en la cultura.")}
          </h2>
          <p className="mt-6 max-w-[420px] text-[15.5px] leading-relaxed text-[var(--gt-body)]">
            {tx(
              lang,
              "Maya Feller, MS, RD, CDN is the founder and lead dietitian at Maya Feller Nutrition, a Brooklyn-based virtual nutrition clinic. In her practice, her team provides medical nutrition therapy and nutrition coaching for hormone and metabolic health, cardiovascular disease, diabetes, mood disorders, developmental disabilities, disordered eating, and more. Maya believes in providing inclusive nutrition education from an anti-bias, patient-centered, culturally humble approach to help people make informed food choices.",
              "Maya Feller, MS, RD, CDN es la fundadora y dietista principal de Maya Feller Nutrition, una clínica virtual de nutrición en Brooklyn. En su práctica, su equipo ofrece terapia de nutrición médica y acompañamiento nutricional para la salud hormonal y metabólica, enfermedades cardiovasculares, diabetes, trastornos del estado de ánimo, discapacidades del desarrollo, trastornos de la conducta alimentaria y más. Maya cree en una educación nutricional inclusiva, con un enfoque libre de prejuicios, centrado en la persona y culturalmente humilde, para ayudar a las personas a tomar decisiones informadas sobre su alimentación.",
            )}
          </p>
        </div>

        <div className="flex flex-col">
          <img
            src="/images/gt/maya-market.jpg"
            alt={tx(lang, "A market stall of fresh fruit and vegetables", "Un puesto de mercado con frutas y vegetales frescos")}
            className="mb-5 aspect-[2/1] w-full object-cover"
          />
          <dl className="flex-1 bg-[var(--gt-rose-soft)] px-7 py-7 sm:px-8">
            {CREDENTIALS.map(({ en, es, enLines, esLines }, i) => (
              <div
                key={en}
                className={`py-4 ${i < CREDENTIALS.length - 1 ? "border-b-2 border-[var(--gt-gold)]" : ""} ${i === 0 ? "pt-1" : ""}`}
              >
                <dt className="text-[11px] font-bold tracking-[0.16em] text-[var(--gt-rose)] uppercase">{tx(lang, en, es)}</dt>
                <dd className="mt-1.5 text-[15px] leading-snug text-[var(--gt-ink)]">
                  {(lang === "es" ? esLines : enLines).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src="/images/gt/maya-kitchen.jpg"
          alt={tx(lang, "Maya Feller cooking at a kitchen counter", "Maya Feller cocinando en la encimera de una cocina")}
          className="h-full min-h-[460px] w-full object-cover object-[center_18%] lg:min-h-full"
        />
      </div>
    </section>
  );
}

/* ================= National platform + books ================= */

const PRESS_LOGOS = [
  { src: "/images/gt/maya-logo-gma.png", alt: "Good Morning America" },
  { src: "/images/gt/maya-logo-today.png", alt: "TODAY" },
  { src: "/images/gt/maya-logo-food-network.png", alt: "Food Network" },
];

const WORKS = [
  {
    title: "Eating from Our Roots",
    href: "https://mayafellernutrition.com/eatingfromourroots/",
    image: "/images/gt/book-eating-from-our-roots.jpg",
    panel: "bg-[#d5e2e6]",
    enMeta: "80+ Healthy Home-Cooked Favorites from Cultures Around the World — goop Press, 2023.",
    esMeta: "Más de 80 favoritos caseros y saludables de culturas de todo el mundo — goop Press, 2023.",
    enNote: "A natural extension of the philosophy behind GT’s culturally relevant menu approach.",
    esNote: "Una extensión natural de la filosofía detrás del enfoque de menú culturalmente relevante de GT.",
  },
  {
    title: "The Southern Comfort Food Diabetes Cookbook",
    href: "https://mayafellernutrition.com/southern-comfort-food-diabetes-cookbook/",
    image: "/images/gt/book-southern-comfort.jpg",
    panel: "bg-[#f6f3df]",
    enMeta: "2019",
    esMeta: "2019",
    enNote: "An example of how familiar Southern and Soul Food traditions can be thoughtfully adapted around nutritional needs.",
    esNote: "Un ejemplo de cómo las tradiciones de comida sureña y soul food pueden adaptarse con cuidado a las necesidades nutricionales.",
  },
];

const OUTLETS =
  "Good Morning America · Everyday Health · SHAPE · Parents · Aspen Ideas Festival · TODAY · The New York Times · Tamron Hall · Oprah Daily · Food Network · Well+Good · Martha Stewart · Real Simple · Glamour.";

export function WorksAndPlatform() {
  const { lang } = useLang();
  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)_minmax(0,0.72fr)] lg:gap-10">
        <div aria-labelledby="platform-title">
          <p className="text-[12px] font-bold tracking-[0.18em] text-[var(--gt-rose)] uppercase">
            {tx(lang, "National Platform", "Plataforma nacional")}
          </p>
          <h2
            id="platform-title"
            className="font-serif-display mt-4 max-w-[340px] text-[34px] font-bold leading-[1.08] text-[var(--gt-green)] lg:text-[42px]"
          >
            {tx(lang, "A Trusted Voice In Nutrition.", "Una voz de confianza en nutrición.")}
          </h2>
          <div className="mt-8 flex items-start gap-4">
            <p className="max-w-[230px] text-[15px] leading-relaxed text-[var(--gt-ink)]">{OUTLETS}</p>
            <ul className="flex w-[92px] shrink-0 flex-col gap-4">
              {PRESS_LOGOS.map((logo) => (
                <li key={logo.src}>
                  <img src={logo.src} alt={logo.alt} className="h-16 w-full object-contain" />
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 max-w-[340px] text-[14.5px] leading-relaxed text-[var(--gt-ink)] italic">
            {tx(
              lang,
              "Maya shares approachable, food-based nutrition guidance through national media, speaking engagements, writing, and clinical practice.",
              "Maya comparte orientación nutricional accesible y basada en alimentos a través de medios nacionales, conferencias, escritura y práctica clínica.",
            )}
          </p>
        </div>

        <ul className="space-y-5">
          {WORKS.map(({ title, href, image, panel, enMeta, esMeta, enNote, esNote }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid grid-cols-[minmax(0,1fr)_132px] items-center gap-3 px-5 py-6 transition-opacity hover:opacity-90 sm:grid-cols-[minmax(0,1fr)_168px] sm:px-6 ${panel}`}
              >
                <span>
                  <span className="block text-[16px] leading-snug font-bold text-[var(--gt-ink)] sm:text-[17px]">
                    {title}
                    <span className="font-normal"> — {tx(lang, enMeta, esMeta)}</span>
                  </span>
                  <span className="mt-5 block text-[14.5px] leading-relaxed text-[var(--gt-body)]">{tx(lang, enNote, esNote)}</span>
                </span>
                <img src={image} alt="" className="h-[168px] w-full object-contain sm:h-[190px]" />
              </a>
            </li>
          ))}
        </ul>

        <div aria-labelledby="works-title">
          <p className="max-w-[9rem] text-[12px] font-bold tracking-[0.18em] text-[var(--gt-rose)] uppercase">
            {tx(lang, "Authored Works", "Obras publicadas")}
          </p>
          <h2
            id="works-title"
            className="font-serif-display mt-5 text-[32px] font-bold leading-[1.12] text-[var(--gt-green)] lg:text-[38px]"
          >
            {tx(lang, "Nutrition shaped by culture, experience, and evidence", "Nutrición formada por la cultura, la experiencia y la evidencia")}
          </h2>
          <img
            src="/images/gt/maya-brownstone.jpg"
            alt={tx(lang, "Maya Feller seated on brownstone steps", "Maya Feller sentada en los escalones de un brownstone")}
            className="mt-8 aspect-square w-44 rounded-full object-cover object-[center_18%] sm:w-52"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Role at GT ================= */

const ROLES = [
  {
    en: "Master Menu Oversight",
    es: "Supervisión del menú maestro",
    enText: "Reviews and approves Master Menus used within GT’s clinical nutrition programs.",
    esText: "Revisa y aprueba los menús maestros que se usan en los programas de nutrición clínica de GT.",
  },
  {
    en: "Diet Order Supervision",
    es: "Supervisión de la orden dietética",
    enText: "Supervises the clinical work behind member-specific Diet Orders, including work performed by qualified dietitians under her oversight.",
    esText: "Supervisa el trabajo clínico detrás de las órdenes dietéticas específicas de cada miembro, incluido el trabajo de dietistas calificadas bajo su supervisión.",
  },
  {
    en: "Recipe & Menu Changes",
    es: "Cambios de receta y menú",
    enText: "Clinical changes to menus or recipes move through RDN review before entering the applicable production workflow.",
    esText: "Los cambios clínicos de menús o recetas pasan por la revisión de la RDN antes de entrar al flujo de producción correspondiente.",
  },
  {
    en: "Clinical Parameters",
    es: "Parámetros clínicos",
    enText: "Helps establish nutrient parameters for condition-specific menu categories.",
    esText: "Ayuda a establecer los parámetros de nutrientes para las categorías de menú según la condición.",
  },
  {
    en: "Food Prescription Boxes",
    es: "Cajas de prescripción de alimentos",
    enText: "Oversees the clinical framework used for condition-specific box composition.",
    esText: "Supervisa el marco clínico que se usa para la composición de las cajas según la condición.",
  },
  {
    en: "Clinical Quality Review",
    es: "Revisión de calidad clínica",
    enText: "Supports recurring clinical QA and documentation review.",
    esText: "Apoya la revisión clínica recurrente de calidad y documentación.",
  },
];

export function MayaRole() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="role-title" className="bg-[var(--gt-green)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <p className="text-[12px] font-bold tracking-[0.2em] text-[var(--gt-gold)] uppercase">
          {tx(lang, "Maya’s Role at GT", "El papel de Maya en GT")}
        </p>
        <h2 id="role-title" className="font-serif-display mt-4 text-[32px] font-bold leading-[1.12] text-white lg:text-[46px]">
          {tx(lang, "Clinical oversight that reaches the plate.", "Supervisión clínica que llega al plato.")}
        </h2>
        <p className="mx-auto mt-5 max-w-[860px] text-[15px] leading-relaxed text-white/90">
          {tx(
            lang,
            "As GT Food Group’s Founding Clinical Advisor and Supervising Registered Dietitian Nutritionist of Record, Maya oversees the clinical standards behind our menu and Diet Order workflows. Her role is to help ensure that clinical requirements and cultural relevance are considered together — not as competing priorities.",
            "Como asesora clínica fundadora y nutricionista dietista registrada supervisora de registro de GT Food Group, Maya supervisa los estándares clínicos detrás de nuestro menú y de los flujos de órdenes dietéticas. Su papel es ayudar a que los requisitos clínicos y la relevancia cultural se consideren juntos, no como prioridades en competencia.",
          )}
        </p>
        <ul className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {ROLES.map(({ en, es, enText, esText }) => (
            <li key={en} className="rounded-md border-t-2 border-[var(--gt-gold)] bg-white/10 px-6 py-7 text-center">
              <h3 className="text-[16px] font-bold text-white">{tx(lang, en, es)} —</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">{tx(lang, enText, esText)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Contact and links ================= */

export function MayaLinks() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="maya-links-title" className="bg-[var(--gt-green-tint)]">
      <div className="mx-auto max-w-[1320px] px-6 py-14 lg:py-16">
        <div className="bg-[var(--gt-rose-soft)]/90 px-6 py-8 sm:px-10">
          <h2 id="maya-links-title" className="font-serif-display text-[28px] font-bold text-[var(--gt-rose)] lg:text-[32px]">
            {tx(lang, "Contact and Links", "Contacto y enlaces")}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-[14px] leading-snug text-[var(--gt-green)] hover:text-[var(--gt-rose)]"
                >
                  <span aria-hidden="true" className="font-bold text-[var(--gt-rose)]">+</span>
                  <span className="break-all underline decoration-[var(--gt-rose)]/40 underline-offset-2">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================= Workflow + independence ================= */

const STEPS = [
  {
    en: "SCN Screening & Eligibility",
    es: "Evaluación y elegibilidad de la SCN",
    enText: "The member’s Social Care Network screens the member and determines eligibility.",
    esText: "La Red de Cuidado Social del miembro lo evalúa y determina la elegibilidad.",
  },
  {
    en: "Service Authorization",
    es: "Autorización del servicio",
    enText: "The authorized service is referred through the appropriate network workflow.",
    esText: "El servicio autorizado se refiere a través del flujo correspondiente de la red.",
  },
  {
    en: "Clinical Nutrition Workflow",
    es: "Flujo de nutrición clínica",
    enText: "Where required, a member-specific Diet Order is issued under Registered Dietitian Nutritionist supervision.",
    esText: "Cuando se requiere, se emite una orden dietética específica del miembro bajo la supervisión de una nutricionista dietista registrada.",
  },
  {
    en: "GT Food Service",
    es: "Servicio de alimentos de GT",
    enText: "GT prepares and delivers the authorized meal or food-box service.",
    esText: "GT prepara y entrega la comida o la caja de alimentos autorizada.",
  },
  {
    en: "Ongoing Review",
    es: "Revisión continua",
    enText: "Service documentation supports renewal, modification, or completion of the authorized service.",
    esText: "La documentación del servicio apoya la renovación, la modificación o la conclusión del servicio autorizado.",
  },
];

export function ClinicalWorkflow() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="workflow-title" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 id="workflow-title" className="flex items-center gap-3 text-[11.5px] font-bold tracking-[0.22em] text-[var(--gt-rose)] uppercase">
          <span className="h-px w-8 bg-[var(--gt-rose)]" aria-hidden="true" />
          {tx(lang, "How the Workflow Fits Together", "Cómo encaja el flujo de trabajo")}
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.en}>
              <div className="flex items-center gap-4 lg:block">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gt-gold)] text-[15px] font-bold text-[var(--gt-green-deep)]">
                  {i + 1}
                </span>
                <p className="text-[14px] leading-snug font-bold text-[var(--gt-ink)] lg:mt-4">{tx(lang, step.en, step.es)}</p>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--gt-body)]">{tx(lang, step.enText, step.esText)}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <Eyebrow tone="rose">{tx(lang, "Clinical independence", "Independencia clínica")}</Eyebrow>
          <p className="mt-4 max-w-[820px] text-[15px] leading-relaxed text-[var(--gt-rose)]">
            {tx(
              lang,
              "Maya Feller is an independent clinical consultant. She does not screen, enroll, or refer members, and program eligibility is determined by the member’s Social Care Network. Her clinical oversight shapes the standards behind what reaches the member’s table.",
              "Maya Feller es una consultora clínica independiente. No evalúa, no inscribe ni refiere a los miembros, y la elegibilidad del programa la determina la Red de Cuidado Social del miembro. Su supervisión clínica define los estándares de lo que llega a la mesa del miembro.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= Closing quote ================= */

export function MayaClose() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="maya-close-title" className="relative overflow-hidden">
      <img
        src="/images/gt/maya-olives.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#4d7a55]/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1080px] px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-[12px] font-bold tracking-[0.18em] text-white/90 uppercase">
          {tx(lang, "Why Maya. Why GT.", "Por qué Maya. Por qué GT.")}
        </p>
        <h2 id="maya-close-title" className="font-serif-display mt-5 max-w-[820px] text-[32px] font-bold leading-[1.15] text-white lg:text-[44px]">
          {tx(
            lang,
            "Culture and clinical nutrition should never be competing priorities.",
            "La cultura y la nutrición clínica nunca deberían ser prioridades en competencia.",
          )}
        </h2>
        <p className="mt-6 max-w-[860px] text-[16px] leading-relaxed text-white/95">
          {tx(
            lang,
            "Maya’s work has long centered on the idea that nutrition guidance becomes more meaningful when it respects the foods, traditions, and lived experiences of the people receiving it.",
            "El trabajo de Maya se ha centrado desde hace tiempo en la idea de que la orientación nutricional cobra más sentido cuando respeta los alimentos, las tradiciones y las experiencias de vida de quienes la reciben.",
          )}
        </p>
        <p className="mt-5 max-w-[860px] text-[16px] leading-relaxed text-white/95">
          {tx(
            lang,
            "GT Food Group brings that philosophy into a food-service environment — pairing clinical oversight with culturally relevant meals designed around the communities we serve.",
            "GT Food Group lleva esa filosofía a un entorno de servicio de alimentos: une la supervisión clínica con comidas culturalmente relevantes, diseñadas para las comunidades a las que servimos.",
          )}
        </p>
        <p className="font-serif-display mt-8 max-w-[760px] text-[26px] leading-snug font-bold text-white lg:text-[32px]">
          {tx(
            lang,
            "That isn’t an extra feature of our program. It’s central to how we think about food.",
            "Eso no es un extra de nuestro programa. Es el centro de cómo pensamos la comida.",
          )}
        </p>
        <a
          href="/menus"
          className="mt-8 inline-flex items-center bg-[var(--gt-gold)] px-6 py-3 text-[14px] font-bold text-[var(--gt-green-deep)] transition-colors hover:bg-[var(--gt-gold-deep)]"
        >
          {tx(lang, "Explore Our Menus", "Explorar nuestros menús")}
        </a>
      </div>
    </section>
  );
}
