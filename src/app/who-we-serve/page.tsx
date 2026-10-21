import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  ServeHero,
  AudienceSections,
  PartnershipFlow,
  ServeClosing,
} from "@/components/gtfood/gt-serve-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Who We Serve — GT Food Group",
  description:
    "GT Food Group serves plans and SCNs, providers, community organizations, and members across New York. The Social Care Network owns screening and eligibility.",
  keywords: [
    "who we serve",
    "health plans",
    "Social Care Network",
    "healthcare providers",
    "community organizations",
    "medically supportive food",
    "HRSN food services",
  ],
};

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <ServeHero />
        <AudienceSections />
        <PartnershipFlow />
        <ServeClosing />
      </main>
      <GtFooter />
    </div>
  );
}
