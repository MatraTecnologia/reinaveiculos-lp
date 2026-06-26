type LogoProps = {
  className?: string;
  compact?: boolean;
};

export const Logo = ({ className = "", compact = false }: LogoProps) => {
  return (
    <span
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Reina Studio Car Detailing"
    >
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-lg border border-line bg-card text-brand"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 13.5 5 8h14l2 5.5" />
          <path d="M3 13.5h18v3a1 1 0 0 1-1 1h-1v1.5h-3V17.5H8V19H5v-1.5H4a1 1 0 0 1-1-1Z" />
          <circle cx="7.5" cy="14.5" r="0.6" fill="currentColor" />
          <circle cx="16.5" cy="14.5" r="0.6" fill="currentColor" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-tight">
            REINA<span className="text-brand">.</span>
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted">
            Studio Detailing
          </span>
        </span>
      )}
    </span>
  );
};
