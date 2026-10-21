import {
  ArrowRight,
  CookingPot,
  FileCheck2,
  HeartHandshake,
  Mail,
  Users,
} from "lucide-react";
import { Eyebrow } from "./gt-programs";
import PartnershipForm from "./gt-contact-form";

/* ================= Hero ================= */

const AUDIENCE_CHIPS = [
  "Health plans & SCNs",
  "Providers & care teams",
  "Community organizations",
  "Food-service partners",
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--gt-cream)]">
      {/* Thin gold rule */}
      <div className="h-[3px] w-full bg-[var(--gt-gold)]" aria-hidden="true" />

      {/* Leaf watermark */}
      <svg
        viewBox="0 0 48 32"
        className="pointer-events-none absolute -right-14 -top-14 h-[260px] w-[420px] text-[var(--gt-green)] opacity-[0.05]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        aria-hidden="true"
      >
        <path d="M6 26 C 16 24, 30 18, 40 6" />
        <path d="M14 24 C 13 19, 15 15, 20 12 C 21 17, 19 21, 14 24 Z" />
        <path d="M22 20 C 22 15, 25 11, 30 9 C 30 14, 27 18, 22 20 Z" />
        <path d="M30 15 C 31 11, 34 8, 38 7 C 37 11, 34 14, 30 15 Z" />
      </svg>

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--gt-gold-deep)]">
            <span className="h-px w-8 bg-[var(--gt-gold-deep)]" aria-hidden="true" />
            Partner With GT
          </p>
          <h1 className="font-serif-display mt-5 text-[38px] font-extrabold leading-[1.1] text-[var(--gt-green)] sm:text-[48px] lg:text-[58px]">
            Begin a{" "}
            <em className="italic text-[var(--gt-green-soft)]">conversation</em>.
          </h1>
          <p className="mt-6 max-w-[590px] text-[16.5px] leading-relaxed text-[var(--gt-body)]">
            One form, routed to the right desk. Whether you represent a health
            plan, a Social Care Network, a provider group, a community
            organization or a food-service business, this is the simplest way
            to start a serious conversation with GT.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {AUDIENCE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--gt-green)]/25 bg-white/70 px-4 py-1.5 text-[12px] font-semibold text-[var(--gt-green)]"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] px-7 py-3.5 text-[14px] font-bold text-[var(--gt-green-deep)] transition-colors hover:bg-[var(--gt-gold-deep)]"
            >
              Go to the Inquiry Form{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#routing"
              className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[var(--gt-green)] transition-all hover:gap-3"
            >
              Prefer email? See direct routing{" "}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-md border-2 border-[var(--gt-gold)]"
              aria-hidden="true"
            />
            <img
              src="/images/gt/serve-hero.png"
              alt="A GT meal delivery being handed off at a New York brownstone doorway"
              className="relative w-full rounded-md object-cover aspect-[4/3]"
            />
          </div>
          <p className="mt-5 text-[13px] italic leading-relaxed text-[var(--gt-body)]">
            Every partnership ends at a doorstep like this one — and it starts
            with a hello.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= Form + Rail ================= */

const EMAIL_ROUTES = [
  { label: "partners@", email: "partners@gtfoodgroup.com" },
  { label: "clinical@", email: "clinical@gtfoodgroup.com", note: "no PHI" },
  { label: "compliance@", email: "compliance@gtfoodgroup.com" },
  { label: "hello@", email: "hello@gtfoodgroup.com" },
  { label: "Sal@", email: "Sal@gtfoodgroup.com" },
];

function DirectRoutingCard() {
  return (
    <div
      id="routing"
      className="scroll-mt-32 rounded-lg border border-[var(--gt-border)] bg-[var(--gt-cream)] p-7"
    >
      <Eyebrow>Direct Routing</Eyebrow>
      <h3 className="font-serif-display mt-4 text-[22px] font-bold leading-snug text-[var(--gt-green)]">
        Prefer email? Reach the right desk.
      </h3>
      <ul className="mt-6 space-y-5">
        {EMAIL_ROUTES.map((route) => (
          <li key={route.email}>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gt-body)]">
              {route.label}
            </p>
            <a
              href={`mailto:${route.email}`}
              className="mt-1 inline-flex items-center gap-2 break-all text-[14.5px] font-bold text-[var(--gt-green)] transition-colors hover:text-[var(--gt-green-soft)]"
            >
              <Mail
                className="h-4 w-4 shrink-0 text-[var(--gt-gold-deep)]"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              {route.email}
            </a>
            {route.note && (
              <p className="mt-1.5 text-[12.5px] italic text-[var(--gt-rose)]">
                {route.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MembersCalloutCard() {
  return (
    <div className="rounded-lg border border-[var(--gt-rose)]/25 bg-[var(--gt-rose)]/[0.06] p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--gt-rose)]">
          <HeartHandshake
            className="h-5 w-5 text-white"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>
        <h3 className="font-serif-display text-[20px] font-bold text-[var(--gt-rose-deep)]">
          Members &amp; Families
        </h3>
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-[var(--gt-ink)]/85">
        GT does not determine eligibility or enroll members. Contact the
        Social Care Network/care team.
      </p>
    </div>
  );
}

export function ContactMain() {
  return (
    <section id="form" className="scroll-mt-28 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-[640px]">
          <Eyebrow>Start Here</Eyebrow>
          <h2 className="font-serif-display mt-4 text-[34px] font-bold leading-[1.15] text-[var(--gt-green)] lg:text-[44px]">
            Tell us about your partnership.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--gt-body)]">
            A few details are all it takes. The form goes to the team that owns
            the conversation — no call centers, no back-and-forth just to find
            the right person.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-[var(--gt-border)] bg-[var(--gt-cream)] p-6 shadow-[0_10px_30px_rgba(20,44,37,0.06)] sm:p-10">
              <PartnershipForm />
            </div>
          </div>

          <aside className="space-y-8">
            <DirectRoutingCard />
            <MembersCalloutCard />
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ================= Closing ================= */

const EXPLORE_LINKS = [
  {
    icon: CookingPot,
    title: "Explore Our Programs",
    text: "Medically tailored meals, clinically appropriate home-delivered meals and food prescription boxes.",
    href: "/programs",
  },
  {
    icon: Users,
    title: "See Who We Serve",
    text: "Health plans, Social Care Networks, providers, community organizations and the families they support.",
    href: "/who-we-serve",
  },
  {
    icon: FileCheck2,
    title: "Review Our Standards",
    text: "Clinical governance, documentation, privacy and food safety & delivery — readable, not decoded.",
    href: "/our-standards",
  },
];

export function ContactClosing() {
  return (
    <section className="border-t border-[var(--gt-border)] bg-[var(--gt-cream)] py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Keep Exploring</Eyebrow>
            <h2 className="font-serif-display mt-4 max-w-[560px] text-[32px] font-bold leading-[1.15] text-[var(--gt-green)] lg:text-[40px]">
              While you&rsquo;re here, see how GT works.
            </h2>
          </div>
          <p className="max-w-[380px] text-[14.5px] leading-relaxed text-[var(--gt-body)] lg:pb-1.5 lg:text-right">
            The more you see of the food, the people and the standards behind
            it, the better the conversation goes.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-lg border border-[var(--gt-border)] bg-white p-7 transition-shadow hover:shadow-[0_16px_40px_rgba(20,44,37,0.12)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--gt-green)]">
                  <Icon
                    className="h-5 w-5 text-[var(--gt-gold)]"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="font-serif-display mt-5 text-[20px] font-bold text-[var(--gt-green)]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--gt-body)]">
                  {item.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--gt-green)] transition-all group-hover:gap-3">
                  Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
