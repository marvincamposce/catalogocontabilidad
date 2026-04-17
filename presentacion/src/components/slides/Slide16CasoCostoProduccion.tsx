import React from "react";

const PRODUCCION_DATA = [
  { concepto: "Inventario inicial de materia prima", monto: "10,000.00", tipo: "normal" },
  { concepto: "Compras de materia prima", monto: "80,000.00", tipo: "add" },
  { concepto: "Menos: devoluciones sobre compras", monto: "(1,500.00)", tipo: "sub" },
  { concepto: "Materia prima disponible", monto: "88,500.00", tipo: "subtotal" },
  { concepto: "Menos: inventario final de materia prima", monto: "(9,000.00)", tipo: "sub" },
  { concepto: "Materia prima utilizada", monto: "79,500.00", tipo: "highlight" },
  { concepto: "Más: mano de obra directa", monto: "68,000.00", tipo: "add" },
  { concepto: "Más: costos indirectos de fábrica", monto: "45,672.40", tipo: "add" },
  { concepto: "Costo de Producción", monto: "193,172.40", tipo: "total" },
];

export default function Slide16CasoCostoProduccion() {
  return (
    <div className="slide-content">
      <span className="section-number">09</span>
      <div className="slide-label">Sección 9 — Caso Ilustrativo</div>
      <h2 className="slide-title small">Informe de Costo de Producción</h2>

      <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: "var(--space-4)" }}>
        Pinturas Industriales del Valle, S.A. — Cifras en Lempiras (L.)
      </p>

      <div className="grid-2-1">
        <div className="table-scroll" style={{ flex: 1 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th style={{ textAlign: "right" }}>Lempiras</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCCION_DATA.map((row, i) => (
                <tr key={i} className={row.tipo === "total" ? "total-row" : ""}>
                  <td style={{
                    fontWeight: row.tipo === "total" || row.tipo === "highlight" || row.tipo === "subtotal" ? 600 : 400,
                    color: row.tipo === "total" ? "var(--text-primary)" :
                           row.tipo === "highlight" ? "var(--color-presenter-2)" :
                           row.tipo === "sub" ? "var(--text-tertiary)" :
                           "var(--text-secondary)",
                    paddingLeft: row.tipo === "sub" ? "var(--space-6)" : undefined,
                  }}>
                    {row.concepto}
                  </td>
                  <td className="amount-cell" style={{
                    color: row.tipo === "total" ? "var(--color-presenter-1)" :
                           row.tipo === "highlight" ? "var(--color-presenter-2)" :
                           row.tipo === "sub" ? "#ef4444" :
                           "var(--text-secondary)",
                    fontWeight: row.tipo === "total" ? 700 : 400,
                  }}>
                    {row.monto}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <div className="stat-card">
            <span className="stat-label">MP Utilizada</span>
            <span className="stat-value" style={{ fontSize: 22 }}>L. 79,500</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">MOD</span>
            <span className="stat-value" style={{ fontSize: 22 }}>L. 68,000</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">CIF</span>
            <span className="stat-value" style={{ fontSize: 22 }}>L. 45,672</span>
          </div>
          <div className="stat-card" style={{ borderColor: "var(--border-accent)" }}>
            <span className="stat-label">Costo de Producción</span>
            <span className="stat-value" style={{ fontSize: 22 }}>L. 193,172</span>
          </div>
        </div>
      </div>
    </div>
  );
}
