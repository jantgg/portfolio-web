"use client";

type ThemeToggleProps = {
  label: string;
};

export function ThemeToggle({ label }: ThemeToggleProps) {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem("portfolio-theme:v1", nextTheme);
    } catch {
      // The visual preference still works when storage is unavailable.
    }
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label}>
      <span aria-hidden="true">◐</span>
    </button>
  );
}
