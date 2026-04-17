import React from "react";

const ROWS = [
  { code: "5104", name: "MOD", nat: "D", cargo: "Salarios directos", abono: "Cierre vs prod. en proceso" },
  { code: "5106", name: "CIF control", nat: "D", cargo: "CIF reales incurridos", abono: "Cierre vs CIF aplicados" },
  { code: "5107", name: "CIF aplicados", nat: "A", cargo: "Cierre vs CIF control", abono: "Tasa predeterminada aplicada" },
  { code: "6101", name: "Costo prod. vendidos", nat: "D", cargo: "Costo de entrega + var. desfav.", abono: "Ajustes favorables / cierre" },
  { code: "6102", name: "Gastos de venta", nat: "D", cargo: "Sueldos, comisiones, fletes", abono: "Cierre vs resultados" },
  { code: "6103", name: "Gastos de admin.", nat: "D", cargo: "Sueldos admin., papelería", abono: "Cierre vs resultados" },
];

export default function Slide18ManualCostosGastos() {
  return (
    <div className="slide-content">
      <div className="paint-bar sunset" />
      <span className="section-number">06</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-amber)" } as React.CSSProperties}>Sección 6 · Manual de Cuentas</div>
      <h2 className="slide-title medium">Manual: <span className="accent">Costos</span> y Gastos</h2>

      <div style={{ flex: 1 }}>
        <div className="table-wrap">
          <table className="data-table compact">
            <thead>
              <tr><th>Cód.</th><th>Cuenta</th><th>Nat.</th><th>Se Carga</th><th>Se Acredita</th></tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.code}>
                  <td className="code-cell">{r.code}</td>
                  <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</td>
                  <td><span className="tag" style={{
                    color: r.nat === "D" ? "var(--color-blue)" : "var(--color-emerald)",
                    borderColor: r.nat === "D" ? "rgba(46,91,255,0.2)" : "rgba(5,150,105,0.2)",
                    background: r.nat === "D" ? "var(--color-blue-soft)" : "var(--color-emerald-soft)",
                    fontSize: 9,
                  }}>{r.nat === "D" ? "Deudora" : "Acreedora"}</span></td>
                  <td>{r.cargo}</td>
                  <td>{r.abono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout blue" style={{ marginTop: 12 }}>
        <span style={{ fontSize: 13 }}>
          La cuenta <strong>5108 — Variación de CIF</strong> puede tener saldo deudor (subaplicación, desfavorable)
          o acreedor (sobreaplicación, favorable).
        </span>
      </div>
    </div>
  );
}
