import { ArrowRight, HeartHandshake, Salad, Users, UtensilsCrossed } from "lucide-react";

const HERO_IMAGE = "/images/gt/fresh-harvest.jpg";

export default function GtHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        role="img"
        aria-label="Fresh vegetables in the foreground with the Brooklyn Bridge and New York skyline at sunset"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#142C25]/85 via-[#142C25]/45 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-24 lg:py-36">
        <div className="max-w-[620px]">
          <p className="text-[12px] font-bold tracking-[0.22em] uppercase text-[var(--gt-gold)]">
            Nourishing New York Communities
          </p>
          <h1 className="font-serif-display mt-5 text-white font-extrabold leading-[1.08] text-[40px] sm:text-[52px] lg:text-[62px] max-w-[640px]">
            Rooted in culture.
            <br />
            Crafted with care.
            <br />
            <span className="text-[var(--gt-gold)]">Delivered fresh</span>
          </h1>
          <p className="mt-6 text-white/90 text-[16.5px] leading-relaxed max-w-[520px]">
            GT Food Group brings together clinical nutrition, culturally
            relevant food, and reliable delivery to serve New York communities
            with meals people recognize and enjoy.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 text-white hover:bg-white/10 text-[14px] font-bold px-6 py-3.5 transition-colors"
            >
              Explore Our Programs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: Salad, label: "RDN-Led Nutrition" },
  { icon: UtensilsCrossed, label: "Fresh-Prepared Meals" },
  { icon: Users, label: "Culturally Relevant Menus" },
  { icon: HeartHandshake, label: "New York Focused" },
];

export function GtFeatureStrip() {
  return (
    <section aria-label="Our commitments" className="bg-[var(--gt-green-deep)]">
      <div className="max-w-[1320px] mx-auto px-6 py-7 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:divide-x lg:divide-white/15">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-4">
            <Icon className="w-7 h-7 text-[var(--gt-gold)]" strokeWidth={1.5} />
            <span className="text-white text-[12px] font-bold tracking-[0.14em] uppercase leading-snug max-w-[150px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
