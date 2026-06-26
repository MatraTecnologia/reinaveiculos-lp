"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "header" | "article" | "li";
  amount?: number;
};

export const Reveal = ({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
  amount = 0.25,
}: RevealProps) => {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
};
