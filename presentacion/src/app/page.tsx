"use client";

import React, { useState, useCallback } from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { SLIDES } from "@/data/slideData";
import SlideContainer from "@/components/SlideContainer";
import SlideNavigation from "@/components/SlideNavigation";

// Expositor 1 — Introducción y Empresa (1-6)
import Slide01Portada from "@/components/slides/Slide01Portada";
import Slide02Indice from "@/components/slides/Slide02Indice";
import Slide03Presentacion from "@/components/slides/Slide03Presentacion";
import Slide04Objetivos from "@/components/slides/Slide04Objetivos";
import Slide05Empresa from "@/components/slides/Slide05Importancia"; // repurposed file
import Slide06ProcesoProductivo from "@/components/slides/Slide06ProcesoProductivo";

// Expositor 2 — Marco Teórico (7-10)
import Slide07Importancia from "@/components/slides/Slide07Formulas"; // repurposed file
import Slide08SistemaCostos from "@/components/slides/Slide08CatalogoActivo"; // repurposed file
import Slide09Elementos from "@/components/slides/Slide09CatalogoPasivoPatrimonio"; // repurposed file
import Slide10Formulas from "@/components/slides/Slide10CatalogoIngresosCostos"; // repurposed file

// Expositor 3 — Catálogo de Cuentas (11-15)
import Slide11ActivoCorriente from "@/components/slides/Slide11CatalogoGastos"; // repurposed file
import Slide12ActivoNoCorriente from "@/components/slides/Slide12ManualActivo"; // repurposed file
import Slide13PasivoPatrimonio from "@/components/slides/Slide13ManualResto"; // repurposed file
import Slide14IngresosCostos from "@/components/slides/Slide14FlujoContable"; // repurposed file
import Slide15GastosResumen from "@/components/slides/Slide15InformesProduccion"; // repurposed file

// Expositor 4 — Manual, Flujo, Informes (16-21)
import Slide16ManualActivo from "@/components/slides/Slide16ManualActivo";
import Slide17ManualPasivoPatrimonio from "@/components/slides/Slide17ManualPasivoPatrimonio";
import Slide18ManualCostosGastos from "@/components/slides/Slide18ManualCostosGastos";
import Slide19FlujoContable from "@/components/slides/Slide19FlujoContable";
import Slide20Documentos from "@/components/slides/Slide20Documentos";
import Slide21InformesProduccion from "@/components/slides/Slide21InformesProduccion";

// Expositor 5 — Caso y Cierre (22-26)
import Slide22CasoCostoProduccion from "@/components/slides/Slide16CasoCostoProduccion"; // repurposed file
import Slide23EstadoResultados from "@/components/slides/Slide17CasoEstadoResultados"; // repurposed file
import Slide24BalanceGeneral from "@/components/slides/Slide18CasoBalanceGeneral"; // repurposed file
import Slide25Conclusiones from "@/components/slides/Slide19Conclusiones"; // repurposed file
import Slide26Cierre from "@/components/slides/Slide26Cierre";

const SLIDE_COMPONENTS: Record<number, React.ComponentType> = {
  1: Slide01Portada,
  2: Slide02Indice,
  3: Slide03Presentacion,
  4: Slide04Objetivos,
  5: Slide05Empresa,
  6: Slide06ProcesoProductivo,
  7: Slide07Importancia,
  8: Slide08SistemaCostos,
  9: Slide09Elementos,
  10: Slide10Formulas,
  11: Slide11ActivoCorriente,
  12: Slide12ActivoNoCorriente,
  13: Slide13PasivoPatrimonio,
  14: Slide14IngresosCostos,
  15: Slide15GastosResumen,
  16: Slide16ManualActivo,
  17: Slide17ManualPasivoPatrimonio,
  18: Slide18ManualCostosGastos,
  19: Slide19FlujoContable,
  20: Slide20Documentos,
  21: Slide21InformesProduccion,
  22: Slide22CasoCostoProduccion,
  23: Slide23EstadoResultados,
  24: Slide24BalanceGeneral,
  25: Slide25Conclusiones,
  26: Slide26Cierre,
};

export default function PresentationPage() {
  const nav = useSlideNavigation(SLIDES.length);
  const [animKey, setAnimKey] = useState(0);

  const handleGoToSlide = useCallback(
    (n: number) => {
      nav.goToSlide(n);
      setAnimKey((k) => k + 1);
    },
    [nav]
  );

  const handleNext = useCallback(() => {
    nav.nextSlide();
    setAnimKey((k) => k + 1);
  }, [nav]);

  const handlePrev = useCallback(() => {
    nav.prevSlide();
    setAnimKey((k) => k + 1);
  }, [nav]);

  const CurrentSlideComponent = SLIDE_COMPONENTS[nav.currentSlide];

  return (
    <div className="presentation-root" id="presentation">
      <SlideContainer slideId={nav.currentSlide} key={`slide-${nav.currentSlide}-${animKey}`}>
        <div className="slide-content-wrapper slide-enter">
          {CurrentSlideComponent && <CurrentSlideComponent />}
        </div>
      </SlideContainer>

      <SlideNavigation
        currentSlide={nav.currentSlide}
        totalSlides={SLIDES.length}
        progress={nav.progress}
        isFirst={nav.isFirst}
        isLast={nav.isLast}
        onPrev={handlePrev}
        onNext={handleNext}
        goToSlide={handleGoToSlide}
      />
    </div>
  );
}
