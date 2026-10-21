import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import { LegalPage } from "@/components/gtfood/gt-legal-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — GT Food Group",
  description:
    "How GT Food Group handles information submitted through this public website — including what our inquiry form collects, and why health information never belongs in public forms or email.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <LegalPage page="privacy" />
      </main>
      <GtFooter />
    </div>
  );
}
