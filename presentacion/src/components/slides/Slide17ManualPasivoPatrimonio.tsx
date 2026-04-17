import React from "react";

const PASIVO = [
  { code: "2101", name: "Ctas. por pagar", cargo: "Pagos, devol., NC", abono: "Compras a crédito" },
  { code: "2104", name: "Impuestos por pagar", cargo: "Pagos al fisco", abono: "ISR y tributos" },
  { code: "2201", name: "Préstamos LP", cargo: "Abonos al principal", abono: "Desembolsos recibidos" },
];
const PATRIMONIO = [
  { code: "3101", name: "Capital social", cargo: "Reducciones de capital", abono: "Aportaciones / aumentos" },
  { code: "3104", name: "Utilidad del período", cargo: "Cierre a util. retenidas", abono: "Resultado neto favorable" },
];

export default function Slide17ManualPasivoPatrimonio() {
  return (
    <div className="slide-content">
      <div className="paint-bar sunset" />
      <span className="section-number">06</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-amber)" } as React.CSSProperties}>Sección 6 · Manual de Cuentas</div>
      <h2 className="slide-title medium">Manual: <span className="accent">Pasivo</span> y Patrimonio</h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-amber)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700 }}>Pasivo — Naturaleza Acreedora</span>
          </div>
          <div className="table-wrap"><table className="data-table compact">
            <thead><tr><th>Cód.</th><th>Cuenta</th><th>Se Carga</th><th>Se Acredita</th></tr></thead>
            <tbody>{PASIVO.map((r) => (
              <tr key={r.code}><td className="code-cell">{r.code}</td><td style={{ fontWeight: 500 }}>{r.name}</td><td>{r.cargo}</td><td>{r.abono}</td></tr>
            ))}</tbody>
          </table></div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-emerald)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700 }}>Patrimonio — Naturaleza Acreedora</span>
          </div>
          <div className="table-wrap"><table className="data-table compact">
            <thead><tr><th>Cód.</th><th>Cuenta</th><th>Se Carga</th><th>Se Acredita</th></tr></thead>
            <tbody>{PATRIMONIO.map((r) => (
              <tr key={r.code}><td className="code-cell">{r.code}</td><td style={{ fontWeight: 500 }}>{r.name}</td><td>{r.cargo}</td><td>{r.abono}</td></tr>
            ))}</tbody>
          </table></div>
        </div>
      </div>
    </div>
  );
}
