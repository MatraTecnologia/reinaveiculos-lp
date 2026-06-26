"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

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
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Zoom suave da mídia. O tamanho do card é controlado pelo grid (Services),
  // então nenhum card se sobrepõe — todos respeitam o próprio espaço.
  useGSAP(
    () => {
      gsap.to(mediaRef.current, {
        scale: active ? 1.08 : 1,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { dependencies: [active], scope: mediaRef },
  );

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
    <article
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(index)}
      onBlur={() => onHover(null)}
      tabIndex={0}
      className="group relative h-full min-h-[260px] cursor-pointer overflow-hidden rounded-3xl border border-line bg-card shadow-card transition-colors duration-500 hover:border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div
        ref={mediaRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
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
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          dimmed ? "opacity-45" : "opacity-0"
        }`}
      />

      <h3 className="absolute inset-x-0 top-0 px-6 pt-7 text-center text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
        {title}
      </h3>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <p className="max-w-[68%] text-sm leading-snug text-white/70">
          {description}
        </p>
        <span
          aria-hidden
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-brand group-hover:bg-brand"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
};
