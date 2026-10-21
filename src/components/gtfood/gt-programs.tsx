import { ArrowRight, CookingPot, House, PackageOpen } from "lucide-react";

type Program = {
  image: string;
  alt: string;
  icon: React.ElementType;
  title: string;
  text: string;
};

const PROGRAMS: Program[] = [
  {
    image: "/images/gt/program-mtm.png",
    alt: "Grilled chicken with plantains, beans and rice",
    icon: CookingPot,
    title: "Medically Tailored Meals",
    text: "RDN-led menus with clinical adjustments built into familiar, culturally relevant dishes.",
  },
  {
    image: "/images/gt/program-hdm.png",
    alt: "Nourishing grain bowl with roasted vegetables",
    icon: House,
    title: "Clinically Appropriate Home-Delivered Meals",
    text: "Fresh-prepared meals shaped to clinical needs — making everyday eating simpler and more accessible.",
  },
  {
    image: "/images/gt/program-produce.png",
    alt: "Box filled with fresh produce and vegetables",
    icon: PackageOpen,
    title: "Food Prescription Boxes",
    text: "Carefully chosen foods and pantry staples that fit real eating habits and familiar cooking.",
  },
];

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
  return (
    <section id="programs" className="bg-[var(--gt-cream)] py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Eyebrow>Our Programs</Eyebrow>
            <h2 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.15] text-[36px] lg:text-[46px] max-w-[520px]">
              Nutrition designed around the people you serve.
            </h2>
          </div>
          <div className="lg:pl-10">
            <p className="text-[var(--gt-body)] text-[15.5px] leading-relaxed">
              Medically tailored meals, home-delivered meals and produce
              prescription boxes — prepared for the people New York&rsquo;s
              health and social care partners serve.
            </p>
            <a
              href="/programs"
              className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-bold text-[var(--gt-green)] hover:text-[var(--gt-green-soft)] transition-colors"
            >
              View All Programs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROGRAMS.map((p) => {
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
                    Learn More <ArrowRight className="w-4 h-4" />
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
