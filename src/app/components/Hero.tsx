import { useTranslations } from "next-intl";
import { ArrowIcon } from "./ArrowIcon";
import { CircularLink } from "./CircularLink";
import { SplitFlapText } from "./SplitFlapText";
import styles from "../page.module.css";

export function Hero() {
  const t = useTranslations("Hero");
  const action = t("action").split("|");

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.heroIndex} data-reveal>
        <span>{t("index")}</span>
        <span>{t("scroll")}</span>
        <ArrowIcon direction="down" />
      </div>

      <div className={styles.heroComposition}>
        <h1 className={styles.heroTitle} id="hero-title">
          <span className={styles.heroIntro} data-reveal>
            {t("line1")}
          </span>
          <SplitFlapText
            className={styles.heroStrong}
            text={t("line2")}
            delay={2}
            interval={8}
            reveal
          />
          <span className={styles.heroLight} data-reveal>
            {t("line3")}
          </span>
          <SplitFlapText
            className={styles.heroStrongAlt}
            text={t("line4")}
            delay={6}
            interval={8}
            reveal
          />
        </h1>

        <div className={styles.heroAction} data-reveal>
          <CircularLink href="#process" direction="down" label={t("actionLabel")}>
            {action[0]}<br />{action[1]}
          </CircularLink>
        </div>

        <div className={styles.heroCopy} data-reveal>
          <p>{t("body1")}</p>
          <p>{t("body2")}</p>
          <strong>{t("tagline")}</strong>
        </div>
      </div>

    </section>
  );
}
