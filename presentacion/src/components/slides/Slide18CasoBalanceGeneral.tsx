import React from "react";

const ACTIVOS = [
  { nombre: "Caja", monto: "5,000.00" },
  { nombre: "Bancos", monto: "29,500.00" },
  { nombre: "Cuentas por cobrar", monto: "71,100.00" },
  { nombre: "Inv. productos terminados", monto: "19,000.00" },
  { nombre: "Inv. productos en proceso", monto: "13,000.00" },
  { nombre: "Inv. materia prima", monto: "9,000.00" },
  { nombre: "Maquinaria y equipo neto", monto: "46,327.60" },
];

const PASIVO_PATRIMONIO = [
  { nombre: "Cuentas por pagar", monto: "18,000.00", tipo: "pasivo" },
  { nombre: "Dividendos por pagar", monto: "10,000.00", tipo: "pasivo" },
  { nombre: "Impuestos por pagar", monto: "7,944.40", tipo: "pasivo" },
  { nombre: "Bonos por pagar", monto: "28,000.00", tipo: "pasivo" },
  { nombre: "Capital social", monto: "100,000.00", tipo: "patrimonio" },
  { nombre: "Utilidades retenidas", monto: "5,100.00", tipo: "patrimonio" },
  { nombre: "Utilidad del período", monto: "23,833.20", tipo: "patrimonio" },
];

export default function Slide18CasoBalanceGeneral() {
  return (
    <div className="slide-content">
      <span className="section-number">09</span>
      <div className="slide-label">Sección 9 — Caso Ilustrativo</div>
      <h2 className="slide-title small">Balance General Resumido</h2>

      <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: "var(--space-4)" }}>
        Pinturas Industriales del Valle, S.A. — Al cierre del período (cifras en Lempiras)
      </p>

      <div className="grid-2" style={{ flex: 1, overflow: "hidden" }}>
        {/* Activos */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-1)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-1)" }} />
            Activos
          </div>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cuenta</th>
                  <th style={{ textAlign: "right" }}>Lempiras</th>
                </tr>
              </thead>
              <tbody>
                {ACTIVOS.map((r) => (
                  <tr key={r.nombre}>
                    <td>{r.nombre}</td>
                    <td className="amount-cell">{r.monto}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td style={{ fontWeight: 700 }}>Total Activos</td>
                  <td className="amount-cell" style={{ fontWeight: 700, color: "var(--color-presenter-1)" }}>
                    192,927.60
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pasivo y Patrimonio */}
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-presenter-5)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-presenter-5)" }} />
            Pasivo y Patrimonio
          </div>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cuenta</th>
                  <th style={{ textAlign: "right" }}>Lempiras</th>
                </tr>
              </thead>
              <tbody>
                {PASIVO_PATRIMONIO.map((r, i) => {
                  const prevTipo = i > 0 ? PASIVO_PATRIMONIO[i - 1].tipo : null;
                  const showDivider = r.tipo !== prevTipo && i > 0;
                  return (
                    <React.Fragment key={r.nombre}>
                      {showDivider && (
                        <tr>
                          <td colSpan={2} style={{
                            padding: "6px var(--space-4)",
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--color-presenter-5)",
                            borderBottom: "1px solid var(--border-accent)",
                          }}>
                            Patrimonio
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td>{r.nombre}</td>
                        <td className="amount-cell">{r.monto}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
                <tr className="total-row">
                  <td style={{ fontWeight: 700 }}>Total P + P</td>
                  <td className="amount-cell" style={{ fontWeight: 700, color: "var(--color-presenter-5)" }}>
                    192,927.60
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Balance check */}
      <div style={{
        textAlign: "center",
        marginTop: "var(--space-4)",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--color-presenter-5)",
      }}>
        ✓ Activos = Pasivo + Patrimonio = <strong>L. 192,927.60</strong>
      </div>
    </div>
  );
}
