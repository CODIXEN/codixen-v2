"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { SEGMENTS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Segments() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Who we build for"
          title={
            <>
              From first commit to{" "}
              <span className="text-gradient">enterprise scale</span>
            </>
          }
          description="However far along you are, we meet you where you are — and build for where you're going."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, ease: EASE, delay: (i % 4) * 0.07 }}
              className="group relative flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-[0_4px_16px_-8px_rgba(13,43,34,0.06)] transition-colors duration-300 hover:border-line-strong"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-brand-2">
                {seg.tier}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {seg.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
