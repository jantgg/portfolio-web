import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowIcon } from "./ArrowIcon";
import { SectionHeader } from "./SectionHeader";
import styles from "../page.module.css";

const cases = ["hic", "figma", "racing"] as const;

export function CaseStudySection() {
  const t = useTranslations("Case");
  const locale = useLocale();

  return (
    <section
      className={`${styles.chapter} ${styles.caseStudy}`}
      id="case-study"
      aria-labelledby="case-title"
    >
      <SectionHeader index="04" title={t("section")} />
      <div className={styles.caseLead}>
        <span data-reveal>{t("eyebrow")}</span>
        <h2 id="case-title" data-reveal>
          {t("title")}
        </h2>
        <p data-reveal>{t("intro")}</p>
      </div>

      <div className={styles.caseIndex}>
        {cases.map((caseKey, index) => (
          <article
            className={`${styles.caseCard} ${index === 0 ? styles.caseCardFeatured : ""}`}
            key={caseKey}
            data-reveal
          >
            <div className={styles.caseCardMeta}>
              <span>{t(`items.${caseKey}.index`)}</span>
              <span>{t(`items.${caseKey}.label`)}</span>
            </div>
            <h3>{t(`items.${caseKey}.title`)}</h3>
            <p>{t(`items.${caseKey}.body`)}</p>
            <div className={styles.caseCardFooter}>
              <span>{t(`items.${caseKey}.result`)}</span>
              <Link href={`/${locale}/cases/${caseKey}`}>
                {t(`items.${caseKey}.link`)}
                <ArrowIcon direction="up-right" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
