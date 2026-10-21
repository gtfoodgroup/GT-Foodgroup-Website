import { ArrowRight, Building2, HeartHandshake, Stethoscope, Users } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { GtLogo } from "./gt-header";

const AUDIENCES = [
  {
    image: "/images/gt/serve-plans.png",
    alt: "Modern healthcare office building",
    icon: Building2,
    title: "Health Plans & Social Care Networks",
    text: "A food partner built for accountable service delivery.",
  },
  {
    image: "/images/gt/serve-providers.png",
    alt: "Healthcare providers talking in a clinic hallway",
    icon: Stethoscope,
    title: "Healthcare Providers & Care Teams",
    text: "A clearer path from referral to food on the table, through the member’s Social Care Network.",
  },
  {
    image: "/images/gt/serve-community.png",
    alt: "People cooking together at a community kitchen",
    icon: Users,
    title: "Community Organizations",
    text: "Food programs built around the communities you already know.",
  },
  {
    image: "/images/gt/serve-families.png",
    alt: "A multigenerational family sharing dinner at home",
    icon: HeartHandshake,
    title: "Members & Families",
    text: "Real food. Familiar flavors. Made with care.",
  },
];

export function GtWhoWeServe() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow>Who We Serve</Eyebrow>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {AUDIENCES.map((a) => {
            const Icon = a.icon;
            return (
              <article key={a.title} className="group">
                <div className="relative overflow-hidden rounded-md">
                  { }
                  <img
                    src={a.image}
                    alt={a.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 w-10 h-10 rounded-md bg-[var(--gt-green)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--gt-gold)]" strokeWidth={1.7} />
                  </span>
                </div>
                <h3 className="mt-4 text-[var(--gt-green)] font-bold text-[17px] leading-snug">
                  {a.title}
                </h3>
                <p className="mt-2 text-[var(--gt-body)] text-[14px] leading-relaxed">{a.text}</p>
                <a
                  href="/who-we-serve"
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GtCtaBand() {
  return (
    <section id="partner" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/gt/brooklyn-bridge-twilight.jpg")' }}
        role="img"
        aria-label="The Brooklyn Bridge and Manhattan skyline at twilight"
      />
      <div className="absolute inset-0 bg-[#142C25]/72" aria-hidden="true" />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <h2 className="font-serif-display text-white font-bold leading-[1.15] text-[34px] lg:text-[46px] max-w-[520px]">
          Made in New York. For the families that make New York.
        </h2>
        <div className="lg:text-right">
          <p className="font-serif-display text-white text-[22px] lg:text-[26px] italic">
            Let&rsquo;s build something better together.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
          >
            Partner With GT <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-white/75 hover:text-[var(--gt-gold)] transition-colors"
            >
              Get to know GT <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Programs", href: "/programs" },
  { label: "Menus & Culture", href: "/menus" },
  { label: "Clinical Authority", href: "/clinical-authority" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Our Standards", href: "/our-standards" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function GtFooter() {
  return (
    <footer className="bg-[var(--gt-green-deep)] text-white">
      <div className="max-w-[1320px] mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Horizontal GT logo — light presentation, links Home */}
          <a href="/" className="shrink-0 rounded-sm bg-white px-3 py-1.5" aria-label="GT Food Group home">
            <GtLogo className="h-12 w-auto" />
          </a>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13.5px] font-semibold text-white/85 hover:text-[var(--gt-gold)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-[12.5px] text-white/60">
          <p>&copy; 2026 GT Food Group LLC &middot; Established in New York</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {LEGAL_LINKS.map(({ label, href }, i, arr) => (
              <li key={label} className="flex items-center gap-2">
                <a href={href} className="hover:text-white transition-colors">
                  {label}
                </a>
                {i < arr.length - 1 && <span aria-hidden="true">|</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
