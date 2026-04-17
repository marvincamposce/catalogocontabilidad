import React from "react";
import { CheckCircle } from "lucide-react";

const REASONS = [
  "La empresa produce por lotes identificables según línea, color y orden de fabricación",
  "Cada orden acumula materiales directos, mano de obra directa y CIF aplicados",
  "La gerencia necesita el costo de cada lote para fijar precios y medir rentabilidad",
  "La hoja de costos evidencia el costo unitario y total de la orden",
];

export default function Slide08SistemaCostos() {
  return (
    <div className="slide-content">
      <div className="paint-bar" style={{ background: "var(--gradient-cool)" }} />
      <span className="section-number">04</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-violet)" } as React.CSSProperties}>Sección 4</div>
      <h2 className="slide-title medium">Sistema de Costos por<br /><span className="accent">Órdenes de Producción</span></h2>

      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 40 }}>
        {/* Left visual */}
        <div style={{
          flex: "0 0 380px", height: "100%",
          background: "var(--gradient-brand)", borderRadius: 18,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "40px 32px", color: "white",
        }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, opacity: 0.8, marginBottom: 8 }}>
            Sistema seleccionado
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
            Costos por Órdenes de Producción
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>
            Con apoyo de control permanente de inventarios para materia prima,
            producción en proceso y productos terminados.
          </div>
        </div>

        {/* Right — justification */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
            ¿Por qué este sistema?
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {REASONS.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "var(--color-blue-soft)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <CheckCircle size={16} style={{ color: "var(--color-blue)" }} />
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-secondary)", paddingTop: 3 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
