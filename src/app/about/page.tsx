import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  AboutHero,
  Position,
  Leadership,
  MadeInNYClosing,
} from "@/components/gtfood/gt-about-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "About — GT Food Group",
  description:
    "A New York food company built around culture, care and accountability — serving healthcare and community partners with clinical rigor and familiar food.",
  keywords: [
    "about GT Food Group",
    "New York food company",
    "food and nutrition company",
    "clinical rigor",
    "cultural relevance",
    "operational accountability",
    "leadership",
    "Salvatore Gigante",
    "Maya Feller",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <AboutHero />
        <Position />
        <Leadership />
        <MadeInNYClosing />
      </main>
      <GtFooter />
    </div>
  );
}
