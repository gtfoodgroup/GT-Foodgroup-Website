"use client";

import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Eye,
  LockKeyhole,
  Archive,
  FileCheck2,
  BadgeCheck,
} from "lucide-react";
import { Eyebrow } from "./gt-programs";

const CUISINES = [
  { image: "/images/gt/cuisine-dominicana.png", label: "Dominicana" },
  { image: "/images/gt/cuisine-boricua.png", label: "Boricua" },
  { image: "/images/gt/cuisine-caribbean.png", label: "Caribeña" },
  { image: "/images/gt/cuisine-mexican.png", label: "Mexicana" },
  { image: "/images/gt/cuisine-peruvian.png", label: "Peruana" },
];

export function GtCuisines() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 250, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="gt-cuisine-grid max-w-[1320px] mx-auto px-6 grid gap-12 items-center">
        <div>
          <Eyebrow>Made For New York</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[34px] lg:text-[42px]">
            Food that looks familiar because it is.
          </h2>
          <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed">
            A variety of cuisine lines inspired by the cultures and communities
            that make New York home.
          </p>
          <a
            href="/menus"
            className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
          >
            See What&rsquo;s Cooking <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative">
          <button
            aria-label="Scroll cuisines left"
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[var(--gt-green)] hover:bg-[var(--gt-cream)] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x pb-2"
          >
            {CUISINES.map((c) => (
              <figure key={c.label} className="shrink-0 w-[170px] snap-start text-center group cursor-pointer">
                <div className="overflow-hidden rounded-md">
                  { }
                  <img
                    src={c.image}
                    alt={`${c.label} cuisine dish`}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] font-bold tracking-[0.1em] uppercase text-[var(--gt-ink)] group-hover:text-[var(--gt-green)] transition-colors">
                  {c.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <button
            aria-label="Scroll cuisines right"
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[var(--gt-green)] hover:bg-[var(--gt-cream)] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* Approved, launch-safe standards only. HACCP, cold-chain, and HIPAA tiles stay off until GT confirms current proof. */
const STANDARDS = [
  { icon: ClipboardCheck, label: "Clinical Menu Oversight" },
  { icon: FileCheck2, label: "Signed Diet Order Workflow" },
  { icon: Eye, label: "Four-Eyes Verification" },
  { icon: Archive, label: "10-Year Record Retention" },
  { icon: BadgeCheck, label: "FIMC-Aligned Standards" },
  { icon: LockKeyhole, label: "Privacy-Conscious Operations" },
];

export function GtHealthcare() {
  return (
    <section className="bg-[var(--gt-cream)] py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Built For Healthcare</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.18] text-[34px] lg:text-[42px]">
            Food people want to eat. Standards you can trust.
          </h2>
          <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[520px]">
            Clinical menu oversight, documented verification, and long-term
            record retention — so your teams can focus on the people you
            serve.
          </p>
          <a
            href="/our-standards"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
          >
            Our Standards <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {STANDARDS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center justify-center text-center gap-3 rounded-md bg-white border border-[var(--gt-border)] px-4 py-6 min-h-[132px]"
            >
              <Icon className="w-7 h-7 text-[var(--gt-green)]" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[13px] font-semibold text-[var(--gt-ink)] leading-snug">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
