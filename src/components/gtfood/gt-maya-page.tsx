import { Eyebrow } from "./gt-programs";

/* ================= Hero — portrait left, pink title panel right ================= */

export function MayaHero() {
  return (
    <section className="bg-[var(--gt-rose-soft)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]">
          <img
            src="/images/gt/Woman Seated on Brownstone Stoop.png"
            alt="Maya Feller seated on brownstone steps"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          />
        </div>

        <div className="flex items-center">
          <div className="w-full px-6 py-14 sm:px-10 lg:px-16 lg:py-20 lg:pr-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="rose">Clinical Authority</Eyebrow>
            <h1 className="font-serif-display mt-5 text-[var(--gt-green)] font-bold leading-[1.08] text-[40px] sm:text-[50px] lg:text-[58px]">
              Maya Feller, MS, RD, CDN
            </h1>
            <p className="font-serif-display mt-6 text-[var(--gt-rose)] text-[20px] sm:text-[22px] lg:text-[24px] leading-snug">
              Founding Clinical Advisor · Supervising RDN of Record
            </p>
            <span className="mt-6 block h-[2px] w-full max-w-[460px] bg-[var(--gt-gold)]" aria-hidden="true" />
            <p className="mt-6 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[460px]">
              Overseeing the Master Menu and supervising the clinical work
              behind every Diet Order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= About + credentials card ================= */

const CREDENTIALS = [
  { term: "Education", detail: "MS, Clinical Nutrition · New York University" },
  { term: "Licensure", detail: "RD · CDN — New York" },
  { term: "Practice", detail: "Maya Feller Nutrition · Brooklyn" },
  { term: "Serving New York", detail: "Since 2014" },
  { term: "Languages", detail: "English · Spanish" },
];

export function AboutMaya() {
  return (
    <section aria-labelledby="about-maya-title" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <Eyebrow tone="rose">About Maya</Eyebrow>
          <h2
            id="about-maya-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.12] text-[34px] lg:text-[44px] max-w-[560px]"
          >
            Nutrition expertise grounded in culture.
          </h2>
          <p className="mt-6 text-[var(--gt-body)] text-[16px] leading-relaxed max-w-[560px]">
            Founder and lead dietitian at Maya Feller Nutrition, a
            Brooklyn-based virtual nutrition clinic. Maya&rsquo;s approach is
            inclusive, anti-bias, patient-centered, and culturally humble.
          </p>
          <img
            src="/images/gt/Joyful Cooking in a Modern Kitchen.png"
            alt="Maya Feller cooking at a kitchen counter"
            className="mt-10 w-full max-w-[560px] aspect-[4/3] object-cover object-[center_25%]"
            loading="lazy"
          />
        </div>

        <dl className="bg-[var(--gt-rose-soft)] px-7 py-7 sm:px-8">
          {CREDENTIALS.map(({ term, detail }, i) => (
            <div
              key={term}
              className={`py-4 ${i < CREDENTIALS.length - 1 ? "border-b-2 border-[var(--gt-gold)]" : ""} ${i === 0 ? "pt-0" : ""}`}
            >
              <dt className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--gt-rose)]">{term}</dt>
              <dd className="mt-1.5 text-[15px] text-[var(--gt-ink)] leading-snug">{detail}</dd>
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
    meta: "80+ Healthy Home-Cooked Favorites from Cultures Around the World · goop Press, 2023",
  },
  { title: "The Southern Comfort Food Diabetes Cookbook", meta: "2019" },
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
  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div aria-labelledby="works-title">
          <Eyebrow tone="rose">Authored Works</Eyebrow>
          <h2
            id="works-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px] max-w-[540px]"
          >
            Nutrition shaped by culture, experience, and evidence.
          </h2>
          <ul className="mt-8 space-y-7">
            {WORKS.map(({ title, meta }) => (
              <li key={title}>
                <h3 className="font-serif-display text-[var(--gt-green)] font-bold text-[22px] lg:text-[26px] leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-[13.5px] text-[var(--gt-body)] leading-relaxed">{meta}</p>
              </li>
            ))}
          </ul>
        </div>

        <div aria-labelledby="platform-title">
          <Eyebrow tone="rose">National Platform</Eyebrow>
          <h2
            id="platform-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px]"
          >
            A trusted voice in nutrition.
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
  { title: "Master Menu Oversight", text: "Oversees Master Menu standards and clinical review." },
  { title: "Diet Order Supervision", text: "Supervises clinical work behind member-specific Diet Orders." },
  { title: "Recipe & Menu Changes", text: "Clinical changes move through RDN review." },
  { title: "Clinical Parameters", text: "Helps establish nutrient parameters." },
  { title: "Food Prescription Boxes", text: "Oversees the clinical framework for box composition." },
  { title: "Clinical Quality Review", text: "Supports recurring clinical QA and documentation review." },
];

export function MayaRole() {
  return (
    <section aria-labelledby="role-title" className="bg-[var(--gt-green)] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="gold">Maya&rsquo;s Role at GT</Eyebrow>
        <h2
          id="role-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[32px] lg:text-[44px]"
        >
          Clinical oversight that reaches the plate.
        </h2>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {ROLES.map(({ title, text }) => (
            <li key={title} className="border-t-[3px] border-[var(--gt-gold)] bg-white/[0.07] px-6 py-6">
              <h3 className="font-serif-display text-white font-bold text-[20px] leading-snug">{title}</h3>
              <p className="mt-2.5 text-white/75 text-[13.5px] leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Workflow + independence ================= */

const STEPS = [
  "SCN Screening & Eligibility",
  "Service Authorization",
  "Clinical Nutrition Workflow",
  "GT Food Service",
  "Ongoing Review",
];

export function ClinicalWorkflow() {
  return (
    <section aria-labelledby="workflow-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <h2
          id="workflow-title"
          className="flex items-center gap-3 text-[11.5px] font-bold tracking-[0.22em] uppercase text-[var(--gt-rose)]"
        >
          <span className="h-px w-8 bg-[var(--gt-rose)]" aria-hidden="true" />
          How the Workflow Fits Together
        </h2>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-center gap-4 lg:block">
              <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--gt-gold)] flex items-center justify-center font-bold text-[15px] text-[var(--gt-green-deep)]">
                {i + 1}
              </span>
              <p className="lg:mt-4 text-[14px] font-bold text-[var(--gt-ink)] leading-snug">{step}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 rounded-md bg-[var(--gt-rose-soft)] px-6 py-4 text-[14px] font-semibold text-[var(--gt-rose)] leading-relaxed">
          Maya does not screen, enroll, or refer members. Program eligibility is
          determined by the member&rsquo;s Social Care Network.
        </p>
      </div>
    </section>
  );
}
