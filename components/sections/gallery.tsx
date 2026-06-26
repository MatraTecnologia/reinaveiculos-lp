"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { gallery } from "@/lib/site";
import { scaleReveal } from "@/lib/motion";

export const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="galeria"
      className="relative border-t border-line bg-background py-24 lg:py-32"
    >
      <div className="container-px flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle
          eyebrow="Galeria"
          title={
            <>
              Resultados que falam por <span className="text-brand">si</span>.
            </>
          }
          description="Uma seleção de projetos onde cada superfície recebeu atenção absoluta."
        />
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="grid size-12 place-items-center rounded-full border border-line bg-card transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => emblaApi?.scrollNext()}
            className="grid size-12 place-items-center rounded-full border border-line bg-card transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <Reveal variants={scaleReveal} className="mt-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative min-w-0 shrink-0 grow-0 basis-[88%] pl-4 first:pl-6 sm:basis-[70%] lg:basis-[58%]"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden rounded-3xl border border-line shadow-card transition-all duration-700 ${
                    selected === i ? "opacity-100" : "opacity-45"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Projeto Reina Studio ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 88vw, 58vw"
                    className={`object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      selected === i ? "scale-100" : "scale-110"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
