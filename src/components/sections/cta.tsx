"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { HERO_PROOF } from "@/lib/content";

export function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container-cdx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="theme-forest beam-border relative overflow-hidden rounded-3xl px-6 py-16 md:px-16 md:py-20"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
            <div className="absolute -right-24 -top-32 size-[30rem] rounded-full glow animate-float-slow" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="heading-xl text-[2.5rem] text-balance sm:text-6xl md:text-[4.25rem]">
                Have a project in mind?{" "}
                <span className="accent text-lime">Let&rsquo;s build it.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-fg-muted">
                Tell us what you&rsquo;re building. In 30 minutes you&rsquo;ll
                know the approach, timeline and what it takes to ship.
              </p>
            </div>

            <div className="rounded-3xl border border-line-strong bg-surface/60 p-6 backdrop-blur md:p-8">
              <ul className="space-y-3">
                {HERO_PROOF.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-fg">
                    <span className="grid size-6 place-items-center rounded-full bg-lime text-forest">
                      <Check aria-hidden className="size-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <BookCallButton size="lg" className="group w-full">
                  Book a discovery call
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </BookCallButton>
                <ButtonLink
                  href="mailto:hello@codixen.com"
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  <Mail />
                  hello@codixen.com
                </ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
