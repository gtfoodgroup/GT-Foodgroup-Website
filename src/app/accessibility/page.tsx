import type { Metadata } from "next";
import GtHeader from "@/components/gtfood/gt-header";
import { LegalPage } from "@/components/gtfood/gt-legal-page";
import { GtFooter } from "@/components/gtfood/gt-serve-footer";

export const metadata: Metadata = {
  title: "Accessibility — GT Food Group",
  description:
    "GT Food Group's commitment to an accessible website: what we build in, how we test, and how to report a barrier so we can fix it.",
};

export default function AccessibilityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gt-cream)]">
      <GtHeader />
      <main className="flex-1">
        <LegalPage
          eyebrow="Legal"
          title="Accessibility"
          intro="GT Food Group is built for families, care teams and partners across New York — which means this website should work for as many people as possible, on as many devices as possible."
          sections={[
            {
              heading: "Our commitment",
              body: [
                "We aim for an experience that is perceivable, operable, understandable and robust, following the spirit of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as our design target. Accessibility is an ongoing effort, not a one-time certification, and we treat every report of a barrier as a priority fix.",
              ],
            },
            {
              heading: "What we build in",
              body: [
                "The site uses semantic landmarks and heading structure, labeled form fields with clear required-field notices, visible keyboard focus states, meaningful alt text on imagery, and responsive layouts that hold from large desktop screens down to small phones. Cultural and clinical content is written in plain language, with care notes placed exactly where decisions are made.",
              ],
            },
            {
              heading: "Report a barrier",
              body: [
                "If anything on this site is hard to see, reach, read or use, tell us. Write to hello@gtfoodgroup.com or use the inquiry form and choose General. Describe the page, the device you were using and what got in the way — we will follow up. Please do not include health information in your report.",
              ],
            },
          ]}
          note="Accessibility reports reach a real person on our team — and they get treated the way we treat every standard we publish: seriously."
        />
      </main>
      <GtFooter />
    </div>
  );
}
