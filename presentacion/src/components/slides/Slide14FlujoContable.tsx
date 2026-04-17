import React from "react";
import {
  ClipboardList,
  Calculator,
  FileInput,
  Users,
  Settings,
  FileBarChart,
} from "lucide-react";

const DOCUMENTS = [
  { icon: ClipboardList, name: "Orden de producción", resp: "Jefe de planta", func: "Autoriza fabricación del lote" },
  { icon: Calculator, name: "Hoja de costos", resp: "Contabilidad de costos", func: "Acumula MPD, MOD y CIF" },
  { icon: FileInput, name: "Requisición de materiales", resp: "Bodega / producción", func: "Controla salida de materiales" },
  { icon: Users, name: "Nómina de fábrica", resp: "RRHH / contabilidad", func: "Separa MOD e indirecta" },
  { icon: Settings, name: "Resumen de CIF", resp: "Contabilidad de costos", func: "Registra y aplica CIF" },
  { icon: FileBarChart, name: "Informe de producción", resp: "Contabilidad de costos", func: "Resume costos de producción" },
];

const FLOW_STEPS = [
  { label: "Inv. Materia\nPrima", color: "#4f8cff" },
  { label: "Producción\nen Proceso", color: "#00d4ff" },
  { label: "Productos\nTerminados", color: "#8b5cf6" },
  { label: "Costo Prod.\nVendidos", color: "#f59e0b" },
  { label: "Estado de\nResultados", color: "#10b981" },
];

export default function Slide14FlujoContable() {
  return (
    <div className="slide-content">
      <span className="section-number">07</span>
      <div className="slide-label">Sección 7</div>
      <h2 className="slide-title small">Flujo Contable y Documentos de Soporte</h2>

      {/* Flow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
        {FLOW_STEPS.map((step, i) => (
          <React.Fragment key={step.label}>
            {i > 0 && <span className="flow-arrow">→</span>}
            <div
              style={{
                padding: "var(--space-3) var(--space-4)",
                background: `${step.color}10`,
                border: `1px solid ${step.color}30`,
                borderRadius: "var(--border-radius-sm)",
                textAlign: "center",
                minWidth: 105,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 600, color: step.color, whiteSpace: "pre-line", lineHeight: 1.4 }}>
                {step.label}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "var(--space-4)" }}>
        Las compras incrementan el inventario de MP; la requisición traslada el costo a producción en proceso;
        al finalizar la orden, pasa a productos terminados; al vender, se reconoce como costo de productos vendidos.
      </p>

      {/* Documents Grid */}
      <div className="slide-label" style={{ marginBottom: "var(--space-3)" }}>Documentos del Sistema</div>
      <div className="grid-3">
        {DOCUMENTS.map((doc) => (
          <div key={doc.name} className="glass-card compact" style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: "rgba(79,140,255,0.1)", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <doc.icon size={14} style={{ color: "var(--color-presenter-1)" }} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>{doc.name}</div>
              <div style={{ fontSize: 10, color: "var(--text-tertiary)", marginBottom: 2 }}>{doc.resp}</div>
              <div style={{ fontSize: 10.5, color: "var(--text-secondary)", lineHeight: 1.4 }}>{doc.func}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
