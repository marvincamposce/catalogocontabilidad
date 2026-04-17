import React from "react";

const NO_CORRIENTE = [
  { code: "1201", name: "Terrenos" }, { code: "1202", name: "Edificios" },
  { code: "1203", name: "Maquinaria y equipo" }, { code: "1204", name: "Equipo de oficina" },
  { code: "1205", name: "Equipo de reparto" }, { code: "1206", name: "Dep. acumulada edificios" },
  { code: "1207", name: "Dep. acumulada maquinaria y equipo" }, { code: "1208", name: "Dep. acumulada equipo de oficina" },
  { code: "1209", name: "Dep. acumulada equipo de reparto" },
];

export default function Slide12ActivoNoCorriente() {
  return (
    <div className="slide-content">
      <div className="paint-bar fresh" />
      <span className="section-number">05</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-emerald)" } as React.CSSProperties}>Sección 5 · Catálogo de Cuentas</div>
      <h2 className="slide-title medium"><span className="accent">Activo</span> No Corriente</h2>

      <div style={{ flex: 1, display: "flex", gap: 32, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr><th style={{ width: 100 }}>Código</th><th>Cuenta</th><th style={{ width: 140 }}>Naturaleza</th></tr>
              </thead>
              <tbody>
                {NO_CORRIENTE.map((c) => (
                  <tr key={c.code}>
                    <td className="code-cell">{c.code}</td>
                    <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>{c.name}</td>
                    <td>
                      <span className="tag" style={{
                        color: c.name.startsWith("Dep.") ? "var(--color-rose)" : "var(--color-blue)",
                        borderColor: c.name.startsWith("Dep.") ? "rgba(225,29,72,0.25)" : "rgba(46,91,255,0.25)",
                        background: c.name.startsWith("Dep.") ? "var(--color-rose-soft)" : "var(--color-blue-soft)",
                      }}>
                        {c.name.startsWith("Dep.") ? "Acreedora" : "Deudora"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ flex: "0 0 280px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
          <div className="stat-card">
            <span className="stat-label">Total Activo Corriente</span>
            <span className="stat-value">10 cuentas</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Total No Corriente</span>
            <span className="stat-value" style={{ color: "var(--color-violet)" }}>9 cuentas</span>
          </div>
          <div className="callout blue" style={{ padding: "12px 16px", fontSize: 12 }}>
            Las depreciaciones acumuladas son de <strong>naturaleza acreedora</strong> y disminuyen
            el valor del activo fijo correspondiente.
          </div>
        </div>
      </div>
    </div>
  );
}
