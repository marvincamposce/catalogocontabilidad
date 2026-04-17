import React from "react";
import { GraduationCap, Lightbulb } from "lucide-react";

const RECS = [
  "Mantener actualizado el catálogo al incorporar nuevas líneas de productos o áreas de costo.",
  "Implementar controles documentales para requisiciones, órdenes y nóminas de fábrica.",
  "Comparar periódicamente los costos reales contra los presupuestados.",
  "Capacitar al personal contable y de planta para flujo de información oportuno y confiable.",
];

export default function Slide26Cierre() {
  return (
    <div className="slide-content centered" style={{ position: "relative" }}>
      <div className="portada-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      {/* Paint swatch */}
      <div style={{ display: "flex", gap: 3, marginBottom: 24, position: "relative", zIndex: 1 }}>
        {["#2E5BFF", "#7C3AED", "#059669", "#F97316", "#E11D48", "#0284C7"].map((c) => (
          <div key={c} style={{ width: 32, height: 5, borderRadius: 3, background: c }} />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
        <div style={{ marginBottom: 20 }}>
          <div className="closing-badge" style={{ background: "var(--gradient-brand)", margin: "0 auto 20px" }}>
            <GraduationCap size={32} color="white" />
          </div>

          <h2 style={{
            fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: 40,
            background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            marginBottom: 8,
          }}>
            ¡Gracias por su atención!
          </h2>

          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 28 }}>
            Universidad José Cecilio del Valle — Contabilidad de Costos — Abril 2025
          </p>
        </div>

        {/* Quick recs */}
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <Lightbulb size={16} style={{ color: "var(--color-amber)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>
              Recomendaciones finales
            </span>
          </div>
          {RECS.map((r, i) => (
            <div key={i} style={{
              display: "flex", gap: 10, alignItems: "flex-start",
              padding: "8px 14px", borderRadius: 8, background: "var(--color-amber-soft)",
              border: "1px solid rgba(217,119,6,0.12)",
            }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 13, color: "var(--color-amber)", minWidth: 18 }}>
                {i + 1}.
              </span>
              <span style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.5 }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
