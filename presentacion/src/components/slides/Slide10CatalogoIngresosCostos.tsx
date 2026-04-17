import React from "react";

const INGRESOS = [
  { code: "4101", name: "Ventas" },
  { code: "4102", name: "Devoluciones sobre ventas" },
  { code: "4103", name: "Otros ingresos" },
];

const COSTOS = [
  { code: "5101", name: "Compras de materia prima" },
  { code: "5102", name: "Fletes en compras" },
  { code: "5103", name: "Devoluciones sobre compras" },
  { code: "5104", name: "Mano de obra directa" },
  { code: "5105", name: "Nómina de fábrica" },
  { code: "5106", name: "CIF control" },
  { code: "5107", name: "CIF aplicados" },
  { code: "5108", name: "Variación de CIF" },
];

export default function Slide10CatalogoIngresosCostos() {
  return (
    <div className="slide-content">
      <span className="section-number">05</span>
      <div className="slide-label">Sección 5 — Catálogo de Cuentas</div>
      <h2 className="slide-title small">Catálogo: Ingresos y Costos de Producción</h2>

      <div className="grid-2" style={{ flex: 1, overflow: "hidden" }}>
        {/* Ingresos */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-5)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-5)" }} />
            Grupo 4 — Ingresos
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
                {INGRESOS.map((c) => (
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
              Los ingresos son de <strong style={{ color: "var(--text-primary)" }}>naturaleza acreedora</strong>. Las
              devoluciones sobre ventas (4102) tienen naturaleza deudora y disminuyen las ventas netas.
            </p>
          </div>
        </div>

        {/* Costos */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-2)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-2)" }} />
            Grupo 5 — Costos de Producción
          </div>
          <div className="table-scroll">
            <table className="data-table compact">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Cuenta</th>
                </tr>
              </thead>
              <tbody>
                {COSTOS.map((c) => (
                  <tr key={c.code}>
                    <td className="code-cell">{c.code}</td>
                    <td>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
