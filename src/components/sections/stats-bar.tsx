"use client";

import { Counter } from "@/components/animate";
import { STATS } from "@/lib/content";

export function StatsBar() {
  return (
    <section className="relative border-y border-line bg-surface/40">
      <div className="container-cdx">
        <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-6 sm:gap-x-12 md:justify-between md:py-7">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              <div className="flex flex-col items-center text-center md:flex-row md:items-baseline md:gap-2 md:text-left">
                <dt className="font-display text-2xl font-semibold tracking-tight text-fg md:text-[1.75rem]">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </dt>
                <dd className="mt-0.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-subtle md:mt-0">
                  {stat.label}
                </dd>
              </div>
              {i < STATS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden size-1.5 shrink-0 rounded-full bg-lime md:block"
                />
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
