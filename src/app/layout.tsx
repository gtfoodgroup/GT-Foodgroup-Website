import type { Metadata } from "next";
import { cookies } from "next/headers";
import { EB_Garamond, Public_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { LanguageProvider, type Lang } from "@/components/gtfood/language";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPTION =
  "Clinically rigorous, culturally authentic, fresh-prepared meals. GT Food Group brings together clinical nutrition and culturally relevant food to serve New York communities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GT Food Group — Established in New York",
  description: DESCRIPTION,
  keywords: ["medically tailored meals", "New York", "food as medicine", "culturally relevant meals"],
  openGraph: {
    type: "website",
    siteName: "GT Food Group",
    locale: "en_US",
    title: "GT Food Group — Established in New York",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "GT Food Group — Established in New York",
    description: DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jar = await cookies();
  const initialLang: Lang = jar.get("gt-lang")?.value === "es" ? "es" : "en";

  return (
    <html lang={initialLang} suppressHydrationWarning>
      <body
        className={`${ebGaramond.variable} ${publicSans.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
