import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import GtNotFound from "@/components/gtfood/gt-not-found";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Page not found — GT Food Group",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1 flex items-center">
        <GtNotFound />
      </main>
      <GtFooter />
    </div>
  );
}
