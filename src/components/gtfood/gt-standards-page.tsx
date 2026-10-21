import { ArrowRight, LockKeyhole } from "lucide-react";
import { Eyebrow } from "./gt-programs";

/* ================= Hero ================= */

export function StandardsHero() {
  return (
    <section className="bg-[var(--gt-green)]">
      <div className="max-w-[1320px] mx-auto px-6 py-16 lg:py-24">
        <Eyebrow tone="gold">Our Standards</Eyebrow>
        <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.12] text-[36px] sm:text-[46px] lg:text-[54px] max-w-[760px]">
          Food people want to eat. Standards healthcare organizations can trust.
        </h1>
        <p className="mt-8 text-white/85 text-[15.5px] leading-relaxed max-w-[640px]">
          GT&rsquo;s operating model is designed to keep clinical oversight,
          service documentation, and member dignity visible from menu design
          through delivery.
        </p>
      </div>
    </section>
  );
}

/* ================= Launch-safe proof points ================= */

type ProofPoint = {
  title: string;
  text: string;
  /** Hide a proof point until its supporting claim is confirmed current. */
  current: boolean;
};

const PROOF_POINTS: ProofPoint[] = [
  {
    title: "Signed Diet Order Workflow",
    text: "A signed Diet Order is maintained before meal service where required.",
    current: true,
  },
  {
    title: "Four-Eyes Verification",
    text: "A second qualified review supports manifest accuracy before release.",
    current: true,
  },
  {
    title: "10-Year Record Retention",
    text: "Documentation retained for long-term accountability.",
    current: true,
  },
  {
    title: "HIPAA-Compliant Operations & BAAs",
    text: "Operations and business associate agreements handled as HIPAA-compliant.",
    current: false,
  },
  {
    title: "FIMC-Aligned Standards",
    text: "Menu standards align to applicable Food Is Medicine Coalition nutrition standards.",
    current: true,
  },
];

function GoldBar() {
  return <span className="block h-[3px] w-10 bg-[var(--gt-gold)]" aria-hidden="true" />;
}

export function ApprovedProofPoints() {
  const published = PROOF_POINTS.filter((point) => point.current);
  if (published.length === 0) return null;

  return (
    <section aria-labelledby="proof-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">Launch-Safe Proof Points</Eyebrow>
        <h2
          id="proof-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[32px] lg:text-[42px] max-w-[620px]"
        >
          Built to be documented, not merely described.
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {published.map((point) => (
            <li key={point.title} className="rounded-md border border-[var(--gt-border)] bg-white px-6 py-6">
              <GoldBar />
              <h3 className="font-serif-display mt-4 text-[var(--gt-ink)] font-bold text-[19px] leading-snug">
                {point.title}
              </h3>
              <p className="mt-3 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{point.text}</p>
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
    eyebrow: "Clinical Governance",
    title: "Clinical language stays clinical.",
    text: "RDN-led Master Menu and Diet Order workflows keep clinical nutrition decisions with licensed dietitians.",
  },
  {
    eyebrow: "Documentation",
    title: "Proof lives in the record.",
    text: "Service documentation, verification steps, and retention practices support partner oversight.",
  },
  {
    eyebrow: "Privacy",
    title: "Public site, minimal data.",
    text: "The public website collects business contact information only and is not a member intake portal.",
  },
  {
    eyebrow: "Food Safety & Delivery",
    title: "Publish only what is verified.",
    text: "Specific food-safety, cold-chain, specialty capability, and delivery claims stay gated until confirmed.",
  },
];

export function StandardsPillars() {
  return (
    <section aria-label="Operating standards" className="bg-[var(--gt-green)] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-x-16 gap-y-14 lg:gap-y-24">
        {PILLARS.map(({ eyebrow, title, text }) => (
          <div key={eyebrow}>
            <Eyebrow tone="gold">{eyebrow}</Eyebrow>
            <h2 className="font-serif-display mt-4 text-white font-bold leading-[1.18] text-[26px] lg:text-[32px]">
              {title}
            </h2>
            <p className="mt-6 lg:mt-10 text-white/80 text-[14px] leading-relaxed max-w-[460px]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= Partner diligence ================= */

const DOWNLOADS = [
  { title: "Capabilities Brochure", text: "Program overview for decision committees." },
  { title: "Compliance Quick Reference", text: "Core operating controls for credentialing review." },
  { title: "Sample Menu Card", text: "Representative cuisine and menu design under appropriate review." },
];

export function DiligenceDownloads() {
  return (
    <section aria-labelledby="downloads-title" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow tone="rose">Partner Diligence</Eyebrow>
        <h2
          id="downloads-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[30px] lg:text-[40px]"
        >
          What a healthcare partner should be able to ask for.
        </h2>
        <ul className="mt-10 grid md:grid-cols-3 gap-4 lg:gap-5">
          {DOWNLOADS.map((item) => (
            <li key={item.title} className="flex flex-col rounded-md border border-[var(--gt-border)] bg-white px-6 py-6">
              <GoldBar />
              <h3 className="font-serif-display mt-4 text-[var(--gt-ink)] font-bold text-[20px] leading-snug">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[var(--gt-body)] text-[13.5px] leading-relaxed">{item.text}</p>
              <a
                href="/contact"
                className="mt-auto pt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
              >
                Request a copy <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-start gap-3 text-[var(--gt-body)] text-[13.5px] leading-relaxed max-w-[760px]">
          <LockKeyhole className="w-4.5 h-4.5 shrink-0 text-[var(--gt-green)]" aria-hidden="true" />
          <span>Confidential materials are shared under a controlled process, not as open downloads.</span>
        </p>
      </div>
    </section>
  );
}
