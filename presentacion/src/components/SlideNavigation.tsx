"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Loader2 } from "lucide-react";
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
  currentSlide, totalSlides, progress, isFirst, isLast,
  onPrev, onNext, goToSlide,
}: SlideNavigationProps) {
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState("");

  const handleExport = async () => {
    setExporting(true);
    setExportProgress("Preparando...");
    try {
      await exportToPdf(totalSlides, goToSlide, (current, total) => {
        setExportProgress(`${current}/${total}`);
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
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className="nav-bar" id="slide-navigation">
        <div className="nav-controls">
          <button className="nav-btn" onClick={onPrev} disabled={isFirst} aria-label="Anterior" id="btn-prev">
            <ChevronLeft size={18} />
          </button>
          <span className="nav-counter">
            <span className="current">{currentSlide}</span> / {totalSlides}
          </span>
          <button className="nav-btn" onClick={onNext} disabled={isLast} aria-label="Siguiente" id="btn-next">
            <ChevronRight size={18} />
          </button>
        </div>

        <span className="nav-title">{SLIDES[currentSlide - 1]?.title || ""}</span>

        {/* PDF export — hidden for now, functionality preserved */}
        <div className="nav-controls" style={{ display: "none" }}>
          {exporting && (
            <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{exportProgress}</span>
          )}
          <button className="nav-btn accent" onClick={handleExport} disabled={exporting} id="btn-export-pdf">
            {exporting ? <Loader2 size={14} className="spinning" /> : <Download size={14} />}
            {exporting ? "Exportando" : "PDF"}
          </button>
        </div>
      </nav>
    </>
  );
}
