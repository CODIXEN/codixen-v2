import {
  ShoppingBag,
  Cpu,
  Landmark,
  Factory,
  Code2,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import { Counter } from "@/components/animate";
import { PROJECTS, STATS } from "@/lib/content";

// A glyph per client so the typeset names read as a logo wall.
const GLYPHS: Record<string, LucideIcon> = {
  Nagadhat: ShoppingBag,
  "System Builder": Cpu,
  "Easy Loan": Landmark,
  "Rupali Steel": Factory,
  "Global Fast Coder": Code2,
  "Daily Bangladesh Mirror": Newspaper,
};

const NAMES = PROJECTS.map((p) => p.name);

// Four rows, each the same clients in a different order, alternating direction.
const ROWS = [0, 3, 1, 4].map((shift, i) => ({
  names: [...NAMES.slice(shift), ...NAMES.slice(0, shift)],
  reverse: i % 2 === 1,
  duration: [46, 54, 42, 58][i],
}));

function Wordmark({ name }: { name: string }) {
  const Icon = GLYPHS[name] ?? ShoppingBag;
  return (
    <li className="flex h-[4.5rem] min-w-48 shrink-0 items-center justify-center gap-2 border-r border-line/70 px-8 text-fg-subtle transition-colors duration-300 hover:text-fg">
      <Icon aria-hidden className="size-5 shrink-0" strokeWidth={2.25} />
      <span className="whitespace-nowrap font-display text-[1.05rem] font-semibold tracking-tight">
        {name}
      </span>
    </li>
  );
}

export function Clients() {
  return (
    <section
      aria-labelledby="clients-title"
      className="relative border-y border-line bg-[#fafbf9] py-20 md:py-24"
    >
      <div className="container-cdx">
        <h2
          id="clients-title"
          className="text-center font-display text-xl font-bold tracking-tight text-balance md:text-2xl"
        >
          Trusted by growing teams across commerce, finance and media
        </h2>
        <ul className="sr-only">
          {NAMES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

      {/* Logo wall: scrolling rows inside a faint grid, faded at the edges */}
      <div
        aria-hidden
        className="logo-wall mx-auto mt-10 max-w-5xl"
      >
        {ROWS.map((row, i) => (
          <div
            key={i}
            className={`logo-row overflow-hidden border-b border-line/70 ${i === 0 ? "border-t" : ""}`}
          >
            <div
              className="marquee-track"
              style={{
                animationDuration: `${row.duration}s`,
                animationDirection: row.reverse ? "reverse" : "normal",
              }}
            >
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex shrink-0">
                  {row.names.map((name) => (
                    <Wordmark key={`${copy}-${name}`} name={name} />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="container-cdx">
        <dl className="mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}
            >
              <dt className="order-2 mt-1 text-sm text-fg-muted">{stat.label}</dt>
              <dd className="heading-lg order-1 text-5xl md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
