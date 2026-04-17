import React from "react";
import { Calendar } from "lucide-react";

const TEAM = [
  { name: "Gelsy Guillen Chavarria", id: "2024230141" },
  { name: "Marvin Omar Campos Cerrato", id: "2025220172" },
  { name: "Rafael Alvarado Olivas", id: "2024210027" },
  { name: "Alanis Nazaret Gomez", id: "2024210136" },
  { name: "Jensy Karola Alvarado Vasquez", id: "2022210508" },
];

export default function Slide01Portada() {
  return (
    <div
      className="slide-content centered"
      style={{
        background: "linear-gradient(180deg, #E8EDFF 0%, #F4F5FE 30%, #FAFBFE 50%, #F8F5FF 75%, #EDE8FF 100%)",
        backgroundSize: "cover",
      }}
    >
      {/* University logo */}
      <div style={{ marginBottom: 8 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-ujcv.svg" alt="UJCV" style={{ height: 110, objectFit: "contain" }} />
      </div>

      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 12,
      }}>
        Universidad José Cecilio del Valle
      </div>

      {/* Paint swatch bar */}
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {["#2E5BFF", "#7C3AED", "#059669", "#F97316", "#0891B2", "#0284C7"].map((c) => (
          <div key={c} style={{ width: 40, height: 6, borderRadius: 3, background: c }} />
        ))}
      </div>

      <h1 style={{
        fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: 48, lineHeight: 1.08,
        letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10, maxWidth: 850,
      }}>
        Manual y Catálogo de Cuentas
        <br />
        <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Empresa Industrial
        </span>
      </h1>

      <p style={{
        fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 500,
        color: "var(--text-secondary)", marginBottom: 24,
      }}>
        Pinturas Industriales del Valle, S.A.
      </p>

      {/* Team members */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 900,
      }}>
        {TEAM.map(({ name, id }) => (
          <div key={id} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100,
            background: "rgba(255,255,255,0.85)", border: "1px solid var(--border-light)",
            fontSize: 11.5, fontWeight: 500, boxShadow: "var(--shadow-sm)",
          }}>
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{name}</span>
            <span style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", fontSize: 9.5 }}>{id}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6, marginTop: 16,
        fontSize: 12, color: "var(--text-tertiary)",
      }}>
        <Calendar size={13} />
        <span>Contabilidad de Costos · Abril 2025</span>
      </div>
    </div>
  );
}
