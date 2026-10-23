"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAL_LINK, CAL_NAMESPACE, FOUNDER } from "@/lib/content";

const INITIALS = FOUNDER.name
  .split(" ")
  .filter(Boolean)
  .slice(-2)
  .map((p) => p[0])
  .join("")
  .toUpperCase();

/** Sticky "Discuss your project" pill — shown past the hero, hidden at the contact section. */
export function FloatingCTA() {
  const [pastHero, setPastHero] = React.useState(false);
  const [atContact, setAtContact] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = ["#contact", "footer"]
      .map((s) => document.querySelector(s))
      .filter((el): el is Element => el !== null);
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setAtContact(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = pastHero && !atContact;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 24, x: "-50%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-1/2 z-40"
        >
          <button
            type="button"
            data-cal-namespace={CAL_NAMESPACE}
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-line-strong bg-white/95 py-1.5 pl-1.5 pr-5 text-[0.9375rem] font-semibold text-forest shadow-[0_18px_40px_-16px_rgba(12,26,18,0.45)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative grid size-9 place-items-center rounded-full bg-forest font-display text-sm text-lime">
              {INITIALS}
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white bg-[#22c55e]" />
            </span>
            Discuss your project
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
