import React from "react";
import { ClipboardList, Calculator, FileInput, Users, Settings, FileBarChart } from "lucide-react";

const DOCS = [
  { icon: ClipboardList, name: "Orden de producción", resp: "Jefe de planta", func: "Autoriza fabricación e identifica la orden a costear", color: "#2E5BFF", bg: "#EEF2FF" },
  { icon: Calculator, name: "Hoja de costos", resp: "Contabilidad de costos", func: "Acumula MPD, MOD y CIF aplicados", color: "#7C3AED", bg: "#F3EEFF" },
  { icon: FileInput, name: "Requisición de materiales", resp: "Bodega / producción", func: "Controla salida de materiales a la orden", color: "#0284C7", bg: "#E0F2FE" },
  { icon: Users, name: "Nómina de fábrica", resp: "RRHH / contabilidad", func: "Separa mano de obra directa e indirecta", color: "#059669", bg: "#ECFDF5" },
  { icon: Settings, name: "Resumen de CIF", resp: "Contabilidad de costos", func: "Registra y aplica los costos indirectos", color: "#D97706", bg: "#FFFBEB" },
  { icon: FileBarChart, name: "Informe de producción", resp: "Contabilidad de costos", func: "Resume costo de producción, terminados y vendidos", color: "#E11D48", bg: "#FFF1F2" },
];

export default function Slide20Documentos() {
  return (
    <div className="slide-content">
      <div className="paint-bar sunset" />
      <span className="section-number">07</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-amber)" } as React.CSSProperties}>Sección 7</div>
      <h2 className="slide-title medium">Documentos de <span className="accent">Soporte</span></h2>

      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="grid-3" style={{ width: "100%", gap: 16 }}>
          {DOCS.map((doc) => (
            <div key={doc.name} className="card no-hover" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="icon-box md" style={{ background: doc.bg, borderRadius: 10 }}>
                  <doc.icon size={18} style={{ color: doc.color }} />
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--text-primary)" }}>{doc.name}</div>
                  <div style={{ fontSize: 10.5, color: "var(--text-tertiary)" }}>{doc.resp}</div>
                </div>
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--text-secondary)" }}>{doc.func}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
