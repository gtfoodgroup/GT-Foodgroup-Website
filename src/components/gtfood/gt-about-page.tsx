import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./gt-programs";

/* ================= Hero — green copy panel, brownstones right ================= */

export function AboutHero() {
  return (
    <section className="bg-[var(--gt-green)]">
      <div className="grid lg:grid-cols-[minmax(0,58%)_1fr]">
        <div className="flex items-center">
          <div className="w-full px-6 py-16 sm:px-10 lg:py-24 lg:pr-14 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="gold">About GT Food Group</Eyebrow>
            <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.1] text-[36px] sm:text-[46px] lg:text-[54px] max-w-[640px]">
              A New York food company built around culture, care, and accountability.
            </h1>
          </div>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]">
          <img
            src="/images/gt/about-brownstones.jpg"
            alt="A row of Brooklyn brownstones with black iron stoop railings"
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
    name: "Clinical Rigor",
    text: "Nutrition standards should be built into the food, not added as an afterthought.",
  },
  {
    name: "Cultural Relevance",
    text: "The food should look and taste familiar to the people receiving it.",
  },
  {
    name: "Operational Accountability",
    text: "The service must be supported by documentation, clear responsibilities, and reliable follow-through.",
  },
];

export function Position() {
  return (
    <section id="position" aria-labelledby="position-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">Our Position</Eyebrow>
        <h2
          id="position-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px] max-w-[760px]"
        >
          Food company first. Healthcare-grade discipline throughout.
        </h2>
        <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[760px]">
          GT currently operates in healthcare food service, including New
          York&rsquo;s HRSN environment. We are a food-service partner—not a
          Social Care Network, health plan, or eligibility authority.
        </p>

        <ul className="mt-12 grid md:grid-cols-3 gap-4 lg:gap-5">
          {PRINCIPLES.map(({ name, text }) => (
            <li key={name} className="rounded-md border border-[var(--gt-border)] bg-white px-6 py-6">
              <span className="block h-[3px] w-10 bg-[var(--gt-gold)]" aria-hidden="true" />
              <h3 className="font-serif-display mt-4 text-[var(--gt-ink)] font-bold text-[20px] leading-snug">
                {name}
              </h3>
              <p className="mt-2.5 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Leadership ================= */

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="bg-[var(--gt-green)] py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="gold">Leadership</Eyebrow>
        <h2
          id="leadership-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[30px] lg:text-[40px]"
        >
          People accountable for the work.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12 lg:gap-20">
          <article>
            <h3 className="font-serif-display text-white font-bold text-[24px] lg:text-[28px]">Salvatore Gigante</h3>
            <p className="mt-3 text-[13px] font-bold text-[var(--gt-gold)]">Chief Executive Officer</p>
            <p className="mt-3 text-white/80 text-[14px]">Operations · Compliance · Strategy</p>
          </article>

          <article>
            <h3 className="font-serif-display text-white font-bold text-[24px] lg:text-[28px]">
              Maya Feller, MS, RD, CDN
            </h3>
            <p className="mt-3 text-[13px] font-bold text-[var(--gt-gold)] leading-relaxed max-w-[460px]">
              Founding Clinical Advisor · Supervising Registered Dietitian Nutritionist of Record
            </p>
            <a
              href="/clinical-authority"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              Clinical Authority <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================= Close ================= */

export function MadeInNYClosing() {
  return (
    <section aria-labelledby="close-title" className="bg-[var(--gt-rose-soft)]">
      <div className="max-w-[1320px] mx-auto px-6 py-20 lg:py-28">
        <h2
          id="close-title"
          className="font-serif-display text-[var(--gt-green)] font-bold leading-[1.18] text-[30px] lg:text-[40px] max-w-[720px]"
        >
          Made in New York. For the families that make New York.
        </h2>
      </div>
    </section>
  );
}
