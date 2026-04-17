import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual y Catálogo de Cuentas — Empresa Industrial",
  description:
    "Presentación académica sobre el manual y catálogo de cuentas de una empresa industrial. Contabilidad de Costos — UJCV.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
