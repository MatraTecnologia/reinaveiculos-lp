"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedButton } from "@/components/ui/animated-button";
import { whatsappUrl } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "12+", label: "Anos de estúdio" },
  { value: "4K+", label: "Veículos tratados" },
  { value: "100%", label: "Foco no detalhe" },
];

export const Experience = () => {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      id="experiencia"
      ref={container}
      className="relative border-t border-line bg-surface py-28 lg:py-40"
    >
      <div className="container-px grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-brand" />
              A experiência Reina
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Um espaço pensado para quem exige{" "}
              <span className="text-brand">excelência</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Ambiente controlado, iluminação técnica e processos meticulosos.
              Cada etapa é conduzida com precisão para revelar o melhor do seu
              veículo — e protegê-lo no mais alto padrão.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                <div>
                  <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-tight text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <AnimatedButton href={whatsappUrl} target="_blank" rel="noopener">
              Agendar atendimento
            </AnimatedButton>
          </Reveal>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-card lg:aspect-[3/4]">
          <div ref={imageRef} className="absolute inset-0 -top-[12%] h-[124%]">
            <Image
              src="/experience.jpg"
              alt="Processo de detalhamento premium no estúdio Reina"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};
