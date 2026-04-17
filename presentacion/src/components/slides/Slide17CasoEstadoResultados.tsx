import React from "react";

const RESULTADO = [
  { concepto: "Ventas", monto: "267,500.00" },
  { concepto: "Menos: devoluciones sobre ventas", monto: "(5,000.00)", sub: true },
  { concepto: "Ventas netas", monto: "262,500.00", bold: true },
  { concepto: "Menos: costo de productos vendidos", monto: "(188,672.40)", sub: true },
  { concepto: "Utilidad bruta", monto: "73,827.60", highlight: true },
  { concepto: "Gastos de venta", monto: "(26,605.00)", sub: true },
  { concepto: "Gastos de administración", monto: "(15,000.00)", sub: true },
  { concepto: "Utilidad de operación", monto: "32,222.60", bold: true },
  { concepto: "Gastos financieros", monto: "(150.00)", sub: true },
  { concepto: "Otros gastos", monto: "(295.00)", sub: true },
  { concepto: "Utilidad antes de impuesto", monto: "31,777.60", bold: true },
  { concepto: "Impuesto sobre la renta", monto: "(7,944.40)", sub: true },
  { concepto: "Utilidad del período", monto: "23,833.20", total: true },
];

export default function Slide23EstadoResultados() {
  return (
    <div className="slide-content">
      <div className="paint-bar warm" />
      <span className="section-number">09</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-sky)" } as React.CSSProperties}>Sección 9 · Caso Ilustrativo</div>
      <h2 className="slide-title medium">Estado de <span className="accent">Resultados</span></h2>

      <div className="grid-3-2" style={{ flex: 1 }}>
        <div className="table-wrap">
          <table className="data-table compact">
            <thead><tr><th>Concepto</th><th style={{ textAlign: "right" }}>Lempiras</th></tr></thead>
            <tbody>
              {RESULTADO.map((r, i) => (
                <tr key={i} className={r.total ? "total-row" : ""}>
                  <td style={{
                    fontWeight: r.total || r.bold || r.highlight ? 600 : 400,
                    color: r.total ? "var(--text-primary)" : r.highlight ? "var(--color-emerald)" : r.sub ? "var(--text-tertiary)" : "var(--text-secondary)",
                    paddingLeft: r.sub ? 28 : undefined, fontSize: 11.5,
                  }}>{r.concepto}</td>
                  <td className="amount-cell" style={{
                    color: r.total ? "var(--color-emerald)" : r.sub ? "var(--color-sky)" : "var(--text-secondary)",
                    fontWeight: r.total ? 700 : 400, fontSize: 11.5,
                  }}>{r.monto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="stat-card" style={{ borderLeft: "4px solid var(--color-blue)" }}>
            <span className="stat-label">Ventas Netas</span>
            <span className="stat-value" style={{ fontSize: 22 }}>L. 262,500</span>
          </div>
          <div className="stat-card" style={{ borderLeft: "4px solid var(--color-emerald)" }}>
            <span className="stat-label">Utilidad Bruta</span>
            <span className="stat-value" style={{ color: "var(--color-emerald)", fontSize: 22 }}>L. 73,828</span>
          </div>
          <div className="stat-card" style={{ borderLeft: "4px solid var(--color-violet)" }}>
            <span className="stat-label">Utilidad Neta</span>
            <span className="stat-value" style={{ color: "var(--color-violet)", fontSize: 22 }}>L. 23,833</span>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-tertiary)", lineHeight: 1.6, marginTop: 4 }}>
            Margen bruto: <strong style={{ color: "var(--text-primary)" }}>28.1%</strong><br />
            Margen neto: <strong style={{ color: "var(--text-primary)" }}>9.1%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
