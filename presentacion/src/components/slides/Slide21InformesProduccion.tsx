import React from "react";
import { FileText, TrendingUp, ShoppingBag, Lightbulb } from "lucide-react";

const REPORTS = [
  { icon: FileText, title: "Costo de Producción", color: "#2E5BFF", bg: "#EEF2FF", formula: "Inv. Ini. MP + Compras Netas − Inv. Final MP = MP Utilizada + MOD + CIF" },
  { icon: TrendingUp, title: "Costo Productos Terminados", color: "#7C3AED", bg: "#F3EEFF", formula: "Inv. Ini. P.P. + Costo de Producción − Inv. Final P.P." },
  { icon: ShoppingBag, title: "Costo Productos Vendidos", color: "#059669", bg: "#ECFDF5", formula: "Inv. Ini. P.T. + Costo Prod. Terminados − Inv. Final P.T." },
];

export default function Slide21InformesProduccion() {
  return (
    <div className="slide-content">
      <div className="paint-bar sunset" />
      <span className="section-number">08</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-amber)" } as React.CSSProperties}>Sección 8</div>
      <h2 className="slide-title medium">Informes de <span className="accent">Producción</span></h2>

      <p className="slide-text" style={{ marginBottom: 24 }}>
        Permiten identificar cuánto costó producir, cuánto quedó en proceso y cuánto se convirtió en costo de ventas.
      </p>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        {REPORTS.map((r) => (
          <div key={r.title} className="card no-hover" style={{ padding: "18px 24px", display: "flex", alignItems: "center", gap: 20, borderLeft: `4px solid ${r.color}` }}>
            <div className="icon-box lg" style={{ background: r.bg, borderRadius: 14 }}>
              <r.icon size={22} style={{ color: r.color }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{r.title}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: r.color }}>{r.formula}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="callout violet" style={{ marginTop: 12 }}>
        <Lightbulb size={16} style={{ color: "var(--color-violet)", flexShrink: 0, marginTop: 2 }} />
        <span style={{ fontSize: 12.5 }}>
          <strong>Presupuesto maestro:</strong> Integra ventas, producción, MP, MOD, CIF, gastos y EEFF proyectados.
        </span>
      </div>
    </div>
  );
}
