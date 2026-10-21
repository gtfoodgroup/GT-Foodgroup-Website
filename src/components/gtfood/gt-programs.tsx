"use client";

import { ArrowRight, CookingPot, House, PackageOpen } from "lucide-react";
import { tx, useLang, type Lang } from "./language";

type Program = {
  image: string;
  alt: string;
  icon: React.ElementType;
  title: string;
  text: string;
};

function programs(lang: Lang): Program[] {
  return [
    {
      image: "/images/gt/program-mtm.png",
      alt: tx(lang, "Grilled chicken with plantains, beans and rice", "Pollo a la parrilla con plátanos, habichuelas y arroz"),
      icon: CookingPot,
      title: tx(lang, "Medically Tailored Meals", "Comidas médicamente adaptadas"),
      text: tx(lang, "RDN-led menus with clinical adjustments built into familiar, culturally relevant dishes.", "Menús dirigidos por RDN, con ajustes clínicos integrados en platos familiares y culturalmente relevantes."),
    },
    {
      image: "/images/gt/program-hdm.png",
      alt: tx(lang, "Nourishing grain bowl with roasted vegetables", "Bowl de granos con vegetales asados"),
      icon: House,
      title: tx(lang, "Clinically Appropriate Home-Delivered Meals", "Comidas a domicilio clínicamente apropiadas"),
      text: tx(lang, "Fresh-prepared meals shaped to clinical needs — making everyday eating simpler and more accessible.", "Comidas recién preparadas según las necesidades clínicas, para que comer cada día sea más simple y accesible."),
    },
    {
      image: "/images/gt/program-produce.png",
      alt: tx(lang, "Box filled with fresh produce and vegetables", "Caja con productos frescos y vegetales"),
      icon: PackageOpen,
      title: tx(lang, "Food Prescription Boxes", "Cajas de prescripción de alimentos"),
      text: tx(lang, "Carefully chosen foods and pantry staples that fit real eating habits and familiar cooking.", "Alimentos y básicos de despensa elegidos con cuidado, acordes a hábitos reales y a la cocina familiar."),
    },
  ];
}

function Eyebrow({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "gold" | "rose" }) {
  const color =
    tone === "gold" ? "text-[var(--gt-gold)]" : tone === "rose" ? "text-[var(--gt-rose)]" : "text-[var(--gt-green)]";
  return (
    <p className={`flex items-center gap-3 text-[11.5px] font-bold tracking-[0.22em] uppercase ${color}`}>
      <span className={`h-px w-8 ${tone === "rose" ? "bg-[var(--gt-rose)]" : "bg-current"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export { Eyebrow };

export default function GtPrograms() {
  const { lang } = useLang();
  return (
    <section id="programs" className="bg-[var(--gt-cream)] py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Eyebrow>{tx(lang, "Our Programs", "Nuestros programas")}</Eyebrow>
            <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[36px] lg:text-[46px] max-w-[520px]">
              {tx(lang, "Nutrition designed around the people you serve.", "Nutrición diseñada alrededor de las personas a quienes usted sirve.")}
            </h2>
          </div>
          <div className="lg:pl-10">
            <p className="text-[var(--gt-body)] text-[15.5px] leading-relaxed">
              {tx(
                lang,
                "Medically tailored meals, home-delivered meals and produce prescription boxes — prepared for the people New York’s health and social care partners serve.",
                "Comidas médicamente adaptadas, comidas a domicilio y cajas de prescripción de alimentos, preparadas para las personas a quienes sirven los socios de salud y cuidado social de Nueva York.",
              )}
            </p>
            <a
              href="/programs"
              className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-bold text-[var(--gt-green)] hover:text-[var(--gt-green-soft)] transition-colors"
            >
              {tx(lang, "View All Programs", "Ver todos los programas")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs(lang).map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group bg-white shadow-[0_10px_30px_rgba(20,44,37,0.08)] hover:shadow-[0_16px_40px_rgba(20,44,37,0.14)] transition-shadow"
              >
                <div className="relative overflow-hidden">
                  { }
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-[var(--gt-green)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--gt-gold)]" strokeWidth={1.8} />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-[var(--gt-green)] font-bold text-[20px] leading-snug">{p.title}</h3>
                  <p className="mt-3 text-[var(--gt-body)] text-[14.5px] leading-relaxed">{p.text}</p>
                  <a
                    href="/programs"
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--gt-green)] hover:gap-3 transition-all"
                  >
                    {tx(lang, "Learn More", "Más información")} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
