import React from "react";
import { CheckCircle2 } from "lucide-react";

const ITEMS = [
  "Una empresa industrial necesita un catálogo de cuentas específico por la complejidad de inventarios y costos de producción.",
  "El manual de cuentas asegura uniformidad en el registro contable, mejora el control interno y facilita la preparación de los estados financieros.",
  "El sistema de costos por órdenes de producción permite identificar y acumular el costo de cada orden de forma individual.",
  "Los informes de producción son el puente entre la contabilidad de costos y la información financiera.",
];

export default function Slide25Conclusiones() {
  return (
    <div className="slide-content">
      <div className="paint-bar warm" />
      <span className="section-number">10</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-sky)" } as React.CSSProperties}>Sección 10</div>
      <h2 className="slide-title"><span className="accent">Conclusiones</span></h2>

      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 960 }}>
          {ITEMS.map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: 16, alignItems: "flex-start",
              padding: "18px 22px", borderRadius: 14,
              background: "white", border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "var(--gradient-brand)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <CheckCircle2 size={18} color="white" />
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-secondary)", paddingTop: 4 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
