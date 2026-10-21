import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import { LegalPage } from "@/components/gtfood/gt-legal-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Terms of Use — GT Food Group",
  description:
    "Terms of use for the GT Food Group website — the informational scope of this site, how program details are governed, and the ground rules for using our forms and content.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <LegalPage
          eyebrow="Legal"
          title="Terms of Use"
          intro="These terms cover the use of this website. They are intentionally short, because the site has one job: to introduce GT Food Group accurately and start the right conversations."
          sections={[
            {
              heading: "Informational purpose",
              body: [
                "This website describes GT Food Group, our approach to food and nutrition, and the kinds of organizations we partner with. It is provided for general information only. Nothing on this site is medical advice, clinical guidance or an offer of care, and nothing here should be used to make decisions about an individual's health or treatment.",
                "GT does not determine eligibility or enroll members directly. Members and families reach GT's services through their Social Care Network or care team, and every service is delivered under an authorization from those partners.",
              ],
            },
            {
              heading: "Program details live in signed agreements",
              body: [
                "Menus, coverage, service levels and requirements shown on this site — including photography and dishes — are illustrative introductions, not commitments. Actual program details are established in signed program agreements between GT and its partners, including supervised diet orders and documentation workflows.",
              ],
            },
            {
              heading: "Content and marks",
              body: [
                "All content on this site — text, photography, design and the GT Food Group name and leaf mark — belongs to GT Food Group LLC or is used with permission. Books, publications and media names mentioned on the clinical authority pages are the trademarks of their respective owners; they appear only to describe documented professional history, not as endorsements of this website.",
                "You may share links to this site freely. Reproducing its content for commercial purposes requires written permission.",
              ],
            },
            {
              heading: "Using our forms responsibly",
              body: [
                "When you use the inquiry form or write to us, please keep health information out of your message. Do not submit diagnoses, Medicaid IDs, dates of birth, medical records or other health information through public forms or email. Inquiries that include sensitive health information may be handled in line with our privacy practices, which can limit what we can do with the message.",
              ],
            },
          ]}
          note="Questions about these terms? Write to hello@gtfoodgroup.com or reach the compliance desk at compliance@gtfoodgroup.com."
        />
      </main>
      <GtFooter />
    </div>
  );
}
