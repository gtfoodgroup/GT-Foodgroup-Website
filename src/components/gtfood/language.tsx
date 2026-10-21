"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type Lang = "en" | "es";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageValue>({
  lang: "en",
  setLang: () => {},
});

export function tx(lang: Lang, en: string, es: string) {
  return lang === "es" ? es : en;
}

const TITLES: Record<string, { en: string; es: string }> = {
  "/": {
    en: "GT Food Group — Established in New York",
    es: "GT Food Group — Establecida en Nueva York",
  },
  "/programs": {
    en: "Programs — GT Food Group",
    es: "Programas — GT Food Group",
  },
  "/menus": {
    en: "Menus & Culture — GT Food Group",
    es: "Menús y cultura — GT Food Group",
  },
  "/clinical-authority": {
    en: "Clinical Authority — GT Food Group",
    es: "Autoridad clínica — GT Food Group",
  },
  "/who-we-serve": {
    en: "Who We Serve — GT Food Group",
    es: "A quién servimos — GT Food Group",
  },
  "/our-standards": {
    en: "Our Standards — GT Food Group",
    es: "Nuestros estándares — GT Food Group",
  },
  "/about": {
    en: "About — GT Food Group",
    es: "Nosotros — GT Food Group",
  },
  "/contact": {
    en: "Contact — GT Food Group",
    es: "Contacto — GT Food Group",
  },
  "/privacy": {
    en: "Privacy Policy — GT Food Group",
    es: "Política de privacidad — GT Food Group",
  },
  "/terms": {
    en: "Terms of Use — GT Food Group",
    es: "Términos de uso — GT Food Group",
  },
  "/accessibility": {
    en: "Accessibility — GT Food Group",
    es: "Accesibilidad — GT Food Group",
  },
};

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const pathname = usePathname();

  const setLang = (next: Lang) => {
    setLangState(next);
    document.cookie = `gt-lang=${next};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    const title = TITLES[pathname];
    if (title) document.title = title[lang];
  }, [lang, pathname]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export function LanguageTabs() {
  const { lang, setLang } = useLang();
  const tab = (id: Lang, label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={lang === id}
      onClick={() => setLang(id)}
      className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.08em] transition-colors ${
        lang === id
          ? "bg-[var(--gt-gold)] text-[var(--gt-green-deep)]"
          : "text-white/80 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      role="tablist"
      aria-label={tx(lang, "Language", "Idioma")}
      className="flex items-center gap-0.5 rounded-full bg-white/10 p-0.5"
    >
      {tab("en", "English")}
      {tab("es", "Español")}
    </div>
  );
}
