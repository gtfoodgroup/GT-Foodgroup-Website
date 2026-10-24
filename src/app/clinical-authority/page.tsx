import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  MayaHero,
  AboutMaya,
  WorksAndPlatform,
  MayaRole,
  MayaLinks,
  ClinicalWorkflow,
  MayaClose,
} from "@/components/gtfood/gt-maya-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Clinical Authority — Maya Feller, MS, RD, CDN | GT Food Group",
  description:
    "Maya Feller, MS, RD, CDN — Founding Clinical Advisor and Supervising Registered Dietitian Nutritionist of Record. She supervises Diet Orders and does not screen, enroll, or refer members.",
  keywords: [
    "Maya Feller",
    "registered dietitian nutritionist",
    "clinical nutrition New York",
    "supervising dietitian",
    "culturally relevant clinical nutrition",
    "master menu oversight",
  ],
};

export default function ClinicalAuthorityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <MayaHero />
        <AboutMaya />
        <WorksAndPlatform />
        <MayaRole />
        <MayaLinks />
        <ClinicalWorkflow />
        <MayaClose />
      </main>
      <GtFooter />
    </div>
  );
}
