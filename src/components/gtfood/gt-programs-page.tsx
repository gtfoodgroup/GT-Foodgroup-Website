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
  return (
    <section className="bg-[var(--gt-green)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex items-center overflow-hidden">
          <div className="absolute -left-10 -bottom-16 text-white/[0.08] pointer-events-none" aria-hidden="true">
            <Leaf className="w-80 h-80 rotate-[16deg]" strokeWidth={0.7} />
          </div>
          <div className="relative z-10 w-full px-6 py-16 sm:px-10 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))] lg:pr-14">
            <p className="text-[12px] font-bold tracking-[0.22em] uppercase text-[var(--gt-gold)]">
              Our Programs
            </p>
            <h1 className="font-serif-display mt-4 text-white font-bold leading-[1.08] text-[38px] sm:text-[48px] lg:text-[56px] max-w-[520px]">
              Nutrition programs built around the people you serve.
            </h1>
            <p className="mt-6 text-white/85 text-[15.5px] leading-relaxed max-w-[460px]">
              GT Food Group supports healthcare and community partners with
              culturally relevant nutrition services built around clear clinical
              and operational workflows.
            </p>
            <a
              href="#partner"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">
          <img
            src="/images/gt/programs-hero-skyline.jpg"
            alt="A bowl of grains and grilled vegetables in front of the New York City skyline at sunset"
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

export function ProgramDetailSections() {
  return (
    <div id="programs-detail">
      {DETAILS.map((d, i) => {
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
                  alt={d.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className={`flex items-center ${flip ? "lg:order-1" : ""}`}>
                <div className="w-full px-6 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-16">
                  <div className="max-w-[580px]">
                    <Eyebrow tone="rose">{d.eyebrow}</Eyebrow>
                    <h2
                      id={`${d.id}-title`}
                      className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.14] text-[30px] lg:text-[38px] max-w-[500px]"
                    >
                      {d.headline}
                    </h2>
                    <p className="mt-4 text-[var(--gt-body)] text-[15.5px] leading-relaxed">
                      {d.body}
                    </p>

                    <ul className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:divide-x sm:divide-[var(--gt-border)]">
                      {d.strip.map(({ icon: Icon, label }) => (
                        <li key={label} className="flex flex-col items-center text-center px-3">
                          <Icon
                            className="w-6 h-6 text-[var(--gt-green)]"
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                          <span className="mt-2 text-[12px] font-semibold text-[var(--gt-ink)] leading-snug">
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {d.cta && (
                      <a
                        href={d.cta.href}
                        className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[13.5px] font-bold px-6 py-3 transition-colors"
                      >
                        {d.cta.label} <ArrowRight className="w-4 h-4" />
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

export function HrsnWorkflow() {
  return (
    <section
      aria-labelledby="hrsn-title"
      className="relative bg-[var(--gt-green-deep)] overflow-hidden"
    >
      <div className="absolute -right-6 -top-4 opacity-[0.12] pointer-events-none" aria-hidden="true">
        <GtLeafLogo light className="w-[260px] h-[175px]" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 py-16 lg:py-20">
        <Eyebrow tone="gold">How The Program Works</Eyebrow>
        <h2
          id="hrsn-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[32px] lg:text-[44px] max-w-[820px]"
        >
          Clear responsibilities from eligibility to delivery.
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
                <h3 className="text-white font-bold text-[15px] leading-snug">{s.title}</h3>
                <p className="mt-2 text-white/75 text-[13px] leading-relaxed">
                  <span className="sr-only">Responsible: {OWNER_LABEL[s.owner]}. </span>
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 flex items-start sm:items-center justify-center gap-2.5 rounded-md bg-[var(--gt-rose-soft)] px-5 py-3 text-center text-[var(--gt-rose)] text-[13.5px] font-semibold leading-relaxed">
          <Info className="w-4.5 h-4.5 shrink-0 mt-0.5 sm:mt-0" strokeWidth={2.2} aria-hidden="true" />
          <span>
            GT does not screen, enroll, or determine HRSN eligibility.
            Eligibility remains with the member&rsquo;s Social Care Network.
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

export function GtPartnerSupport() {
  const published = CAPABILITIES.filter((c) => c.verified);
  if (published.length === 0) return null;

  return (
    <section aria-label="More ways we support partners" className="bg-[var(--gt-cream)] py-14 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">More Ways We Support Partners</Eyebrow>
        <div className="mt-7 grid md:grid-cols-3 gap-5">
          {published.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-5 rounded-md bg-[var(--gt-rose-soft)] p-6">
              <Icon className="w-8 h-8 shrink-0 text-[var(--gt-rose)]" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3 className="font-serif-display text-[var(--gt-ink)] font-bold text-[18px] leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{text}</p>
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
          Start with the population you need to serve.
        </h2>
        <p className="mt-4 mx-auto text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[560px]">
          Tell us the geography, service model, and member experience you are
          trying to build. We&rsquo;ll show you how GT can fit.
        </p>
        <a
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
        >
          Begin a Partnership Conversation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
