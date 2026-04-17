import React from "react";

const MANUAL_ACTIVO = [
  {
    code: "1101",
    name: "Caja",
    nat: "Deudora",
    cargo: "Ingresos en efectivo, arqueos favorables",
    abono: "Depósitos, pagos en efectivo, faltantes",
    saldo: "Efectivo disponible en caja",
  },
  {
    code: "1102",
    name: "Bancos",
    nat: "Deudora",
    cargo: "Depósitos, transferencias recibidas, NC",
    abono: "Cheques, transferencias enviadas, ND",
    saldo: "Dinero en cuentas bancarias",
  },
  {
    code: "1103",
    name: "Ctas. por cobrar",
    nat: "Deudora",
    cargo: "Ventas a crédito, recargos",
    abono: "Cobros, NC, devoluciones",
    saldo: "Pendiente de cobro a clientes",
  },
  {
    code: "1106",
    name: "Inv. materia prima",
    nat: "Deudora",
    cargo: "Compras, fletes, entradas a bodega",
    abono: "Salidas a producción, devoluciones",
    saldo: "Materia prima existente",
  },
  {
    code: "1108",
    name: "Inv. prod. en proceso",
    nat: "Deudora",
    cargo: "MPD, MOD, CIF aplicados a órdenes",
    abono: "Costo de órdenes terminadas",
    saldo: "Órdenes aún no concluidas",
  },
  {
    code: "1109",
    name: "Inv. prod. terminados",
    nat: "Deudora",
    cargo: "Costo de órdenes terminadas",
    abono: "Costo de productos vendidos",
    saldo: "Existencias listas para venta",
  },
  {
    code: "1203",
    name: "Maquinaria y equipo",
    nat: "Deudora",
    cargo: "Compras, mejoras capitalizables",
    abono: "Retiros, ventas, bajas",
    saldo: "Costo histórico maquinaria",
  },
];

export default function Slide12ManualActivo() {
  return (
    <div className="slide-content padded-top">
      <span className="section-number">06</span>
      <div className="slide-label">Sección 6 — Manual de Cuentas</div>
      <h2 className="slide-title small">Manual de Cuentas: Activo</h2>

      <div className="table-scroll" style={{ flex: 1 }}>
        <table className="data-table compact">
          <thead>
            <tr>
              <th>Código</th>
              <th>Cuenta</th>
              <th>Nat.</th>
              <th>Se Carga</th>
              <th>Se Acredita</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {MANUAL_ACTIVO.map((r) => (
              <tr key={r.code}>
                <td className="code-cell">{r.code}</td>
                <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>{r.name}</td>
                <td>
                  <span className="tag" style={{
                    color: "#4f8cff",
                    borderColor: "rgba(79,140,255,0.3)",
                    background: "rgba(79,140,255,0.08)",
                    fontSize: 10,
                  }}>
                    {r.nat}
                  </span>
                </td>
                <td>{r.cargo}</td>
                <td>{r.abono}</td>
                <td style={{ color: "var(--text-tertiary)", fontStyle: "italic" }}>{r.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
