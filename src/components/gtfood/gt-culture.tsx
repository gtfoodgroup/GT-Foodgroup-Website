import { ArrowRight, Award, BookOpen, Tv } from "lucide-react";
import { Eyebrow } from "./gt-programs";

export default function GtCulture() {
  return (
    <section className="bg-[var(--gt-green-deep)]">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="max-w-[1320px] ml-auto w-full px-6 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))] lg:pr-16 py-20 lg:py-28">
            <Eyebrow tone="gold">Culture Matters</Eyebrow>
            <h2 className="font-serif-display mt-5 text-white font-bold leading-[1.15] text-[38px] lg:text-[50px] max-w-[420px]">
              Familiar food. Thoughtfully prepared.
            </h2>
            <p className="mt-6 text-white/85 text-[16px] leading-relaxed max-w-[460px]">
              Puerto Rican, Dominican, Caribbean, Mexican, Peruvian, Southern —
              and the many other flavors that make New York feel like home.
            </p>
            <a
              href="/menus"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              Explore Our Menus <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[380px] lg:min-h-[560px]">
          { }
          <img
            src="/images/gt/culture-bowl.png"
            alt="A bowl of seasoned yellow rice with grilled chicken, black beans and cilantro"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

const CREDENTIALS = [
  { icon: BookOpen, label: "Author", detail: "Eating From Our Roots" },
  { icon: Tv, label: "National Nutrition Expert", detail: "Good Morning America" },
  { icon: Award, label: "Clinical Leadership", detail: "Supervising RDN of Record" },
];

export function GtClinicalAuthority() {
  return (
    <section className="relative bg-[var(--gt-rose-soft)] overflow-hidden">
      {/* Floral line-art decoration */}
      <svg
        viewBox="0 0 220 220"
        className="hidden lg:block absolute right-4 top-16 w-[240px] h-[240px] text-[var(--gt-rose)]/45 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="150" cy="70" r="14" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="150"
            cy="34"
            rx="11"
            ry="24"
            transform={`rotate(${deg} 150 70)`}
          />
        ))}
        <path d="M150 84 C 148 130, 140 170, 110 205" />
        <path d="M143 140 C 128 134, 118 124, 114 110 C 130 114, 140 124, 143 140 Z" />
        <path d="M128 175 C 112 172, 100 164, 94 152 C 110 154, 122 162, 128 175 Z" />
      </svg>

      <div className="grid lg:grid-cols-2 relative z-10">
        {/* Portrait — full-bleed left half */}
        <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[680px]">
          <img
            src="/images/gt/maya-brownstone.jpg"
            alt="Maya Feller seated on brownstone steps"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            loading="lazy"
          />
        </div>

        {/* Bio */}
        <div className="flex items-center">
        <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20 lg:pr-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
          <Eyebrow tone="rose">Clinical Authority</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.08] text-[38px] lg:text-[52px] max-w-[460px]">
            Maya Feller, MS, RD, CDN
          </h2>
          <p className="font-serif-display mt-4 text-[var(--gt-rose)] text-[22px] lg:text-[26px] leading-snug">
            Where clinical nutrition meets cultural relevance.
          </p>
          <p className="mt-6 text-[var(--gt-body)] text-[15px] leading-relaxed max-w-[560px]">
            Maya Feller is the founder and lead dietitian at Maya Feller
            Nutrition, a Brooklyn-based nutrition practice, a nationally
            recognized nutrition expert, and author of <em>Eating from Our Roots</em>.
          </p>
          <p className="mt-4 text-[var(--gt-body)] text-[15px] leading-relaxed max-w-[560px]">
            As GT Food Group&rsquo;s Founding Clinical Advisor &amp; Supervising
            RDN of Record, Maya brings a patient-centered, culturally humble
            approach to the clinical nutrition standards behind our programs.
          </p>
          <p className="mt-4 text-[13.5px] text-[var(--gt-body)]/85 leading-relaxed max-w-[560px]">
            Maya does not screen, enroll, or refer members. The Social Care
            Network determines eligibility.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {CREDENTIALS.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[var(--gt-rose)]" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--gt-ink)]">
                    {label}
                  </p>
                  <p className="text-[13px] text-[var(--gt-body)] mt-1 leading-snug">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/clinical-authority"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[var(--gt-rose)] hover:bg-[var(--gt-rose-deep)] text-white text-[14px] font-bold px-6 py-3.5 transition-colors"
          >
            Meet Maya <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
