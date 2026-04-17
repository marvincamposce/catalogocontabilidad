"use client";

import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

export async function exportToPdf(
  totalSlides: number,
  goToSlide: (n: number) => void,
  onProgress?: (current: number, total: number) => void
) {
  // PDF in landscape 16:9 — 1280 x 720 points mapped to mm
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [338.67, 190.5], // 16:9 at ~96dpi equivalent
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  for (let i = 1; i <= totalSlides; i++) {
    goToSlide(i);
    // Wait for render
    await new Promise((r) => setTimeout(r, 400));

    onProgress?.(i, totalSlides);

    const slideEl = document.querySelector(".slide-frame") as HTMLElement;
    if (!slideEl) continue;

    const canvas = await html2canvas(slideEl, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#06060f",
      logging: false,
      width: 1280,
      height: 720,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.92);

    if (i > 1) {
      pdf.addPage();
    }

    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
  }

  pdf.save("Presentacion_Manual_Catalogo_Cuentas.pdf");
}
