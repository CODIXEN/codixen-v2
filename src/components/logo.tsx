import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  iconOnly = false,
  variant = "black",
}: {
  className?: string;
  iconOnly?: boolean;
  variant?: "black" | "white";
}) {
  const src = iconOnly
    ? "/iconicon.svg"
    : variant === "white"
      ? "/logoicon-white.svg"
      : "/logoicon-black.svg";

  return (
    <Image
      src={src}
      alt="CODIXEN"
      width={iconOnly ? 32 : 123}
      height={iconOnly ? 32 : 24}
      priority
      className={cn(iconOnly ? "h-8 w-auto" : "h-6 w-auto", className)}
    />
  );
}
