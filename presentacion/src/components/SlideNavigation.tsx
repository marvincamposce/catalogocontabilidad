"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Loader2,
} from "lucide-react";
import { exportToPdf } from "@/utils/exportPdf";
import { SLIDES } from "@/data/slideData";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  progress: number;
  isFirst: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
  goToSlide: (n: number) => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  progress,
  isFirst,
  isLast,
  onPrev,
  onNext,
  goToSlide,
}: SlideNavigationProps) {
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState("");

  const handleExport = async () => {
    setExporting(true);
    setExportProgress("Preparando...");
    try {
      await exportToPdf(totalSlides, goToSlide, (current, total) => {
        setExportProgress(`Slide ${current}/${total}`);
      });
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
      setExportProgress("");
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Navigation bar */}
      <nav className="nav-bar" id="slide-navigation">
        <div className="nav-controls">
          <button
            className="nav-btn"
            onClick={onPrev}
            disabled={isFirst}
            aria-label="Slide anterior"
            id="btn-prev"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="nav-counter">
            <span className="current">{currentSlide}</span> / {totalSlides}
          </span>
          <button
            className="nav-btn"
            onClick={onNext}
            disabled={isLast}
            aria-label="Siguiente slide"
            id="btn-next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
          {SLIDES[currentSlide - 1]?.title || ""}
        </div>

        <div className="nav-controls">
          {exporting && (
            <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
              {exportProgress}
            </span>
          )}
          <button
            className="nav-btn accent"
            onClick={handleExport}
            disabled={exporting}
            id="btn-export-pdf"
          >
            {exporting ? <Loader2 size={16} className="spinning" /> : <Download size={16} />}
            {exporting ? "Exportando..." : "PDF"}
          </button>
        </div>
      </nav>
    </>
  );
}
