import React from "react";

const ITEMS = [
  { num: "01", text: "Presentación del proyecto" },
  { num: "02", text: "Datos generales de la empresa" },
  { num: "03", text: "Importancia del catálogo y manual" },
  { num: "04", text: "Sistema de costos aplicado" },
  { num: "05", text: "Catálogo de cuentas propuesto" },
  { num: "06", text: "Manual de cuentas" },
  { num: "07", text: "Flujo contable y documentos" },
  { num: "08", text: "Informes de producción" },
  { num: "09", text: "Caso ilustrativo con EEFF" },
  { num: "10", text: "Conclusiones y recomendaciones" },
];

export default function Slide02Indice() {
  return (
    <div className="slide-content">
      <span className="section-number">II</span>
      <div className="slide-label">Hoja de ruta</div>
      <h2 className="slide-title">Índice General</h2>

      <div className="index-grid">
        {ITEMS.map((item) => (
          <div className="index-item" key={item.num}>
            <span className="index-num">{item.num}</span>
            <span className="index-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
