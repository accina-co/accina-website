"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — reveals `.reveal` / `.slide-l` / `.slide-r` elements as they enter the viewport
 * and drives the orb parallax via `--scroll-y`.
 * Ported from the liquid-scroll concept (2026-05-20). Behaviour only, no markup.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .slide-l, .slide-r"));

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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((el) => observer.observe(el));

    // parallax: พื้นหลัง fixed อยู่นิ่ง — เลื่อนเฉพาะ orb ที่อยู่ในsection
    // สูตรจากต้นฉบับ: translateY(y * factor * -0.3), factor = (idx % 3 + 1) * strength
    const shells = Array.from(document.querySelectorAll<HTMLElement>(".orb-shell"));
    let frame = 0;
    const applyParallax = () => {
      frame = 0;
      const strength =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--parallax-strength"),
        ) || 0.15;
      const y = window.scrollY;
      shells.forEach((shell, idx) => {
        const factor = ((idx % 3) + 1) * strength;
        shell.style.transform = `translate3d(0, ${y * factor * -0.3}px, 0)`;
      });
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(applyParallax);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    applyParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
