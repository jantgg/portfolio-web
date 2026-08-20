"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const MOTION_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
const INTRO_NAVIGATION_DURATION = 2100;
const STAGE_NAVIGATION_DURATION = 350;
const AI_NAVIGATION_DURATION = 1200;
const PROCESS_END = 0.7;
const BRIDGE_START = 0.7;
const BRIDGE_END = 0.77;
const CHIP_EXIT_END = 0.755;
const HUB_EXIT_START = 0.735;
const HUB_EXIT_END = 0.775;
const PROMPT_IN_START = 0.75;
const PROMPT_IN_END = 0.79;
const PROMPT_OUT_START = 0.82;
const PROMPT_OUT_END = 0.86;
const AI_EXPAND_START = 0.84;
const AI_EXPAND_END = 0.94;
const AI_TARGET_PROGRESS = 0.94;
const WHEEL_GESTURE_GAP = 180;
const DISCRETE_WHEEL_THRESHOLD = 72;

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
    const aiPanel = story.querySelector<HTMLElement>("[data-system-ai-panel]");
    const aiTrigger = story.querySelector<HTMLButtonElement>(
      "[data-system-ai-trigger]",
    );
    const chips = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-chip]"),
    );
    const connections = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-connection]"),
    );
    if (!assembly || !hubTarget || !introChip || !aiPanel || chips.length === 0) {
      return;
    }
    const storyElement: HTMLElement = story;
    const assemblyElement: HTMLElement = assembly;
    const hubTargetElement: HTMLElement = hubTarget;
    const introChipElement: HTMLElement = introChip;
    const aiPanelElement: HTMLElement = aiPanel;

    const mediaQuery = window.matchMedia(MOTION_QUERY);
    let frame: number | null = null;
    let lastStage = -2;
    let distance = 1;
    let introDistance = 1;
    let navigationPoint = 0;
    let navigationFrame: number | null = null;
    let smoothScroll: Lenis | null = null;
    let wheelInput: "native" | "smooth" | null = null;
    let lastWheelEvent = 0;
    let hubMetrics: HubMetrics | null = null;
    let boardSize = 1;
    let contentWidth = 1;
    let panelParentLeft = 0;

    function setNavigationPoint(point: number) {
      navigationPoint = Math.round(clamp(point, 0, chips.length));
      if (previousButton) previousButton.disabled = navigationPoint === 0;
      if (nextButton) nextButton.disabled = navigationPoint === chips.length;
    }

    function animateScrollTo(targetPosition: number, duration: number) {
      const startPosition = window.scrollY;
      const startTime = performance.now();

      cancelNavigationAnimation();
      resetSmoothScroll();

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

    function scrollToPoint(point: number) {
      if (!mediaQuery.matches) return;

      const targetPoint = Math.round(clamp(point, 0, chips.length));
      const storyTop = window.scrollY + storyElement.getBoundingClientRect().top;
      const processDistance = Math.max(
        1,
        (distance - introDistance) * PROCESS_END,
      );
      const targetOffset = targetPoint === 0
        ? 0
        : introDistance
          + ((targetPoint - 0.5) / chips.length) * processDistance;
      const includesIntro = navigationPoint === 0 || targetPoint === 0;
      const duration = includesIntro
        ? INTRO_NAVIGATION_DURATION
        : STAGE_NAVIGATION_DURATION;

      setNavigationPoint(targetPoint);
      animateScrollTo(storyTop + targetOffset, duration);
    }

    function cancelNavigationAnimation() {
      if (navigationFrame === null) return;
      window.cancelAnimationFrame(navigationFrame);
      navigationFrame = null;
    }

    function resetSmoothScroll() {
      smoothScroll?.scrollTo(window.scrollY, { immediate: true });
    }

    function cancelInteractiveMotion() {
      cancelNavigationAnimation();
      resetSmoothScroll();
    }

    function goToPreviousPoint() {
      scrollToPoint(navigationPoint - 1);
    }

    function goToNextPoint() {
      scrollToPoint(navigationPoint + 1);
    }

    function goToAi() {
      if (!mediaQuery.matches) return;

      const storyTop = window.scrollY + storyElement.getBoundingClientRect().top;
      const tailDistance = Math.max(1, distance - introDistance);
      animateScrollTo(
        storyTop + introDistance + AI_TARGET_PROGRESS * tailDistance,
        AI_NAVIGATION_DURATION,
      );
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
      const storyProgress = clamp(
        (scrolled - introDistance) / Math.max(1, distance - introDistance),
      );
      const processProgress = clamp(storyProgress / PROCESS_END);
      const bridgeProgress = smoothstep(
        (storyProgress - BRIDGE_START) / (BRIDGE_END - BRIDGE_START),
      );
      const chipExitProgress = smoothstep(
        (storyProgress - BRIDGE_START) / (CHIP_EXIT_END - BRIDGE_START),
      );
      const hubExitProgress = smoothstep(
        (storyProgress - HUB_EXIT_START) / (HUB_EXIT_END - HUB_EXIT_START),
      );
      const promptInProgress = smoothstep(
        (storyProgress - PROMPT_IN_START) / (PROMPT_IN_END - PROMPT_IN_START),
      );
      const promptOutProgress = smoothstep(
        (storyProgress - PROMPT_OUT_START) / (PROMPT_OUT_END - PROMPT_OUT_START),
      );
      const promptOpacity = promptInProgress * (1 - promptOutProgress);
      const aiExpandProgress = smoothstep(
        (storyProgress - AI_EXPAND_START) / (AI_EXPAND_END - AI_EXPAND_START),
      );
      const aiContentOpacity = smoothstep((aiExpandProgress - 0.42) / 0.32);
      const introComplete = introProgress >= 0.999;
      const chipDocked = introMorphProgress >= 0.999;
      const stage = introComplete
        ? Math.min(
            chips.length - 1,
            Math.floor(processProgress * chips.length),
          )
        : -1;
      const processHorizontalPosition = 26 - processProgress * 52;
      const horizontalPosition = lerp(
        processHorizontalPosition,
        0,
        bridgeProgress,
      );
      const targetFacingRotation = -processHorizontalPosition * 0.8;
      const facingRotation = introComplete
        ? lerp(targetFacingRotation, 0, bridgeProgress)
        : lerp(0, -26 * 0.8, easedTilt);
      const shadowPosition = lerp(
        2.1 - processProgress * 4.2,
        0,
        bridgeProgress,
      );
      const shadowDepth = lerp(
        0.45 + Math.abs(processProgress - 0.5) * 0.9,
        0.25,
        bridgeProgress,
      );
      const tiltX = introComplete
        ? lerp(47, 0, bridgeProgress)
        : lerp(0, 47, easedTilt);
      const tiltZ = introComplete
        ? lerp(-3, 0, bridgeProgress)
        : lerp(0, -3, easedTilt);

      storyElement.dataset.systemIntro = introComplete
        ? "complete"
        : chipDocked
          ? "docked"
          : "active";
      storyElement.dataset.systemPhase = !introComplete
        ? "intro"
        : aiExpandProgress > 0
          ? "ai"
          : storyProgress >= PROMPT_IN_START
            ? "prompt"
            : bridgeProgress > 0
              ? "bridge"
              : "process";
      setNavigationPoint(introComplete ? stage + 1 : 0);
      storyElement.style.setProperty(
        "--system-progress",
        String(processProgress),
      );
      storyElement.style.setProperty(
        "--ai-prompt-opacity",
        String(promptOpacity),
      );
      storyElement.style.setProperty(
        "--ai-prompt-shift",
        `${(1 - promptOpacity) * 2}rem`,
      );
      storyElement.style.setProperty(
        "--ai-expand-progress",
        String(aiExpandProgress),
      );
      storyElement.style.setProperty(
        "--ai-ambient-opacity",
        String(aiContentOpacity * 0.2),
      );
      storyElement.style.setProperty(
        "--chip-exit-progress",
        String(chipExitProgress),
      );
      storyElement.style.setProperty(
        "--chip-exit-z",
        `${lerp(1.7, 34, chipExitProgress)}rem`,
      );
      storyElement.style.setProperty(
        "--chip-exit-scale",
        String(lerp(1, 1.08, chipExitProgress)),
      );
      storyElement.style.setProperty(
        "--chip-exit-blur",
        `${lerp(0, 10, chipExitProgress)}px`,
      );
      storyElement.style.setProperty(
        "--hub-exit-progress",
        String(hubExitProgress),
      );
      storyElement.style.setProperty(
        "--hub-exit-z",
        `${lerp(1.7, 24, hubExitProgress)}rem`,
      );
      storyElement.style.setProperty(
        "--hub-exit-scale",
        String(lerp(1, 1.06, hubExitProgress)),
      );
      storyElement.style.setProperty(
        "--hub-exit-blur",
        `${lerp(0, 8, hubExitProgress)}px`,
      );
      assemblyElement.style.setProperty("--system-x", `${horizontalPosition}vw`);
      assemblyElement.style.setProperty(
        "--chip-facing-y",
        `${facingRotation}deg`,
      );
      assemblyElement.style.setProperty(
        "--chip-tilt-x",
        `${tiltX}deg`,
      );
      assemblyElement.style.setProperty(
        "--chip-tilt-z",
        `${tiltZ}deg`,
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
      updateBoardReveal(easedTilt, processProgress);

      if (introComplete && bridgeProgress > 0) {
        const boardOverscan = 48;
        const fullBoardInset = boardSize * 0.05;
        const viewportHorizontalInset =
          (boardSize - window.innerWidth - boardOverscan * 2) / 2;
        const viewportVerticalInset =
          (boardSize - window.innerHeight - boardOverscan * 2) / 2;
        const horizontalInset = lerp(
          fullBoardInset,
          viewportHorizontalInset,
          bridgeProgress,
        );
        const verticalInset = lerp(
          fullBoardInset,
          viewportVerticalInset,
          bridgeProgress,
        );

        assemblyElement.style.setProperty(
          "--board-top",
          `${verticalInset}px`,
        );
        assemblyElement.style.setProperty(
          "--board-right",
          `${horizontalInset}px`,
        );
        assemblyElement.style.setProperty(
          "--board-bottom",
          `${verticalInset}px`,
        );
        assemblyElement.style.setProperty(
          "--board-left",
          `${horizontalInset}px`,
        );
      }

      if (aiExpandProgress > 0) {
        const panelVerticalPadding = Math.max(
          72,
          Math.min(104, window.innerHeight * 0.09),
        );
        const targetWidth = contentWidth;
        const targetHeight = window.innerHeight - panelVerticalPadding * 2;
        const targetLeft = (window.innerWidth - targetWidth) / 2;
        const targetTop = panelVerticalPadding;

        aiPanelElement.style.cssText = [
          `--ai-panel-left: ${targetLeft - panelParentLeft}px`,
          `--ai-panel-top: ${targetTop}px`,
          `--ai-panel-width: ${targetWidth}px`,
          `--ai-panel-height: ${targetHeight}px`,
          `--ai-panel-content-opacity: ${aiContentOpacity}`,
          `--ai-panel-content-shift: ${lerp(2, 0, aiContentOpacity)}rem`,
          `--ai-panel-content-scale: ${lerp(0.96, 1, aiContentOpacity)}`,
        ].join(";");
      }

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
      panelParentLeft =
        aiPanelElement.offsetParent?.getBoundingClientRect().left ?? 0;
      const chapterElement = storyElement.closest<HTMLElement>("section");
      const chapterStyles = chapterElement
        ? window.getComputedStyle(chapterElement)
        : null;
      contentWidth = chapterElement
        ? Math.max(
            1,
            chapterElement.getBoundingClientRect().width
              - Number.parseFloat(chapterStyles?.paddingLeft ?? "0")
              - Number.parseFloat(chapterStyles?.paddingRight ?? "0"),
          )
        : Math.max(1, window.innerWidth - 96);

      if (!mediaQuery.matches) {
        storyElement.dataset.systemStatic = "true";
        storyElement.dataset.systemIntro = "complete";
        storyElement.dataset.systemPhase = "static";
        storyElement.style.removeProperty("--system-progress");
        storyElement.style.removeProperty("--ai-prompt-opacity");
        storyElement.style.removeProperty("--ai-prompt-shift");
        storyElement.style.removeProperty("--ai-expand-progress");
        storyElement.style.removeProperty("--ai-ambient-opacity");
        storyElement.style.removeProperty("--chip-exit-progress");
        storyElement.style.removeProperty("--chip-exit-z");
        storyElement.style.removeProperty("--chip-exit-scale");
        storyElement.style.removeProperty("--chip-exit-blur");
        storyElement.style.removeProperty("--hub-exit-progress");
        storyElement.style.removeProperty("--hub-exit-z");
        storyElement.style.removeProperty("--hub-exit-scale");
        storyElement.style.removeProperty("--hub-exit-blur");
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
        aiPanelElement.removeAttribute("style");
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
    smoothScroll = new Lenis({
      autoRaf: true,
      eventsTarget: storyElement,
      lerp: 0.14,
      overscroll: false,
      smoothWheel: true,
      syncTouch: false,
      virtualScroll: ({ deltaX, deltaY, event }) => {
        if (!(event instanceof WheelEvent)) return false;

        cancelNavigationAnimation();

        const now = performance.now();
        if (now - lastWheelEvent > WHEEL_GESTURE_GAP) wheelInput = null;
        lastWheelEvent = now;

        if (wheelInput === null) {
          const verticalDelta = Math.abs(event.deltaY);
          const verticalGesture = verticalDelta > Math.abs(event.deltaX);
          const discreteWheel = verticalGesture
            && !event.ctrlKey
            && (event.deltaMode !== 0
              || verticalDelta >= DISCRETE_WHEEL_THRESHOLD);
          wheelInput = mediaQuery.matches && discreteWheel
            ? "smooth"
            : "native";
        }

        const shouldSmooth = mediaQuery.matches
          && wheelInput === "smooth"
          && Math.abs(deltaY) > Math.abs(deltaX)
          && !event.ctrlKey;

        if (!shouldSmooth && smoothScroll?.isScrolling === "smooth") {
          resetSmoothScroll();
        }
        return shouldSmooth;
      },
    });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("touchstart", cancelInteractiveMotion, {
      passive: true,
    });
    window.addEventListener("pointerdown", cancelInteractiveMotion, {
      passive: true,
    });
    previousButton?.addEventListener("click", goToPreviousPoint);
    nextButton?.addEventListener("click", goToNextPoint);
    aiTrigger?.addEventListener("click", goToAi);
    mediaQuery.addEventListener("change", measure);
    measure();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      cancelNavigationAnimation();
      smoothScroll?.destroy();
      smoothScroll = null;
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("touchstart", cancelInteractiveMotion);
      window.removeEventListener("pointerdown", cancelInteractiveMotion);
      previousButton?.removeEventListener("click", goToPreviousPoint);
      nextButton?.removeEventListener("click", goToNextPoint);
      aiTrigger?.removeEventListener("click", goToAi);
      mediaQuery.removeEventListener("change", measure);
    };
  }, []);

  return null;
}
