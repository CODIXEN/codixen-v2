"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CLIENT_STORIES } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ClientStories() {
  const [[index, dir], setState] = React.useState<[number, number]>([0, 0]);
  const count = CLIENT_STORIES.length;
  const story = CLIENT_STORIES[index];

  const paginate = (d: number) =>
    setState(([i]) => [(i + d + count) % count, d]);

  return (
    <section
      id="stories"
      className="theme-forest grain relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Client stories"
          title={
            <>
              Real teams,{" "}
              <span className="text-gradient">real results</span>
            </>
          }
          description="The teams we've partnered with, in their own words."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[24rem] sm:min-h-[22rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex flex-col items-center text-center"
              >
                <span className="grid size-20 place-items-center rounded-full bg-lime font-display text-2xl font-bold italic text-forest">
                  {story.initials}
                </span>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-md border border-lime/25 bg-lime/[0.08] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-brand-2">
                    {story.industry}
                  </span>
                  <span className="rounded-md border border-line-strong px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-fg-subtle">
                    {story.service}
                  </span>
                </div>

                <blockquote className="mt-7 max-w-2xl font-display text-xl leading-relaxed text-fg text-pretty sm:text-2xl sm:leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7">
                  <div className="font-medium text-fg">{story.author}</div>
                  <div className="text-sm text-fg-subtle">{story.role}</div>
                </figcaption>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold italic text-brand">
                    {story.metric}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-fg-subtle">
                    {story.metricLabel}
                  </span>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous story"
              className="grid size-11 place-items-center rounded-full border border-line-strong text-fg-muted transition-colors hover:border-brand/60 hover:text-brand"
            >
              <ArrowLeft className="size-4" />
            </button>

            <div className="flex items-center gap-2">
              {CLIENT_STORIES.map((s, i) => (
                <button
                  key={s.company}
                  type="button"
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  aria-label={`Go to ${s.company} story`}
                  aria-current={i === index}
                  className={
                    i === index
                      ? "h-2 w-6 rounded-full bg-lime transition-all duration-300"
                      : "h-2 w-2 rounded-full bg-line-strong transition-all duration-300 hover:bg-fg-subtle"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next story"
              className="grid size-11 place-items-center rounded-full border border-line-strong text-fg-muted transition-colors hover:border-brand/60 hover:text-brand"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
