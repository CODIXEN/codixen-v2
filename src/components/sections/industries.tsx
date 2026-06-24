"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { INDUSTRIES } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Industries() {
  return (
    <section
      id="industries"
      className="theme-forest grain relative py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Deep vertical knowledge,{" "}
              <span className="text-gradient">purpose-built</span>
            </>
          }
          description="We've shipped software across regulated, high-stakes, and fast-moving industries."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: EASE, delay: (i % 3) * 0.06 }}
                className="group flex flex-col bg-ink p-7 transition-colors duration-300 hover:bg-surface"
              >
                <div className="grid size-10 place-items-center rounded-lg bg-lime/15 text-brand transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight transition-colors group-hover:text-brand">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
