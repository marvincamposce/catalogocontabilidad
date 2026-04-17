import React from "react";
import { Target, ListChecks } from "lucide-react";

export default function Slide03Presentacion() {
  return (
    <div className="slide-content">
      <span className="section-number">01</span>
      <div className="slide-label">Sección 1</div>
      <h2 className="slide-title">Presentación del Proyecto</h2>

      <p className="slide-text" style={{ marginBottom: "var(--space-5)" }}>
        Se desarrolla un modelo completo de <strong>manual y catálogo de cuentas</strong> para
        una empresa industrial, tomando como base los contenidos de contabilidad de costos,
        informes de producción y sistema de costos por órdenes de producción.
      </p>

      <div className="grid-2">
        <div className="glass-card">
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--gradient-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Target size={18} color="white" />
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
              Objetivo General
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Diseñar un manual y catálogo de cuentas funcional para una empresa industrial,
            mostrando la estructura contable y el sistema de costos necesario para controlar
            la producción y presentar información financiera confiable.
          </p>
        </div>

        <div className="glass-card">
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #8b5cf6, #4f8cff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ListChecks size={18} color="white" />
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
              Objetivos Específicos
            </span>
          </div>
          <ul className="slide-list" style={{ fontSize: 13 }}>
            <li>Identificar las cuentas esenciales de una empresa manufacturera</li>
            <li>Clasificar cuentas en activo, pasivo, patrimonio, ingresos, costos y gastos</li>
            <li>Describir el movimiento contable de cada cuenta</li>
            <li>Explicar el sistema de costos por órdenes de producción</li>
            <li>Vincular el proceso productivo con los estados financieros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
