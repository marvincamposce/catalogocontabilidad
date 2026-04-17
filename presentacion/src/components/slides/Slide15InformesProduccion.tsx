import React from "react";

const GASTOS = [
  { code: "6101", name: "Costo de productos vendidos" }, { code: "6102", name: "Gastos de venta" },
  { code: "6103", name: "Gastos de administración" }, { code: "6104", name: "Gastos financieros" },
  { code: "6105", name: "Otros gastos" }, { code: "6106", name: "Impuesto sobre la renta" },
];

const SUMMARY = [
  { group: "1", label: "Activo", count: 19, color: "#2E5BFF", bg: "#EEF2FF" },
  { group: "2", label: "Pasivo", count: 8, color: "#D97706", bg: "#FFFBEB" },
  { group: "3", label: "Patrimonio", count: 4, color: "#059669", bg: "#ECFDF5" },
  { group: "4", label: "Ingresos", count: 3, color: "#0284C7", bg: "#E0F2FE" },
  { group: "5", label: "Costos", count: 8, color: "#7C3AED", bg: "#F3EEFF" },
  { group: "6", label: "Gastos", count: 6, color: "#E11D48", bg: "#FFF1F2" },
];

export default function Slide15GastosResumen() {
  return (
    <div className="slide-content">
      <div className="paint-bar fresh" />
      <span className="section-number">05</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-emerald)" } as React.CSSProperties}>Sección 5 · Catálogo de Cuentas</div>
      <h2 className="slide-title medium"><span className="accent">Gastos</span> y Resumen General</h2>

      <div className="grid-2" style={{ flex: 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-rose)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Grupo 6 — Gastos</span>
          </div>
          <div className="table-wrap" style={{ marginBottom: 16 }}>
            <table className="data-table">
              <thead><tr><th>Código</th><th>Cuenta</th></tr></thead>
              <tbody>
                {GASTOS.map((c) => (
                  <tr key={c.code}><td className="code-cell">{c.code}</td><td>{c.name}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <span style={{ fontSize: 12.5, color: "var(--text-tertiary)" }}>
            Todas son de naturaleza deudora. Se cierran contra resultados al final del período.
          </span>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, marginBottom: 14 }}>
            Resumen del Catálogo
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SUMMARY.map((g) => (
              <div key={g.group} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 14px", borderRadius: 10,
                background: g.bg, border: `1px solid ${g.color}20`,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: "white", border: `1.5px solid ${g.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 14, color: g.color,
                }}>
                  {g.group}
                </div>
                <span style={{ flex: 1, fontSize: 13.5, fontWeight: 600, color: "var(--text-primary)" }}>{g.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: g.color }}>
                  {g.count}
                </span>
              </div>
            ))}
          </div>
          <div style={{
            textAlign: "center", marginTop: 16, fontFamily: "var(--font-heading)",
            fontSize: 16, fontWeight: 800, color: "var(--text-primary)",
          }}>
            Total: <span style={{ color: "var(--color-blue)" }}>48 cuentas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
