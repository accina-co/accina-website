"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — reveals `[data-reveal]` elements as they enter the viewport
 * and drives the orb parallax via `--scroll-y`.
 * Ported from the liquid-scroll concept (2026-05-20). Behaviour only, no markup.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => observer.observe(el));

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const strength =
          Number.parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--atmo-parallax"),
          ) || 0.18;
        document.documentElement.style.setProperty(
          "--scroll-y",
          `${window.scrollY * strength}px`,
        );
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
