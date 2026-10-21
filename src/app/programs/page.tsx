import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  ProgramsHero,
  ProgramDetailSections,
  HrsnWorkflow,
  GtPartnerSupport,
  ProgramsCtaBand,
} from "@/components/gtfood/gt-programs-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Our Programs — GT Food Group",
  description:
    "Medically tailored meals, clinically appropriate home-delivered meals and food prescription boxes — nutrition programs built around the people you serve, with a clear five-step HRSN workflow.",
  keywords: [
    "medically tailored meals",
    "home-delivered meals",
    "food prescription boxes",
    "HRSN workflow",
    "Social Care Network",
  ],
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <ProgramsHero />
        <ProgramDetailSections />
        <HrsnWorkflow />
        <GtPartnerSupport />
        <ProgramsCtaBand />
      </main>
      <GtFooter />
    </div>
  );
}
