import React from "react";

const CORRIENTE = [
  { code: "1101", name: "Caja" }, { code: "1102", name: "Bancos" },
  { code: "1103", name: "Cuentas por cobrar clientes" }, { code: "1104", name: "Documentos por cobrar" },
  { code: "1105", name: "Anticipos a proveedores" }, { code: "1106", name: "Inventario de materia prima" },
  { code: "1107", name: "Inventario de materiales indirectos" }, { code: "1108", name: "Inventario de productos en proceso" },
  { code: "1109", name: "Inventario de productos terminados" }, { code: "1110", name: "Pagos anticipados" },
];

export default function Slide11ActivoCorriente() {
  return (
    <div className="slide-content">
      <div className="paint-bar fresh" />
      <span className="section-number">05</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-emerald)" } as React.CSSProperties}>Sección 5 · Catálogo de Cuentas</div>
      <h2 className="slide-title medium"><span className="accent">Activo</span> Corriente</h2>

      <p className="slide-text" style={{ marginBottom: 20 }}>
        Codificación: <strong>1</strong> = Activo · primeros dos dígitos = subgrupo · últimos dos = cuenta específica
      </p>

      <div style={{ flex: 1 }}>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr><th style={{ width: 100 }}>Código</th><th>Cuenta</th><th style={{ width: 200 }}>Tipo</th></tr>
            </thead>
            <tbody>
              {CORRIENTE.map((c) => (
                <tr key={c.code}>
                  <td className="code-cell">{c.code}</td>
                  <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>{c.name}</td>
                  <td><span className="tag" style={{ color: "var(--color-emerald)", borderColor: "rgba(5,150,105,0.25)", background: "var(--color-emerald-soft)" }}>
                    {c.name.includes("Inventario") ? "Inventario" : "Circulante"}
                  </span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
