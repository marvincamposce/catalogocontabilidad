import React from "react";
import { Layers, Hammer, Zap, Calculator } from "lucide-react";

const ELEMENTS = [
  { icon: Layers, color: "#2E5BFF", bg: "#EEF2FF", title: "Materia Prima Directa", desc: "Material principal incorporado al producto terminado: resinas, pigmentos y aditivos base." },
  { icon: Hammer, color: "#7C3AED", bg: "#F3EEFF", title: "Mano de Obra Directa", desc: "Trabajo del personal que interviene directamente en la fabricación del lote." },
  { icon: Zap, color: "#D97706", bg: "#FFFBEB", title: "Costos Indirectos (CIF)", desc: "Energía, depreciación de planta, supervisión, mantenimiento y materiales indirectos." },
  { icon: Calculator, color: "#059669", bg: "#ECFDF5", title: "Costo Total de la Orden", desc: "Suma de MPD + MOD + CIF aplicados a cada orden de producción específica." },
];

export default function Slide09Elementos() {
  return (
    <div className="slide-content">
      <div className="paint-bar" style={{ background: "var(--gradient-cool)" }} />
      <span className="section-number">04</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-violet)" } as React.CSSProperties}>Sección 4</div>
      <h2 className="slide-title medium">Elementos del <span className="accent">Costo</span></h2>

      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="grid-2" style={{ width: "100%", gap: 20 }}>
          {ELEMENTS.map((el) => (
            <div key={el.title} className="card no-hover" style={{ padding: 24, display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div className="icon-box xl" style={{ background: el.bg }}>
                <el.icon size={26} style={{ color: el.color }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                  {el.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
