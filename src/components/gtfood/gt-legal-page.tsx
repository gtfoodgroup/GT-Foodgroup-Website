import { Eyebrow } from "./gt-programs";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  note?: string;
}

export function LegalPage({ eyebrow, title, intro, sections, note }: LegalPageProps) {
  return (
    <>
      <section className="border-b border-[var(--gt-border)] bg-[var(--gt-cream)]">
        <div className="mx-auto max-w-[880px] px-6 py-14 lg:py-20">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-serif-display mt-4 text-[34px] font-bold leading-[1.12] text-[var(--gt-green)] sm:text-[42px] lg:text-[50px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[660px] text-[16px] leading-relaxed text-[var(--gt-body)]">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          {sections.map((section) => (
            <div key={section.heading} className="mt-12 first:mt-0">
              <h2 className="font-serif-display text-[24px] font-bold leading-snug text-[var(--gt-green)]">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-[15px] leading-relaxed text-[var(--gt-body)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {note && (
            <p className="mt-14 rounded-md border border-[var(--gt-border)] bg-[var(--gt-cream)] p-5 text-[13.5px] leading-relaxed text-[var(--gt-body)]">
              {note}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
