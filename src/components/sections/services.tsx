"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BookCallButton } from "@/components/book-call-button";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function ServicePanel({ index }: { index: number }) {
  const service = SERVICES[index];
  const Icon = service.icon;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="flex h-full flex-col"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-sm text-fg-subtle">
              {String(index + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
            </p>
            <h3 className="heading-lg mt-2 text-3xl">{service.title}</h3>
          </div>
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-forest text-lime">
            <Icon aria-hidden className="size-7" />
          </span>
        </div>
        <p className="mt-4 max-w-md leading-relaxed text-fg-muted">
          {service.description}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 font-medium">
              <span className="grid size-5 place-items-center rounded-full bg-lime/40 text-accent">
                <Check aria-hidden className="size-3.5" />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10">
          <BookCallButton variant="dark" className="group">
            Discuss your project
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </BookCallButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Services() {
  const [active, setActive] = React.useState(0);

  return (
    <section id="services" className="relative bg-ink-2 py-24 md:py-32">
      <div className="container-cdx">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title={
              <>
                Engineering services for <span className="accent">every stage</span>
              </>
            }
          />
          <p className="max-w-md text-fg-muted lg:pb-2 lg:text-right">
            From first prototype to multi-tenant scale — one senior team covers
            product, engineering and growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          {/* Numbered list (accordion on mobile) */}
          <ul className="border-t border-line-strong">
            {SERVICES.map((service, i) => {
              const isActive = active === i;
              return (
                <li key={service.title} className="border-b border-line-strong">
                  <button
                    type="button"
                    id={`svc-${i}`}
                    aria-expanded={isActive}
                    aria-controls={`svc-panel-${i}`}
                    onClick={() => setActive(i)}
                    className="group flex w-full cursor-pointer items-baseline gap-4 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "font-mono text-sm transition-colors",
                        isActive ? "text-accent" : "text-fg-subtle"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "heading-lg text-2xl transition-[color,translate] duration-300 md:text-[1.75rem]",
                        isActive ? "translate-x-1 text-accent" : "text-fg group-hover:translate-x-1"
                      )}
                    >
                      {service.title}
                    </span>
                    <ArrowRight
                      aria-hidden
                      className={cn(
                        "ml-auto size-5 shrink-0 self-center transition-all duration-300",
                        isActive ? "translate-x-0 text-accent opacity-100" : "-translate-x-2 opacity-0"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`svc-panel-${i}`}
                        role="region"
                        aria-labelledby={`svc-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-9 leading-relaxed text-fg-muted">
                          {service.description}
                        </p>
                        <ul className="flex flex-wrap gap-2 pb-6 pl-9 lg:hidden">
                          {service.bullets.map((b) => (
                            <li
                              key={b}
                              className="rounded-md border border-line-strong bg-surface px-3 py-1 text-sm"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Detail panel (desktop) */}
          <div className="relative hidden overflow-hidden rounded-3xl border border-line bg-surface p-10 shadow-soft lg:block">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-lime/30 blur-3xl"
            />
            <div className="relative h-full">
              <ServicePanel index={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
