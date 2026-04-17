"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { SLIDES, getPresenterColor, getPresenterName } from "@/data/slideData";

interface SlideContainerProps {
  slideId: number;
  children: React.ReactNode;
}

export default function SlideContainer({
  slideId,
  children,
}: SlideContainerProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);

  const slideInfo = SLIDES.find((s) => s.id === slideId);
  const presenterColor = slideInfo
    ? getPresenterColor(slideInfo.presenterIndex)
    : "#4f8cff";
  const presenterName = slideInfo
    ? getPresenterName(slideInfo.presenterIndex)
    : "Expositor";

  const rescale = useCallback(() => {
    const viewport = viewportRef.current;
    const scaler = scalerRef.current;
    if (!viewport || !scaler) return;

    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const scale = Math.min(vw / 1280, vh / 720);

    scaler.style.transform = `scale(${scale})`;
    // Center the scaled element
    scaler.style.left = `${(vw - 1280 * scale) / 2}px`;
    scaler.style.top = `${(vh - 720 * scale) / 2}px`;
  }, []);

  useEffect(() => {
    rescale();
    window.addEventListener("resize", rescale);
    return () => window.removeEventListener("resize", rescale);
  }, [rescale]);

  // Re-scale when slide changes
  useEffect(() => {
    rescale();
  }, [slideId, rescale]);

  return (
    <div className="slide-viewport" ref={viewportRef}>
      <div className="slide-scaler" ref={scalerRef}>
        <div className="slide-frame">
          {/* Presenter badge at top-left */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 24,
              zIndex: 10,
            }}
          >
            <span
              className="presenter-badge"
              style={{
                color: presenterColor,
                borderColor: `${presenterColor}33`,
                background: `${presenterColor}0d`,
              }}
            >
              <span
                className="badge-dot"
                style={{ background: presenterColor }}
              />
              {presenterName}
            </span>
          </div>

          {/* Slide number at bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: 14,
              right: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-tertiary)",
              zIndex: 10,
            }}
          >
            {slideId} / {SLIDES.length}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
