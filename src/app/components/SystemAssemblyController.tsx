"use client";

import { useEffect } from "react";

const MOTION_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

export function SystemAssemblyController() {
  useEffect(() => {
    const story = document.querySelector<HTMLElement>("[data-system-story]");
    if (!story) return;

    const assembly = story.querySelector<HTMLElement>("[data-system-assembly]");
    const hubTarget = story.querySelector<HTMLElement>("[data-system-hub-target]");
    const introChip = story.querySelector<HTMLElement>("[data-system-intro-chip]");
    const chips = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-chip]"),
    );
    const connections = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-connection]"),
    );
    if (!assembly || !hubTarget || !introChip || chips.length === 0) return;
    const storyElement: HTMLElement = story;
    const assemblyElement: HTMLElement = assembly;
    const hubTargetElement: HTMLElement = hubTarget;
    const introChipElement: HTMLElement = introChip;

    const mediaQuery = window.matchMedia(MOTION_QUERY);
    let frame: number | null = null;
    let lastStage = -2;
    let distance = 1;
    let introDistance = 1;

    function setStage(stage: number) {
      if (stage === lastStage) return;
      lastStage = stage;
      storyElement.dataset.systemStage = String(stage);

      for (let index = 0; index < chips.length; index += 1) {
        const connected = String(index <= stage);
        chips[index].dataset.connected = connected;
        if (connections[index]) connections[index].dataset.connected = connected;
      }
    }

    function update() {
      frame = null;
      if (!mediaQuery.matches) return;

      const scrolled = clamp(-storyElement.getBoundingClientRect().top, 0, distance);
      const introProgress = clamp(scrolled / introDistance);
      const introCopyProgress = clamp((introProgress - 0.12) / 0.28);
      const easedCopy =
        introCopyProgress * introCopyProgress * (3 - 2 * introCopyProgress);
      const introMorphProgress = clamp((introProgress - 0.4) / 0.34);
      const easedMorph = 1 - (1 - introMorphProgress) ** 3;
      const introTiltProgress = clamp((introProgress - 0.78) / 0.22);
      const easedTilt =
        introTiltProgress * introTiltProgress * (3 - 2 * introTiltProgress);
      const progress = clamp(
        (scrolled - introDistance) / Math.max(1, distance - introDistance),
      );
      const introComplete = introProgress >= 0.999;
      const chipDocked = introMorphProgress >= 0.999;
      const stage = introComplete
        ? Math.min(chips.length - 1, Math.floor(progress * chips.length))
        : -1;
      const horizontalPosition = 26 - progress * 52;
      const targetFacingRotation = -horizontalPosition * 0.8;
      const facingRotation = introComplete
        ? targetFacingRotation
        : lerp(0, -26 * 0.8, easedTilt);
      const shadowPosition = 2.1 - progress * 4.2;
      const shadowDepth = 0.45 + Math.abs(progress - 0.5) * 0.9;

      storyElement.dataset.systemIntro = introComplete
        ? "complete"
        : chipDocked
          ? "docked"
          : "active";
      storyElement.style.setProperty("--system-progress", String(progress));
      assemblyElement.style.setProperty("--system-x", `${horizontalPosition}vw`);
      assemblyElement.style.setProperty(
        "--chip-facing-y",
        `${facingRotation}deg`,
      );
      assemblyElement.style.setProperty(
        "--chip-tilt-x",
        `${introComplete ? 47 : lerp(0, 47, easedTilt)}deg`,
      );
      assemblyElement.style.setProperty(
        "--chip-tilt-z",
        `${introComplete ? -3 : lerp(0, -3, easedTilt)}deg`,
      );
      assemblyElement.style.setProperty("--chip-shadow-x", `${shadowPosition}rem`);
      assemblyElement.style.setProperty("--chip-shadow-y", `${shadowDepth}rem`);
      assemblyElement.style.setProperty(
        "--chip-shadow-small-x",
        `${shadowPosition * 0.22}rem`,
      );
      assemblyElement.style.setProperty(
        "--chip-shadow-small-y",
        `${shadowDepth * 0.38}rem`,
      );

      if (!introComplete && !chipDocked) {
        const targetRect = hubTargetElement.getBoundingClientRect();
        const targetStyles = window.getComputedStyle(hubTargetElement);
        const targetMeta = hubTargetElement.querySelector<HTMLElement>("span");
        const targetStrong = hubTargetElement.querySelector<HTMLElement>("strong");
        const targetSignal = hubTargetElement.querySelector<HTMLElement>("i");
        const targetTitleSize = targetStrong
          ? Number.parseFloat(window.getComputedStyle(targetStrong).fontSize)
          : 13;
        const targetMetaSize = targetMeta
          ? Number.parseFloat(window.getComputedStyle(targetMeta).fontSize)
          : 7;
        const targetSignalSize = targetSignal
          ? targetSignal.getBoundingClientRect().width
          : 7;
        const targetContentGap = targetMeta
          ? Number.parseFloat(window.getComputedStyle(targetMeta).marginLeft)
          : 3;
        const startPadding = Math.max(28, Math.min(64, window.innerWidth * 0.04));
        const startTitleSize = Math.min(220, window.innerWidth * 0.15);
        const startContentGap = Math.max(
          14,
          Math.min(22, window.innerWidth * 0.014),
        );

        introChipElement.style.cssText = [
          `--intro-left: ${lerp(0, targetRect.left, easedMorph)}px`,
          `--intro-top: ${lerp(0, targetRect.top, easedMorph)}px`,
          `--intro-width: ${lerp(window.innerWidth, targetRect.width, easedMorph)}px`,
          `--intro-height: ${lerp(window.innerHeight, targetRect.height, easedMorph)}px`,
          `--intro-padding: ${lerp(startPadding, Number.parseFloat(targetStyles.paddingTop), easedMorph)}px`,
          `--intro-title-size: ${lerp(startTitleSize, targetTitleSize, easedMorph)}px`,
          `--intro-meta-size: ${lerp(12, targetMetaSize, easedMorph)}px`,
          `--intro-signal-size: ${lerp(14, targetSignalSize, easedMorph)}px`,
          `--intro-content-gap: ${lerp(startContentGap, targetContentGap, easedMorph)}px`,
          `--intro-copy-opacity: ${1 - easedCopy}`,
          `--intro-copy-shift: ${easedCopy * -2.5}rem`,
          `--intro-core-opacity: ${clamp(introMorphProgress / 0.18)}`,
        ].join(";");
      }
      setStage(stage);
    }

    function requestUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(update);
    }

    function measure() {
      if (!mediaQuery.matches) {
        storyElement.dataset.systemStatic = "true";
        storyElement.dataset.systemIntro = "complete";
        storyElement.style.removeProperty("--system-progress");
        assemblyElement.style.removeProperty("--system-x");
        assemblyElement.style.removeProperty("--chip-facing-y");
        assemblyElement.style.removeProperty("--chip-tilt-x");
        assemblyElement.style.removeProperty("--chip-tilt-z");
        assemblyElement.style.removeProperty("--chip-shadow-x");
        assemblyElement.style.removeProperty("--chip-shadow-y");
        assemblyElement.style.removeProperty("--chip-shadow-small-x");
        assemblyElement.style.removeProperty("--chip-shadow-small-y");
        introChipElement.removeAttribute("style");
        lastStage = -2;
        setStage(chips.length - 1);
        return;
      }

      delete storyElement.dataset.systemStatic;
      distance = Math.max(1, storyElement.offsetHeight - window.innerHeight);
      introDistance = Math.min(window.innerHeight * 2.2, distance);
      lastStage = -2;
      requestUpdate();
    }

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(storyElement);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    mediaQuery.addEventListener("change", measure);
    measure();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      mediaQuery.removeEventListener("change", measure);
    };
  }, []);

  return null;
}
