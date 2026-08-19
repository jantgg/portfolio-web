import type { ReactNode } from "react";
import { ArrowIcon } from "./ArrowIcon";
import styles from "../page.module.css";

type CircularLinkProps = {
  href: string;
  children: ReactNode;
  direction?: "down" | "right" | "up-right";
  label: string;
  external?: boolean;
};

export function CircularLink({
  href,
  children,
  direction = "right",
  label,
  external = false,
}: CircularLinkProps) {
  return (
    <a
      className={styles.circularLink}
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className={styles.circularLinkRing} aria-hidden="true" />
      <span className={styles.circularLinkContent}>{children}</span>
      <span className={styles.circularLinkArrow}>
        <ArrowIcon direction={direction} />
      </span>
    </a>
  );
}
