"use client";

import { motion } from "framer-motion";
import { Globe, AtSign } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TEAM } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Team() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="The people"
          title={
            <>
              Senior minds behind{" "}
              <span className="text-gradient-brand">every build</span>
            </>
          }
          description="A small, senior team that pairs deep technical craft with real product instinct."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface/50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="pointer-events-none absolute -top-20 left-1/2 size-48 -translate-x-1/2 rounded-full bg-brand/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative mx-auto grid size-20 place-items-center rounded-2xl bg-lime font-display text-2xl font-bold italic text-forest">
                {member.initials}
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight">
                {member.name}
              </h3>
              <p className="relative mt-1 text-sm font-medium text-brand-2">
                {member.role}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-fg-muted">
                {member.bio}
              </p>

              <div className="relative mt-5 flex items-center justify-center gap-2">
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="grid size-9 place-items-center rounded-lg border border-line-strong text-fg-subtle transition-colors hover:border-brand/50 hover:text-fg"
                >
                  <Globe className="size-4" />
                </a>
                <a
                  href="#"
                  aria-label={`${member.name} on X`}
                  className="grid size-9 place-items-center rounded-lg border border-line-strong text-fg-subtle transition-colors hover:border-brand/50 hover:text-fg"
                >
                  <AtSign className="size-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
