"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animate";
import { REGIONS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const HOME = { x: 138, y: 92 };
const NODES: { x: number; y: number; home?: boolean }[] = [
  { ...HOME, home: true },
  { x: 52, y: 74 },
  { x: 96, y: 60 },
  { x: 116, y: 88 },
  { x: 160, y: 112 },
];
const ARCS = NODES.slice(1).map(
  (n) =>
    `M${HOME.x} ${HOME.y} Q${(HOME.x + n.x) / 2} ${Math.min(HOME.y, n.y) - 28} ${n.x} ${n.y}`
);

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="theme-forest grain relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="container-cdx grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge>Who we are</Badge>
          <h2 className="mt-4 max-w-xl font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl">
            A software studio that{" "}
            <span className="text-gradient">ships its own products</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            CODIXEN is a product engineering company that builds
            production-grade web apps, SaaS platforms, and AI systems — and runs
            its own products serving users worldwide. We partner with founders,
            CTOs, and VPs of Engineering at startups, scale-ups, and enterprise
            teams to turn ambitious ideas into software that lasts.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {REGIONS.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface/50 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-fg-muted"
              >
                <MapPin className="size-3 text-brand" />
                {region}
              </span>
            ))}
          </div>
        </div>

        {/* Dotted globe */}
        <Reveal className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
          <div className="absolute inset-0 rounded-full glow opacity-70" />
          <motion.svg
            aria-hidden
            viewBox="0 0 200 200"
            className="relative w-full text-brand"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <defs>
              <radialGradient id="globeFade" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="currentColor" stopOpacity="0.9" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
              <pattern
                id="globeDots"
                width="9"
                height="9"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.1" fill="url(#globeFade)" />
              </pattern>
              <clipPath id="globeClip">
                <circle cx="100" cy="100" r="92" />
              </clipPath>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.25"
            />
            <rect
              width="200"
              height="200"
              fill="url(#globeDots)"
              clipPath="url(#globeClip)"
            />
            {/* longitudes / latitudes */}
            <g
              clipPath="url(#globeClip)"
              stroke="currentColor"
              strokeOpacity="0.18"
              fill="none"
            >
              <ellipse cx="100" cy="100" rx="40" ry="92" />
              <ellipse cx="100" cy="100" rx="70" ry="92" />
              <line x1="8" y1="100" x2="192" y2="100" />
              <ellipse cx="100" cy="100" rx="92" ry="46" />
            </g>

            {/* Delivery arcs from home base to each region */}
            <g fill="none" stroke="var(--color-lime)" strokeWidth="1.1" strokeLinecap="round">
              {ARCS.map((d, i) => (
                <path
                  key={d}
                  d={d}
                  pathLength={1}
                  className="globe-arc"
                  style={{ animationDelay: `${i * 0.7}s` }}
                />
              ))}
            </g>
            {NODES.map((n, i) => (
              <g key={`${n.x}-${n.y}`}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="5"
                  fill="var(--color-lime)"
                  className="globe-ping"
                  style={{ animationDelay: `${i * 0.7}s` }}
                />
                <circle cx={n.x} cy={n.y} r={n.home ? 3.2 : 2.2} fill="var(--color-lime)" />
              </g>
            ))}
          </motion.svg>
          {/* Slow orbit ring */}
          <div
            aria-hidden
            className="globe-orbit pointer-events-none absolute inset-[-6%] rounded-full border border-dashed border-lime/25"
          />
        </Reveal>
      </div>
    </section>
  );
}
