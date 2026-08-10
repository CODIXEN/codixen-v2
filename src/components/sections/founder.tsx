"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BookCallButton } from "@/components/book-call-button";
import { FOUNDER } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Founder() {
  return (
    <section id="founder" className="relative py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Meet the founder"
          title={
            <>
              Work directly with the{" "}
              <span className="text-gradient-brand">engineer who builds it</span>
            </>
          }
          description="No handoffs, no account managers — just a senior developer who owns your product from first call to launch."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-brand/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/50">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={600}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-14">
                <p className="flex items-center gap-1.5 font-display text-lg font-semibold tracking-tight text-white">
                  {FOUNDER.name}
                  <BadgeCheck className="size-4 text-brand" />
                </p>
                <p className="text-sm text-fg-muted">{FOUNDER.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <div className="space-y-4">
              {FOUNDER.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-fg-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {FOUNDER.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-line bg-surface/50 p-4 text-center"
                >
                  <div className="font-display text-3xl font-semibold italic text-brand">
                    {h.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-fg-subtle">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                Core stack
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {FOUNDER.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line-strong bg-ink-2/60 px-2.5 py-1 font-mono text-[0.7rem] text-fg-subtle"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <BookCallButton>
                Book a call with me
                <ArrowUpRight className="size-4" />
              </BookCallButton>
              {FOUNDER.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-brand/50 hover:text-fg"
                >
                  {social.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
