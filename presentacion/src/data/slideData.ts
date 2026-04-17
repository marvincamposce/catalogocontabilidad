export interface SlideInfo {
  id: number;
  title: string;
  presenterIndex: number; // 1-5
}

export const PRESENTER_NAMES = [
  "Gelsy Guillen",
  "Marvin Campos",
  "Rafael Alvarado",
  "Alanis Gomez",
  "Jensy Alvarado",
];

export const PRESENTER_COLORS = [
  "#2E5BFF", // Blue
  "#7C3AED", // Violet
  "#059669", // Emerald
  "#D97706", // Amber
  "#E11D48", // Rose
];

export const PRESENTER_SOFT_COLORS = [
  "#EEF2FF",
  "#F3EEFF",
  "#ECFDF5",
  "#FFFBEB",
  "#FFF1F2",
];

export const SLIDES: SlideInfo[] = [
  // Expositor 1 — Introducción y Empresa (1-6)
  { id: 1, title: "Portada", presenterIndex: 1 },
  { id: 2, title: "Contenido", presenterIndex: 1 },
  { id: 3, title: "Presentación del Proyecto", presenterIndex: 1 },
  { id: 4, title: "Objetivos", presenterIndex: 1 },
  { id: 5, title: "La Empresa", presenterIndex: 1 },
  { id: 6, title: "Proceso Productivo", presenterIndex: 1 },

  // Expositor 2 — Marco Teórico y Sistema de Costos (7-10)
  { id: 7, title: "Importancia del Catálogo y Manual", presenterIndex: 2 },
  { id: 8, title: "Sistema de Costos", presenterIndex: 2 },
  { id: 9, title: "Elementos del Costo", presenterIndex: 2 },
  { id: 10, title: "Fórmulas de Producción", presenterIndex: 2 },

  // Expositor 3 — Catálogo de Cuentas (11-15)
  { id: 11, title: "Catálogo: Activo Corriente", presenterIndex: 3 },
  { id: 12, title: "Catálogo: Activo No Corriente", presenterIndex: 3 },
  { id: 13, title: "Catálogo: Pasivo y Patrimonio", presenterIndex: 3 },
  { id: 14, title: "Catálogo: Ingresos y Costos", presenterIndex: 3 },
  { id: 15, title: "Catálogo: Gastos y Resumen", presenterIndex: 3 },

  // Expositor 4 — Manual, Flujo, Informes (16-21)
  { id: 16, title: "Manual: Activo", presenterIndex: 4 },
  { id: 17, title: "Manual: Pasivo y Patrimonio", presenterIndex: 4 },
  { id: 18, title: "Manual: Costos y Gastos", presenterIndex: 4 },
  { id: 19, title: "Flujo Contable", presenterIndex: 4 },
  { id: 20, title: "Documentos de Soporte", presenterIndex: 4 },
  { id: 21, title: "Informes de Producción", presenterIndex: 4 },

  // Expositor 5 — Caso Práctico y Cierre (22-26)
  { id: 22, title: "Caso: Costo de Producción", presenterIndex: 5 },
  { id: 23, title: "Caso: Estado de Resultados", presenterIndex: 5 },
  { id: 24, title: "Caso: Balance General", presenterIndex: 5 },
  { id: 25, title: "Conclusiones", presenterIndex: 5 },
  { id: 26, title: "Cierre", presenterIndex: 5 },
];

export function getPresenterColor(presenterIndex: number): string {
  return PRESENTER_COLORS[presenterIndex - 1] || PRESENTER_COLORS[0];
}

export function getPresenterSoftColor(presenterIndex: number): string {
  return PRESENTER_SOFT_COLORS[presenterIndex - 1] || PRESENTER_SOFT_COLORS[0];
}

export function getPresenterName(presenterIndex: number): string {
  return PRESENTER_NAMES[presenterIndex - 1] || `Expositor ${presenterIndex}`;
}
