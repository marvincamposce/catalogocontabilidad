"use client";

import React, { useState, useCallback } from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { SLIDES } from "@/data/slideData";
import SlideContainer from "@/components/SlideContainer";
import SlideNavigation from "@/components/SlideNavigation";

// Import all slides
import Slide01Portada from "@/components/slides/Slide01Portada";
import Slide02Indice from "@/components/slides/Slide02Indice";
import Slide03Presentacion from "@/components/slides/Slide03Presentacion";
import Slide04Empresa from "@/components/slides/Slide04Empresa";
import Slide05Importancia from "@/components/slides/Slide05Importancia";
import Slide06SistemaCostos from "@/components/slides/Slide06SistemaCostos";
import Slide07Formulas from "@/components/slides/Slide07Formulas";
import Slide08CatalogoActivo from "@/components/slides/Slide08CatalogoActivo";
import Slide09CatalogoPasivoPatrimonio from "@/components/slides/Slide09CatalogoPasivoPatrimonio";
import Slide10CatalogoIngresosCostos from "@/components/slides/Slide10CatalogoIngresosCostos";
import Slide11CatalogoGastos from "@/components/slides/Slide11CatalogoGastos";
import Slide12ManualActivo from "@/components/slides/Slide12ManualActivo";
import Slide13ManualResto from "@/components/slides/Slide13ManualResto";
import Slide14FlujoContable from "@/components/slides/Slide14FlujoContable";
import Slide15InformesProduccion from "@/components/slides/Slide15InformesProduccion";
import Slide16CasoCostoProduccion from "@/components/slides/Slide16CasoCostoProduccion";
import Slide17CasoEstadoResultados from "@/components/slides/Slide17CasoEstadoResultados";
import Slide18CasoBalanceGeneral from "@/components/slides/Slide18CasoBalanceGeneral";
import Slide19Conclusiones from "@/components/slides/Slide19Conclusiones";

const SLIDE_COMPONENTS: Record<number, React.ComponentType> = {
  1: Slide01Portada,
  2: Slide02Indice,
  3: Slide03Presentacion,
  4: Slide04Empresa,
  5: Slide05Importancia,
  6: Slide06SistemaCostos,
  7: Slide07Formulas,
  8: Slide08CatalogoActivo,
  9: Slide09CatalogoPasivoPatrimonio,
  10: Slide10CatalogoIngresosCostos,
  11: Slide11CatalogoGastos,
  12: Slide12ManualActivo,
  13: Slide13ManualResto,
  14: Slide14FlujoContable,
  15: Slide15InformesProduccion,
  16: Slide16CasoCostoProduccion,
  17: Slide17CasoEstadoResultados,
  18: Slide18CasoBalanceGeneral,
  19: Slide19Conclusiones,
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
