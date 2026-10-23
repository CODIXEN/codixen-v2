"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/animate";
import { BookCallButton } from "@/components/book-call-button";
import { FAQS, FOUNDER } from "@/lib/content";
import { cn } from "@/lib/utils";

const FOUNDER_INITIALS = FOUNDER.name
  .split(" ")
  .filter(Boolean)
  .slice(-2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);


  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-cdx grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Have a{" "}
                <span className="text-gradient">question?</span>
              </>
            }
            description="Everything you need to know about working with CODIXEN."
          />

          <Reveal className="mt-8 rounded-3xl border border-line bg-surface/50 p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-lime font-display text-base font-bold italic text-forest">
                {FOUNDER_INITIALS}
              </span>
              <div>
                <div className="font-medium text-fg">{FOUNDER.name}</div>
                <div className="text-sm text-fg-subtle">{FOUNDER.role}</div>
              </div>

            </div>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              &ldquo;I personally make sure every inquiry gets a real answer —
              not a sales script. Ask me anything.&rdquo;
            </p>
            <BookCallButton size="sm" className="mt-5 w-full">
              Talk to a founder
            </BookCallButton>
          </Reveal>
        </div>

        <Reveal className="divide-y divide-line rounded-3xl border border-line bg-surface/40">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                >
                  <span className="font-display text-base font-medium transition-colors group-hover:text-brand-2 md:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-full border border-line-strong text-fg-muted transition-all duration-300",
                      isOpen && "rotate-45 border-brand/60 bg-brand/10 text-brand-2"
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-fg-muted md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
