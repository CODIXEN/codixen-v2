"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animate";
import { REGIONS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

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
                className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface/50 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-muted"
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
          </motion.svg>
        </Reveal>
      </div>
    </section>
  );
}
