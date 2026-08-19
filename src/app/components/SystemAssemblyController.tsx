"use client";

import { useEffect } from "react";

const MOTION_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function SystemAssemblyController() {
  useEffect(() => {
    const story = document.querySelector<HTMLElement>("[data-system-story]");
    if (!story) return;

    const assembly = story.querySelector<HTMLElement>("[data-system-assembly]");
    const chips = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-chip]"),
    );
    const connections = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-connection]"),
    );
    if (!assembly || chips.length === 0) return;
    const storyElement: HTMLElement = story;
    const assemblyElement: HTMLElement = assembly;

    const mediaQuery = window.matchMedia(MOTION_QUERY);
    let frame: number | null = null;
    let lastStage = -1;
    let distance = 1;

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

      const progress = clamp(-storyElement.getBoundingClientRect().top / distance);
      const stage = Math.min(chips.length - 1, Math.floor(progress * chips.length));
      const horizontalPosition = 26 - progress * 52;
      const facingRotation = -horizontalPosition * 0.8;
      const shadowPosition = 2.1 - progress * 4.2;
      const shadowDepth = 0.45 + Math.abs(progress - 0.5) * 0.9;

      storyElement.style.setProperty("--system-progress", String(progress));
      assemblyElement.style.setProperty("--system-x", `${horizontalPosition}vw`);
      assemblyElement.style.setProperty(
        "--chip-facing-y",
        `${facingRotation}deg`,
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
      setStage(stage);
    }

    function requestUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(update);
    }

    function measure() {
      if (!mediaQuery.matches) {
        storyElement.dataset.systemStatic = "true";
        storyElement.style.removeProperty("--system-progress");
        assemblyElement.style.removeProperty("--system-x");
        assemblyElement.style.removeProperty("--chip-facing-y");
        assemblyElement.style.removeProperty("--chip-shadow-x");
        assemblyElement.style.removeProperty("--chip-shadow-y");
        assemblyElement.style.removeProperty("--chip-shadow-small-x");
        assemblyElement.style.removeProperty("--chip-shadow-small-y");
        for (const chip of chips) chip.dataset.connected = "true";
        for (const connection of connections) connection.dataset.connected = "true";
        return;
      }

      delete storyElement.dataset.systemStatic;
      distance = Math.max(1, storyElement.offsetHeight - window.innerHeight);
      lastStage = -1;
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
