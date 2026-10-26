"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollInit() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    // prefers-reduced-motion: never hide content
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Adding .js-reveal activates the CSS that starts elements hidden
    root.classList.add("js-reveal");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    const revealEl = (el: HTMLElement) => el.classList.add("revealed");

    // Elements already in viewport at load time: reveal immediately, no delay
    elements.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) revealEl(el);
    });

    // Observer for elements that scroll into view later
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements
      .filter((el) => !el.classList.contains("revealed"))
      .forEach((el) => observer.observe(el));

    // Safety net: reveal everything after 1.5 s regardless
    const safety = setTimeout(() => elements.forEach(revealEl), 1500);

    return () => {
      clearTimeout(safety);
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, [pathname]);

  return null;
}
