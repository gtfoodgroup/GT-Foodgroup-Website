import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  MenusHero,
  CuisineLanes,
  PantrySection,
  PhilosophyBand,
} from "@/components/gtfood/gt-menus-page";
import { GtCtaBand, GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Menus & Culture — GT Food Group",
  description:
    "Familiar food, thoughtfully prepared. Nine cuisine lanes — Dominicana, Boricua, Cubana, Mexicana, Colombiana, Peruana, Caribeña, Soul Food and Sabores de New York — with nutrition standards built around the cuisine.",
  keywords: [
    "culturally relevant meals",
    "Dominican meals",
    "Puerto Rican meals",
    "Caribbean meals",
    "Soul Food meals",
    "New York meal delivery",
  ],
};

export default function MenusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <MenusHero />
        <CuisineLanes />
        <PantrySection />
        <PhilosophyBand />
        <GtCtaBand />
      </main>
      <GtFooter />
    </div>
  );
}
