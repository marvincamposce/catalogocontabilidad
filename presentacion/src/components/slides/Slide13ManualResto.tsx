import React from "react";

const PASIVO = [
  { code: "2101", name: "Cuentas por pagar proveedores" }, { code: "2102", name: "Documentos por pagar" },
  { code: "2103", name: "Sueldos y salarios por pagar" }, { code: "2104", name: "Impuestos por pagar" },
  { code: "2105", name: "Dividendos por pagar" }, { code: "2201", name: "Préstamos bancarios a largo plazo" },
  { code: "2202", name: "Bonos por pagar" }, { code: "2203", name: "Prestaciones laborales por pagar" },
];

const PATRIMONIO = [
  { code: "3101", name: "Capital social" }, { code: "3102", name: "Reserva legal" },
  { code: "3103", name: "Utilidades retenidas" }, { code: "3104", name: "Utilidad del período" },
];

export default function Slide13PasivoPatrimonio() {
  return (
    <div className="slide-content">
      <div className="paint-bar fresh" />
      <span className="section-number">05</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-emerald)" } as React.CSSProperties}>Sección 5 · Catálogo de Cuentas</div>
      <h2 className="slide-title medium"><span className="accent">Pasivo</span> y Patrimonio</h2>

      <div className="grid-2" style={{ flex: 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-amber)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Pasivo</span>
            <span className="tag" style={{ color: "var(--color-amber)", borderColor: "rgba(217,119,6,0.25)", background: "var(--color-amber-soft)", marginLeft: "auto" }}>
              Corto y largo plazo
            </span>
          </div>
          <div className="table-wrap">
            <table className="data-table compact">
              <thead><tr><th>Código</th><th>Cuenta</th></tr></thead>
              <tbody>
                {PASIVO.map((c) => (
                  <tr key={c.code}><td className="code-cell">{c.code}</td><td>{c.name}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-emerald)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Patrimonio</span>
          </div>
          <div className="table-wrap">
            <table className="data-table compact">
              <thead><tr><th>Código</th><th>Cuenta</th></tr></thead>
              <tbody>
                {PATRIMONIO.map((c) => (
                  <tr key={c.code}><td className="code-cell">{c.code}</td><td>{c.name}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callout blue" style={{ marginTop: 16, padding: "12px 16px", fontSize: 12.5 }}>
            Todas las cuentas de pasivo y patrimonio son de <strong>naturaleza acreedora</strong>.
            El patrimonio agrupa aportes de socios, reservas y resultados acumulados.
          </div>
        </div>
      </div>
    </div>
  );
}
