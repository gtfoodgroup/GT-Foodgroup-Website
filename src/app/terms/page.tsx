import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import { LegalPage } from "@/components/gtfood/gt-legal-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Terms of Use — GT Food Group",
  description:
    "Terms of use for the GT Food Group website — the informational scope of this site, how program details are governed, and the ground rules for using our forms and content.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <LegalPage page="terms" />
      </main>
      <GtFooter />
    </div>
  );
}
