"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionTitle } from "@/components/ui/section-title";
import { VideoCard } from "@/components/ui/video-card";
import { services, serviceTags } from "@/lib/site";
import { staggerContainer, fadeUp, EASE_PREMIUM } from "@/lib/motion";

const BIG = 0.55;
const SMALL = 0.45;

export const Services = () => {
  const [active, setActive] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const weights = useRef({ c: 0.5, r: 0.5 });

  // Anima as proporções (fr) das colunas/linhas do grid: o card em foco
  // ocupa mais espaço e os vizinhos cedem espaço — sem sobreposição.
  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const isDesktop = window.matchMedia("(min-width: 640px)").matches;
      if (!isDesktop) {
        grid.style.gridTemplateColumns = "";
        grid.style.gridTemplateRows = "";
        return;
      }

      let c = 0.5;
      let r = 0.5;
      if (active !== null) {
        c = active % 2 === 0 ? BIG : SMALL;
        r = active < 2 ? BIG : SMALL;
      }

      gsap.to(weights.current, {
        c,
        r,
        duration: 0.5,
        ease: "power3.out",
        onUpdate: () => {
          const w = weights.current;
          grid.style.gridTemplateColumns = `${w.c}fr ${1 - w.c}fr`;
          grid.style.gridTemplateRows = `${w.r}fr ${1 - w.r}fr`;
        },
      });
    },
    { dependencies: [active] },
  );

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

        <div
          ref={gridRef}
          className="mx-auto mt-14 grid w-full max-w-[820px] grid-cols-1 gap-4 sm:aspect-square sm:grid-cols-2 sm:grid-rows-2"
        >
          {services.map((service, index) => (
            <VideoCard
              key={service.id}
              index={index}
              title={service.name}
              description={service.description}
              image={service.image}
              video={service.video}
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
