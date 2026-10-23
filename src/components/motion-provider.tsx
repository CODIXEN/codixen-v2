"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";

const MAGNET_STRENGTH = 0.28;
const MAGNET_MAX = 10;

/**
 * App-wide motion setup:
 * - Framer animations honour the OS "reduce motion" setting.
 * - One delegated pointer listener drives two effects:
 *   `[data-spotlight]` cards get --spot-x/--spot-y for a cursor-following glow,
 *   `[data-magnetic]` buttons drift a few px toward the cursor.
 * Only runs for fine pointers (mouse/trackpad) with motion allowed.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches) return;

    let magnet: HTMLElement | null = null;
    let frame = 0;
    let last: PointerEvent | null = null;

    const release = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };

    const update = () => {
      frame = 0;
      const e = last;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const card = target?.closest<HTMLElement>("[data-spotlight]");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
        card.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
      }

      if (reduce.matches) return;
      const next = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (next !== magnet) release();
      if (!next) return;
      magnet = next;
      const r = next.getBoundingClientRect();
      const clamp = (v: number) => Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, v));
      const dx = clamp((e.clientX - (r.left + r.width / 2)) * MAGNET_STRENGTH);
      const dy = clamp((e.clientY - (r.top + r.height / 2)) * MAGNET_STRENGTH);
      next.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
      release();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
