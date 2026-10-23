"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animate";
import { BookCallButton } from "@/components/book-call-button";
import { PROJECTS, type Project } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

// One soft tint per card, cycled — forest text stays ≥ AA on every tint.
export const TINTS = ["#e6f5c4", "#d9f0e6", "#fbe9c9", "#dcecf8", "#f9dfd9", "#e6e1f8"];

function CaseCard({ project, index }: { project: Project; index: number }) {
  const host = project.url ? new URL(project.url).host.replace(/^www\./, "") : null;

  return (
    <motion.article
      // Slide only — a fading card would let the stacked one beneath show through.
      initial={{ y: 48 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      // Cards pin one after another; each sits a little lower than the last
      // so the earlier cards' category lines stay visible above it.
      style={{
        backgroundColor: TINTS[index % TINTS.length],
        top: `calc(6rem + ${index * 2.75}rem)`,
      }}
      className="grid gap-6 rounded-3xl p-5 text-forest shadow-[0_-12px_40px_-24px_rgba(12,26,18,0.35)] sm:p-7 md:sticky md:grid-cols-[1fr_1.05fr] md:gap-10 md:p-8"
    >
      <div className="flex flex-col">
        <p className="font-serif text-xl italic leading-none">{project.category}</p>
        <h3 className="heading-lg mt-4 text-[1.75rem] md:text-[2.25rem]">{project.name}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-[#3d4b43]">{project.summary}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 md:mt-auto md:pt-8">
          <div>
            <dt className="text-sm text-[#45534b]">Stack</dt>
            <dd className="mt-1 font-display text-lg font-semibold">
              {project.tags.slice(0, 2).join(" · ")}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#45534b]">Status</dt>
            <dd className="mt-1 flex items-center gap-2 font-display text-lg font-semibold">
              <span aria-hidden className="size-2 rounded-full bg-[#16a34a]" />
              Live
            </dd>
          </div>
        </dl>

        {project.url && host && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-forest text-lime">
              <Globe aria-hidden className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-semibold">Visit live site</span>
              <span className="block text-sm text-[#45534b]">{host}</span>
            </span>
            <ArrowUpRight
              aria-hidden
              className="ml-auto size-5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>

      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl md:aspect-auto md:min-h-[22rem]">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.category} project screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 40rem"
          className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.04]"
        />
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative bg-ink py-24 md:py-32">
      <div className="container-cdx">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Badge>Case studies</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-4 text-[2.25rem] text-balance sm:text-5xl md:text-[3.5rem]">
                Real projects, <span className="accent">live in production</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-fg-muted md:text-right">
              Commerce, fintech and media platforms we designed, built and
              shipped. Open any of them and click around.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-6 md:gap-10">
          {PROJECTS.map((project, i) => (
            <CaseCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <BookCallButton size="lg" variant="dark" className="group">
            Start a similar project
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
