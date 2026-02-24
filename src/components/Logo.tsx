import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const widths = {
    sm: "w-40",
    md: "w-56",
    lg: "w-64",
  };

  const filter = variant === "light" ? "brightness-0 invert" : "";

  return (
    <Link href="/" className="inline-block">
      <img
        src="/images/logo.svg"
        alt="Ankara République"
        className={`${widths[size]} h-auto object-contain ${filter}`}
      />
    </Link>
  );
}
