"use client";

import { Reveal } from "@/components/ui/reveal";
import { QuizCard } from "@/components/quiz/quiz-card";

export const Quiz = () => {
  return (
    <section
      id="diagnostico"
      className="relative border-t border-line bg-background py-24 lg:py-32"
    >
      <div className="container-px">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-brand" />
              Diagnóstico rápido
              <span className="h-px w-8 bg-brand" />
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Receba uma proposta sob medida em{" "}
              <span className="text-brand">menos de 1 minuto</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Responda 3 perguntas rápidas — ou fale direto com a gente. Sem
              compromisso.
            </p>
          </Reveal>

          <Reveal>
            <QuizCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
