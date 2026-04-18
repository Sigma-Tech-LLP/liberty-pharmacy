"use client";

import { useEffect } from "react";

/**
 * Initializes IntersectionObserver-based scroll reveal for elements
 * with the `.reveal` class, and handles navbar background opacity on scroll.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const nav = document.querySelector<HTMLElement>("nav");
      if (!nav) return;
      nav.style.background =
        window.scrollY > 50 ? "rgba(10,22,40,0.98)" : "rgba(10,22,40,0.92)";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
