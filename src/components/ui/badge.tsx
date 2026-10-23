import * as React from "react";
import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

/** Pill eyebrow shown above section titles. */
export function Badge({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span className={cn("eyebrow", className)}>
      {icon ?? <Sparkle aria-hidden className="size-3.5 fill-current" />}
      {children}
    </span>
  );
}
