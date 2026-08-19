import styles from "../page.module.css";

type SectionHeaderProps = {
  index: string;
  title: string;
  total?: string;
};

export function SectionHeader({ index, title, total = "07" }: SectionHeaderProps) {
  return (
    <header className={styles.sectionHeader} data-reveal>
      <span>{index} /</span>
      <span className={styles.sectionHeaderTitle}>{title}</span>
      <span>/ {total}</span>
    </header>
  );
}
