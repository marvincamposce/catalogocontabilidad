import React from "react";

const MANUAL_PASIVO = [
  { code: "2101", name: "Ctas. por pagar prov.", nat: "Acreedora", cargo: "Pagos, devol., NC", abono: "Compras a crédito", saldo: "Obligaciones con proveedores" },
  { code: "2104", name: "Impuestos por pagar", nat: "Acreedora", cargo: "Pagos al fisco", abono: "ISR y tributos", saldo: "Obligaciones fiscales" },
  { code: "2201", name: "Préstamos bancarios LP", nat: "Acreedora", cargo: "Abonos al principal", abono: "Desembolsos recibidos", saldo: "Deuda financiera LP" },
];

const MANUAL_PATRIMONIO = [
  { code: "3101", name: "Capital social", nat: "Acreedora", cargo: "Reducciones", abono: "Aportaciones/aumentos", saldo: "Aporte de socios" },
  { code: "3104", name: "Utilidad del período", nat: "Acreedora", cargo: "Cierre a util. retenidas", abono: "Resultado neto favorable", saldo: "Utilidad del ejercicio" },
];

const MANUAL_COSTOS_GASTOS = [
  { code: "5104", name: "Mano de obra directa", nat: "Deudora", cargo: "Salarios directos", abono: "Cierre vs producción en proceso", saldo: "Temporal" },
  { code: "5106", name: "CIF control", nat: "Deudora", cargo: "CIF reales incurridos", abono: "Cierre vs CIF aplicados", saldo: "Control de variación" },
  { code: "5107", name: "CIF aplicados", nat: "Acreedora", cargo: "Cierre vs CIF control", abono: "Aplicación con tasa predeterminada", saldo: "Sub/sobreaplicación" },
  { code: "6101", name: "Costo prod. vendidos", nat: "Deudora", cargo: "Costo de entrega + var. desfav.", abono: "Ajustes favorables / cierre", saldo: "Costo de producción vendida" },
  { code: "6102", name: "Gastos de venta", nat: "Deudora", cargo: "Sueldos, comisiones, fletes", abono: "Cierre vs resultados", saldo: "Gastos de comercialización" },
];

interface SectionProps {
  title: string;
  color: string;
  data: typeof MANUAL_PASIVO;
}

function MiniTable({ title, color, data }: SectionProps) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--font-heading)", fontSize: 12, fontWeight: 700,
        color, marginBottom: "var(--space-2)",
        display: "flex", alignItems: "center", gap: "var(--space-2)"
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
        {title}
      </div>
      <div className="table-scroll">
        <table className="data-table compact">
          <thead>
            <tr>
              <th>Cód.</th>
              <th>Cuenta</th>
              <th>Nat.</th>
              <th>Cargo</th>
              <th>Abono</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={r.code}>
                <td className="code-cell">{r.code}</td>
                <td style={{ fontWeight: 500, color: "var(--text-primary)", fontSize: 11 }}>{r.name}</td>
                <td>
                  <span className="tag" style={{
                    color: r.nat === "Deudora" ? "#4f8cff" : "#10b981",
                    borderColor: r.nat === "Deudora" ? "rgba(79,140,255,0.3)" : "rgba(16,185,129,0.3)",
                    background: r.nat === "Deudora" ? "rgba(79,140,255,0.08)" : "rgba(16,185,129,0.08)",
                    fontSize: 9,
                  }}>
                    {r.nat}
                  </span>
                </td>
                <td style={{ fontSize: 10.5 }}>{r.cargo}</td>
                <td style={{ fontSize: 10.5 }}>{r.abono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Slide13ManualResto() {
  return (
    <div className="slide-content padded-top">
      <span className="section-number">06</span>
      <div className="slide-label">Sección 6 — Manual de Cuentas (cont.)</div>
      <h2 className="slide-title small">Manual: Pasivo, Patrimonio, Costos y Gastos</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", flex: 1, overflow: "hidden" }}>
        <div className="grid-2">
          <MiniTable title="Pasivo" color="var(--color-presenter-4)" data={MANUAL_PASIVO} />
          <MiniTable title="Patrimonio" color="var(--color-presenter-5)" data={MANUAL_PATRIMONIO} />
        </div>
        <MiniTable title="Costos de Producción y Gastos" color="var(--color-presenter-3)" data={MANUAL_COSTOS_GASTOS} />
      </div>
    </div>
  );
}
