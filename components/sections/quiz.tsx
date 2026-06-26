"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Reveal } from "@/components/ui/reveal";
import { quizSteps, buildQuizWhatsapp, whatsappUrl } from "@/lib/site";
import { EASE_PREMIUM } from "@/lib/motion";

const total = quizSteps.length;

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isDone = step >= total;
  const current = quizSteps[step];
  const progress = Math.min(step, total) / total;

  const waUrl = useMemo(() => buildQuizWhatsapp(answers), [answers]);

  const select = (option: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

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
            <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-card sm:p-10">
              {/* progresso */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="h-full rounded-full bg-brand"
                    animate={{ width: `${(isDone ? 1 : progress) * 100}%` }}
                    transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                  />
                </div>
                <span className="shrink-0 text-xs font-medium text-muted">
                  {isDone ? "Concluído" : `${step + 1} / ${total}`}
                </span>
              </div>

              <AnimatePresence mode="wait">
                {!isDone ? (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                  >
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {current.question}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{current.caption}</p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {current.options.map((option) => {
                        const selected = answers[current.id] === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => select(option)}
                            className={`group flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all duration-300 ${
                              selected
                                ? "border-brand bg-brand/10 text-foreground"
                                : "border-line bg-background text-muted hover:border-white/20 hover:text-foreground"
                            }`}
                          >
                            {option}
                            <ArrowRight className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                        disabled={step === 0}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
                      >
                        <ArrowLeft className="size-4" /> Voltar
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep((s) => s + 1)}
                        className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        Pular
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                    className="text-center"
                  >
                    <span className="mx-auto grid size-14 place-items-center rounded-full border border-brand/40 bg-brand/10 text-brand">
                      <Check className="size-7" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                      Tudo pronto!
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                      Preparamos um atendimento personalizado para você. É só
                      enviar — respondemos rapidamente.
                    </p>

                    {Object.keys(answers).length > 0 && (
                      <div className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2">
                        {Object.values(answers).map((value) => (
                          <span
                            key={value}
                            className="rounded-full border border-line bg-background px-4 py-1.5 text-xs font-medium text-muted"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <AnimatedButton
                        href={waUrl}
                        target="_blank"
                        rel="noopener"
                        icon={<MessageCircle className="size-4" />}
                      >
                        Falar no WhatsApp
                      </AnimatedButton>
                      <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                      >
                        <RotateCcw className="size-4" /> Refazer
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {!isDone && (
            <Reveal className="mt-6 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 text-brand" />
                Prefere falar agora? Chame no WhatsApp
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
