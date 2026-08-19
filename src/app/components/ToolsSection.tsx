import { useTranslations } from "next-intl";
import { SectionHeader } from "./SectionHeader";
import { SplitFlapText } from "./SplitFlapText";
import styles from "../page.module.css";

export function ToolsSection() {
  const t = useTranslations("Tools");
  const tools = t.raw("items") as string[];

  return (
    <section className={styles.chapter} id="tools" aria-labelledby="tools-title">
      <SectionHeader index="05" title={t("section")} />
      <div className={styles.toolsStatement}>
        <p data-reveal>{t("intro")}</p>
        <div className={styles.toolsLine} data-reveal aria-label={t("listLabel")}>
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <h2 id="tools-title" data-reveal>
          <SplitFlapText text={t("title")} delay={3} duration={90} interval={5} />
          <span className={styles.toolsStatementStrong}>{t("statement")}</span>
        </h2>
      </div>
    </section>
  );
}
