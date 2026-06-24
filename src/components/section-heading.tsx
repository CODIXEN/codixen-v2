import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animate";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-[2rem] font-medium leading-[1.08] tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-base text-fg-muted text-pretty md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
