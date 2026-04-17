import React from "react";

const DATA = [
  { concepto: "Inventario inicial de materia prima", monto: "10,000.00", indent: false, sub: false },
  { concepto: "Compras de materia prima", monto: "80,000.00", indent: false, sub: false },
  { concepto: "Menos: devoluciones sobre compras", monto: "(1,500.00)", indent: true, sub: true },
  { concepto: "Materia prima disponible", monto: "88,500.00", indent: false, sub: false },
  { concepto: "Menos: inventario final de materia prima", monto: "(9,000.00)", indent: true, sub: true },
  { concepto: "Materia prima utilizada", monto: "79,500.00", indent: false, highlight: true },
  { concepto: "Más: mano de obra directa", monto: "68,000.00", indent: false, sub: false },
  { concepto: "Más: costos indirectos de fábrica", monto: "45,672.40", indent: false, sub: false },
  { concepto: "Costo de Producción", monto: "193,172.40", indent: false, total: true },
];

export default function Slide22CasoCostoProduccion() {
  return (
    <div className="slide-content">
      <div className="paint-bar warm" />
      <span className="section-number">09</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-sky)" } as React.CSSProperties}>Sección 9 · Caso Ilustrativo</div>
      <h2 className="slide-title medium">Costo de <span className="accent">Producción</span></h2>
      <p style={{ fontSize: 12.5, color: "var(--text-tertiary)", marginBottom: 16 }}>Pinturas Industriales del Valle, S.A. — Cifras en Lempiras (L.)</p>

      <div className="grid-3-2" style={{ flex: 1 }}>
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Concepto</th><th style={{ textAlign: "right" }}>Lempiras</th></tr></thead>
            <tbody>
              {DATA.map((r, i) => (
                <tr key={i} className={(r as { total?: boolean }).total ? "total-row" : ""}>
                  <td style={{
                    fontWeight: (r as { total?: boolean }).total || (r as { highlight?: boolean }).highlight ? 600 : 400,
                    color: (r as { total?: boolean }).total ? "var(--text-primary)" : (r as { highlight?: boolean }).highlight ? "var(--color-blue)" : r.sub ? "var(--text-tertiary)" : "var(--text-secondary)",
                    paddingLeft: r.indent ? 32 : undefined, fontSize: 13,
                  }}>{r.concepto}</td>
                  <td className="amount-cell" style={{
                    color: (r as { total?: boolean }).total ? "var(--color-blue)" : r.sub ? "var(--color-sky)" : "var(--text-secondary)",
                    fontWeight: (r as { total?: boolean }).total ? 700 : 400, fontSize: 13,
                  }}>{r.monto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[ { label: "MP Utilizada", value: "L. 79,500", color: "#2E5BFF" },
             { label: "Mano de Obra", value: "L. 68,000", color: "#7C3AED" },
             { label: "CIF", value: "L. 45,672", color: "#D97706" },
             { label: "Costo Producción", value: "L. 193,172", color: "#059669" },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-label">{s.label}</span>
              <span className="stat-value" style={{ color: s.color, fontSize: 22 }}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
