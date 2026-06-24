"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BookCallButton } from "@/components/book-call-button";
import { PROCESS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="How to work with us"
          title={
            <>
              A structured path to{" "}
              <span className="text-gradient">deployment</span>
            </>
          }
          description="Three clear steps from first conversation to production — transparent, low-risk, and fast."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PROCESS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-3xl border border-line bg-surface p-8 shadow-[0_4px_16px_-8px_rgba(13,43,34,0.06)] transition-colors duration-300 hover:border-line-strong"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-xl bg-lime/30 text-forest transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-display text-5xl font-semibold italic leading-none text-line-strong transition-colors duration-300 group-hover:text-brand-2">
                    {step.step}
                  </span>
                </div>

                <span className="mt-6 inline-flex w-fit items-center rounded-md border border-lime/25 bg-lime/[0.12] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-brand-2">
                  {step.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <BookCallButton size="lg">
            Book your discovery call
            <ArrowRight className="size-4" />
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
