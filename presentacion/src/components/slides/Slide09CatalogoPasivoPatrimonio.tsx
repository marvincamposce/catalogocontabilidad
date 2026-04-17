import React from "react";

const PASIVO = [
  { code: "2101", name: "Cuentas por pagar proveedores" },
  { code: "2102", name: "Documentos por pagar" },
  { code: "2103", name: "Sueldos y salarios por pagar" },
  { code: "2104", name: "Impuestos por pagar" },
  { code: "2105", name: "Dividendos por pagar" },
  { code: "2201", name: "Préstamos bancarios a largo plazo" },
  { code: "2202", name: "Bonos por pagar" },
  { code: "2203", name: "Prestaciones laborales por pagar" },
];

const PATRIMONIO = [
  { code: "3101", name: "Capital social" },
  { code: "3102", name: "Reserva legal" },
  { code: "3103", name: "Utilidades retenidas" },
  { code: "3104", name: "Utilidad del período" },
];

export default function Slide09CatalogoPasivoPatrimonio() {
  return (
    <div className="slide-content">
      <span className="section-number">05</span>
      <div className="slide-label">Sección 5 — Catálogo de Cuentas</div>
      <h2 className="slide-title small">Catálogo: Pasivo y Patrimonio</h2>

      <div className="grid-2" style={{ flex: 1, overflow: "hidden" }}>
        {/* Pasivo */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-4)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-4)" }} />
            Pasivo
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
                {PASIVO.map((c) => (
                  <tr key={c.code}>
                    <td className="code-cell">{c.code}</td>
                    <td>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "var(--space-3)" }}>
            <div className="tag-row">
              <span className="tag" style={{ color: "var(--color-presenter-4)", borderColor: "rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.08)" }}>
                Corto plazo: 21xx
              </span>
              <span className="tag" style={{ color: "var(--color-presenter-3)", borderColor: "rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.08)" }}>
                Largo plazo: 22xx
              </span>
            </div>
          </div>
        </div>

        {/* Patrimonio */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-5)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-5)" }} />
            Patrimonio
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
                {PATRIMONIO.map((c) => (
                  <tr key={c.code}>
                    <td className="code-cell">{c.code}</td>
                    <td>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="glass-card compact" style={{ marginTop: "var(--space-4)" }}>
            <p style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--text-primary)" }}>Grupo 3</strong> — Agrupa las aportaciones de los socios,
              las reservas legales y los resultados acumulados y del período actual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
