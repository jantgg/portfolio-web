import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { AiSystemLottie } from "./AiSystemLottie";
import { SectionHeader } from "./SectionHeader";
import styles from "../page.module.css";

const aiSteps = ["context", "criteria", "implementation", "evidence"] as const;

type AiContentProps = {
  embedded?: boolean;
};

export function AiContent({ embedded = false }: AiContentProps) {
  const locale = useLocale();
  const t = useTranslations("Case.ai");

  return (
    <article
      className={`${styles.aiSpotlight} ${
        embedded ? styles.aiEmbedded : styles.aiStandalone
      }`}
      data-reveal={embedded ? undefined : ""}
    >
      <div className={styles.aiSpotlightLead}>
        <div className={styles.aiIdentity}>
          <Image
            className={styles.aiMark}
            src={`/images/ai-mark-${locale}.svg`}
            alt={t("labelPrimary")}
            width={1112}
            height={685}
            unoptimized
          />
        </div>
        <h2 id="ai-title">
          <span>{t("titleLine1")}</span>
          <span>{t("titleLine2")}</span>
        </h2>
      </div>
      <ol className={styles.aiFlow} aria-label={t("flowLabel")}>
        {aiSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{t(`steps.${step}.title`)}</strong>
              <p>{t(`steps.${step}.description`)}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className={styles.aiStatement}>
        {embedded ? null : <AiSystemLottie />}
        <blockquote>{t("statement")}</blockquote>
      </div>
    </article>
  );
}

export function AiSection() {
  const t = useTranslations("Case.ai");

  return (
    <section className={styles.chapter} id="ai" aria-labelledby="ai-title">
      <SectionHeader index="03" title={t("section")} />
      <AiContent />
    </section>
  );
}
