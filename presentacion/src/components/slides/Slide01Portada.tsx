import React from "react";
import { Calendar } from "lucide-react";
import Image from "next/image";

const TEAM = [
  { name: "Gelsy Guillen Chavarria", id: "2024230141" },
  { name: "Marvin Omar Campos Cerrato", id: "2025220172" },
  { name: "Rafael Alvarado Olivas", id: "2024210027" },
  { name: "Alanis Nazaret Gomez", id: "2024210136" },
  { name: "Jensy Karola Alvarado Vasquez", id: "2022210508" },
];

export default function Slide01Portada() {
  return (
    <div className="slide-content centered" style={{ position: "relative" }}>
      {/* Decorative background orbs */}
      <div className="portada-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* University logo */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: 16 }}>
        <Image src="/logo-ujcv.svg" alt="UJCV" width={80} height={80} style={{ objectFit: "contain" }} />
      </div>

      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 16, position: "relative", zIndex: 1,
      }}>
        Universidad José Cecilio del Valle
      </div>

      {/* Paint swatch bar */}
      <div style={{ display: "flex", gap: 3, marginBottom: 20, position: "relative", zIndex: 1 }}>
        {["#2E5BFF", "#7C3AED", "#059669", "#F97316", "#E11D48", "#0284C7"].map((c) => (
          <div key={c} style={{ width: 36, height: 5, borderRadius: 3, background: c }} />
        ))}
      </div>

      <h1 style={{
        fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: 48, lineHeight: 1.05,
        letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 8, maxWidth: 850,
        position: "relative", zIndex: 1,
      }}>
        Manual y Catálogo de Cuentas
        <br />
        <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Empresa Industrial
        </span>
      </h1>

      <p style={{
        fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 500, color: "var(--text-secondary)",
        marginBottom: 24, position: "relative", zIndex: 1,
      }}>
        Pinturas Industriales del Valle, S.A.
      </p>

      {/* Team members */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center",
        position: "relative", zIndex: 1, maxWidth: 860,
      }}>
        {TEAM.map(({ name, id }) => (
          <div key={id} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 100,
            background: "white", border: "1px solid var(--border-light)",
            fontSize: 11.5, color: "var(--text-secondary)", fontWeight: 500,
            boxShadow: "var(--shadow-xs)",
          }}>
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{name}</span>
            <span style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", fontSize: 10 }}>{id}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6, position: "relative", zIndex: 1, marginTop: 16,
        fontSize: 12, color: "var(--text-tertiary)",
      }}>
        <Calendar size={12} />
        <span>Contabilidad de Costos · Abril 2025</span>
      </div>
    </div>
  );
}
