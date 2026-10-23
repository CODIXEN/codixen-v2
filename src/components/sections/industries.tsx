"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { INDUSTRIES } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Industries() {
  return (
    <section id="industries" className="relative bg-ink-2 py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Solving real problems <span className="accent">across industries</span>
            </>
          }
          description={`Domain-aware engineering for regulated, high-stakes and fast-moving markets — ${INDUSTRIES.length} industries and counting.`}
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.li
                key={industry.name}
                data-spotlight
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: EASE, delay: (i % 3) * 0.06 }}
                className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-6 hover:-translate-y-1 hover:border-line-strong hover:shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-lime/35 text-accent transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-rotate-6 group-hover:scale-110">
                  <Icon aria-hidden className="size-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold tracking-tight">
                    {industry.name}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-fg-muted">
                    {industry.description}
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
