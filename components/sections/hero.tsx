"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { whatsappUrl } from "@/lib/site";
import { EASE_PREMIUM, fadeUp, staggerContainer } from "@/lib/motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[108svh] items-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero.jpg"
          className="absolute inset-0 size-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-60" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-px relative z-10 pt-28"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-brand" />
          Estética Automotiva Premium
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-7 max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Proteção, brilho e acabamento no mais alto{" "}
          <span className="text-brand">padrão automotivo</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Especialistas em estética automotiva premium para quem exige
          excelência em cada detalhe do seu veículo.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <AnimatedButton href={whatsappUrl} target="_blank" rel="noopener">
            Solicitar orçamento
          </AnimatedButton>
          <AnimatedButton href="#servicos" variant="ghost">
            Conheça nossos serviços
          </AnimatedButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#diferenciais"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: EASE_PREMIUM }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
};
