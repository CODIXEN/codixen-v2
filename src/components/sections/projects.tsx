"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Shipped evidence"
          title={
            <>
              Featured work, with{" "}
              <span className="text-gradient">real results</span>
            </>
          }
          description="Products we've designed, built, and scaled in production — each with the outcome that mattered most."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 2) * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-line bg-surface/40 p-8 transition-colors duration-300 hover:border-line-strong hover:bg-surface md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-2">
                  {project.category}
                </span>
                <span className="font-mono text-xs tracking-widest text-fg-subtle/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
                {project.summary}
              </p>

              <div className="mt-7 flex items-baseline gap-2.5">
                <span className="font-display text-5xl font-semibold italic text-brand">
                  {project.metric}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {project.metricLabel}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-1.5 border-t border-line pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line-strong bg-ink-2/60 px-2.5 py-1 font-mono text-[0.7rem] text-fg-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View case study
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
