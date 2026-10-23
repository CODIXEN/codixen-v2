"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TECH_STACK, type TechCategory, type TechItem } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

// "All" leads the tabs: every technology once, in category order.
const CATEGORIES: TechCategory[] = [
  {
    label: "All",
    description: "",
    items: TECH_STACK.flatMap((c) => c.items).filter(
      (item, i, all) => all.findIndex((x) => x.name === item.name) === i
    ),
  },
  ...TECH_STACK,
];

function TechIcon({ item }: { item: TechItem }) {
  if (!item.icon) {
    return (
      <Cloud
        aria-hidden
        className="size-10"
        style={{ color: item.color }}
        strokeWidth={2}
      />
    );
  }
  return (
    <svg
      aria-hidden
      role="img"
      viewBox="0 0 24 24"
      className="size-10"
      fill={`#${item.icon.hex}`}
    >
      <path d={item.icon.path} />
    </svg>
  );
}

export function TechStack() {
  const [active, setActive] = React.useState(0);
  const tabs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const category = CATEGORIES[active];

  // Roving focus between tabs with arrow keys / Home / End.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = CATEGORIES.length - 1;
    const next =
      e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="stack" className="relative bg-ink py-24 md:py-32">
      <div className="container-cdx">
        <SectionHeading
          eyebrow="Our tech stack"
          title={
            <>
              The technology behind <span className="accent">production-grade</span> software
            </>
          }
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Technology categories"
          className="no-scrollbar mx-auto mt-10 flex max-w-full gap-1 overflow-x-auto sm:justify-center"
        >
          {CATEGORIES.map((cat, i) => {
            const selected = i === active;
            return (
              <button
                key={cat.label}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tech-tab-${i}`}
                aria-selected={selected}
                aria-controls="tech-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "relative shrink-0 cursor-pointer whitespace-nowrap px-4 py-3 text-[0.9375rem] font-medium transition-colors",
                  selected ? "text-accent" : "text-fg-muted hover:text-fg"
                )}
              >
                {cat.label}
                {selected && (
                  <motion.span
                    layoutId="tech-tab-underline"
                    aria-hidden
                    className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-brand-2"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Logo grid with crosshair dividers */}
        <div
          id="tech-panel"
          role="tabpanel"
          aria-labelledby={`tech-tab-${active}`}
          className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={category.label}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, transition: { duration: 0.15 } },
                show: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
            >
              {category.items.map((item) => (
                <motion.li
                  key={`${category.label}-${item.name}`}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                  }}
                  className="group relative flex h-40 flex-col items-center justify-center gap-4 border-b border-r border-line"
                >
                  <span
                    aria-hidden
                    className="absolute -bottom-[5px] -right-[5px] z-10 size-[9px] rotate-45 bg-lime-2/70"
                  />
                  <span className="transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-translate-y-1 group-hover:scale-110">
                    <TechIcon item={item} />
                  </span>
                  <span className="text-[0.9375rem] font-semibold">{item.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
