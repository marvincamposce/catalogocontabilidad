import React from "react";

const INGRESOS = [
  { code: "4101", name: "Ventas" }, { code: "4102", name: "Devoluciones sobre ventas" }, { code: "4103", name: "Otros ingresos" },
];
const COSTOS = [
  { code: "5101", name: "Compras de materia prima" }, { code: "5102", name: "Fletes en compras" },
  { code: "5103", name: "Devoluciones sobre compras" }, { code: "5104", name: "Mano de obra directa" },
  { code: "5105", name: "Nómina de fábrica" }, { code: "5106", name: "CIF control" },
  { code: "5107", name: "CIF aplicados" }, { code: "5108", name: "Variación de CIF" },
];

export default function Slide14IngresosCostos() {
  return (
    <div className="slide-content">
      <div className="paint-bar fresh" />
      <span className="section-number">05</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-emerald)" } as React.CSSProperties}>Sección 5 · Catálogo de Cuentas</div>
      <h2 className="slide-title medium"><span className="accent">Ingresos</span> y Costos</h2>

      <div className="grid-2" style={{ flex: 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-emerald)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Grupo 4 — Ingresos</span>
          </div>
          <div className="table-wrap" style={{ marginBottom: 16 }}>
            <table className="data-table">
              <thead><tr><th>Código</th><th>Cuenta</th></tr></thead>
              <tbody>
                {INGRESOS.map((c) => (
                  <tr key={c.code}><td className="code-cell">{c.code}</td><td>{c.name}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout blue" style={{ padding: "12px 16px", fontSize: 12.5 }}>
            Los ingresos son de <strong>naturaleza acreedora</strong>. La cuenta 4102 (devoluciones) es deudora
            y disminuye las ventas netas.
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-violet)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Grupo 5 — Costos de Producción</span>
          </div>
          <div className="table-wrap">
            <table className="data-table compact">
              <thead><tr><th>Código</th><th>Cuenta</th></tr></thead>
              <tbody>
                {COSTOS.map((c) => (
                  <tr key={c.code}><td className="code-cell">{c.code}</td><td>{c.name}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
