import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import styles from "../page.module.css";

const stages = [
  "understand",
  "investigate",
  "connect",
  "build",
  "validate",
  "deliver",
] as const;

const chipClasses = [
  styles.systemChipContext,
  styles.systemChipContract,
  styles.systemChipFlow,
  styles.systemChipCode,
  styles.systemChipEvidence,
  styles.systemChipProduction,
];

const chipOutlinePaths = [
  "M0 0 H100 V40 H66.667 V100 H0 Z",
  "M0 0 H100 V100 H0 Z",
  "M33.333 0 H100 V100 H0 V60 H33.333 Z",
  "M0 0 H100 V100 H0 Z",
  "M0 0 H100 V100 H0 Z",
  "M0 0 H66.667 V25 H100 V100 H0 Z",
];

const chipTrailDelays = ["0s", "-0.65s", "-1.3s"];

type RouteSegment = {
  axis: "horizontal" | "vertical";
  x: number;
  y: number;
  length: number;
};

const ROUTE_GRID = 24;

const connectionRoutes: RouteSegment[][] = [
  [
    { axis: "horizontal", x: 7, y: 10, length: 1 },
    { axis: "vertical", x: 7, y: 8, length: 2 },
    { axis: "horizontal", x: 6, y: 8, length: 1 },
  ],
  [
    { axis: "vertical", x: 11, y: 7, length: 1 },
    { axis: "horizontal", x: 11, y: 7, length: 2 },
    { axis: "vertical", x: 13, y: 6, length: 1 },
  ],
  [
    { axis: "horizontal", x: 14, y: 10, length: 1 },
    { axis: "vertical", x: 15, y: 9, length: 1 },
    { axis: "horizontal", x: 15, y: 9, length: 1 },
  ],
  [
    { axis: "horizontal", x: 14, y: 13, length: 1 },
    { axis: "vertical", x: 15, y: 13, length: 1 },
    { axis: "horizontal", x: 15, y: 14, length: 3 },
  ],
  [
    { axis: "vertical", x: 12, y: 14, length: 1 },
    { axis: "horizontal", x: 12, y: 15, length: 1 },
    { axis: "vertical", x: 13, y: 15, length: 1 },
  ],
  [
    { axis: "horizontal", x: 7, y: 13, length: 1 },
    { axis: "vertical", x: 7, y: 13, length: 3 },
    { axis: "horizontal", x: 7, y: 16, length: 1 },
  ],
];

function routeStyle(segment: RouteSegment, order: number) {
  return {
    "--route-x": `${(segment.x / ROUTE_GRID) * 100}%`,
    "--route-y": `${(segment.y / ROUTE_GRID) * 100}%`,
    "--route-length": `${(segment.length / ROUTE_GRID) * 100}%`,
    "--route-order": order,
  } as CSSProperties;
}

export function ChipPlatform() {
  const t = useTranslations("Process");

  return (
    <div className={styles.chipAssembly} data-system-assembly>
      <div className={styles.chipPlane}>
        <div className={styles.chipBoardShadow} />
        <div className={styles.chipBoardDepth} />
        <div className={styles.chipBoardFrame}>
          <div className={styles.chipBoardSurface}>
            <div className={styles.chipBoardInner} />
            <div className={styles.chipBoardMeta}>
              <span>JANT / SYS—02</span>
              <span>01—06</span>
            </div>
            <span className={`${styles.chipBoardNode} ${styles.chipBoardNodeOne}`} />
            <span className={`${styles.chipBoardNode} ${styles.chipBoardNodeTwo}`} />
            <span className={`${styles.chipBoardNode} ${styles.chipBoardNodeThree}`} />
            <span className={`${styles.chipBoardNode} ${styles.chipBoardNodeFour}`} />
          </div>
        </div>

        <div className={styles.chipHub}>
          <span className={styles.chipHubDepth} />
          <span className={styles.chipHubMid} />
          <div className={styles.chipHubBody} data-system-hub-target>
            <span>CORE</span>
            <strong>{t("systemLabel")}</strong>
            <i />
          </div>
        </div>

        <div className={styles.chipConnectionLayer} aria-hidden="true">
          {connectionRoutes.map((route, routeIndex) => (
            <div
              className={styles.chipConnectionRoute}
              data-system-connection
              data-connected="false"
              key={`route-${routeIndex}`}
            >
              {route.map((segment, segmentIndex) => (
                <span
                  className={`${styles.chipConnectionSegment} ${
                    segment.axis === "horizontal"
                      ? styles.chipConnectionHorizontal
                      : styles.chipConnectionVertical
                  }`}
                  key={`${segment.axis}-${segment.x}-${segment.y}`}
                  style={routeStyle(segment, segmentIndex)}
                />
              ))}
            </div>
          ))}
        </div>

        {stages.map((stage, index) => (
          <div
            className={`${styles.systemChip} ${chipClasses[index]}`}
            data-system-chip
            data-connected="false"
            key={stage}
          >
            <span className={styles.systemChipSideBottom} />
            <span className={styles.systemChipSideRight} />
            <div className={styles.systemChipBody}>
              <span className={styles.systemChipIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{t(`steps.${stage}.module`)}</strong>
              <i className={styles.systemChipSignal} />
            </div>
            <svg
              className={`${styles.systemChipOutline} ${styles.systemChipOutlineTop}`}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d={chipOutlinePaths[index]} vectorEffect="non-scaling-stroke" />
            </svg>
            {chipTrailDelays.map((delay) => (
              <svg
                className={`${styles.systemChipOutline} ${styles.systemChipDepthTrail}`}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                key={delay}
                style={{ "--chip-trail-delay": delay } as CSSProperties}
              >
                <path d={chipOutlinePaths[index]} vectorEffect="non-scaling-stroke" />
              </svg>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
