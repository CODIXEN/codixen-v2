"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { BookCallButton } from "@/components/book-call-button";
import { WHY_BELIEF, WHY_POINTS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function WhyChoose() {
  return (
    <section
      id="why"
      className="theme-forest grain relative py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Why CODIXEN"
          title={
            <>
              Operational,{" "}
              <span className="text-gradient">not aspirational</span>
            </>
          }
          description="The difference between an agency and a partner is whether they'd ship it themselves."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          {/* Featured belief card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface/50 p-8 md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full glow opacity-60" />
            <Badge>{WHY_BELIEF.eyebrow}</Badge>
            <div className="relative mt-auto">
              <h3 className="max-w-md font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-balance md:text-4xl">
                {WHY_BELIEF.title}
              </h3>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted">
                {WHY_BELIEF.body}
              </p>
              <BookCallButton size="lg" className="mt-8">
                Start your project
                <ArrowRight className="size-4" />
              </BookCallButton>
            </div>
          </motion.div>

          {/* Secondary points */}
          <div className="grid gap-5">
            {WHY_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
                data-spotlight
                className="rounded-3xl border border-line bg-surface/40 p-7 hover:bg-surface md:p-8"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight text-brand">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
