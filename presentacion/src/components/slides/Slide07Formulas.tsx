import React from "react";

export default function Slide07Formulas() {
  return (
    <div className="slide-content">
      <span className="section-number">ƒ</span>
      <div className="slide-label">Sección 4 — Fórmulas</div>
      <h2 className="slide-title">Fórmulas Básicas de los Informes de Producción</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", flex: 1, justifyContent: "center" }}>
        <div className="formula-card">
          <div className="formula-name">Costo de Producción</div>
          <span style={{ color: "var(--text-primary)" }}>Materia Prima Utilizada</span>
          <span className="formula-operator"> + </span>
          <span style={{ color: "var(--text-primary)" }}>Mano de Obra Directa</span>
          <span className="formula-operator"> + </span>
          <span style={{ color: "var(--text-primary)" }}>Costos Indirectos de Fabricación</span>
        </div>

        <div className="formula-card">
          <div className="formula-name">Costo de Productos Terminados</div>
          <span style={{ color: "var(--text-primary)" }}>Inv. Inicial Prod. en Proceso</span>
          <span className="formula-operator"> + </span>
          <span style={{ color: "var(--text-primary)" }}>Costo de Producción</span>
          <span className="formula-operator"> − </span>
          <span style={{ color: "var(--text-primary)" }}>Inv. Final Prod. en Proceso</span>
        </div>

        <div className="formula-card">
          <div className="formula-name">Costo de Productos Vendidos</div>
          <span style={{ color: "var(--text-primary)" }}>Inv. Inicial Prod. Terminados</span>
          <span className="formula-operator"> + </span>
          <span style={{ color: "var(--text-primary)" }}>Costo de Prod. Terminados</span>
          <span className="formula-operator"> − </span>
          <span style={{ color: "var(--text-primary)" }}>Inv. Final Prod. Terminados</span>
        </div>
      </div>

      <div className="key-idea" style={{ marginTop: "var(--space-4)" }}>
        Estas tres fórmulas constituyen el puente entre la contabilidad de costos y los estados financieros de la empresa.
      </div>
    </div>
  );
}
