import { useTranslations } from "next-intl";
import { CircularLink } from "./CircularLink";
import styles from "../page.module.css";

export function ContactSection() {
  const t = useTranslations("Contact");
  const action = t("action").split("|");

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.contactLine} aria-hidden="true" />
      <div className={styles.contactContent}>
        <p className={styles.contactEyebrow}>{t("eyebrow")}</p>
        <h2 className={styles.contactTitle} id="contact-title">
          {t("title")}
        </h2>
        <div className={styles.contactAction}>
          <CircularLink
            href="mailto:jantgomezgil@hotmail.com"
            label={t("actionLabel")}
            direction="up-right"
          >
            {action[0]}<br />{action[1]}
          </CircularLink>
        </div>
      </div>
      <footer className={styles.contactFooter}>
        <span>{t("tagline")}</span>
        <div>
          <a href="https://www.linkedin.com/in/jant-gg/" target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a href="https://github.com/jantgg" target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a href="mailto:jantgomezgil@hotmail.com">EMAIL</a>
        </div>
      </footer>
    </section>
  );
}
