import React from "react";

const GASTOS = [
  { code: "6101", name: "Costo de productos vendidos" },
  { code: "6102", name: "Gastos de venta" },
  { code: "6103", name: "Gastos de administración" },
  { code: "6104", name: "Gastos financieros" },
  { code: "6105", name: "Otros gastos" },
  { code: "6106", name: "Impuesto sobre la renta" },
];

const GROUPS_SUMMARY = [
  { group: "1", label: "Activo", count: 19, color: "#4f8cff" },
  { group: "2", label: "Pasivo", count: 8, color: "#f59e0b" },
  { group: "3", label: "Patrimonio", count: 4, color: "#10b981" },
  { group: "4", label: "Ingresos", count: 3, color: "#00d4ff" },
  { group: "5", label: "Costos", count: 8, color: "#8b5cf6" },
  { group: "6", label: "Gastos", count: 6, color: "#ef4444" },
];

export default function Slide11CatalogoGastos() {
  return (
    <div className="slide-content">
      <span className="section-number">05</span>
      <div className="slide-label">Sección 5 — Catálogo de Cuentas</div>
      <h2 className="slide-title small">Catálogo: Gastos y Resumen General</h2>

      <div className="grid-2" style={{ flex: 1, overflow: "hidden" }}>
        {/* Gastos */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "#ef4444", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            Grupo 6 — Gastos y Costo de Venta
          </div>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Cuenta</th>
                </tr>
              </thead>
              <tbody>
                {GASTOS.map((c) => (
                  <tr key={c.code}>
                    <td className="code-cell">{c.code}</td>
                    <td>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="glass-card compact" style={{ marginTop: "var(--space-4)" }}>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "var(--text-secondary)" }}>
              Todas las cuentas del grupo 6 son de <strong style={{ color: "var(--text-primary)" }}>naturaleza deudora</strong>.
              Se cierran contra la cuenta de resultados al final del período.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--space-4)" }}>
            Resumen del Catálogo
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {GROUPS_SUMMARY.map((g) => (
              <div
                key={g.group}
                className="glass-card compact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                  padding: "var(--space-3) var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${g.color}15`,
                    border: `1px solid ${g.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 16,
                    color: g.color,
                    flexShrink: 0,
                  }}
                >
                  {g.group}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
                    {g.label}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: g.color,
                  }}
                >
                  {g.count} cuentas
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "var(--space-4)",
              textAlign: "center",
              fontFamily: "var(--font-heading)",
              fontSize: 15,
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Total: <span style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>48 cuentas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
