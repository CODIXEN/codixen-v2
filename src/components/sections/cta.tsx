"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-cdx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="theme-forest grain beam-border relative overflow-hidden rounded-[2rem] border border-line px-6 py-16 text-center md:px-16 md:py-24"
        >
          {/* background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-dots opacity-50 mask-fade-b" />
            <div className="absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow animate-float-slow" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-[2.25rem] font-medium leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl">
              Ready to ship{" "}
              <span className="text-gradient">production-grade software?</span>
            </h2>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookCallButton size="lg" className="group">
                <Calendar className="size-4" />
                Book a discovery call
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </BookCallButton>
              <ButtonLink
                href="mailto:hello@codixen.com"
                size="lg"
                variant="secondary"
              >
                <Mail className="size-4" />
                hello@codixen.com
              </ButtonLink>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
              Free · 30 minutes · No prep required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
