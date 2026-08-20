import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import styles from "../page.module.css";

const navigation = [
  { hash: "#process", key: "process" },
  { hash: "#case-study", key: "case" },
  { hash: "#about", key: "about" },
] as const;

export function SiteHeader() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <header className={styles.siteHeader}>
      <Link className={styles.brand} href={`/${locale}#top`} aria-label={t("home")}>
        JANTGG.
      </Link>
      <nav className={styles.siteNavigation} aria-label={t("label")}>
        {navigation.map((item) => (
          <Link key={item.hash} href={`/${locale}${item.hash}`}>
            {t(item.key)}
          </Link>
        ))}
      </nav>
      <div className={styles.headerControls}>
        <LocaleSwitcher currentLocale={locale} label={t("language")} />
        <ThemeToggle label={t("theme")} />
        <Link className={styles.headerContact} href={`/${locale}#contact`}>
          {t("contact")}
        </Link>
      </div>
    </header>
  );
}
