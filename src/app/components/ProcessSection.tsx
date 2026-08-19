import { useTranslations } from "next-intl";
import { ChipPlatform } from "./ChipPlatform";
import { SectionHeader } from "./SectionHeader";
import { SystemAssemblyController } from "./SystemAssemblyController";
import styles from "../page.module.css";

const stages = [
  "understand",
  "investigate",
  "connect",
  "build",
  "validate",
  "deliver",
] as const;

export function ProcessSection() {
  const t = useTranslations("Process");

  return (
    <section
      className={`${styles.chapter} ${styles.systemStory}`}
      id="process"
      aria-labelledby="process-title"
    >
      <SectionHeader index="02" title={t("section")} />

      <div className={styles.systemStoryLead}>
        <h2 id="process-title" aria-label={t("titleLabel")} data-reveal>
          {t.rich("title", {
            line: (chunks) => (
              <span className={styles.processTitleLine} aria-hidden="true">
                {chunks}
              </span>
            ),
          })}
        </h2>
        <p data-reveal>{t("intro")}</p>
      </div>

      <div
        className={styles.systemStoryScroll}
        data-system-story
        data-system-stage="0"
        aria-label={t("storyLabel")}
      >
        <SystemAssemblyController />
        <div className={styles.systemStorySticky}>
          <ol className={styles.systemStoryCopies}>
            {stages.map((stage, index) => {
              const tags = t.raw(`steps.${stage}.tags`) as string[];

              return (
                <li className={styles.systemStoryCopy} key={stage}>
                  <div className={styles.systemStoryCopyMeta}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{t(`steps.${stage}.eyebrow`)}</span>
                  </div>
                  <h3>{t(`steps.${stage}.title`)}</h3>
                  <p>{t(`steps.${stage}.body`)}</p>
                  <ul aria-label={t(`steps.${stage}.skillsLabel`)}>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>

          <div className={styles.systemScene} aria-hidden="true">
            <div className={styles.systemPointLight} />
            <ChipPlatform />
          </div>

          <div className={styles.systemStoryProgress} aria-hidden="true">
            <span>01</span>
            <div><i /></div>
            <span>06</span>
          </div>
        </div>
      </div>
    </section>
  );
}
