export interface SlideInfo {
  id: number;
  title: string;
  presenterIndex: number; // 1-5
}

export const PRESENTER_NAMES = [
  "Expositor 1",
  "Expositor 2",
  "Expositor 3",
  "Expositor 4",
  "Expositor 5",
];

export const PRESENTER_COLORS = [
  "#4f8cff", // Azul
  "#00d4ff", // Cyan
  "#8b5cf6", // Violeta
  "#f59e0b", // Ámbar
  "#10b981", // Esmeralda
];

export const SLIDES: SlideInfo[] = [
  { id: 1, title: "Portada", presenterIndex: 1 },
  { id: 2, title: "Índice General", presenterIndex: 1 },
  { id: 3, title: "Presentación del Proyecto", presenterIndex: 1 },
  { id: 4, title: "Datos de la Empresa", presenterIndex: 1 },
  { id: 5, title: "Importancia del Catálogo y Manual", presenterIndex: 2 },
  { id: 6, title: "Sistema de Costos por Órdenes", presenterIndex: 2 },
  { id: 7, title: "Fórmulas de Producción", presenterIndex: 2 },
  { id: 8, title: "Catálogo: Activo", presenterIndex: 3 },
  { id: 9, title: "Catálogo: Pasivo y Patrimonio", presenterIndex: 3 },
  { id: 10, title: "Catálogo: Ingresos y Costos", presenterIndex: 3 },
  { id: 11, title: "Catálogo: Gastos y Resumen", presenterIndex: 3 },
  { id: 12, title: "Manual: Activo", presenterIndex: 4 },
  { id: 13, title: "Manual: Pasivo, Patrimonio, Costos", presenterIndex: 4 },
  { id: 14, title: "Flujo Contable y Documentos", presenterIndex: 4 },
  { id: 15, title: "Informes de Producción", presenterIndex: 4 },
  { id: 16, title: "Caso: Costo de Producción", presenterIndex: 5 },
  { id: 17, title: "Caso: Estado de Resultados", presenterIndex: 5 },
  { id: 18, title: "Caso: Balance General", presenterIndex: 5 },
  { id: 19, title: "Conclusiones y Cierre", presenterIndex: 5 },
];

export function getPresenterColor(presenterIndex: number): string {
  return PRESENTER_COLORS[presenterIndex - 1] || PRESENTER_COLORS[0];
}

export function getPresenterName(presenterIndex: number): string {
  return PRESENTER_NAMES[presenterIndex - 1] || `Expositor ${presenterIndex}`;
}
