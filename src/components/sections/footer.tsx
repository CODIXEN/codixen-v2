import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { SERVICES, INDUSTRIES } from "@/lib/content";

const COLUMNS = [
  {
    title: "Capabilities",
    links: SERVICES.slice(0, 6).map((s) => ({ label: s.title, href: "#services" })),
  },
  {
    title: "Industries",
    links: INDUSTRIES.slice(0, 6).map((i) => ({ label: i.name, href: "#industries" })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      // { label: "Client stories", href: "#stories" }, // hidden until real testimonials
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="theme-forest grain relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-forest-2 to-transparent" />
      <div className="container-cdx pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              A product engineering studio building web apps, SaaS platforms,
              and AI systems for teams that ship. Global delivery, senior-only.
            </p>
            <a
              href="mailto:hello@codixen.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <Mail className="size-4 text-brand" />
              hello@codixen.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-fg-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} CODIXEN. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered with care, delivered worldwide.
          </p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="scroll-rise translate-y-[18%] text-center font-display text-[24vw] font-semibold italic leading-[0.8] tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_color-mix(in_oklab,var(--color-lime)_45%,transparent)] lg:text-[17rem]">
          codixen
        </p>
      </div>
    </footer>
  );
}
