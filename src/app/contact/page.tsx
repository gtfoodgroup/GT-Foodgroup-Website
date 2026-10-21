import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import {
  ContactHero,
  ContactMain,
  ContactClosing,
} from "@/components/gtfood/gt-contact-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Contact — GT Food Group",
  description:
    "Contact GT Food Group about partnerships, clinical questions, or compliance. Business inquiries only — please do not submit health information.",
  keywords: [
    "contact GT Food Group",
    "partner with GT Food Group",
    "food service partnership New York",
    "partnership inquiry",
    "medically tailored meals partner",
    "HRSN food provider contact",
    "clinical nutrition partnership",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactMain />
        <ContactClosing />
      </main>
      <GtFooter />
    </div>
  );
}
