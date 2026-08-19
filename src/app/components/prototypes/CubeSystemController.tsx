"use client";

import { useEffect } from "react";

const MOTION_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function CubeSystemController() {
  useEffect(() => {
    const story = document.querySelector<HTMLElement>("[data-cube-system-story]");
    if (!story) return;

    const assembly = story.querySelector<HTMLElement>("[data-system-assembly]");
    const modules = Array.from(
      story.querySelectorAll<HTMLElement>("[data-system-module]"),
    );
    if (!assembly || modules.length === 0) return;
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
      for (let index = 0; index < modules.length; index += 1) {
        modules[index].dataset.joined = String(index <= stage);
      }
    }

    function update() {
      frame = null;
      if (!mediaQuery.matches) return;
      const progress = clamp(-storyElement.getBoundingClientRect().top / distance);
      const stage = Math.min(modules.length - 1, Math.floor(progress * modules.length));
      assemblyElement.style.setProperty("--system-x", `${26 - progress * 52}vw`);
      assemblyElement.style.setProperty(
        "--system-rotate-x",
        `${-12 + Math.sin(progress * Math.PI * 2) * 8}deg`,
      );
      assemblyElement.style.setProperty("--system-rotate-y", `${-28 + progress * 360}deg`);
      assemblyElement.style.setProperty("--system-rotate-z", `${-5 + progress * 10}deg`);
      setStage(stage);
    }

    function requestUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(update);
    }

    function measure() {
      distance = Math.max(1, storyElement.offsetHeight - window.innerHeight);
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
