import { Code, Globe, AtSign, ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { SERVICES, INDUSTRIES } from "@/lib/content";

const COLUMNS = [
  {
    title: "Capabilities",
    links: SERVICES.slice(0, 6).map((s) => s.title),
  },
  {
    title: "Industries",
    links: INDUSTRIES.slice(0, 6).map((i) => i.name),
  },
  {
    title: "Company",
    links: ["About", "Work", "Client stories", "Process", "Careers"],
  },
] as const;

export function Footer() {
  return (
    <footer className="theme-forest grain relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-forest-2 to-transparent" />
      <div className="container-cdx py-16">
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
            <div className="mt-6 flex gap-2">
              {[
                { icon: AtSign, label: "X" },
                { icon: Globe, label: "LinkedIn" },
                { icon: Code, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl border border-line-strong text-fg-subtle transition-colors hover:border-brand/50 hover:text-fg"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link}
                      <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-fg-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} CODIXEN. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered with care, delivered worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
