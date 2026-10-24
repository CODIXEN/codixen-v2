"use client";

import { motion } from "framer-motion";
import { MapPin, UserRoundCheck, Layers, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animate";
import { Globe } from "@/components/globe";
import { REGIONS, SEGMENTS, WHY_BELIEF, WHY_POINTS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;
const POINT_ICONS = [UserRoundCheck, Layers, Zap];

export function About() {
  return (
    <section id="about" className="relative bg-ink-2 py-24 md:py-32">
      <div className="container-cdx">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Story + points */}
          <div>
            <Reveal>
              <Badge>Why CODIXEN</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-4 text-[2.25rem] text-balance sm:text-5xl md:text-[3.5rem]">
                We engineer like owners, <span className="accent">not like a vendor</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
                {WHY_BELIEF.body}
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {WHY_POINTS.map((point, i) => {
                const Icon = POINT_ICONS[i % POINT_ICONS.length];
                return (
                  <motion.li
                    key={point.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
                    className="border-t-2 border-forest pt-5"
                  >
                    <Icon aria-hidden className="size-6 text-accent" />
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {point.description}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Globe card */}
          <Reveal className="theme-forest relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-50" />
            <p className="relative text-sm text-fg-muted">Remote-first studio</p>
            <p className="heading-lg relative mt-1 text-3xl">
              Shipping across <span className="accent">time zones</span>
            </p>
            <div className="relative my-8">
              <Globe />
            </div>
            <ul className="relative flex flex-wrap gap-2">
              {REGIONS.map((region) => (
                <li
                  key={region}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-surface/60 px-3 py-1.5 text-sm text-fg-muted"
                >
                  <MapPin aria-hidden className="size-3.5 text-lime" />
                  {region}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Who we build for */}
        <div className="mt-20 md:mt-28">
          <h3 className="heading-lg text-2xl md:text-3xl">
            Who we <span className="accent">build for</span>
          </h3>
          <ul className="mt-8 grid overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 [&>li]:bg-surface gap-px">
            {SEGMENTS.map((seg, i) => (
              <motion.li
                key={seg.title}
                data-spotlight
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                className="flex flex-col p-7"
              >
                <span className="w-fit rounded-md bg-lime/35 px-3 py-1 text-xs font-medium text-accent">
                  {seg.tier}
                </span>
                <span className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {seg.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {seg.description}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
