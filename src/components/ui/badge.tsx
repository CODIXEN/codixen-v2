import * as React from "react";
import { cn } from "@/lib/utils";

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
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/50 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-muted",
        className
      )}
    >
      {icon ? (
        <span className="text-fg">{icon}</span>
      ) : (
        <span className="size-1.5 rounded-full bg-lime" />
      )}
      {children}
    </span>
  );
}
