import React from "react";
import { FileText, TrendingUp, ShoppingBag } from "lucide-react";

const REPORTS = [
  {
    icon: FileText,
    title: "Costo de Producción",
    color: "#4f8cff",
    formula: "Inv. Ini. MP + Compras Netas − Inv. Final MP = MP Utilizada; + MOD + CIF",
  },
  {
    icon: TrendingUp,
    title: "Costo Productos Terminados",
    color: "#8b5cf6",
    formula: "Inv. Ini. Prod. en Proceso + Costo de Producción − Inv. Final Prod. en Proceso",
  },
  {
    icon: ShoppingBag,
    title: "Costo Productos Vendidos",
    color: "#10b981",
    formula: "Inv. Ini. Prod. Terminados + Costo Prod. Terminados − Inv. Final Prod. Terminados",
  },
];

export default function Slide15InformesProduccion() {
  return (
    <div className="slide-content">
      <span className="section-number">08</span>
      <div className="slide-label">Sección 8</div>
      <h2 className="slide-title">Informes de Producción</h2>

      <p className="slide-text" style={{ marginBottom: "var(--space-5)" }}>
        Los informes de producción identifican con claridad cuánto costó producir,
        cuánto quedó en proceso y cuánto se convirtió en costo de ventas.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginBottom: "var(--space-5)" }}>
        {REPORTS.map((r) => (
          <div
            key={r.title}
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-5)",
              borderLeft: `3px solid ${r.color}`,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${r.color}12`,
                border: `1px solid ${r.color}25`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <r.icon size={22} style={{ color: r.color }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                {r.title}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: r.color, lineHeight: 1.6 }}>
                {r.formula}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="key-idea">
        <strong>Relación con el presupuesto maestro:</strong> El presupuesto maestro integra
        presupuesto de ventas, producción, necesidades de MP, MOD, CIF, gastos y EEFF proyectados.
        El catálogo debe permitir registrar información útil tanto para el control histórico como
        para la planeación.
      </div>
    </div>
  );
}
