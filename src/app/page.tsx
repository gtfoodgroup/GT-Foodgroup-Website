import GtHeader from "@/components/gtfood/gt-header";
import GtHero, { GtFeatureStrip } from "@/components/gtfood/gt-hero";
import GtPrograms from "@/components/gtfood/gt-programs";
import GtCulture, { GtClinicalAuthority } from "@/components/gtfood/gt-culture";
import { GtCuisines, GtHealthcare } from "@/components/gtfood/gt-standards";
import { GtWhoWeServe, GtCtaBand, GtFooter } from "@/components/gtfood/gt-serve-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <GtHero />
        <GtFeatureStrip />
        <GtPrograms />
        <GtCulture />
        <GtClinicalAuthority />
        <GtCuisines />
        <GtHealthcare />
        <GtWhoWeServe />
        <GtCtaBand />
      </main>
      <GtFooter />
    </div>
  );
}
