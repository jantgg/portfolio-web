import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { MotionController } from "../components/MotionController";
import { SiteHeader } from "../components/SiteHeader";
import { routing } from "@/i18n/routing";
import "../globals.css";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const themeScript = `
  (function () {
    try {
      var stored = localStorage.getItem("portfolio-theme:v1");
      var theme = stored === "light" || stored === "dark"
        ? stored
        : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      document.documentElement.dataset.theme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    authors: [{ name: "Juan Antonio Gómez Gil" }],
    creator: "Juan Antonio Gómez Gil",
    alternates: {
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_GB",
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#040200" },
    { media: "(prefers-color-scheme: light)", color: "#f0ece2" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Navigation" });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a className="skipLink" href="#main-content">
          {t("skip")}
        </a>
        <MotionController />
        <div className="ambientBackground" aria-hidden="true">
          <div className="ambientGrid" />
          <div className="ambientBeam ambientBeamOne" />
          <div className="ambientBeam ambientBeamTwo" />
          <div className="ambientBeam ambientBeamThree" />
          <div className="ambientNoise" />
        </div>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
