import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./gt-programs";

/* ================= Hero — green copy panel over photography ================= */

export function ServeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--gt-green-deep)]">
      <img
        src="/images/gt/serve-hero.png"
        alt="A GT delivery team member handing a meal tote to a resident at a Brooklyn brownstone doorway"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
      />
      <div className="relative grid lg:grid-cols-[minmax(0,58%)_1fr] min-h-[420px] lg:min-h-[480px]">
        <div className="flex items-center bg-[var(--gt-green)]/90">
          <div className="w-full px-6 py-16 sm:px-10 lg:py-20 lg:pr-14 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
            <Eyebrow tone="gold">Who We Serve</Eyebrow>
            <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.1] text-[38px] sm:text-[48px] lg:text-[56px] max-w-[560px]">
              Built for healthcare. Made for people.
            </h1>
            <p className="mt-6 text-white/85 text-[15.5px] leading-relaxed max-w-[520px]">
              GT is designed to work across the healthcare and community
              ecosystem without confusing who owns eligibility, referral, and
              service delivery responsibilities.
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
    name: "Health Plans & Social Care Networks",
    headline: "A food partner built for accountable service delivery.",
    detail: "Documented workflow · Clinical oversight · Culturally relevant menu architecture · Reporting-ready records",
  },
  {
    number: "02",
    name: "Healthcare Providers & Care Teams",
    headline: "A clearer path from referral to food on the table.",
    detail: "Referrals run through the member’s Social Care Network. GT handles the authorized food-service portion.",
  },
  {
    number: "03",
    name: "Community Organizations",
    headline: "Food programs built around communities you already know.",
    detail: "Culturally relevant meal and food-box programs where the service model and contract permit.",
  },
  {
    number: "04",
    name: "Members & Families",
    headline: "Real food. Familiar flavors. Made with care.",
    detail: "GT does not determine eligibility or enroll members directly.",
  },
];

export function AudienceSections() {
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
              {a.name}
            </h2>
            <p className="font-serif-display mt-6 text-[var(--gt-ink)] text-[17px] lg:text-[18px] leading-snug">
              {a.headline}
            </p>
            <p className="mt-4 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{a.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ================= The handoff ================= */

const FLOW_STEPS = [
  "SCN screening",
  "Eligibility assessment",
  "Service authorization & referral",
  "GT food-service delivery",
  "Closed-loop documentation",
];

export function PartnershipFlow() {
  return (
    <section id="how-it-works" aria-labelledby="handoff-title" className="bg-[var(--gt-green)] py-14 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="gold">The Handoff</Eyebrow>
        <h2
          id="handoff-title"
          className="font-serif-display mt-4 text-white font-bold leading-[1.15] text-[32px] lg:text-[42px]"
        >
          Clear roles. Cleaner service delivery.
        </h2>
        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">
          {FLOW_STEPS.map((step, i) => (
            <li key={step} className="flex items-center gap-4 lg:block">
              <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--gt-gold)] flex items-center justify-center font-bold text-[15px] text-[var(--gt-green-deep)]">
                {i + 1}
              </span>
              <p className="lg:mt-4 text-[14px] font-bold text-white leading-snug max-w-[200px]">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-white/70 text-[13px] leading-relaxed max-w-[760px]">
          The Social Care Network owns screening and eligibility. GT performs
          the authorized food service and returns documentation through the
          agreed channel.
        </p>
      </div>
    </section>
  );
}

/* ================= Closing band ================= */

export function ServeClosing() {
  return (
    <section id="partner" className="bg-[var(--gt-rose-soft)]">
      <div className="max-w-[1320px] mx-auto px-6 py-14 lg:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <h2 className="font-serif-display text-[var(--gt-green)] font-bold leading-[1.18] text-[28px] lg:text-[36px] max-w-[680px]">
          Different audiences. One standard of care and accountability.
        </h2>
        <a
          href="/contact"
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
        >
          Start a Conversation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
