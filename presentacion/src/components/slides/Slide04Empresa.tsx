import React from "react";
import {
  Building2,
  MapPin,
  Factory,
  ShoppingCart,
  PackageSearch,
  Beaker,
  Settings2,
  ShieldCheck,
  Package,
  Warehouse,
} from "lucide-react";

const COMPANY_DATA = [
  { label: "Empresa", value: "Pinturas Industriales del Valle, S.A." },
  { label: "Fundación", value: "12 de marzo de 2015" },
  { label: "Rubro", value: "Industria manufacturera" },
  { label: "Actividad", value: "Fabricación y venta de pinturas y recubrimientos" },
  { label: "Ubicación", value: "San Pedro Sula, Honduras" },
  { label: "Producción", value: "Por lotes y órdenes de fabricación" },
];

const PROCESS_STEPS = [
  { icon: PackageSearch, label: "Requisición\nde materiales", sub: "Salida de MP" },
  { icon: Beaker, label: "Formulación\ny mezcla", sub: "Orden en proceso" },
  { icon: Settings2, label: "Molienda\ny ajuste", sub: "Conversión" },
  { icon: ShieldCheck, label: "Control de\ncalidad", sub: "Validación" },
  { icon: Package, label: "Envasado y\netiquetado", sub: "Unidades term." },
  { icon: Warehouse, label: "Bodega de\nterminados", sub: "Disponible" },
];

export default function Slide04Empresa() {
  return (
    <div className="slide-content">
      <span className="section-number">02</span>
      <div className="slide-label">Sección 2</div>
      <h2 className="slide-title small">Datos Generales de la Empresa</h2>

      <div className="grid-2" style={{ marginBottom: "var(--space-5)", flex: "0 0 auto" }}>
        <div className="glass-card compact">
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <Building2 size={20} style={{ color: "var(--color-presenter-1)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>
              Ficha de la Empresa
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {COMPANY_DATA.map((d) => (
              <div key={d.label} style={{ display: "flex", gap: "var(--space-2)", fontSize: 12 }}>
                <span style={{ color: "var(--text-tertiary)", minWidth: 80, fontWeight: 500 }}>{d.label}</span>
                <span style={{ color: "var(--text-secondary)" }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card compact">
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <ShoppingCart size={20} style={{ color: "var(--color-presenter-2)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>
              Mercado y Sistema
            </span>
          </div>
          <ul className="slide-list" style={{ fontSize: 12.5 }}>
            <li>Clientes: Ferreterías, constructoras, distribuidores e instituciones</li>
            <li>Sistema contable: Costos por órdenes de producción</li>
            <li>Control de inventarios permanente</li>
            <li>Productos: pinturas, selladores, imprimantes, recubrimientos</li>
          </ul>
        </div>
      </div>

      {/* Process flow */}
      <div style={{ marginTop: "auto" }}>
        <div className="slide-label" style={{ marginBottom: "var(--space-3)" }}>Proceso Productivo</div>
        <div className="flow-diagram" style={{ justifyContent: "center" }}>
          {PROCESS_STEPS.map((step, i) => (
            <React.Fragment key={step.label}>
              {i > 0 && <span className="flow-arrow">→</span>}
              <div className="flow-step">
                <div className="step-icon">
                  <step.icon size={16} />
                </div>
                <div className="step-label" style={{ whiteSpace: "pre-line" }}>{step.label}</div>
                <div className="step-sublabel">{step.sub}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
