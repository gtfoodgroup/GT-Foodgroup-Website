import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import GtHeader, { GtLogo } from "@/components/gtfood/gt-header";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Page not found — GT Food Group",
  robots: { index: false },
};

const LINKS = [
  { label: "Programs", href: "/programs" },
  { label: "Menus & Culture", href: "/menus" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1 flex items-center">
        <div className="max-w-[760px] mx-auto px-6 py-24 lg:py-32 text-center">
          <GtLogo className="mx-auto h-16 w-auto" />
          <p className="mt-6 text-[12px] font-bold tracking-[0.22em] uppercase text-[var(--gt-rose)]">
            404 · Page not found
          </p>
          <h1 className="font-serif-display mt-4 text-[var(--gt-green)] font-bold leading-[1.1] text-[38px] sm:text-[48px] lg:text-[56px]">
            This table isn&rsquo;t set.
          </h1>
          <p className="mt-5 text-[var(--gt-body)] text-[16px] leading-relaxed max-w-[520px] mx-auto">
            The page you&rsquo;re looking for may have moved. Start from the
            homepage or head straight to one of these.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gt-gold)] hover:bg-[var(--gt-gold-deep)] text-[var(--gt-green-deep)] text-[14px] font-bold px-6 py-3.5 transition-colors"
          >
            Back to home <ArrowRight className="w-4 h-4" />
          </a>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14px] font-semibold text-[var(--gt-green)] underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <GtFooter />
    </div>
  );
}
