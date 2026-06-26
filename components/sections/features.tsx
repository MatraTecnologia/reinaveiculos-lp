"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, FlaskConical, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { features } from "@/lib/site";
import { fadeUp, staggerContainer, EASE_PREMIUM } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Sparkles,
  FlaskConical,
};

export const Features = () => {
  return (
    <section
      id="diferenciais"
      className="relative border-t border-line bg-surface py-24 lg:py-32"
    >
      <div className="container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
                className="group relative overflow-hidden rounded-3xl border border-line bg-card p-8 shadow-card"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <span className="grid size-13 w-13 place-items-center rounded-2xl border border-line bg-background text-brand">
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-8 text-sm text-muted">
          <span className="font-medium text-foreground">
            Para quem exige o mais alto padrão:
          </span>
          <span>Porsche · BMW · Audi · Mercedes · Ferrari · Lamborghini</span>
        </Reveal>
      </div>
    </section>
  );
};
