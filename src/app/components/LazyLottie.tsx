"use client";

import type { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type LazyLottieProps = {
  className: string;
  path: string;
  speed?: number;
  staticFrame?: number;
};

export function LazyLottie({
  className,
  path,
  speed = 1,
  staticFrame = 0,
}: LazyLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const animationContainer: HTMLDivElement = container;

    const motionPreference = window.matchMedia(REDUCED_MOTION_QUERY);
    let animation: AnimationItem | null = null;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    function applyMotionPreference() {
      if (!animation) return;

      if (motionPreference.matches) {
        animation.goToAndStop(staticFrame, true);
      } else {
        animation.play();
      }
    }

    async function loadAnimation() {
      if (animation || cancelled) return;

      const { default: lottie } = await import("lottie-web");
      if (cancelled) return;

      animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: !motionPreference.matches,
        path,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });
      animation.setSpeed(speed);
      animation.addEventListener("DOMLoaded", applyMotionPreference);
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer?.disconnect();
          void loadAnimation();
        },
        { rootMargin: "300px" },
      );
      observer.observe(animationContainer);
    } else {
      void loadAnimation();
    }

    motionPreference.addEventListener("change", applyMotionPreference);

    return () => {
      cancelled = true;
      observer?.disconnect();
      motionPreference.removeEventListener("change", applyMotionPreference);
      animation?.removeEventListener("DOMLoaded", applyMotionPreference);
      animation?.destroy();
    };
  }, [path, speed, staticFrame]);

  return <div className={className} ref={containerRef} aria-hidden="true" />;
}
