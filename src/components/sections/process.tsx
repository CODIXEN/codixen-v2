"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BookCallButton } from "@/components/book-call-button";
import { PROCESS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Rail above the steps that fills as the section scrolls past. */
function ProgressRail({ target }: { target: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 75%", "end 70%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div aria-hidden className="relative mx-[16.66%] mt-14 hidden h-6 md:block">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-strong" />
      <motion.div
        style={{ scaleX: fill }}
        className="absolute inset-x-0 top-1/2 h-0.5 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-lime-2 to-lime"
      />
      {PROCESS.map((step, i) => (
        <RailNode
          key={step.step}
          progress={fill}
          at={i / (PROCESS.length - 1)}
        />
      ))}
    </div>
  );
}

function RailNode({
  progress,
  at,
}: {
  progress: ReturnType<typeof useSpring>;
  at: number;
}) {
  const lit = useTransform(progress, [Math.max(0, at - 0.02), at + 0.02], [0, 1]);
  const scale = useTransform(lit, [0, 1], [0.7, 1]);
  return (
    <span
      className="absolute top-1/2 grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-ink"
      style={{ left: `${at * 100}%` }}
    >
      <motion.span
        style={{ opacity: lit, scale }}
        className="size-3 rounded-full bg-lime shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-lime)_30%,transparent)]"
      />
    </span>
  );
}

export function Process() {
  const ref = React.useRef<HTMLElement>(null);
  return (
    <section ref={ref} id="process" className="relative py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A clear path from idea <span className="accent">to production</span>
            </>
          }
          description="Three clear steps from first conversation to production — transparent, low-risk, and fast."
        />

        <ProgressRail target={ref} />

        <div className="mt-14 grid gap-5 md:mt-8 md:grid-cols-3">
          {PROCESS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                data-spotlight
                className="group relative flex flex-col rounded-3xl border border-line bg-surface p-8 shadow-soft hover:-translate-y-1 hover:border-line-strong"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-xl bg-forest text-lime transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-rotate-6 group-hover:scale-110">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <span aria-hidden className="font-serif text-6xl italic leading-none text-line-strong transition-colors duration-300 group-hover:text-brand-2">
                    {step.step}
                  </span>
                </div>

                <span className="mt-6 inline-flex w-fit items-center rounded-md bg-lime/35 px-3 py-1 text-xs font-medium text-accent">
                  {step.tag}
                </span>
                <h3 className="heading-lg mt-3 text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <BookCallButton size="lg" variant="dark" className="group">
            Book your discovery call
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
