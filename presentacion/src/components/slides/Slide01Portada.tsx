import React from "react";
import {
  BookOpen,
  Calendar,
  Users,
  GraduationCap,
} from "lucide-react";

export default function Slide01Portada() {
  return (
    <div className="slide-content centered">
      <div className="portada-university">
        Universidad José Cecilio del Valle
      </div>

      <div className="accent-line" style={{ margin: "0 auto var(--space-5)" }} />

      <h1 className="portada-title">
        Manual y Catálogo de Cuentas de una Empresa Industrial
      </h1>

      <p className="portada-subtitle">
        Pinturas Industriales del Valle, S.A.
      </p>

      <p
        style={{
          fontSize: 14,
          color: "var(--text-tertiary)",
          maxWidth: 600,
          lineHeight: 1.6,
          marginBottom: "var(--space-6)",
        }}
      >
        Documento elaborado con base en los contenidos vistos en clase sobre
        informes de producción, sistemas de costos por órdenes de producción y
        presupuesto maestro.
      </p>

      <div className="portada-meta">
        <div className="portada-meta-item">
          <BookOpen size={14} className="meta-icon" />
          Contabilidad de Costos
        </div>
        <div className="portada-meta-item">
          <GraduationCap size={14} className="meta-icon" />
          Proyecto Académico
        </div>
        <div className="portada-meta-item">
          <Users size={14} className="meta-icon" />
          5 Integrantes
        </div>
        <div className="portada-meta-item">
          <Calendar size={14} className="meta-icon" />
          Abril 2025
        </div>
      </div>
    </div>
  );
}
