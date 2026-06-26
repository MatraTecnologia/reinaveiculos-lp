"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";

type VideoCardProps = {
  title: string;
  description: string;
  image: string;
  video?: string;
  index: number;
  active: boolean;
  dimmed: boolean;
  onHover: (index: number | null) => void;
};

export const VideoCard = ({
  title,
  description,
  image,
  video,
  index,
  active,
  dimmed,
  onHover,
}: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (active) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [active]);

  return (
    <motion.article
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      onFocus={() => onHover(index)}
      onBlur={() => onHover(null)}
      animate={{
        scale: active ? 1.12 : dimmed ? 0.97 : 1,
        opacity: dimmed ? 0.78 : 1,
      }}
      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
      tabIndex={0}
      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-3xl border border-line bg-card shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      style={{ zIndex: active ? 20 : 1, willChange: "transform" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: active ? 1.12 : 1 }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
        <div>
          <h3 className="text-lg font-bold tracking-tight sm:text-xl">
            {title}
          </h3>
          <motion.p
            className="mt-2 max-w-sm text-sm leading-relaxed text-muted"
            animate={{ opacity: active ? 1 : 0.001, y: active ? 0 : 8 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          >
            {description}
          </motion.p>
        </div>
        <span
          aria-hidden
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-black/40 backdrop-blur-sm transition-colors duration-300 group-hover:border-brand group-hover:bg-brand"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.article>
  );
};
