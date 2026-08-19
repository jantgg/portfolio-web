import { useTranslations } from "next-intl";
import { AiSystemLottie } from "./AiSystemLottie";
import { SectionHeader } from "./SectionHeader";
import styles from "../page.module.css";

const aiSteps = ["context", "criteria", "implementation", "evidence"] as const;

export function AiSection() {
  const t = useTranslations("Case.ai");

  return (
    <section className={styles.chapter} id="ai" aria-labelledby="ai-title">
      <SectionHeader index="03" title={t("section")} />
      <article className={`${styles.aiSpotlight} ${styles.aiStandalone}`} data-reveal>
        <div className={styles.aiSpotlightLead}>
          <div className={styles.aiIdentity}>
            <strong>{t("labelPrimary")}</strong>
            <span>{t("labelSecondary")}</span>
          </div>
          <h2 id="ai-title">
            <span>{t("titleLine1")}</span>
            <span>{t("titleLine2")}</span>
          </h2>
          <p>{t("body")}</p>
        </div>
        <ol className={styles.aiFlow} aria-label={t("flowLabel")}>
          {aiSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{t(`steps.${step}`)}</strong>
            </li>
          ))}
        </ol>
        <div className={styles.aiStatement}>
          <AiSystemLottie />
          <blockquote>{t("statement")}</blockquote>
        </div>
      </article>
    </section>
  );
}
