import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeader } from "./SectionHeader";
import styles from "../page.module.css";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className={styles.chapter} id="about" aria-labelledby="about-title">
      <SectionHeader index="06" title={t("section")} />
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCopy}>
          <h2 id="about-title" data-reveal>
            {t("title")}
          </h2>
          <div data-reveal>
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>{t("body3")}</p>
          </div>
          <strong data-reveal>
            {t("statement")}
          </strong>
        </div>
        <figure className={styles.portraitFrame} data-reveal>
          <div className={styles.portraitImage}>
            <Image
              src="/images/portrait.jpg"
              alt={t("portraitAlt")}
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </div>
          <figcaption>{t("caption")}</figcaption>
        </figure>
      </div>
    </section>
  );
}
