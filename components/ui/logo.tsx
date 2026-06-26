import Image from "next/image";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <span
      className={`flex items-center ${className}`}
      aria-label="Reina Studio Car Detailing"
    >
      <Image
        src="/logo.webp"
        alt="Reina Studio Car Detailing"
        width={128}
        height={49}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </span>
  );
};
