"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { SLIDES, getPresenterColor, getPresenterSoftColor, getPresenterName } from "@/data/slideData";

interface SlideContainerProps {
  slideId: number;
  children: React.ReactNode;
}

export default function SlideContainer({ slideId, children }: SlideContainerProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);

  const slideInfo = SLIDES.find((s) => s.id === slideId);
  const presenterColor = slideInfo ? getPresenterColor(slideInfo.presenterIndex) : "#2E5BFF";
  const presenterSoft = slideInfo ? getPresenterSoftColor(slideInfo.presenterIndex) : "#EEF2FF";
  const presenterName = slideInfo ? getPresenterName(slideInfo.presenterIndex) : "Expositor";

  const rescale = useCallback(() => {
    const viewport = viewportRef.current;
    const scaler = scalerRef.current;
    if (!viewport || !scaler) return;
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const scale = Math.min(vw / 1280, vh / 720);
    scaler.style.transform = `scale(${scale})`;
    scaler.style.left = `${(vw - 1280 * scale) / 2}px`;
    scaler.style.top = `${(vh - 720 * scale) / 2}px`;
  }, []);

  useEffect(() => {
    rescale();
    window.addEventListener("resize", rescale);
    return () => window.removeEventListener("resize", rescale);
  }, [rescale]);

  useEffect(() => { rescale(); }, [slideId, rescale]);

  return (
    <div className="slide-viewport" ref={viewportRef}>
      <div className="slide-scaler" ref={scalerRef}>
        <div className="slide-frame">
          {/* Presenter badge */}
          <div style={{ position: "absolute", top: 14, left: 20, zIndex: 10 }}>
            <span
              className="presenter-badge"
              style={{
                color: presenterColor,
                borderColor: `${presenterColor}30`,
                background: presenterSoft,
              }}
            >
              <span className="badge-dot" style={{ background: presenterColor }} />
              {presenterName}
            </span>
          </div>

          {/* Slide number */}
          <div style={{
            position: "absolute", bottom: 12, right: 24, zIndex: 10,
            fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)",
          }}>
            {slideId} / {SLIDES.length}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
