"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { QuizCard } from "@/components/quiz/quiz-card";
import { EASE_PREMIUM } from "@/lib/motion";

const STORAGE_KEY = "reina-quiz-modal";
const TRIGGER_FRACTION = 0.4; // dispara após ~40% da página

type Lenis = { stop: () => void; start: () => void };

export const QuizModal = () => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  // Gatilho de scroll
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (dismissed) return;

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const fraction = scrolled / document.documentElement.scrollHeight;
      if (fraction >= TRIGGER_FRACTION) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll e fecha no Esc
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    lenis?.start();
    document.body.style.overflow = "";
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
          role="dialog"
          aria-modal="true"
          aria-label="Diagnóstico rápido Reina"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={close}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            className="relative z-10 w-full max-w-xl"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE_PREMIUM }}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={close}
              className="absolute -top-3 -right-3 z-20 grid size-10 place-items-center rounded-full border border-line bg-card text-foreground shadow-card transition-colors hover:border-brand hover:text-brand"
            >
              <X className="size-5" />
            </button>

            <div className="mb-5 text-center">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-6 bg-brand" />
                Diagnóstico rápido
                <span className="h-px w-6 bg-brand" />
              </span>
              <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Proposta sob medida em{" "}
                <span className="text-brand">menos de 1 minuto</span>
              </h2>
            </div>

            <QuizCard />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
