"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.dataset.contactActive = "false";

    for (const element of revealElements) {
      const rect = element.getBoundingClientRect();
      if (reduceMotion || rect.top < window.innerHeight * 0.94) {
        element.dataset.visible = "true";
      }
    }

    root.classList.add("motion-ready");

    const revealObserver = reduceMotion
      ? null
      : new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              (entry.target as HTMLElement).dataset.visible = "true";
              observer.unobserve(entry.target);
            }
          },
          { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
        );

    if (revealObserver) {
      for (const element of revealElements) {
        if (element.dataset.visible !== "true") revealObserver.observe(element);
      }
    }

    const contact = document.getElementById("contact");
    const contactObserver = contact
      ? new IntersectionObserver(
          ([entry]) => {
            root.dataset.contactActive = String(
              entry.isIntersecting && entry.intersectionRatio >= 0.18,
            );
          },
          { threshold: [0, 0.18, 0.45] },
        )
      : null;

    if (contact && contactObserver) contactObserver.observe(contact);

    return () => {
      revealObserver?.disconnect();
      contactObserver?.disconnect();
      root.classList.remove("motion-ready");
      delete root.dataset.contactActive;
    };
  }, []);

  return null;
}
