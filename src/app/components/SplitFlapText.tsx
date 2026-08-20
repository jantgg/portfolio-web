import type { CSSProperties } from "react";
import styles from "../page.module.css";

type SplitFlapTextProps = {
  animatedGlyphIndexes?: readonly number[];
  className?: string;
  delay?: number;
  duration?: number;
  interval?: number;
  reveal?: boolean;
  text: string;
};

type SplitFlapStyle = CSSProperties & {
  "--split-delay": string;
  "--split-duration": string;
};

export function SplitFlapText({
  animatedGlyphIndexes,
  className,
  delay = 0,
  duration = 72,
  interval = 6,
  reveal = false,
  text,
}: SplitFlapTextProps) {
  let animatedIndex = 0;
  let animatedSequenceIndex = 0;
  const animatedGlyphs = animatedGlyphIndexes
    ? new Set(animatedGlyphIndexes)
    : null;

  return (
    <span
      className={[styles.splitFlapText, className].filter(Boolean).join(" ")}
      aria-label={text}
      data-reveal={reveal ? "" : undefined}
    >
      {text.split(/(\s+)/).map((token, tokenIndex) => {
        if (/^\s+$/.test(token)) return token;

        return (
          <span className={styles.splitFlapWord} key={`${token}-${tokenIndex}`}>
            {Array.from(token).map((character, characterIndex) => {
              const animationIndex = animatedIndex;
              animatedIndex += 1;
              const isAnimated = !animatedGlyphs || animatedGlyphs.has(animationIndex);
              const sequenceIndex = animatedGlyphs
                ? animatedSequenceIndex
                : animationIndex;
              if (isAnimated) animatedSequenceIndex += 1;

              const style: SplitFlapStyle = {
                "--split-delay": `${delay + sequenceIndex * interval}s`,
                "--split-duration": `${duration}s`,
              };

              return (
                <span
                  className={`${styles.splitFlapGlyph} ${isAnimated ? styles.splitFlapGlyphAnimated : ""}`}
                  style={style}
                  aria-hidden="true"
                  key={`${character}-${characterIndex}`}
                >
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
