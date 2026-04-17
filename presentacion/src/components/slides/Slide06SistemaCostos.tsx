import React from "react";
import { Layers, Hammer, Zap, Calculator } from "lucide-react";

const COST_ELEMENTS = [
  {
    icon: Layers,
    title: "Materia Prima Directa",
    desc: "Material principal incorporado al producto: resinas, pigmentos y aditivos.",
    color: "#4f8cff",
  },
  {
    icon: Hammer,
    title: "Mano de Obra Directa",
    desc: "Trabajo del personal que interviene directamente en la fabricación del lote.",
    color: "#00d4ff",
  },
  {
    icon: Zap,
    title: "Costos Indirectos (CIF)",
    desc: "Energía, depreciación de planta, supervisión, mantenimiento y materiales indirectos.",
    color: "#8b5cf6",
  },
  {
    icon: Calculator,
    title: "Costo Total de la Orden",
    desc: "Suma de MPD + MOD + CIF aplicados a cada orden de producción.",
    color: "#f59e0b",
  },
];

const JUSTIFICATIONS = [
  "La empresa produce por lotes identificables según línea, color y orden",
  "Cada orden acumula materiales, mano de obra y CIF aplicados",
  "La gerencia necesita el costo por lote para fijar precios y medir rentabilidad",
  "La hoja de costos evidencia el costo unitario y total de la orden",
];

export default function Slide06SistemaCostos() {
  return (
    <div className="slide-content">
      <span className="section-number">04</span>
      <div className="slide-label">Sección 4</div>
      <h2 className="slide-title small">Sistema de Costos por Órdenes de Producción</h2>

      <div className="grid-2" style={{ flex: 1, gap: "var(--space-6)" }}>
        {/* Left: Justification */}
        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--space-4)" }}>
            ¿Por qué este sistema?
          </h3>
          <ul className="slide-list">
            {JUSTIFICATIONS.map((j, i) => (
              <li key={i}>{j}</li>
            ))}
          </ul>
        </div>

        {/* Right: Cost elements */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--space-2)" }}>
            Elementos del Costo
          </h3>
          {COST_ELEMENTS.map((el) => (
            <div
              key={el.title}
              className="glass-card compact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                borderLeft: `3px solid ${el.color}`,
                padding: "var(--space-3) var(--space-4)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: `${el.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <el.icon size={16} style={{ color: el.color }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
                  {el.title}
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-tertiary)", lineHeight: 1.5 }}>
                  {el.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
