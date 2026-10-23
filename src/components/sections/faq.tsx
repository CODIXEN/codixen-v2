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
    <section id="faq" className="relative bg-ink-2 py-24 md:py-32">
      <div className="container-cdx grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="accent">answered</span>
              </>
            }
            description="Everything you need to know about working with CODIXEN."
          />

          <Reveal className="mt-8 rounded-3xl border border-line bg-surface p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-forest font-display text-base font-semibold text-lime">
                {FOUNDER_INITIALS}
              </span>
              <div>
                <div className="font-semibold text-fg">{FOUNDER.name}</div>
                <div className="text-sm text-fg-subtle">{FOUNDER.role}</div>
              </div>
            </div>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">
              &ldquo;Every inquiry gets a real answer from a founder — not a
              sales script. Ask me anything.&rdquo;
            </p>
            <BookCallButton size="sm" variant="dark" className="mt-5 w-full">
              Talk to a founder
            </BookCallButton>
          </Reveal>
        </div>

        <Reveal>
          <ul className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={faq.question}
                  className={cn(
                    "rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-300",
                    isOpen ? "border-line-strong shadow-soft" : "border-line"
                  )}
                >
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                  >
                    <span className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-lg transition-all duration-300",
                        isOpen ? "bg-forest text-lime" : "bg-surface-2 text-fg"
                      )}
                    >
                      <Plus
                        aria-hidden
                        className={cn("size-4 transition-transform duration-300", isOpen && "rotate-45")}
                      />
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
                        <p className="px-6 pb-6 leading-relaxed text-fg-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
