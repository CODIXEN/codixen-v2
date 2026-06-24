"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden px-0 pb-28 pt-36 md:pb-40 md:pt-44"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-50 mask-fade-b" />
        <div className="absolute left-1/2 top-[6%] size-[40rem] -translate-x-1/2 rounded-full glow animate-float-slow" />
      </div>

      {/* Skyline silhouette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 text-forest"
      >
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="xMidYMax slice"
          className="h-[180px] w-full opacity-[0.07] sm:h-[240px]"
          fill="currentColor"
        >
          <path d="M0 220V120h40v-30h26v30h20V96h34v54h28v-78h22v78h26V70h18v80h30v-40h26v40h24V52h20v98h28V108h30v42h26V84h22v66h30V64h18v86h28V98h26v52h24V72h22v78h28V40h20v110h30V96h26v54h24V120h28v100z" />
          <rect x="470" y="44" width="6" height="106" />
          <rect x="958" y="36" width="6" height="114" />
          <path d="M1100 220V100h34v-34h22v34h24V128h30v22h26V84h22v66h30V60h18v90h28V104h26v46h24V124h28v96z" />
        </svg>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-cdx flex flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-[2.75rem] font-medium leading-[1.06] tracking-[-0.03em] text-balance sm:text-6xl md:text-[5rem]"
        >
          We build software that{" "}
          <span className="text-gradient">actually ships</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-fg-muted text-pretty md:text-xl"
        >
          Custom web apps, SaaS platforms, and AI-powered products — built by a
          senior team that runs its own products in production. We know the
          difference between a demo and a deployment.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <BookCallButton size="lg">
            Book a discovery call
            <ArrowRight className="size-4" />
          </BookCallButton>
          <a href="#work">
            <Button size="lg" variant="secondary">
              <Play className="size-4" />
              Explore our work
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
