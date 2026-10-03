"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    }
    return () => {
      observer.disconnect();
      for (const element of elements) element.classList.remove("reveal-pending");
    };
  }, []);
  return null;
}
