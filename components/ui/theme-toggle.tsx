"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { EASE_PREMIUM } from "@/lib/motion";

const palettes = {
  dark: {
    body: "#e11122",
    wing: "#a50d19",
    cockpit: "#1b1b1b",
    tire: "#0a0a0a",
    hub: "#e11122",
    spoke: "#3a3a3a",
  },
  light: {
    body: "#1b1b1f",
    wing: "#0a0a0a",
    cockpit: "#e11122",
    tire: "#18181b",
    hub: "#e11122",
    spoke: "#d4d4d8",
  },
} as const;

const Wheel = ({
  cx,
  cy,
  tire,
  hub,
  spoke,
  spinning,
}: {
  cx: number;
  cy: number;
  tire: string;
  hub: string;
  spoke: string;
  spinning: boolean;
}) => (
  <g>
    <circle cx={cx} cy={cy} r={12} fill={tire} />
    <motion.g
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
      animate={spinning ? { rotate: 360 } : { rotate: 0 }}
      transition={
        spinning
          ? { repeat: Infinity, ease: "linear", duration: 0.6 }
          : { duration: 0.3 }
      }
    >
      <circle cx={cx} cy={cy} r={4.5} fill={hub} />
      <line x1={cx} y1={cy - 11} x2={cx} y2={cy + 11} stroke={spoke} strokeWidth={1.4} />
      <line x1={cx - 11} y1={cy} x2={cx + 11} y2={cy} stroke={spoke} strokeWidth={1.4} />
      <line x1={cx - 8} y1={cy - 8} x2={cx + 8} y2={cy + 8} stroke={spoke} strokeWidth={1.2} />
      <line x1={cx - 8} y1={cy + 8} x2={cx + 8} y2={cy - 8} stroke={spoke} strokeWidth={1.2} />
    </motion.g>
  </g>
);

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const c = palettes[theme];
  const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <motion.span
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
        transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        className="pointer-events-none hidden rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-muted shadow-card sm:block"
      >
        {label}
      </motion.span>

      <motion.button
        type="button"
        onClick={toggleTheme}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        aria-label={label}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
        className="group grid size-16 place-items-center overflow-hidden rounded-full border border-line bg-card shadow-card backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <motion.svg
          viewBox="0 0 120 64"
          className="h-9 w-auto"
          animate={{ x: hovered ? 3 : 0 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        >
          {/* rastro de velocidade */}
          <motion.g
            stroke={c.body}
            strokeWidth={2}
            strokeLinecap="round"
            initial={false}
            animate={{ opacity: hovered ? 0.9 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <line x1={2} y1={30} x2={12} y2={30} />
            <line x1={0} y1={38} x2={9} y2={38} />
          </motion.g>

          {/* asa traseira */}
          <rect x={14} y={16} width={20} height={4} rx={2} fill={c.wing} />
          <rect x={18} y={18} width={5} height={22} rx={1.5} fill={c.wing} />

          {/* corpo */}
          <path
            d="M16 41
               C20 35 28 35 33 35
               L45 34
               C51 25 63 25 71 31
               L88 34
               C98 34 107 36 118 40
               L118 44
               L16 44 Z"
            fill={c.body}
          />

          {/* cockpit + halo */}
          <path
            d="M52 31 C53 25 67 25 69 31"
            fill="none"
            stroke={c.cockpit}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <circle cx={60.5} cy={30} r={3.2} fill={c.cockpit} />

          {/* bico + asa dianteira */}
          <rect x={104} y={43} width={16} height={4} rx={1.5} fill={c.wing} />
          <rect x={116} y={39} width={3.5} height={9} rx={1} fill={c.wing} />

          <Wheel cx={36} cy={44} tire={c.tire} hub={c.hub} spoke={c.spoke} spinning={hovered} />
          <Wheel cx={92} cy={44} tire={c.tire} hub={c.hub} spoke={c.spoke} spinning={hovered} />
        </motion.svg>
      </motion.button>
    </div>
  );
};
