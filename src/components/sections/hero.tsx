"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { Counter } from "@/components/animate";
import { TINTS } from "@/components/sections/projects";
import { HERO_PROOF, PROJECTS, STATS } from "@/lib/content";

const LEAD = ["We", "build", "software", "that"];
const DECK = PROJECTS.slice(0, 3);
const EASE = [0.22, 1, 0.36, 1] as const;

/** Blueprint grid with lime diamonds at the crossings — same motif as the logo and stack grids. */
function CrosshairGrid() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_at_72%_40%,black_5%,transparent_62%)]"
    >
      <defs>
        <pattern id="hero-grid" width="96" height="96" patternUnits="userSpaceOnUse">
          {/* Lines and diamond sit mid-tile so the pattern never clips them. */}
          <path d="M48 0V96M0 48H96" fill="none" stroke="var(--color-line)" strokeWidth="1" />
          <rect x="43.5" y="43.5" width="9" height="9" transform="rotate(45 48 48)" fill="var(--color-lime-2)" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

/** Three pastel project cards that cycle front-to-back, echoing the case-study stack. */
function ProjectDeck() {
  const reduce = useReducedMotion();
  const [front, setFront] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => setFront((f) => (f + 1) % DECK.length), 3600);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  return (
    <div
      className="relative mx-auto aspect-[5/4] w-full max-w-[34rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {DECK.map((project, i) => {
        const rel = (i - front + DECK.length) % DECK.length; // 0 = front
        return (
          <motion.div
            key={project.name}
            aria-hidden={rel !== 0}
            initial={false}
            animate={{ y: rel * -26, scale: 1 - rel * 0.06, zIndex: DECK.length - rel }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ backgroundColor: TINTS[i % TINTS.length] }}
            className="absolute inset-x-0 bottom-0 flex h-[88%] origin-top flex-col rounded-2xl p-4 text-forest shadow-[0_24px_60px_-28px_rgba(12,26,18,0.45)] sm:p-5"
          >
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="font-serif text-lg italic leading-none">{project.category}</span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/80 px-2.5 py-1 text-xs font-semibold">
                <span className="size-1.5 rounded-full bg-[#16a34a]" />
                Live
              </span>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={rel === 0 ? `${project.name} — ${project.category}` : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 90vw, 34rem"
                className="object-cover"
              />
            </div>
            <p className="px-1 pt-3 font-display text-lg font-semibold tracking-tight">
              {project.name}
            </p>
          </motion.div>
        );
      })}

      {/* Floating proof cards */}
      <div
        className="animate-rise absolute -left-6 bottom-10 z-10 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-soft sm:flex lg:-left-12"
        style={{ animationDelay: "0.9s" }}
      >
        <span className="heading-lg text-3xl">
          <Counter value={STATS[0].value} suffix={STATS[0].suffix} />
        </span>
        <span className="max-w-[6.5rem] text-sm leading-tight text-fg-muted">
          {STATS[0].label.toLowerCase()}
        </span>
      </div>
      <div
        className="animate-rise absolute -right-4 top-2 z-10 hidden items-center gap-2.5 rounded-xl border border-line bg-surface py-2 pl-2 pr-4 shadow-soft sm:flex lg:-right-8"
        style={{ animationDelay: "1.05s" }}
      >
        <span className="grid size-8 place-items-center rounded-lg bg-forest text-lime">
          <Clock3 aria-hidden className="size-4" />
        </span>
        <span className="text-sm font-semibold">Kick-off in 1–2 weeks</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pb-20 pt-32 md:pb-28 md:pt-40">
      <CrosshairGrid />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 -z-10 size-[36rem] rounded-full bg-lime/25 blur-3xl"
      />

      <div className="container-cdx grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <span
            className="eyebrow animate-rise"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inset-0 rounded-full bg-brand-2" />
              <span className="relative size-2 rounded-full bg-brand-2" />
            </span>
            Founder-led software studio
          </span>

          <h1 className="heading-xl mt-6 text-[2.9rem] text-balance sm:text-6xl lg:text-[4.75rem]">
            <span className="sr-only">We build software that actually ships</span>
            <span aria-hidden>
              {LEAD.map((word, i) => (
                <React.Fragment key={word}>
                  <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                    <span
                      className="animate-word inline-block"
                      style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                    >
                      {word}
                    </span>
                  </span>{" "}
                </React.Fragment>
              ))}
              <span className="inline-block overflow-hidden pb-[0.14em] pr-[0.06em] align-bottom">
                <span
                  className="animate-word accent inline-block text-[1.08em]"
                  style={{ animationDelay: "0.44s" }}
                >
                  actually ships
                </span>
              </span>
            </span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-fg-muted text-pretty md:text-xl"
            style={{ animationDelay: "0.6s" }}
          >
            Custom web apps, SaaS platforms and AI-powered products — engineered
            by a senior team and shipped to production in weeks, not quarters.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.72s" }}
          >
            <BookCallButton size="lg" variant="dark" className="group">
              Book a discovery call
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </BookCallButton>
            <ButtonLink href="#work" size="lg" variant="outline">
              See our work
            </ButtonLink>
          </div>

          <ul
            className="animate-rise mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted"
            style={{ animationDelay: "0.84s" }}
          >
            {HERO_PROOF.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-lime/50 text-accent">
                  <Check aria-hidden className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise" style={{ animationDelay: "0.5s" }}>
          <ProjectDeck />
        </div>
      </div>
    </section>
  );
}
