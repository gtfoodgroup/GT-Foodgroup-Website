import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  StandardsHero,
  ApprovedProofPoints,
  StandardsPillars,
  DiligenceDownloads,
} from "@/components/gtfood/gt-standards-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Our Standards — GT Food Group",
  description:
    "Signed Diet Order workflow, Four-Eyes Verification, 10-year record retention, and FIMC-aligned standards. The public site collects business contact information only.",
  keywords: [
    "food service standards",
    "clinical governance",
    "signed diet order",
    "four-eyes manifest verification",
    "record retention",
    "privacy-conscious operations",
  ],
};

export default function OurStandardsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <StandardsHero />
        <ApprovedProofPoints />
        <StandardsPillars />
        <DiligenceDownloads />
      </main>
      <GtFooter />
    </div>
  );
}
