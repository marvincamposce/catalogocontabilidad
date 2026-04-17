import React from "react";
import { PackageSearch, Beaker, Settings2, ShieldCheck, Package, Warehouse } from "lucide-react";

const STEPS = [
  { icon: PackageSearch, label: "Requisición\nde materiales", sub: "Salida de MP", color: "#2E5BFF" },
  { icon: Beaker, label: "Formulación\ny mezcla", sub: "Orden en proceso", color: "#7C3AED" },
  { icon: Settings2, label: "Molienda\ny ajuste", sub: "Conversión", color: "#0284C7" },
  { icon: ShieldCheck, label: "Control de\ncalidad", sub: "Validación", color: "#059669" },
  { icon: Package, label: "Envasado y\netiquetado", sub: "Unidades term.", color: "#D97706" },
  { icon: Warehouse, label: "Bodega\nterminados", sub: "Disponible", color: "#E11D48" },
];

export default function Slide06ProcesoProductivo() {
  return (
    <div className="slide-content">
      <div className="paint-bar blue" />
      <span className="section-number">02</span>

      <div className="slide-label">Sección 2</div>
      <h2 className="slide-title medium">Proceso <span className="accent">Productivo</span></h2>

      <p className="slide-text" style={{ marginBottom: 32 }}>
        La empresa transforma materias primas como resinas, pigmentos, solventes y aditivos
        en productos terminados identificables por lote.
      </p>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="flow-diagram">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.label}>
              {i > 0 && <span className="flow-arrow">→</span>}
              <div className="flow-step">
                <div className="step-icon" style={{ background: step.color }}>
                  <step.icon size={20} />
                </div>
                <div className="step-label" style={{ whiteSpace: "pre-line" }}>{step.label}</div>
                <div className="step-sublabel">{step.sub}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="callout blue" style={{ marginTop: "auto" }}>
        <span style={{ fontSize: 13 }}>
          Esta característica permite aplicar un <strong>sistema de costos por órdenes de producción</strong>,
          controlando cada corrida con documentos específicos y una hoja de costos por orden.
        </span>
      </div>
    </div>
  );
}
