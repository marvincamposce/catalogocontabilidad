import React from "react";
import { Palette } from "lucide-react";

export default function Slide03Presentacion() {
  return (
    <div className="slide-content">
      <div className="paint-bar blue" />
      <span className="section-number">01</span>

      <div className="slide-label">Sección 1</div>
      <h2 className="slide-title">Presentación del <span className="accent">Proyecto</span></h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
        <p className="slide-text" style={{ fontSize: 17, maxWidth: 920 }}>
          Se desarrolla un modelo completo de <strong>manual y catálogo de cuentas</strong> para
          una empresa industrial, tomando como base los contenidos de contabilidad de costos,
          informes de producción y sistema de costos por órdenes de producción.
        </p>

        <div className="grid-3">
          {[
            { color: "#2E5BFF", bg: "#EEF2FF", label: "Identificación", desc: "Datos generales y naturaleza de la empresa" },
            { color: "#7C3AED", bg: "#F3EEFF", label: "Catálogo y Manual", desc: "Estructura contable codificada con guía de registro" },
            { color: "#059669", bg: "#ECFDF5", label: "Sistema de Costos", desc: "Costos por órdenes con informes de producción" },
          ].map((item) => (
            <div key={item.label} className="card accent-top" style={{ borderTopColor: item.color }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div className="icon-box sm" style={{ background: item.bg }}>
                  <Palette size={16} style={{ color: item.color }} />
                </div>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>
                  {item.label}
                </span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="callout blue">
          <span style={{ fontSize: 13 }}>
            La empresa base es <strong>Pinturas Industriales del Valle, S.A.</strong>, dedicada a la
            fabricación de pinturas arquitectónicas e industriales — un giro que permite aplicar
            claramente la materia prima, mano de obra directa, CIF e inventarios de producción.
          </span>
        </div>
      </div>
    </div>
  );
}
