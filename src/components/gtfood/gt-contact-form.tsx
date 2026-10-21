"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, ShieldAlert } from "lucide-react";

/*
 * Partnership inquiry form.
 *
 * Field structure intentionally mirrors a native Wix Form (labels above
 * inputs, standard text/email/tel/select/textarea controls, required flags)
 * so it can be reproduced 1:1 as a Wix Form when the site migrates.
 *
 * Fields (exactly as approved):
 *   First name* · Last name* · Organization* · Role/title* ·
 *   Email* · Inquiry type* · Phone (optional) · Message
 *
 * The form deliberately collects NO health information. The required PHI
 * notice is rendered above the submit action.
 */

const INQUIRY_TYPES = [
  "Health Plan / Social Care Network",
  "Healthcare Provider / Care Team",
  "Community Organization",
  "Food-Service Partnership",
  "Clinical / RDN Coordination",
  "Compliance / Credentialing",
  "General",
];

const labelCls =
  "block text-[11.5px] font-bold tracking-[0.12em] uppercase text-[var(--gt-green)]";
const inputCls =
  "mt-2 w-full rounded-md border border-[var(--gt-green)]/20 bg-white px-4 py-3 text-[14.5px] text-[var(--gt-ink)] placeholder:text-[var(--gt-body)]/55 focus:outline-none focus:border-[var(--gt-green)] focus:ring-2 focus:ring-[var(--gt-green)]/15 transition";

function RequiredMark() {
  return (
    <span className="text-[var(--gt-rose)]" aria-hidden="true">
      *
    </span>
  );
}

export default function PartnershipForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" aria-live="polite" className="py-12 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gt-gold)]/15">
          <CheckCircle2 className="h-8 w-8 text-[var(--gt-gold-deep)]" strokeWidth={1.8} />
        </span>
        <h3 className="font-serif-display mt-6 text-[30px] font-bold text-[var(--gt-green)]">
          Thank you.
        </h3>
        <p className="mx-auto mt-3 max-w-[460px] text-[15px] leading-relaxed text-[var(--gt-body)]">
          Your message has been received and will be routed to the right team
          at GT Food Group.
        </p>
        <p className="mt-4 text-[13px] italic text-[var(--gt-rose)]">
          A reminder: please don&rsquo;t include health information in any
          follow-up email.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-[var(--gt-green)] px-6 py-3 text-[13.5px] font-bold text-[var(--gt-green)] transition-colors hover:bg-[var(--gt-green)] hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-[14.5px] leading-relaxed text-[var(--gt-body)]">
        Share a few details and the right team at GT will pick it up from
        there. Every inquiry is routed to the desk that owns it.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className={labelCls}>
            First Name <RequiredMark />
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Jane"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="last-name" className={labelCls}>
            Last Name <RequiredMark />
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Rivera"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="organization" className={labelCls}>
            Organization <RequiredMark />
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            placeholder="Organization name"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="role-title" className={labelCls}>
            Role / Title <RequiredMark />
          </label>
          <input
            id="role-title"
            name="roleTitle"
            type="text"
            required
            autoComplete="organization-title"
            placeholder="Role or title"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <RequiredMark />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@organization.org"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inquiry-type" className={labelCls}>
            Inquiry Type <RequiredMark />
          </label>
          <div className="relative">
            <select
              id="inquiry-type"
              name="inquiryType"
              required
              defaultValue=""
              className={`${inputCls} appearance-none pr-11`}
            >
              <option value="">Select an inquiry type</option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4.5 w-4.5 -translate-y-1/2 text-[var(--gt-green)]"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className={labelCls}>
            Phone{" "}
            <span className="ml-1 normal-case tracking-normal text-[var(--gt-body)] font-semibold">
              (optional)
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional business phone"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Message <RequiredMark />
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your organization, the people you serve, and what you're planning."
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <div
        role="note"
        className="mt-6 flex gap-3 rounded-md border border-[var(--gt-rose)]/30 bg-[var(--gt-rose)]/[0.06] p-4"
      >
        <ShieldAlert
          className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gt-rose)]"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <p className="text-[13px] leading-relaxed text-[var(--gt-ink)]/85">
          Do not submit diagnoses, Medicaid IDs, DOB, medical records, or
          other health information.
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gt-gold)] px-8 py-4 text-[14px] font-bold text-[var(--gt-green-deep)] transition-colors hover:bg-[var(--gt-gold-deep)]"
        >
          Send Message <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-[12.5px] text-[var(--gt-body)]">
          Fields marked <RequiredMark /> are required.
        </p>
      </div>
    </form>
  );
}
