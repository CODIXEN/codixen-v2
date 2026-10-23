"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";

const LEAD_WORDS = ["We", "build", "software", "that"];
const FLOATING_CHIPS = [
  { label: "Next.js", className: "left-[6%] top-[30%]", delay: "0s" },
  { label: "Laravel", className: "left-[11%] top-[62%]", delay: "-4s" },
  { label: "AI / RAG", className: "right-[7%] top-[28%]", delay: "-2s" },
  { label: "SaaS", className: "right-[12%] top-[60%]", delay: "-6s" },
];

/** Soft lime glow that trails the cursor across the hero. */
function PointerGlow({ host }: { host: React.RefObject<HTMLElement | null> }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 20, mass: 0.6 });

  React.useEffect(() => {
    const el = host.current;
    if (!el || reduce) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, [host, reduce, x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none absolute left-0 top-0 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-lime)_45%,transparent),transparent_65%)] opacity-60 blur-2xl"
    />
  );
}

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative isolate overflow-hidden px-0 pb-28 pt-36 md:pb-40 md:pt-44"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-50 mask-fade-b" />
        <div className="absolute left-1/2 top-[6%] size-[40rem] -translate-x-1/2 rounded-full glow animate-float-slow" />
      </div>
      <PointerGlow host={ref} />

      {/* Floating stack chips (desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
        {FLOATING_CHIPS.map((chip, i) => (
          <span
            key={chip.label}
            style={{ animationDelay: `${0.9 + i * 0.12}s, ${chip.delay}` }}
            className={`animate-chip-in absolute rounded-full border border-line-strong bg-surface/70 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-muted shadow-brand backdrop-blur ${chip.className}`}
          >
            <span className="mr-2 inline-block size-1.5 rounded-full bg-lime align-middle" />
            {chip.label}
          </span>
        ))}
      </div>

      {/* Skyline silhouette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 text-forest"
      >
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="xMidYMax slice"
          className="animate-skyline h-[180px] w-full opacity-[0.07] sm:h-[240px]"
          fill="currentColor"
        >
          <path d="M0 220V120h40v-30h26v30h20V96h34v54h28v-78h22v78h26V70h18v80h30v-40h26v40h24V52h20v98h28V108h30v42h26V84h22v66h30V64h18v86h28V98h26v52h24V72h22v78h28V40h20v110h30V96h26v54h24V120h28v100z" />
          <rect x="470" y="44" width="6" height="106" />
          <rect x="958" y="36" width="6" height="114" />
          <path d="M1100 220V100h34v-34h22v34h24V128h30v22h26V84h22v66h30V60h18v90h28V104h26v46h24V124h28v96z" />
        </svg>
      </div>

      <div className="container-cdx flex flex-col items-center text-center">
        <span
          className="animate-rise inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-muted backdrop-blur"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="relative flex size-2">
            <span className="animate-ping-soft absolute inset-0 rounded-full bg-lime" />
            <span className="relative size-2 rounded-full bg-lime ring-1 ring-forest/20" />
          </span>
          Founder-led software studio
        </span>

        <h1 className="mt-7 max-w-4xl font-display text-[2.75rem] font-medium leading-[1.06] tracking-[-0.03em] text-balance sm:text-6xl md:text-[5rem]">
          <span className="sr-only">We build software that actually ships</span>
          <span aria-hidden>
            {LEAD_WORDS.map((word, i) => (
              <React.Fragment key={word}>
                <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span
                    className="animate-word inline-block"
                    style={{ animationDelay: `${0.12 + i * 0.08}s` }}
                  >
                    {word}
                  </span>
                </span>{" "}
              </React.Fragment>
            ))}
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <span
                className="animate-word inline-block"
                style={{ animationDelay: "0.46s" }}
              >
                <span className="text-gradient marker-sweep">actually ships</span>
              </span>
            </span>
          </span>
        </h1>

        <p
          className="animate-rise mt-6 max-w-2xl text-lg text-fg-muted text-pretty md:text-xl"
          style={{ animationDelay: "0.6s" }}
        >
          Custom web apps, SaaS platforms, and AI-powered products — built by a
          senior team that runs its own products in production. We know the
          difference between a demo and a deployment.
        </p>

        <div
          className="animate-rise mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.72s" }}
        >
          <BookCallButton size="lg" className="group">
            Book a discovery call
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </BookCallButton>
          <ButtonLink href="#work" size="lg" variant="secondary">
            <Play />
            Explore our work
          </ButtonLink>
        </div>

        <p
          className="animate-rise mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-subtle"
          style={{ animationDelay: "0.84s" }}
        >
          Free 30-min call · You own 100% of the code
        </p>
      </div>
    </section>
  );
}
