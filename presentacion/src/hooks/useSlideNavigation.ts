"use client";

import { useState, useEffect, useCallback } from "react";

export function useSlideNavigation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goToSlide = useCallback(
    (n: number) => {
      if (n >= 1 && n <= totalSlides) {
        setDirection(n > currentSlide ? "next" : "prev");
        setCurrentSlide(n);
      }
    },
    [totalSlides, currentSlide]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setDirection("next");
      setCurrentSlide((s) => s + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setDirection("prev");
      setCurrentSlide((s) => s - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "Backspace" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(totalSlides);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    isFirst: currentSlide === 1,
    isLast: currentSlide === totalSlides,
    progress: (currentSlide / totalSlides) * 100,
  };
}
