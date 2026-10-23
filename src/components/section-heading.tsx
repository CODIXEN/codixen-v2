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
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "max-w-2xl items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="heading-lg text-[2.25rem] text-balance sm:text-5xl md:text-[3.5rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-fg-muted text-pretty md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
