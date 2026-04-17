import React from "react";

const ACTIVO_CORRIENTE = [
  { code: "1101", name: "Caja" },
  { code: "1102", name: "Bancos" },
  { code: "1103", name: "Cuentas por cobrar clientes" },
  { code: "1104", name: "Documentos por cobrar" },
  { code: "1105", name: "Anticipos a proveedores" },
  { code: "1106", name: "Inventario de materia prima" },
  { code: "1107", name: "Inventario de materiales indirectos" },
  { code: "1108", name: "Inventario de productos en proceso" },
  { code: "1109", name: "Inventario de productos terminados" },
  { code: "1110", name: "Pagos anticipados" },
];

const ACTIVO_NO_CORRIENTE = [
  { code: "1201", name: "Terrenos" },
  { code: "1202", name: "Edificios" },
  { code: "1203", name: "Maquinaria y equipo" },
  { code: "1204", name: "Equipo de oficina" },
  { code: "1205", name: "Equipo de reparto" },
  { code: "1206", name: "Dep. acum. edificios" },
  { code: "1207", name: "Dep. acum. maquinaria y equipo" },
  { code: "1208", name: "Dep. acum. equipo de oficina" },
  { code: "1209", name: "Dep. acum. equipo de reparto" },
];

export default function Slide08CatalogoActivo() {
  return (
    <div className="slide-content">
      <span className="section-number">05</span>
      <div className="slide-label">Sección 5 — Catálogo de Cuentas</div>
      <h2 className="slide-title small">Catálogo de Cuentas: Activo</h2>

      <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: "var(--space-4)" }}>
        Codificación: 1 = Activo · Primeros dos dígitos = subgrupo · Últimos dos = cuenta específica
      </p>

      <div className="grid-2" style={{ flex: 1, overflow: "hidden" }}>
        {/* Activo Corriente */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-1)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-1)" }} />
            Activo Corriente
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
                {ACTIVO_CORRIENTE.map((c) => (
                  <tr key={c.code}>
                    <td className="code-cell">{c.code}</td>
                    <td>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activo No Corriente */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-3)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-3)" }} />
            Activo No Corriente
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
                {ACTIVO_NO_CORRIENTE.map((c) => (
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
