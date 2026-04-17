import React from "react";
import { CheckCircle2, Lightbulb, GraduationCap } from "lucide-react";

const CONCLUSIONES = [
  "Una empresa industrial necesita un catálogo de cuentas específico por la complejidad de inventarios y costos de producción.",
  "El manual de cuentas asegura uniformidad, mejora el control interno y facilita la preparación de los estados financieros.",
  "El sistema de costos por órdenes de producción permite identificar y acumular el costo de cada orden.",
  "Los informes de producción son el puente entre la contabilidad de costos y la información financiera.",
];

const RECOMENDACIONES = [
  "Mantener actualizado el catálogo al incorporar nuevas líneas o áreas de costo.",
  "Implementar controles documentales para requisiciones, órdenes y nóminas.",
  "Comparar periódicamente costos reales vs. presupuestados.",
  "Capacitar al personal contable y de planta en el flujo de información.",
];

export default function Slide19Conclusiones() {
  return (
    <div className="slide-content">
      <span className="section-number">FIN</span>
      <div className="slide-label">Secciones 10, 11 y Cierre</div>
      <h2 className="slide-title">Conclusiones y Recomendaciones</h2>

      <div className="grid-2" style={{ flex: 1 }}>
        {/* Conclusiones */}
        <div className="glass-card" style={{ borderTop: "2px solid var(--color-presenter-1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <CheckCircle2 size={18} style={{ color: "var(--color-presenter-1)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
              Conclusiones
            </span>
          </div>
          <ul className="slide-list" style={{ fontSize: 13 }}>
            {CONCLUSIONES.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Recomendaciones */}
        <div className="glass-card" style={{ borderTop: "2px solid var(--color-presenter-4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <Lightbulb size={18} style={{ color: "var(--color-presenter-4)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
              Recomendaciones
            </span>
          </div>
          <ul className="slide-list" style={{ fontSize: 13 }}>
            {RECOMENDACIONES.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Closing */}
      <div style={{
        textAlign: "center",
        marginTop: "var(--space-5)",
        padding: "var(--space-4)",
        background: "var(--bg-glass)",
        borderRadius: "var(--border-radius-md)",
        border: "1px solid var(--border-subtle)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
          <GraduationCap size={24} style={{ color: "var(--color-presenter-2)" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 800, background: "var(--gradient-accent-2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ¡Gracias por su atención!
          </span>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-tertiary)" }}>
          Universidad José Cecilio del Valle — Contabilidad de Costos — Abril 2025
        </p>
      </div>
    </div>
  );
}
