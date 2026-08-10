"use client";

import Image from "next/image";
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url ?? "#"}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 transition-colors duration-300 hover:border-line-strong hover:bg-surface"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink-2">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover action */}
                <div className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-lime text-forest opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-2">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs tracking-widest text-fg-subtle/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {project.summary}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line-strong bg-ink-2/60 px-2.5 py-1 font-mono text-[0.7rem] text-fg-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
