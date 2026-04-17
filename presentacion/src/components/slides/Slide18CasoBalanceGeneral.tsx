import React from "react";

const ACTIVOS = [
  { nombre: "Caja", monto: "5,000.00" }, { nombre: "Bancos", monto: "29,500.00" },
  { nombre: "Cuentas por cobrar", monto: "71,100.00" }, { nombre: "Inv. productos terminados", monto: "19,000.00" },
  { nombre: "Inv. productos en proceso", monto: "13,000.00" }, { nombre: "Inv. materia prima", monto: "9,000.00" },
  { nombre: "Maquinaria y equipo neto", monto: "46,327.60" },
];
const PASIVO_PAT = [
  { nombre: "Cuentas por pagar", monto: "18,000.00", tipo: "P" }, { nombre: "Dividendos por pagar", monto: "10,000.00", tipo: "P" },
  { nombre: "Impuestos por pagar", monto: "7,944.40", tipo: "P" }, { nombre: "Bonos por pagar", monto: "28,000.00", tipo: "P" },
  { nombre: "Capital social", monto: "100,000.00", tipo: "K" }, { nombre: "Utilidades retenidas", monto: "5,100.00", tipo: "K" },
  { nombre: "Utilidad del período", monto: "23,833.20", tipo: "K" },
];

export default function Slide24BalanceGeneral() {
  return (
    <div className="slide-content">
      <div className="paint-bar warm" />
      <span className="section-number">09</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-rose)" } as React.CSSProperties}>Sección 9 · Caso Ilustrativo</div>
      <h2 className="slide-title medium">Balance <span className="accent">General</span></h2>
      <p style={{ fontSize: 12.5, color: "var(--text-tertiary)", marginBottom: 12 }}>Al cierre del período — cifras en Lempiras</p>

      <div className="grid-2" style={{ flex: 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-blue)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Activos</span>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead><tr><th>Cuenta</th><th style={{ textAlign: "right" }}>Lempiras</th></tr></thead>
              <tbody>
                {ACTIVOS.map((r) => (
                  <tr key={r.nombre}><td>{r.nombre}</td><td className="amount-cell">{r.monto}</td></tr>
                ))}
                <tr className="total-row">
                  <td style={{ fontWeight: 700 }}>Total Activos</td>
                  <td className="amount-cell" style={{ fontWeight: 700, color: "var(--color-blue)" }}>192,927.60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-emerald)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700 }}>Pasivo y Patrimonio</span>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead><tr><th>Cuenta</th><th style={{ textAlign: "right" }}>Lempiras</th></tr></thead>
              <tbody>
                {PASIVO_PAT.map((r, i) => {
                  const prev = i > 0 ? PASIVO_PAT[i - 1].tipo : null;
                  return (
                    <React.Fragment key={r.nombre}>
                      {r.tipo !== prev && r.tipo === "K" && (
                        <tr><td colSpan={2} style={{ padding: "6px 16px", fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-emerald)", borderBottom: "1.5px solid rgba(5,150,105,0.2)" }}>Patrimonio</td></tr>
                      )}
                      <tr><td>{r.nombre}</td><td className="amount-cell">{r.monto}</td></tr>
                    </React.Fragment>
                  );
                })}
                <tr className="total-row">
                  <td style={{ fontWeight: 700 }}>Total P + P</td>
                  <td className="amount-cell" style={{ fontWeight: 700, color: "var(--color-emerald)" }}>192,927.60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-emerald)", fontWeight: 600 }}>
        ✓ Activos = Pasivo + Patrimonio = L. 192,927.60
      </div>
    </div>
  );
}
