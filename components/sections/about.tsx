"use client";

import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedButton } from "@/components/ui/animated-button";
import { addresses, whatsappUrl } from "@/lib/site";
import { scaleReveal } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="sobre"
      className="relative border-t border-line bg-surface py-24 lg:py-32"
    >
      <div className="container-px grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={scaleReveal}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-card">
            <Image
              src="/about.jpg"
              alt="Estúdio Reina Studio Car Detailing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-brand" />
              Sobre a Reina
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Onde a paixão por carros encontra a{" "}
              <span className="text-brand">obsessão pelo detalhe</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Somos um estúdio dedicado a quem trata o veículo como patrimônio.
              Unimos técnica, produtos de alta performance e ambiente
              controlado para entregar um acabamento impecável e proteção que
              valoriza o seu carro ao longo do tempo.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {addresses.map((addr, i) => (
              <Reveal key={addr.label} delay={0.1 + i * 0.08}>
                <div className="flex h-full gap-3 rounded-2xl border border-line bg-card p-5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold">{addr.label}</p>
                    <p className="mt-1 text-sm text-muted">{addr.line}</p>
                    <p className="text-sm text-muted">{addr.city}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-9">
            <AnimatedButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              icon={<MessageCircle className="size-4" />}
            >
              Falar no WhatsApp
            </AnimatedButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
