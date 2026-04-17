import React from "react";

const FLOW = [
  { label: "Inv. Materia\nPrima", color: "#2E5BFF" },
  { label: "Producción\nen Proceso", color: "#7C3AED" },
  { label: "Productos\nTerminados", color: "#059669" },
  { label: "Costo Prod.\nVendidos", color: "#D97706" },
  { label: "Estado de\nResultados", color: "#E11D48" },
];

export default function Slide19FlujoContable() {
  return (
    <div className="slide-content">
      <div className="paint-bar sunset" />
      <span className="section-number">07</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-amber)" } as React.CSSProperties}>Sección 7</div>
      <h2 className="slide-title medium">Flujo <span className="accent">Contable</span></h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 32 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          {FLOW.map((step, i) => (
            <React.Fragment key={step.label}>
              {i > 0 && <span style={{ fontSize: 24, color: "var(--border-medium)" }}>→</span>}
              <div style={{
                padding: "16px 20px", background: `${step.color}0D`, border: `1.5px solid ${step.color}25`,
                borderRadius: 12, textAlign: "center", minWidth: 130,
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: step.color, whiteSpace: "pre-line", lineHeight: 1.3 }}>
                  {step.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="card flat no-hover" style={{ padding: 24 }}>
          <p className="slide-text" style={{ fontSize: 15 }}>
            Las <strong>compras</strong> incrementan el inventario de materia prima.
            La <strong>requisición</strong> traslada el costo a producción en proceso.
            Al <strong>finalizar la orden</strong>, el costo pasa a productos terminados.
            Cuando se <strong>vende</strong>, se reconoce como costo de productos vendidos
            y se refleja en el <strong>estado de resultados</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
