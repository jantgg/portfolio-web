"use client";

import { useEffect } from "react";

const MOTION_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
const INTRO_NAVIGATION_DURATION = 2100;
const STAGE_NAVIGATION_DURATION = 350;

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

type HubMetrics = {
  left: number;
  top: number;
  width: number;
  height: number;
  padding: number;
  titleSize: number;
  metaSize: number;
  signalSize: number;
  contentGap: number;
  startPadding: number;
  startTitleSize: number;
  startContentGap: number;
};

function smoothstep(progress: number) {
  const normalizedProgress = clamp(progress);
  return normalizedProgress * normalizedProgress * (3 - 2 * normalizedProgress);
}

function revealBoardValue(
  core: number,
  upperLeft: number,
  upperRows: number,
  full: number,
  firstProgress: number,
  secondProgress: number,
  fullProgress: number,
) {
  const firstValue = lerp(core, upperLeft, firstProgress);
  const secondValue = lerp(firstValue, upperRows, secondProgress);
  return lerp(secondValue, full, fullProgress);
}

export function SystemAssemblyController() {
  useEffect(() => {
    const story = document.querySelector<HTMLElement>("[data-system-story]");
    if (!story) return;

    const assembly = story.querySelector<HTMLElement>("[data-system-assembly]");
    const hubTarget = story.querySelector<HTMLElement>("[data-system-hub-target]");
    const introChip = story.querySelector<HTMLElement>("[data-system-intro-chip]");
    const previousButton = story.querySelector<HTMLButtonElement>(
      "[data-system-previous]",
    );
    const nextButton = story.querySelector<HTMLButtonElement>(
      "[data-system-next]",
    );
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
    let navigationPoint = 0;
    let navigationFrame: number | null = null;
    let hubMetrics: HubMetrics | null = null;
    let boardSize = 1;

    function setNavigationPoint(point: number) {
      navigationPoint = Math.round(clamp(point, 0, chips.length));
      if (previousButton) previousButton.disabled = navigationPoint === 0;
      if (nextButton) nextButton.disabled = navigationPoint === chips.length;
    }

    function scrollToPoint(point: number) {
      if (!mediaQuery.matches) return;

      const targetPoint = Math.round(clamp(point, 0, chips.length));
      const storyTop = window.scrollY + storyElement.getBoundingClientRect().top;
      const stageDistance = Math.max(1, distance - introDistance);
      const targetOffset = targetPoint === 0
        ? 0
        : introDistance
          + ((targetPoint - 0.5) / chips.length) * stageDistance;
      const startPosition = window.scrollY;
      const targetPosition = storyTop + targetOffset;
      const includesIntro = navigationPoint === 0 || targetPoint === 0;
      const duration = includesIntro
        ? INTRO_NAVIGATION_DURATION
        : STAGE_NAVIGATION_DURATION;
      const startTime = performance.now();

      cancelNavigationAnimation();

      setNavigationPoint(targetPoint);

      function animateNavigation(time: number) {
        const progress = clamp((time - startTime) / duration);

        window.scrollTo({
          top: lerp(startPosition, targetPosition, progress),
          behavior: "instant",
        });

        if (progress < 1) {
          navigationFrame = window.requestAnimationFrame(animateNavigation);
          return;
        }

        navigationFrame = null;
      }

      navigationFrame = window.requestAnimationFrame(animateNavigation);
    }

    function cancelNavigationAnimation() {
      if (navigationFrame === null) return;
      window.cancelAnimationFrame(navigationFrame);
      navigationFrame = null;
    }

    function goToPreviousPoint() {
      scrollToPoint(navigationPoint - 1);
    }

    function goToNextPoint() {
      scrollToPoint(navigationPoint + 1);
    }

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

    function measureHubTarget(): HubMetrics {
      const targetRect = hubTargetElement.getBoundingClientRect();
      const introContainerRect = introChipElement.offsetParent
        ?.getBoundingClientRect();
      const targetStyles = window.getComputedStyle(hubTargetElement);
      const targetMeta = hubTargetElement.querySelector<HTMLElement>("span");
      const targetStrong = hubTargetElement.querySelector<HTMLElement>("strong");
      const targetSignal = hubTargetElement.querySelector<HTMLElement>("i");

      return {
        left: targetRect.left - (introContainerRect?.left ?? 0),
        top: targetRect.top - (introContainerRect?.top ?? 0),
        width: targetRect.width,
        height: targetRect.height,
        padding: Number.parseFloat(targetStyles.paddingTop),
        titleSize: targetStrong
          ? Number.parseFloat(window.getComputedStyle(targetStrong).fontSize)
          : 13,
        metaSize: targetMeta
          ? Number.parseFloat(window.getComputedStyle(targetMeta).fontSize)
          : 7,
        signalSize: targetSignal ? targetSignal.getBoundingClientRect().width : 7,
        contentGap: targetMeta
          ? Number.parseFloat(window.getComputedStyle(targetMeta).marginLeft)
          : 3,
        startPadding: Math.max(28, Math.min(64, window.innerWidth * 0.04)),
        startTitleSize: Math.min(220, window.innerWidth * 0.15),
        startContentGap: Math.max(
          14,
          Math.min(22, window.innerWidth * 0.014),
        ),
      };
    }

    function updateBoardReveal(
      firstRevealProgress: number,
      storyProgress: number,
    ) {
      const corePadding = Math.min(40, boardSize * 0.08);
      const coreTopPadding = Math.min(48, boardSize * 0.095);
      const coreRightPadding = Math.min(72, boardSize * 0.14);
      const coreTop = Math.max(0, boardSize * 0.35 - coreTopPadding);
      const coreRight = Math.max(0, boardSize * 0.425 - coreRightPadding);
      const boardInset = boardSize * 0.05;
      const partialInset = boardSize * 0.35;
      const secondRevealProgress = smoothstep((storyProgress - 0.12) / 0.04);
      const fullRevealProgress = smoothstep((storyProgress - 0.45) / 0.045);
      const top = revealBoardValue(
        coreTop,
        boardInset,
        boardInset,
        boardInset,
        firstRevealProgress,
        secondRevealProgress,
        fullRevealProgress,
      );
      const right = revealBoardValue(
        coreRight,
        partialInset,
        boardInset,
        boardInset,
        firstRevealProgress,
        secondRevealProgress,
        fullRevealProgress,
      );
      const bottom = revealBoardValue(
        Math.max(0, boardSize * 0.425 - corePadding),
        partialInset,
        partialInset,
        boardInset,
        firstRevealProgress,
        secondRevealProgress,
        fullRevealProgress,
      );
      const left = revealBoardValue(
        Math.max(0, boardSize * 0.35 - corePadding),
        boardInset,
        boardInset,
        boardInset,
        firstRevealProgress,
        secondRevealProgress,
        fullRevealProgress,
      );

      assemblyElement.style.setProperty("--board-top", `${top}px`);
      assemblyElement.style.setProperty("--board-right", `${right}px`);
      assemblyElement.style.setProperty("--board-bottom", `${bottom}px`);
      assemblyElement.style.setProperty("--board-left", `${left}px`);
      assemblyElement.style.setProperty(
        "--board-detail-opacity",
        String(fullRevealProgress),
      );
    }

    function update() {
      frame = null;
      if (!mediaQuery.matches) return;

      const storyRect = storyElement.getBoundingClientRect();
      const scrolled = clamp(-storyRect.top, 0, distance);
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
      setNavigationPoint(introComplete ? stage + 1 : 0);
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
      updateBoardReveal(easedTilt, progress);

      if (!introComplete && !chipDocked && storyRect.top <= 0) {
        hubMetrics ??= measureHubTarget();
        const metrics = hubMetrics;

        introChipElement.style.cssText = [
          `--intro-left: ${lerp(0, metrics.left, easedMorph)}px`,
          `--intro-top: ${lerp(0, metrics.top, easedMorph)}px`,
          `--intro-width: ${lerp(window.innerWidth, metrics.width, easedMorph)}px`,
          `--intro-height: ${lerp(window.innerHeight, metrics.height, easedMorph)}px`,
          `--intro-padding: ${lerp(metrics.startPadding, metrics.padding, easedMorph)}px`,
          `--intro-title-size: ${lerp(metrics.startTitleSize, metrics.titleSize, easedMorph)}px`,
          `--intro-meta-size: ${lerp(12, metrics.metaSize, easedMorph)}px`,
          `--intro-signal-size: ${lerp(14, metrics.signalSize, easedMorph)}px`,
          `--intro-content-gap: ${lerp(metrics.startContentGap, metrics.contentGap, easedMorph)}px`,
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
      cancelNavigationAnimation();
      hubMetrics = null;
      boardSize = Math.max(1, assemblyElement.offsetWidth);

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
        const fullBoardInset = boardSize * 0.05;
        assemblyElement.style.setProperty("--board-top", `${fullBoardInset}px`);
        assemblyElement.style.setProperty("--board-right", `${fullBoardInset}px`);
        assemblyElement.style.setProperty("--board-bottom", `${fullBoardInset}px`);
        assemblyElement.style.setProperty("--board-left", `${fullBoardInset}px`);
        assemblyElement.style.setProperty("--board-detail-opacity", "1");
        introChipElement.removeAttribute("style");
        lastStage = -2;
        setStage(chips.length - 1);
        setNavigationPoint(chips.length);
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
    window.addEventListener("wheel", cancelNavigationAnimation, { passive: true });
    window.addEventListener("touchstart", cancelNavigationAnimation, {
      passive: true,
    });
    window.addEventListener("pointerdown", cancelNavigationAnimation, {
      passive: true,
    });
    previousButton?.addEventListener("click", goToPreviousPoint);
    nextButton?.addEventListener("click", goToNextPoint);
    mediaQuery.addEventListener("change", measure);
    measure();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      cancelNavigationAnimation();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("wheel", cancelNavigationAnimation);
      window.removeEventListener("touchstart", cancelNavigationAnimation);
      window.removeEventListener("pointerdown", cancelNavigationAnimation);
      previousButton?.removeEventListener("click", goToPreviousPoint);
      nextButton?.removeEventListener("click", goToNextPoint);
      mediaQuery.removeEventListener("change", measure);
    };
  }, []);

  return null;
}
