import React from "react";

const LEFT = [
  { num: "01", text: "Presentación del proyecto" },
  { num: "02", text: "Datos de la empresa" },
  { num: "03", text: "Importancia del catálogo y manual" },
  { num: "04", text: "Sistema de costos aplicado" },
  { num: "05", text: "Catálogo de cuentas" },
];

const RIGHT = [
  { num: "06", text: "Manual de cuentas" },
  { num: "07", text: "Flujo contable y documentos" },
  { num: "08", text: "Informes de producción" },
  { num: "09", text: "Caso ilustrativo con EEFF" },
  { num: "10", text: "Conclusiones y cierre" },
];

export default function Slide02Indice() {
  return (
    <div className="slide-content">
      <div className="paint-bar blue" />
      <span className="section-number">·</span>

      <div className="slide-label">Hoja de ruta</div>
      <h2 className="slide-title medium" style={{ marginBottom: 28 }}>Contenido</h2>

      <div className="grid-2" style={{ flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {LEFT.map((item) => (
            <div className="index-card" key={item.num}>
              <span className="index-num">{item.num}</span>
              <span className="index-text">{item.text}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {RIGHT.map((item) => (
            <div className="index-card" key={item.num}>
              <span className="index-num">{item.num}</span>
              <span className="index-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
