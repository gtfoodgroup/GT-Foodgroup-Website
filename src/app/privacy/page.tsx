import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import { LegalPage } from "@/components/gtfood/gt-legal-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — GT Food Group",
  description:
    "How GT Food Group handles information submitted through this public website — including what our inquiry form collects, and why health information never belongs in public forms or email.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <LegalPage
          eyebrow="Legal"
          title="Privacy Policy"
          intro="This page explains how GT Food Group handles information submitted through this public website. It reflects how we operate: privacy-conscious, plain-spoken and designed around the people we serve."
          sections={[
            {
              heading: "What this website collects",
              body: [
                "Our inquiry form asks for a small, specific set of details: your name, organization, role or title, email address, an optional phone number, an inquiry type and a message. That is all. The form exists to start partnership conversations — it is not a clinical intake and it is not a member enrollment tool.",
                "We use inquiry details for one purpose: routing your message to the team that can respond to it. Inquiry details are not used to build marketing lists.",
              ],
            },
            {
              heading: "Health information stays out of public channels",
              body: [
                "Please do not submit diagnoses, Medicaid IDs, dates of birth, medical records or other health information through this form — or by email. Public forms and email are not the right home for sensitive health information.",
                "Members and families receive nutrition services through authorization from their Social Care Network or care team. Health information is handled inside those authorized relationships, under the program's documentation and privacy practices — never through this website.",
              ],
            },
            {
              heading: "How routing works",
              body: [
                "Partnership inquiries route to our partnerships desk, clinical and RDN coordination inquiries route to our clinical team, and compliance or credentialing inquiries route to our compliance desk. General inquiries reach our main office. Each desk receives only what you chose to share.",
              ],
            },
            {
              heading: "Member dignity and discretion",
              body: [
                "This website does not publish member information and does not operate public directories of the people or families GT serves. Deliveries, records and communications are handled with discretion at every step of the authorized service workflow.",
              ],
            },
          ]}
          note="Questions about this policy? Write to hello@gtfoodgroup.com or use the inquiry form — and please keep health information out of both."
        />
      </main>
      <GtFooter />
    </div>
  );
}
