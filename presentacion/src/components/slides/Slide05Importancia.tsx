import React from "react";
import { Building2, MapPin, Factory, ShoppingCart } from "lucide-react";

const DATA = [
  { label: "Empresa", value: "Pinturas Industriales del Valle, S.A." },
  { label: "Fundación", value: "12 de marzo de 2015" },
  { label: "Rubro", value: "Industria manufacturera" },
  { label: "Actividad", value: "Fabricación y venta de pinturas y recubrimientos" },
  { label: "Ubicación", value: "San Pedro Sula, Honduras" },
  { label: "Producción", value: "Por lotes y órdenes de fabricación" },
  { label: "Sistema", value: "Costos por órdenes de producción" },
];

export default function Slide05Empresa() {
  return (
    <div className="slide-content">
      <div className="paint-bar blue" />
      <span className="section-number">02</span>

      <div className="slide-label">Sección 2</div>
      <h2 className="slide-title medium">La <span className="accent">Empresa</span></h2>

      <div style={{ flex: 1, display: "flex", gap: 32, alignItems: "stretch" }}>
        {/* Company Card */}
        <div className="card flat no-hover" style={{ flex: "0 0 480px", padding: 28, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div className="icon-box md" style={{ background: "var(--color-blue-soft)" }}>
              <Building2 size={20} style={{ color: "var(--color-blue)" }} />
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700 }}>
              Ficha Técnica
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            {DATA.map((d) => (
              <div key={d.label} style={{ display: "flex", gap: 10, fontSize: 13.5 }}>
                <span style={{ color: "var(--text-tertiary)", minWidth: 85, fontWeight: 600 }}>{d.label}</span>
                <span style={{ color: "var(--text-secondary)" }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right info cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { icon: Factory, color: "#7C3AED", bg: "#F3EEFF", title: "Productos", desc: "Pinturas arquitectónicas e industriales, selladores, imprimantes y recubrimientos especiales" },
            { icon: ShoppingCart, color: "#059669", bg: "#ECFDF5", title: "Clientes", desc: "Ferreterías, constructoras, distribuidores y clientes institucionales a nivel nacional" },
            { icon: MapPin, color: "#F97316", bg: "#FFF4EB", title: "¿Por qué esta empresa?", desc: "El giro permite aplicar claramente la materia prima, mano de obra directa, CIF e inventarios de producción en proceso" },
          ].map((item) => (
            <div key={item.title} className="feature-item" style={{ flex: 1 }}>
              <div className="icon-box lg" style={{ background: item.bg, borderRadius: 14 }}>
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  {item.title}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
