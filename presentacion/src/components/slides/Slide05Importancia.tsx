import React from "react";
import { BookMarked, Shield, BarChart3, AlertTriangle } from "lucide-react";

export default function Slide05Importancia() {
  return (
    <div className="slide-content">
      <span className="section-number">03</span>
      <div className="slide-label">Sección 3</div>
      <h2 className="slide-title">Importancia del Catálogo y Manual de Cuentas</h2>

      <div className="grid-3" style={{ marginBottom: "var(--space-5)" }}>
        <div className="glass-card" style={{ borderTop: "2px solid var(--color-presenter-1)" }}>
          <div style={{ marginBottom: "var(--space-3)" }}>
            <BookMarked size={24} style={{ color: "var(--color-presenter-1)" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--space-2)" }}>
            Catálogo de Cuentas
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Estructura ordenada y codificada de todas las cuentas. Facilita la
            clasificación uniforme, mejora el control interno y agiliza la
            preparación de los estados financieros.
          </p>
        </div>

        <div className="glass-card" style={{ borderTop: "2px solid var(--color-presenter-2)" }}>
          <div style={{ marginBottom: "var(--space-3)" }}>
            <Shield size={24} style={{ color: "var(--color-presenter-2)" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--space-2)" }}>
            Manual de Cuentas
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Complementa al catálogo explicando el contenido, función y
            movimiento de cada cuenta. Asegura criterio uniforme y reduce
            errores en el registro contable.
          </p>
        </div>

        <div className="glass-card" style={{ borderTop: "2px solid var(--color-presenter-3)" }}>
          <div style={{ marginBottom: "var(--space-3)" }}>
            <BarChart3 size={24} style={{ color: "var(--color-presenter-3)" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--space-2)" }}>
            En la Industria
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Además de ventas y pagos, se registran movimientos de materia
            prima, producción en proceso, costos indirectos, producción
            terminada y costo de productos vendidos.
          </p>
        </div>
      </div>

      <div className="key-idea">
        <strong>Idea clave:</strong> En una empresa industrial, el catálogo y el manual de cuentas
        no son documentos aislados. Ambos deben estar alineados con el sistema de costos y con los
        informes de producción.
      </div>
    </div>
  );
}
