import React from "react";
import { Target, ListChecks } from "lucide-react";

const OBJECTIVES = [
  "Identificar las cuentas esenciales de una empresa manufacturera",
  "Clasificar cuentas en activo, pasivo, patrimonio, ingresos, costos y gastos",
  "Describir el movimiento contable de cada cuenta (cargo, abono, saldo)",
  "Explicar el sistema de costos por órdenes de producción",
  "Vincular el proceso productivo con los estados financieros",
];

export default function Slide04Objetivos() {
  return (
    <div className="slide-content">
      <div className="paint-bar blue" />
      <span className="section-number">01</span>

      <div className="slide-label">Sección 1</div>
      <h2 className="slide-title medium">Objetivos</h2>

      <div style={{ flex: 1, display: "flex", gap: 40, alignItems: "center" }}>
        {/* Left — General */}
        <div style={{ flex: "0 0 400px" }}>
          <div className="card" style={{ padding: 28, borderLeft: "4px solid var(--color-blue)", background: "var(--color-blue-soft)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div className="icon-box md" style={{ background: "var(--gradient-brand)", borderRadius: "50%" }}>
                <Target size={20} color="white" />
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700 }}>
                Objetivo General
              </span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)" }}>
              Diseñar un manual y catálogo de cuentas funcional para una empresa industrial,
              mostrando la estructura contable y el sistema de costos necesario para controlar
              la producción y presentar información financiera confiable.
            </p>
          </div>
        </div>

        {/* Right — Específicos */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div className="icon-box md" style={{ background: "var(--color-violet-soft)", borderRadius: "50%" }}>
              <ListChecks size={20} style={{ color: "var(--color-violet)" }} />
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700 }}>
              Objetivos Específicos
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {OBJECTIVES.map((obj, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "12px 16px", borderRadius: 10,
                background: "white", border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-xs)",
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "var(--gradient-brand)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 13, color: "white",
                  flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
