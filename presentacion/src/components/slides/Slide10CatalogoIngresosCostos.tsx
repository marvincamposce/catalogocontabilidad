import React from "react";

const FORMULAS = [
  {
    name: "Costo de Producción",
    body: "MP Utilizada + MOD + CIF",
    color: "#2E5BFF",
  },
  {
    name: "Costo de Productos Terminados",
    body: "Inv. Ini. Prod. en Proceso + Costo de Producción − Inv. Final Prod. en Proceso",
    color: "#7C3AED",
  },
  {
    name: "Costo de Productos Vendidos",
    body: "Inv. Ini. Prod. Terminados + Costo Prod. Terminados − Inv. Final Prod. Terminados",
    color: "#059669",
  },
];

export default function Slide10Formulas() {
  return (
    <div className="slide-content">
      <div className="paint-bar" style={{ background: "var(--gradient-cool)" }} />
      <span className="section-number">ƒ</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-violet)" } as React.CSSProperties}>Sección 4</div>
      <h2 className="slide-title medium">Fórmulas de <span className="accent">Producción</span></h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
        {FORMULAS.map((f) => (
          <div key={f.name} className="formula-card" style={{ padding: "22px 28px" }}>
            <div className="formula-accent" style={{ background: f.color }} />
            <div className="formula-name">{f.name}</div>
            <div className="formula-body">
              {f.body.split(/(\+|−)/g).map((part, i) =>
                part === "+" || part === "−" ? (
                  <span key={i} className="formula-operator"> {part} </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="callout blue" style={{ marginTop: 12 }}>
        <span style={{ fontSize: 13.5 }}>
          Estas tres fórmulas constituyen el puente entre la <strong>contabilidad de costos</strong> y
          los <strong>estados financieros</strong> de la empresa.
        </span>
      </div>
    </div>
  );
}
