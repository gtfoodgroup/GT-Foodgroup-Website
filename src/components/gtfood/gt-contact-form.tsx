"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle2, ChevronDown, ShieldAlert } from "lucide-react";
import { tx, useLang } from "./language";

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
  { en: "Health Plan / Social Care Network", es: "Plan de salud / Red de Cuidado Social" },
  { en: "Healthcare Provider / Care Team", es: "Proveedor de salud / equipo de cuidado" },
  { en: "Community Organization", es: "Organización comunitaria" },
  { en: "Food-Service Partnership", es: "Colaboración de servicio de alimentos" },
  { en: "Clinical / RDN Coordination", es: "Coordinación clínica / RDN" },
  { en: "Compliance / Credentialing", es: "Cumplimiento / credenciales" },
  { en: "General", es: "General" },
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const { lang } = useLang();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setError(true);
      return;
    }

    setSending(true);
    setError(false);
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" aria-live="polite" className="py-12 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gt-gold)]/15">
          <CheckCircle2 className="h-8 w-8 text-[var(--gt-gold-deep)]" strokeWidth={1.8} />
        </span>
        <h3 className="font-serif-display mt-6 text-[30px] font-bold text-[var(--gt-green)]">
          {tx(lang, "Thank you.", "Gracias.")}
        </h3>
        <p className="mx-auto mt-3 max-w-[460px] text-[15px] leading-relaxed text-[var(--gt-body)]">
          {tx(lang, "Your message has been received and will be routed to the right team at GT Food Group.", "Recibimos su mensaje y lo enviaremos al equipo correcto de GT Food Group.")}
        </p>
        <p className="mt-4 text-[13px] italic text-[var(--gt-rose)]">
          {tx(lang, "A reminder: please don’t include health information in any follow-up email.", "Un recordatorio: no incluya información de salud en ningún correo de seguimiento.")}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-[var(--gt-green)] px-6 py-3 text-[13.5px] font-bold text-[var(--gt-green)] transition-colors hover:bg-[var(--gt-green)] hover:text-white"
        >
          {tx(lang, "Send another message", "Enviar otro mensaje")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-[14.5px] leading-relaxed text-[var(--gt-body)]">
        {tx(lang, "Share a few details and the right team at GT will pick it up from there. Every inquiry is routed to the desk that owns it.", "Comparta unos datos y el equipo correcto de GT continuará desde ahí. Cada consulta se dirige al escritorio que le corresponde.")}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className={labelCls}>
            {tx(lang, "First Name", "Nombre")} <RequiredMark />
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
            {tx(lang, "Last Name", "Apellido")} <RequiredMark />
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
            {tx(lang, "Organization", "Organización")} <RequiredMark />
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            placeholder={tx(lang, "Organization name", "Nombre de la organización")}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="role-title" className={labelCls}>
            {tx(lang, "Role / Title", "Cargo / título")} <RequiredMark />
          </label>
          <input
            id="role-title"
            name="roleTitle"
            type="text"
            required
            autoComplete="organization-title"
            placeholder={tx(lang, "Role or title", "Cargo o título")}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            {tx(lang, "Email", "Correo electrónico")} <RequiredMark />
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
            {tx(lang, "Inquiry Type", "Tipo de consulta")} <RequiredMark />
          </label>
          <div className="relative">
            <select
              id="inquiry-type"
              name="inquiryType"
              required
              defaultValue=""
              className={`${inputCls} appearance-none pr-11`}
            >
              <option value="">{tx(lang, "Select an inquiry type", "Seleccione un tipo de consulta")}</option>
              {INQUIRY_TYPES.map((item) => (
                <option key={item.en} value={item.en}>
                  {tx(lang, item.en, item.es)}
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
            {tx(lang, "Phone", "Teléfono")}{" "}
            <span className="ml-1 normal-case tracking-normal text-[var(--gt-body)] font-semibold">
              {tx(lang, "(optional)", "(opcional)")}
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={tx(lang, "Optional business phone", "Teléfono de trabajo, opcional")}
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            {tx(lang, "Message", "Mensaje")} <RequiredMark />
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={tx(lang, "Tell us about your organization, the people you serve, and what you're planning.", "Cuéntenos sobre su organización, las personas a quienes sirve y lo que está planeando.")}
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
          {tx(lang, "Do not submit diagnoses, Medicaid IDs, DOB, medical records, or other health information.", "No envíe diagnósticos, identificaciones de Medicaid, fecha de nacimiento, expedientes médicos ni otra información de salud.")}
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={sending}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gt-gold)] px-8 py-4 text-[14px] font-bold text-[var(--gt-green-deep)] transition-colors hover:bg-[var(--gt-gold-deep)] disabled:opacity-60"
        >
          {tx(lang, sending ? "Sending…" : "Send Message", sending ? "Enviando…" : "Enviar mensaje")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-[12.5px] text-[var(--gt-body)]">
          {tx(lang, "Fields marked", "Los campos marcados con")} <RequiredMark /> {tx(lang, "are required.", "son obligatorios.")}
        </p>
      </div>
      {error && (
        <p role="alert" className="mt-4 text-[13.5px] leading-relaxed text-[var(--gt-rose)]">
          {tx(
            lang,
            "Your message could not be sent. Please try again, or email info@gtfoodgroup.com.",
            "No se pudo enviar su mensaje. Inténtelo de nuevo o escriba a info@gtfoodgroup.com.",
          )}
        </p>
      )}
    </form>
  );
}
