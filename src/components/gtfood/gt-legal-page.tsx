"use client";

import { Eyebrow } from "./gt-programs";
import { useLang, type Lang } from "./language";

type LegalCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  note: string;
};

const PAGES: Record<"privacy" | "terms" | "accessibility", Record<Lang, LegalCopy>> = {
  privacy: {
    en: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      intro:
        "This page explains how GT Food Group handles information submitted through this public website. It reflects how we operate: privacy-conscious, plain-spoken and designed around the people we serve.",
      sections: [
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
      ],
      note: "Questions about this policy? Write to info@gtfoodgroup.com or use the inquiry form — and please keep health information out of both.",
    },
    es: {
      eyebrow: "Legal",
      title: "Política de privacidad",
      intro:
        "Esta página explica cómo GT Food Group maneja la información enviada a través de este sitio público. Refleja cómo operamos: con atención a la privacidad, en lenguaje claro y pensando en las personas a quienes servimos.",
      sections: [
        {
          heading: "Qué recoge este sitio",
          body: [
            "Nuestro formulario de consulta pide un conjunto pequeño y específico de datos: su nombre, organización, cargo o título, correo electrónico, un teléfono opcional, un tipo de consulta y un mensaje. Eso es todo. El formulario existe para iniciar conversaciones de colaboración. No es una admisión clínica ni una herramienta de inscripción de miembros.",
            "Usamos esos datos con un solo fin: dirigir su mensaje al equipo que puede responder. No se usan para crear listas de mercadeo.",
          ],
        },
        {
          heading: "La información de salud queda fuera de los canales públicos",
          body: [
            "No envíe diagnósticos, identificaciones de Medicaid, fechas de nacimiento, expedientes médicos u otra información de salud por este formulario ni por correo electrónico. Los formularios públicos y el correo no son el lugar para información de salud sensible.",
            "Los miembros y las familias reciben servicios de nutrición mediante la autorización de su Red de Cuidado Social o equipo de cuidado. La información de salud se maneja dentro de esas relaciones autorizadas, según las prácticas de documentación y privacidad del programa, nunca a través de este sitio.",
          ],
        },
        {
          heading: "Cómo funciona el enrutamiento",
          body: [
            "Las consultas de colaboración van al escritorio de socios, las de coordinación clínica y de RDN van al equipo clínico, y las de cumplimiento o credenciales van al escritorio de cumplimiento. Las consultas generales llegan a la oficina principal. Cada escritorio recibe solo lo que usted eligió compartir.",
          ],
        },
        {
          heading: "Dignidad y discreción del miembro",
          body: [
            "Este sitio no publica información de miembros ni directorios públicos de las personas o familias a quienes GT sirve. Las entregas, los registros y las comunicaciones se manejan con discreción en cada paso del flujo de servicio autorizado.",
          ],
        },
      ],
      note: "¿Preguntas sobre esta política? Escriba a info@gtfoodgroup.com o use el formulario de consulta, y mantenga la información de salud fuera de ambos.",
    },
  },
  terms: {
    en: {
      eyebrow: "Legal",
      title: "Terms of Use",
      intro:
        "These terms cover the use of this website. They are intentionally short, because the site has one job: to introduce GT Food Group accurately and start the right conversations.",
      sections: [
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
      ],
      note: "Questions about these terms? Write to info@gtfoodgroup.com.",
    },
    es: {
      eyebrow: "Legal",
      title: "Términos de uso",
      intro:
        "Estos términos cubren el uso de este sitio. Son breves a propósito, porque el sitio tiene un trabajo: presentar a GT Food Group con exactitud e iniciar las conversaciones correctas.",
      sections: [
        {
          heading: "Propósito informativo",
          body: [
            "Este sitio describe a GT Food Group, nuestro enfoque de alimentos y nutrición, y los tipos de organizaciones con las que colaboramos. Se ofrece solo como información general. Nada en este sitio es consejo médico, orientación clínica ni una oferta de cuidado, y nada aquí debe usarse para decidir sobre la salud o el tratamiento de una persona.",
            "GT no determina la elegibilidad ni inscribe a los miembros directamente. Los miembros y las familias llegan a los servicios de GT a través de su Red de Cuidado Social o equipo de cuidado, y cada servicio se entrega bajo una autorización de esos socios.",
          ],
        },
        {
          heading: "Los detalles del programa viven en acuerdos firmados",
          body: [
            "Los menús, la cobertura, los niveles de servicio y los requisitos que se muestran en este sitio —incluidas la fotografía y los platos— son introducciones ilustrativas, no compromisos. Los detalles reales del programa se establecen en acuerdos firmados entre GT y sus socios, incluidas las órdenes dietéticas supervisadas y los flujos de documentación.",
          ],
        },
        {
          heading: "Contenido y marcas",
          body: [
            "Todo el contenido de este sitio —texto, fotografía, diseño y el nombre y la marca de la hoja de GT Food Group— pertenece a GT Food Group LLC o se usa con permiso. Los libros, las publicaciones y los nombres de medios mencionados en las páginas de autoridad clínica son marcas de sus respectivos dueños; aparecen solo para describir una trayectoria profesional documentada, no como un respaldo de este sitio.",
            "Puede compartir enlaces a este sitio con libertad. Reproducir su contenido con fines comerciales requiere permiso por escrito.",
          ],
        },
        {
          heading: "Usar nuestros formularios con responsabilidad",
          body: [
            "Cuando use el formulario de consulta o nos escriba, mantenga la información de salud fuera de su mensaje. No envíe diagnósticos, identificaciones de Medicaid, fechas de nacimiento, expedientes médicos u otra información de salud por formularios públicos o correo electrónico. Las consultas que incluyan información de salud sensible pueden manejarse según nuestras prácticas de privacidad, lo que puede limitar lo que podemos hacer con el mensaje.",
          ],
        },
      ],
      note: "¿Preguntas sobre estos términos? Escriba a info@gtfoodgroup.com.",
    },
  },
  accessibility: {
    en: {
      eyebrow: "Legal",
      title: "Accessibility",
      intro:
        "GT Food Group is built for families, care teams and partners across New York — which means this website should work for as many people as possible, on as many devices as possible.",
      sections: [
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
            "If anything on this site is hard to see, reach, read or use, tell us. Write to info@gtfoodgroup.com or use the inquiry form and choose General. Describe the page, the device you were using and what got in the way — we will follow up. Please do not include health information in your report.",
          ],
        },
      ],
      note: "Accessibility reports reach a real person on our team — and they get treated the way we treat every standard we publish: seriously.",
    },
    es: {
      eyebrow: "Legal",
      title: "Accesibilidad",
      intro:
        "GT Food Group está hecho para familias, equipos de cuidado y socios en todo Nueva York. Por eso este sitio debe funcionar para tantas personas como sea posible, en tantos dispositivos como sea posible.",
      sections: [
        {
          heading: "Nuestro compromiso",
          body: [
            "Buscamos una experiencia perceptible, operable, comprensible y robusta, siguiendo el espíritu de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 Nivel AA como meta de diseño. La accesibilidad es un esfuerzo continuo, no una certificación de una sola vez, y tratamos cada reporte de una barrera como una corrección prioritaria.",
          ],
        },
        {
          heading: "Lo que incorporamos",
          body: [
            "El sitio usa puntos de referencia semánticos y una estructura de encabezados, campos de formulario etiquetados con avisos claros de lo que es obligatorio, estados visibles de foco del teclado, texto alternativo significativo en las imágenes y diseños que se adaptan desde pantallas grandes hasta teléfonos pequeños. El contenido cultural y clínico está escrito en lenguaje claro, con las notas de cuidado en el lugar exacto donde se toman las decisiones.",
          ],
        },
        {
          heading: "Informe una barrera",
          body: [
            "Si algo en este sitio es difícil de ver, alcanzar, leer o usar, díganoslo. Escriba a info@gtfoodgroup.com o use el formulario de consulta y elija General. Describa la página, el dispositivo que usaba y qué se interpuso. Le daremos seguimiento. No incluya información de salud en su reporte.",
          ],
        },
      ],
      note: "Los reportes de accesibilidad llegan a una persona real de nuestro equipo, y se tratan como tratamos cada estándar que publicamos: con seriedad.",
    },
  },
};

export function LegalPage({ page }: { page: keyof typeof PAGES }) {
  const { lang } = useLang();
  const copy = PAGES[page][lang];

  return (
    <>
      <section className="border-b border-[var(--gt-border)] bg-[var(--gt-cream)]">
        <div className="mx-auto max-w-[880px] px-6 py-14 lg:py-20">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h1 className="font-serif-display mt-4 text-[34px] font-bold leading-[1.12] text-[var(--gt-green)] sm:text-[42px] lg:text-[50px]">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-[660px] text-[16px] leading-relaxed text-[var(--gt-body)]">
            {copy.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          {copy.sections.map((section) => (
            <div key={section.heading} className="mt-12 first:mt-0">
              <h2 className="font-serif-display text-[24px] font-bold leading-snug text-[var(--gt-green)]">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-[15px] leading-relaxed text-[var(--gt-body)]">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="mt-14 rounded-md border border-[var(--gt-border)] bg-[var(--gt-cream)] p-5 text-[13.5px] leading-relaxed text-[var(--gt-body)]">
            {copy.note}
          </p>
        </div>
      </section>
    </>
  );
}
