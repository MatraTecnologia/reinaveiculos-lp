"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { VideoCard } from "@/components/ui/video-card";
import { services, serviceTags } from "@/lib/site";
import { staggerContainer, fadeUp, EASE_PREMIUM } from "@/lib/motion";

export const Services = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      className="relative border-t border-line bg-background py-24 lg:py-32"
    >
      <div className="container-px">
        <SectionTitle
          eyebrow="Serviços"
          title={
            <>
              O cuidado que o seu carro{" "}
              <span className="text-brand">merece</span>.
            </>
          }
          description="Processos técnicos conduzidos por especialistas, da proteção de pintura ao detalhamento de concours."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <VideoCard
              key={service.id}
              index={index}
              title={service.name}
              description={service.description}
              image={service.image}
              active={active === index}
              dimmed={active !== null && active !== index}
              onHover={setActive}
            />
          ))}
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {serviceTags.map((tag) => (
            <motion.li
              key={tag}
              variants={fadeUp}
              whileHover={{ y: -3, borderColor: "rgba(225,17,34,0.6)" }}
              transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-muted"
            >
              {tag}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
