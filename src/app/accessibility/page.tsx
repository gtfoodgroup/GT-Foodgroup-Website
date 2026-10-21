import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import { LegalPage } from "@/components/gtfood/gt-legal-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Accessibility — GT Food Group",
  description:
    "GT Food Group's commitment to an accessible website: what we build in, how we test, and how to report a barrier so we can fix it.",
};

export default function AccessibilityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <LegalPage page="accessibility" />
      </main>
      <GtFooter />
    </div>
  );
}
