"use client";

import { ArrowRight, Building2, HeartHandshake, Stethoscope, Users } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { GtLogo } from "./gt-header";
import { tx, useLang } from "./language";

const AUDIENCES = [
  {
    image: "/images/gt/serve-plans.png",
    enAlt: "Modern healthcare office building",
    esAlt: "Edificio moderno de oficinas de salud",
    icon: Building2,
    en: "Health Plans & Social Care Networks",
    es: "Planes de salud y Redes de Cuidado Social",
    enText: "A food partner built for accountable service delivery.",
    esText: "Un socio de alimentos preparado para una entrega de servicio responsable.",
  },
  {
    image: "/images/gt/serve-providers.png",
    enAlt: "Healthcare providers talking in a clinic hallway",
    esAlt: "Proveedores de salud conversando en el pasillo de una clínica",
    icon: Stethoscope,
    en: "Healthcare Providers & Care Teams",
    es: "Proveedores de salud y equipos de cuidado",
    enText: "A clearer path from referral to food on the table, through the member’s Social Care Network.",
    esText: "Un camino más claro desde la referencia hasta la comida en la mesa, a través de la Red de Cuidado Social del miembro.",
  },
  {
    image: "/images/gt/serve-community.png",
    enAlt: "People cooking together at a community kitchen",
    esAlt: "Personas cocinando juntas en una cocina comunitaria",
    icon: Users,
    en: "Community Organizations",
    es: "Organizaciones comunitarias",
    enText: "Food programs built around the communities you already know.",
    esText: "Programas de alimentos construidos alrededor de las comunidades que usted ya conoce.",
  },
  {
    image: "/images/gt/serve-families.jpg",
    enAlt: "Family members passing a home-cooked meal around the table",
    esAlt: "Familiares compartiendo una comida casera alrededor de la mesa",
    icon: HeartHandshake,
    en: "Members & Families",
    es: "Miembros y familias",
    enText: "Real food. Familiar flavors. Made with care.",
    esText: "Comida de verdad. Sabores familiares. Hecha con cuidado.",
  },
];

export function GtWhoWeServe() {
  const { lang } = useLang();
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow>{tx(lang, "Who We Serve", "A quién servimos")}</Eyebrow>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {AUDIENCES.map((a) => {
            const Icon = a.icon;
            return (
              <article key={a.en} className="group">
                <div className="relative overflow-hidden rounded-md">
                  { }
                  <img
                    src={a.image}
                    alt={tx(lang, a.enAlt, a.esAlt)}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 w-10 h-10 rounded-md bg-[var(--gt-green)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--gt-gold)]" strokeWidth={1.7} />
                  </span>
                </div>
                <h3 className="mt-4 text-[var(--gt-green)] font-bold text-[17px] leading-snug">
                  {tx(lang, a.en, a.es)}
                </h3>
                <p className="mt-2 text-[var(--gt-body)] text-[14px] leading-relaxed">{tx(lang, a.enText, a.esText)}</p>
                <a
                  href="/who-we-serve"
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
                >
                  {tx(lang, "Learn More", "Más información")} <ArrowRight className="w-4 h-4" />
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
  const { lang } = useLang();
  return (
    <section id="partner" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/gt/brooklyn-bridge-twilight.jpg")' }}
        role="img"
        aria-label={tx(lang, "The Brooklyn Bridge and Manhattan skyline at twilight", "El puente de Brooklyn y el horizonte de Manhattan al anochecer")}
      />
      <div className="absolute inset-0 bg-[#142C25]/72" aria-hidden="true" />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <h2 className="font-serif-display text-white font-bold leading-[1.15] text-[34px] lg:text-[46px] max-w-[520px]">
          {tx(lang, "Made in New York. For the families that make New York.", "Hecho en Nueva York. Para las familias que hacen Nueva York.")}
        </h2>
        <div className="lg:text-right">
          <p className="font-serif-display text-white text-[22px] lg:text-[26px] italic">
            {tx(lang, "Let’s build something better together.", "Construyamos algo mejor juntos.")}
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-7 py-3.5 transition-colors"
          >
            {tx(lang, "Partner With GT", "Colabore con GT")} <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-white/75 hover:text-[var(--gt-gold)] transition-colors"
            >
              {tx(lang, "Get to know GT", "Conozca a GT")} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { href: "/programs", en: "Programs", es: "Programas" },
  { href: "/menus", en: "Menus & Culture", es: "Menús y cultura" },
  { href: "/clinical-authority", en: "Clinical Authority", es: "Autoridad clínica" },
  { href: "/who-we-serve", en: "Who We Serve", es: "A quién servimos" },
  { href: "/our-standards", en: "Our Standards", es: "Nuestros estándares" },
  { href: "/about", en: "About", es: "Nosotros" },
  { href: "/contact", en: "Contact", es: "Contacto" },
];

const LEGAL_LINKS = [
  { href: "/privacy", en: "Privacy", es: "Privacidad" },
  { href: "/terms", en: "Terms", es: "Términos" },
  { href: "/accessibility", en: "Accessibility", es: "Accesibilidad" },
];

export function GtFooter() {
  const { lang } = useLang();
  return (
    <footer className="bg-[var(--gt-green-deep)] text-white">
      <div className="max-w-[1320px] mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Horizontal GT logo — light presentation, links Home */}
          <a href="/" className="shrink-0 rounded-sm bg-white px-3 py-1.5" aria-label={tx(lang, "GT Food Group home", "Inicio de GT Food Group")}>
            <GtLogo className="h-12 w-auto" />
          </a>

          {/* Navigation */}
          <nav aria-label={tx(lang, "Footer navigation", "Navegación del pie de página")}>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13.5px] font-semibold text-white/85 hover:text-[var(--gt-gold)] transition-colors">
                    {tx(lang, link.en, link.es)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-[12.5px] text-white/60">
          <p>&copy; 2026 GT Food Group LLC &middot; {tx(lang, "Established in New York", "Establecida en Nueva York")}</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {LEGAL_LINKS.map(({ en, es, href }, i, arr) => (
              <li key={href} className="flex items-center gap-2">
                <a href={href} className="hover:text-white transition-colors">
                  {tx(lang, en, es)}
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
