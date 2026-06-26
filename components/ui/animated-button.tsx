"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost";

type AnimatedButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-brand hover:bg-brand-soft",
  secondary:
    "border border-line bg-white/[0.02] text-foreground hover:border-white/25 hover:bg-white/[0.05]",
  ghost:
    "border border-white/25 bg-white/[0.06] text-white hover:border-white/50 hover:bg-white/[0.12]",
};

export const AnimatedButton = ({
  children,
  href,
  variant = "primary",
  className = "",
  icon,
  ...rest
}: AnimatedButtonProps) => {
  const content = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full" />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.45, ease: EASE_PREMIUM }}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
      {...rest}
    >
      {content}
    </motion.button>
  );
};
