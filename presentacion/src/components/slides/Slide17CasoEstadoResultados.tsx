import React from "react";

const TERMINADOS_VENDIDOS = [
  { concepto: "", terminados: "Terminados", vendidos: "Vendidos", header: true },
  { concepto: "Inv. inicial correspondiente", terminados: "15,000.00", vendidos: "12,500.00" },
  { concepto: "+ Costo de producción / terminada", terminados: "193,172.40", vendidos: "195,172.40" },
  { concepto: "Total disponible", terminados: "208,172.40", vendidos: "207,672.40", subtotal: true },
  { concepto: "− Inventario final", terminados: "(13,000.00)", vendidos: "(19,000.00)" },
  { concepto: "Costo final", terminados: "195,172.40", vendidos: "188,672.40", total: true },
];

const RESULTADO_DATA = [
  { concepto: "Ventas", monto: "267,500.00", tipo: "normal" },
  { concepto: "Menos: devoluciones sobre ventas", monto: "(5,000.00)", tipo: "sub" },
  { concepto: "Ventas netas", monto: "262,500.00", tipo: "subtotal" },
  { concepto: "Menos: costo de productos vendidos", monto: "(188,672.40)", tipo: "sub" },
  { concepto: "Utilidad bruta", monto: "73,827.60", tipo: "highlight" },
  { concepto: "Gastos de venta", monto: "(26,605.00)", tipo: "sub" },
  { concepto: "Gastos de administración", monto: "(15,000.00)", tipo: "sub" },
  { concepto: "Utilidad de operación", monto: "32,222.60", tipo: "subtotal" },
  { concepto: "Gastos financieros", monto: "(150.00)", tipo: "sub" },
  { concepto: "Otros gastos", monto: "(295.00)", tipo: "sub" },
  { concepto: "Utilidad antes de impuesto", monto: "31,777.60", tipo: "subtotal" },
  { concepto: "Impuesto sobre la renta", monto: "(7,944.40)", tipo: "sub" },
  { concepto: "Utilidad del período", monto: "23,833.20", tipo: "total" },
];

export default function Slide17CasoEstadoResultados() {
  return (
    <div className="slide-content padded-top">
      <span className="section-number">09</span>
      <div className="slide-label">Sección 9 — Caso Ilustrativo</div>
      <h2 className="slide-title small">Informes de Terminados/Vendidos y Estado de Resultados</h2>

      <div className="grid-2" style={{ flex: 1, overflow: "hidden", gap: "var(--space-4)" }}>
        {/* Left: Estado de Resultados */}
        <div className="table-scroll">
          <table className="data-table compact">
            <thead>
              <tr>
                <th colSpan={2}>Estado de Resultados</th>
              </tr>
            </thead>
            <tbody>
              {RESULTADO_DATA.map((row, i) => (
                <tr key={i} className={row.tipo === "total" ? "total-row" : ""}>
                  <td style={{
                    fontWeight: row.tipo === "total" || row.tipo === "subtotal" || row.tipo === "highlight" ? 600 : 400,
                    color: row.tipo === "total" ? "var(--text-primary)" :
                           row.tipo === "highlight" ? "var(--color-presenter-5)" :
                           row.tipo === "sub" ? "var(--text-tertiary)" :
                           "var(--text-secondary)",
                    paddingLeft: row.tipo === "sub" ? "var(--space-5)" : undefined,
                    fontSize: 11,
                  }}>
                    {row.concepto}
                  </td>
                  <td className="amount-cell" style={{
                    color: row.tipo === "total" ? "var(--color-presenter-5)" :
                           row.tipo === "sub" ? "#ef4444" :
                           "var(--text-secondary)",
                    fontWeight: row.tipo === "total" ? 700 : 400,
                    fontSize: 11,
                  }}>
                    {row.monto}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Terminados / Vendidos + Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <div className="table-scroll">
            <table className="data-table compact">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th style={{ textAlign: "right" }}>Terminados</th>
                  <th style={{ textAlign: "right" }}>Vendidos</th>
                </tr>
              </thead>
              <tbody>
                {TERMINADOS_VENDIDOS.filter(r => !r.header).map((row, i) => (
                  <tr key={i} className={row.total ? "total-row" : ""}>
                    <td style={{
                      fontWeight: row.total || row.subtotal ? 600 : 400,
                      color: row.total ? "var(--text-primary)" : "var(--text-secondary)",
                      fontSize: 11,
                    }}>
                      {row.concepto}
                    </td>
                    <td className="amount-cell" style={{ fontSize: 11, color: row.total ? "var(--color-presenter-3)" : "var(--text-secondary)" }}>
                      {row.terminados}
                    </td>
                    <td className="amount-cell" style={{ fontSize: 11, color: row.total ? "var(--color-presenter-4)" : "var(--text-secondary)" }}>
                      {row.vendidos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid-2">
            <div className="stat-card">
              <span className="stat-label">Utilidad Bruta</span>
              <span className="stat-value" style={{ fontSize: 20 }}>L. 73,828</span>
            </div>
            <div className="stat-card" style={{ borderColor: "rgba(16,185,129,0.3)" }}>
              <span className="stat-label">Utilidad Neta</span>
              <span className="stat-value" style={{ fontSize: 20, background: "linear-gradient(135deg, #10b981, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                L. 23,833
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
