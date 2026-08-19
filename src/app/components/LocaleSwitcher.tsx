"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LocaleSwitcherProps = {
  currentLocale: string;
  label: string;
};

const locales = ["es", "en"] as const;

export function LocaleSwitcher({ currentLocale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();

  function pathFor(locale: (typeof locales)[number]) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="languageSwitch" aria-label={label}>
      {locales.map((locale, index) => (
        <span key={locale}>
          {index > 0 ? <span aria-hidden="true"> / </span> : null}
          <Link
            href={pathFor(locale)}
            hrefLang={locale}
            aria-current={currentLocale === locale ? "page" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
