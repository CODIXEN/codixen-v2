import { Sparkle } from "lucide-react";
import { STACK } from "@/lib/content";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {STACK.map((skill) => (
        <li
          key={skill}
          className="flex items-center gap-10 font-display text-2xl font-medium italic tracking-tight text-fg-subtle transition-colors hover:text-fg md:text-3xl"
        >
          {skill}
          <Sparkle aria-hidden className="size-4 shrink-0 fill-lime text-lime" />
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section aria-label="Technologies we work with" className="py-10 md:py-14">
      <p className="mb-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
        Our production stack
      </p>
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
