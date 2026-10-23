"use client";

import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

import { SERVICES } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="services" className="theme-forest grain relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40" />
      <div className="container-cdx">
        <SectionHeading
          eyebrow="What you can build with us"
          title={
            <>
              Full-stack capability,{" "}
              <span className="text-gradient">one partner</span>
            </>
          }
          description="From the first line of code to a scaled product, CODIXEN covers every layer of modern software."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: EASE, delay: (i % 3) * 0.06 }}
                data-spotlight
                className="group relative flex min-h-[15rem] flex-col bg-ink p-7 hover:bg-surface"
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-lime/15 text-brand transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-fg-subtle/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {service.bullets.map((b) => (
                      <span
                        key={b}
                        className="rounded-md border border-lime/20 bg-lime/[0.08] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-brand-2"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  {/* <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="size-4" />
                  </div> */}
                </div>

              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
