import React from "react";
import { BookMarked, Shield, BarChart3, Lightbulb } from "lucide-react";

export default function Slide07Importancia() {
  return (
    <div className="slide-content">
      <div className="paint-bar" style={{ background: "var(--gradient-cool)" }} />
      <span className="section-number">03</span>

      <div className="slide-label" style={{ "--color-blue": "var(--color-violet)" } as React.CSSProperties}>Sección 3</div>
      <h2 className="slide-title medium">Importancia del Catálogo<br />y <span className="accent">Manual de Cuentas</span></h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        <div className="grid-3">
          {[
            { icon: BookMarked, color: "#2E5BFF", bg: "#EEF2FF", title: "Catálogo", desc: "Estructura ordenada y codificada de todas las cuentas. Facilita la clasificación uniforme y agiliza la preparación de estados financieros." },
            { icon: Shield, color: "#7C3AED", bg: "#F3EEFF", title: "Manual", desc: "Explica el contenido, función y movimiento de cada cuenta. Asegura criterio uniforme y reduce errores en el registro contable." },
            { icon: BarChart3, color: "#059669", bg: "#ECFDF5", title: "En la Industria", desc: "Además de ventas y pagos, se registran movimientos de materia prima, producción en proceso, CIF y costo de productos vendidos." },
          ].map((item) => (
            <div key={item.title} className="card accent-top no-hover" style={{ borderTopColor: item.color, padding: 24 }}>
              <div className="icon-box lg" style={{ background: item.bg, marginBottom: 14, borderRadius: 14 }}>
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="callout violet">
          <Lightbulb size={18} style={{ color: "var(--color-violet)", flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontSize: 13.5 }}>
            <strong>Idea clave:</strong> En una empresa industrial, el catálogo y el manual de cuentas
            no son documentos aislados. Ambos deben estar alineados con el sistema de costos y con
            los informes de producción.
          </span>
        </div>
      </div>
    </div>
  );
}
