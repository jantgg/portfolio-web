import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { ContactSection } from "@/app/components/ContactSection";
import { routing } from "@/i18n/routing";
import styles from "@/app/page.module.css";

const caseSlugs = ["hic", "figma", "racing"] as const;
type CaseSlug = (typeof caseSlugs)[number];

const systemItems: Record<CaseSlug, readonly string[]> = {
  hic: ["context", "criteria", "docs", "evidence", "map"],
  figma: ["library", "composition", "data", "transform", "delivery"],
  racing: ["identity", "sync", "model", "experience", "signals"],
};

const flowSteps = [
  "conversation",
  "constraints",
  "criteria",
  "implementation",
  "validation",
  "evidence",
] as const;

type CasePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function isCaseSlug(value: string): value is CaseSlug {
  return caseSlugs.includes(value as CaseSlug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isCaseSlug(slug)) notFound();

  const t = await getTranslations({ locale, namespace: `CaseDetails.${slug}` });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/cases/${slug}`,
      languages: {
        es: `/es/cases/${slug}`,
        en: `/en/cases/${slug}`,
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "article",
      locale: locale === "es" ? "es_ES" : "en_GB",
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isCaseSlug(slug)) notFound();

  const t = await getTranslations({ locale, namespace: `CaseDetails.${slug}` });
  const common = await getTranslations({ locale, namespace: "CaseDetails.common" });
  const overview = await getTranslations({ locale, namespace: "Case" });
  const otherCases = caseSlugs.filter((item) => item !== slug);

  return (
    <main className={styles.page} id="main-content">
      <article className={`${styles.caseDetail} ${slug === "hic" ? styles.caseDetailFeatured : ""}`}>
        <header className={styles.caseDetailHero} id="top">
          <Link className={styles.caseBackLink} href={`/${locale}#case-study`}>
            <ArrowIcon direction="left" />
            {common("back")}
          </Link>
          <div className={styles.caseDetailOverline} data-reveal>
            <span>{t("index")}</span>
            <span>{common("overview")}</span>
          </div>
          <p className={styles.caseDetailLabel} data-reveal>{t("label")}</p>
          <h1 data-reveal>{t("title")}</h1>
          <p className={styles.caseDetailIntro} data-reveal>{t("intro")}</p>

          <dl className={styles.caseFacts} data-reveal>
            {(["scope", "role", "focus"] as const).map((fact) => (
              <div key={fact}>
                <dt>{t(`facts.${fact}Label`)}</dt>
                <dd>{t(`facts.${fact}`)}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className={styles.caseNarrative} aria-labelledby="problem-title">
          <p data-reveal>{common("problem")}</p>
          <h2 id="problem-title" data-reveal>{t("problemTitle")}</h2>
          <div data-reveal>
            <p>{t("problemBody1")}</p>
            <p>{t("problemBody2")}</p>
          </div>
        </section>

        <section className={styles.caseSystem} aria-labelledby="system-title">
          <div className={styles.caseSystemLead}>
            <p data-reveal>{common("system")}</p>
            <h2 id="system-title" data-reveal>{t("systemTitle")}</h2>
            <p data-reveal>{t("systemIntro")}</p>
          </div>
          <ol className={styles.caseSystemGrid}>
            {systemItems[slug].map((item, index) => (
              <li key={item} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{t(`systemItems.${item}.title`)}</h3>
                <p>{t(`systemItems.${item}.body`)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.caseDetailFlow} aria-label={t("flowLabel")} data-reveal>
          <p>{t("flowLabel")}</p>
          <ol>
            {flowSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{t(`flow.${step}`)}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.caseDecision} aria-labelledby="decisions-title">
          <p data-reveal>{common("decisions")}</p>
          <div data-reveal>
            <h2 id="decisions-title">{t("decisionsTitle")}</h2>
            <p>{t("decisionsBody")}</p>
          </div>
        </section>

        <section className={styles.caseOutcome} aria-labelledby="result-title">
          <p data-reveal>{common("result")}</p>
          <h2 id="result-title" data-reveal>{t("resultTitle")}</h2>
          <p data-reveal>{t("resultBody")}</p>
        </section>

        <aside className={styles.caseConfidentiality} data-reveal>
          <strong>{common("confidentiality")}</strong>
          <p>{common("confidentialityBody")}</p>
        </aside>

        <nav className={styles.otherCases} aria-label={common("other")}>
          <p data-reveal>{common("other")}</p>
          <div>
            {otherCases.map((other) => (
              <Link href={`/${locale}/cases/${other}`} key={other} data-reveal>
                <span>{overview(`items.${other}.label`)}</span>
                <strong>{overview(`items.${other}.title`)}</strong>
                <span className={styles.otherCaseAction}>
                  {common("read")}
                  <ArrowIcon direction="up-right" />
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </article>
      <ContactSection />
    </main>
  );
}
