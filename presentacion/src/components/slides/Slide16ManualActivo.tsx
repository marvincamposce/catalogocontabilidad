import React from "react";

const ROWS = [
  { code: "1101", name: "Caja", nat: "D", cargo: "Ingresos en efectivo, arqueos favorables", abono: "Depósitos, pagos en efectivo, faltantes", saldo: "Efectivo disponible" },
  { code: "1102", name: "Bancos", nat: "D", cargo: "Depósitos, transferencias, NC", abono: "Cheques, transferencias, ND", saldo: "Dinero en cuentas bancarias" },
  { code: "1106", name: "Inv. MP", nat: "D", cargo: "Compras, fletes, entradas", abono: "Salidas a producción, devol.", saldo: "Materia prima existente" },
  { code: "1108", name: "Inv. P.P.", nat: "D", cargo: "MPD, MOD, CIF aplicados", abono: "Costo de órdenes terminadas", saldo: "Órdenes no concluidas" },
  { code: "1109", name: "Inv. P.T.", nat: "D", cargo: "Órdenes terminadas recibidas", abono: "Costo de productos vendidos", saldo: "Existencias para venta" },
  { code: "1203", name: "Maq. y equipo", nat: "D", cargo: "Compras, mejoras capitalizables", abono: "Retiros, ventas, bajas", saldo: "Costo histórico maquinaria" },
];

export default function Slide16ManualActivo() {
  return (
    <div className="slide-content">
      <div className="paint-bar sunset" />
      <span className="section-number">06</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-amber)" } as React.CSSProperties}>Sección 6 · Manual de Cuentas</div>
      <h2 className="slide-title medium">Manual: <span className="accent">Activo</span></h2>

      <div style={{ flex: 1 }}>
        <div className="table-wrap">
          <table className="data-table compact">
            <thead>
              <tr><th>Cód.</th><th>Cuenta</th><th>Nat.</th><th>Se Carga</th><th>Se Acredita</th><th>Saldo</th></tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.code}>
                  <td className="code-cell">{r.code}</td>
                  <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</td>
                  <td><span className="tag" style={{ color: "var(--color-blue)", borderColor: "rgba(46,91,255,0.2)", background: "var(--color-blue-soft)", fontSize: 9 }}>{r.nat === "D" ? "Deudora" : "Acreedora"}</span></td>
                  <td>{r.cargo}</td>
                  <td>{r.abono}</td>
                  <td style={{ color: "var(--text-tertiary)", fontStyle: "italic", fontSize: 10.5 }}>{r.saldo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
