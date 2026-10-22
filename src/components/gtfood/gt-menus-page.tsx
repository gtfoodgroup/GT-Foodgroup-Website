"use client";

import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./gt-programs";
import { tx, useLang } from "./language";

/* ================= Hero ================= */

export function MenusHero() {
  const { lang } = useLang();
  return (
    <section className="relative bg-[#142C25] overflow-hidden min-h-[560px] lg:min-h-[640px] flex items-center">
      <img
        src="/images/gt/menus-hero.png"
        alt={tx(lang, "A table of yellow rice, beans, roasted chicken and fried plantains", "Una mesa con arroz amarillo, habichuelas, pollo asado y plátanos fritos")}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#142C25]/92 via-[#142C25]/55 to-[#142C25]/20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 sm:hidden bg-[#142C25]/35" aria-hidden="true" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-24 lg:py-28 w-full">
        <div className="max-w-[640px]">
          <p className="text-[12px] font-bold tracking-[0.22em] uppercase text-[var(--gt-gold)]">
            {tx(lang, "Menus & Culture", "Menús y cultura")}
          </p>
          <h1 className="font-serif-display mt-5 text-white font-bold leading-[1.05] text-[44px] sm:text-[56px] lg:text-[68px]">
            {tx(lang, "Familiar food.", "Comida familiar.")}
            <br />
            <span className="text-[var(--gt-gold)]">{tx(lang, "Thoughtfully prepared.", "Preparada con cuidado.")}</span>
          </h1>
          <p className="mt-6 text-white/90 text-[16.5px] leading-relaxed max-w-[480px]">
            {tx(lang, "Food and culture come first. The plate should taste like the kitchen people already know.", "La comida y la cultura van primero. El plato debe saber a la cocina que la gente ya conoce.")}
          </p>
          <a
            href="#lanes"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
          >
            {tx(lang, "Explore the cuisines", "Explore las cocinas")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= Cuisine lanes ================= */

type Span = "feature" | "pair" | "half" | "wide";

type Cuisine = {
  name: string;
  image: string;
  alt: string;
  /** Dish names only. Never recipes or ingredient lists. */
  dishes: string[];
  /**
   * Publish only when an RDN-signed menu carries this modification.
   * Leave unset and the tag is not rendered.
   */
  modification?: string;
  span: Span;
};

const CUISINES: Cuisine[] = [
  {
    name: "Dominicana",
    image: "/images/gt/cuisine-dominicana.png",
    alt: "Rice, red beans, braised chicken and avocado",
    dishes: ["Mangú", "Sancocho", "Habichuelas guisadas"],
    span: "feature",
  },
  {
    name: "Boricua",
    image: "/images/gt/cuisine-boricua.png",
    alt: "Rice with pigeon peas, roasted pork and olives",
    dishes: ["Arroz con gandules", "Pernil", "Mofongo"],
    span: "pair",
  },
  {
    name: "Cubana",
    image: "/images/gt/cuisine-cubana.jpg",
    alt: "Ropa vieja shredded beef with peppers, white rice, black beans and sweet plantains",
    dishes: ["Ropa vieja", "Lechón asado", "Moros y cristianos"],
    span: "pair",
  },
  {
    name: "Mexicana",
    image: "/images/gt/cuisine-mexican.jpg",
    alt: "Tacos al pastor with pineapple, onion, cilantro, salsa and lime",
    dishes: ["Tacos al pastor", "Pozole", "Frijoles de la olla"],
    span: "pair",
  },
  {
    name: "Colombiana",
    image: "/images/gt/cuisine-colombiana.jpg",
    alt: "Pollo sudado with potatoes, white rice, avocado and fried plantains",
    dishes: ["Pollo sudado", "Sancocho", "Pescado criollo"],
    span: "pair",
  },
  {
    name: "Peruana",
    image: "/images/gt/cuisine-peruvian.png",
    alt: "Stir-fried beef with red onion, tomato and rice",
    dishes: ["Lomo saltado", "Seco de pollo", "Causa"],
    span: "pair",
  },
  {
    name: "Caribeña",
    image: "/images/gt/cuisine-caribbean.png",
    alt: "Jerk chicken with rice and peas",
    dishes: ["Jerk chicken", "Rice and peas", "Callaloo"],
    span: "half",
  },
  {
    name: "Soul Food",
    image: "/images/gt/cuisine-soul.jpg",
    alt: "Smothered chicken with collard greens, red beans and rice, and cornbread",
    dishes: ["Smothered chicken", "Collard greens", "Red beans and rice"],
    span: "half",
  },
  {
    name: "Sabores de New York",
    image: "/images/gt/cuisine-nyc.png",
    alt: "Chicken and rice with white sauce and salad",
    dishes: ["Chicken and rice", "Chopped cheese", "Maduros"],
    span: "wide",
  },
];

const SPAN_CLASS: Record<Span, string> = {
  feature: "md:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[420px] lg:min-h-[560px]",
  pair: "lg:col-span-2 min-h-[260px] lg:min-h-[270px]",
  half: "md:col-span-2 lg:col-span-3 min-h-[280px]",
  wide: "md:col-span-2 lg:col-span-6 min-h-[300px] lg:min-h-[340px]",
};

export function CuisineLanes() {
  const { lang } = useLang();
  return (
    <section id="lanes" aria-labelledby="lanes-title" className="scroll-mt-36 bg-[var(--gt-cream)] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <Eyebrow>{tx(lang, "Cuisine lanes", "Líneas de cocina")}</Eyebrow>
        <h2
          id="lanes-title"
          className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[34px] lg:text-[46px] max-w-[720px]"
        >
          Dominicana · Boricua · Cubana · Mexicana · Colombiana · Peruana · Caribeña · Soul Food · Sabores de New York
        </h2>
        <p className="mt-5 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[560px]">
          {tx(lang, "Dish names show the kind of plate in each lane. They are not a published menu.", "Los nombres de los platos muestran el tipo de comida de cada línea. No son un menú publicado.")}
        </p>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
          {CUISINES.map((c) => (
            <li key={c.name} className={`relative overflow-hidden group ${SPAN_CLASS[c.span]}`}>
              <img
                src={c.image}
                alt={c.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#142C25]/85 via-[#142C25]/15 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-serif-display text-white font-bold text-[28px] lg:text-[32px] leading-none">
                  {c.name}
                </h3>
                <p className="mt-2 text-white/85 text-[13.5px] leading-snug">
                  {c.dishes.join(" · ")}
                </p>
                {c.modification && (
                  <p className="mt-3 inline-block rounded-full bg-[var(--gt-gold)] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[var(--gt-green-deep)]">
                    {c.modification}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================= Pantry ================= */

const PANTRY = [
  "Recao",
  "ají dulce",
  "calabaza",
  "sofrito",
  "yuca",
  "ñame",
  "queso fresco",
  "plátano verde",
  "habichuelas",
  "naranja agria",
  "achiote",
];

export function PantrySection() {
  const { lang } = useLang();
  return (
    <section id="pantry" aria-labelledby="pantry-title" className="scroll-mt-36 bg-white py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative min-h-[300px] sm:min-h-[420px]">
          <img
            src="/images/gt/pantry-ingredients.png"
            alt={tx(lang, "Recao, ají dulce, calabaza, yuca, green plantains, queso fresco and achiote on a market table", "Recao, ají dulce, calabaza, yuca, plátanos verdes, queso fresco y achiote sobre una mesa de mercado")}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <Eyebrow tone="gold">{tx(lang, "The pantry", "La despensa")}</Eyebrow>
          <h2
            id="pantry-title"
            className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.2] text-[28px] sm:text-[34px] lg:text-[40px]"
          >
            {PANTRY.map((name, i) => (
              <span key={name}>
                {i > 0 && (
                  <span className="text-[var(--gt-gold-deep)]" aria-hidden="true">
                    {" "}
                    ·{" "}
                  </span>
                )}
                {name}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-[var(--gt-body)] text-[15.5px] leading-relaxed max-w-[480px]">
            {tx(lang, "These are the staples the lanes are built from. Names only — not recipes.", "Estos son los básicos con los que se construyen las líneas. Solo nombres, no recetas.")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= Clinical modification — after the food ================= */

export function PhilosophyBand() {
  const { lang } = useLang();
  return (
    <section
      id="clinical"
      aria-labelledby="clinical-title"
      className="scroll-mt-36 bg-[var(--gt-green-deep)]"
    >
      <div className="max-w-[860px] mx-auto px-6 py-16 lg:py-24 text-center">
        <p className="inline-flex items-center gap-3 text-[11.5px] font-bold tracking-[0.22em] uppercase text-[var(--gt-gold)]">
          <span className="h-px w-8 bg-[var(--gt-gold)]" aria-hidden="true" />
          {tx(lang, "Clinical modification", "Modificación clínica")}
          <span className="h-px w-8 bg-[var(--gt-gold)]" aria-hidden="true" />
        </p>
        <h2
          id="clinical-title"
          className="font-serif-display mt-6 text-white font-bold leading-[1.2] text-[32px] sm:text-[40px] lg:text-[48px]"
        >
          {tx(lang, "The cuisine stays. The nutrition standards are built around it.", "La cocina se queda. Los estándares de nutrición se construyen a su alrededor.")}
        </h2>
        <p className="mt-6 text-white/75 text-[15.5px] leading-relaxed max-w-[560px] mx-auto">
          {tx(lang, "A condition tag appears on a dish only when an RDN-signed menu carries that modification. None are published on this page.", "Una etiqueta de condición aparece en un plato solo cuando un menú firmado por una RDN incluye esa modificación. Ninguna se publica en esta página.")}
        </p>
      </div>
    </section>
  );
}
