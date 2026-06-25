"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));

    groups.forEach((group) => {
      group.classList.add("reveal-ready");

      const cards = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal-card]"));
      cards.forEach((card, index) => {
        card.style.setProperty("--reveal-index", String(index));
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      },
    );

    groups.forEach((group) => observer.observe(group));

    return () => {
      observer.disconnect();
      groups.forEach((group) => {
        group.classList.remove("reveal-ready", "is-visible");
      });
    };
  }, []);

  return null;
}
