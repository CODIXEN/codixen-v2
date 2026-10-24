import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { siFacebook } from "simple-icons";
import { SERVICES, INDUSTRIES, SOCIALS } from "@/lib/content";

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
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      // { label: "Client stories", href: "#stories" }, // hidden until real testimonials
      { label: "Process", href: "#process" },
      { label: "Tech stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="size-[1.125rem]" fill="currentColor">
        <path d={siFacebook.path} />
      </svg>
    );
  }
  // LinkedIn isn't in simple-icons; a plain "in" mark.
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-[1.125rem]" fill="currentColor">
      <rect x="3" y="9" width="4" height="12" rx="0.5" />
      <circle cx="5" cy="4.5" r="2.25" />
      <path d="M10 9h3.8v1.7c.6-1 1.9-2 3.9-2 3.2 0 4.3 2 4.3 5.1V21h-4v-6.4c0-1.6-.4-2.7-1.9-2.7-1.6 0-2.1 1.2-2.1 2.8V21h-4z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="theme-forest relative overflow-hidden">
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
            <ul className="mt-6 flex gap-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`CODIXEN on ${social.label} (opens in a new tab)`}
                    className="grid size-11 place-items-center rounded-xl border border-line-strong text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-forest"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-fg">
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
        <p className="scroll-rise translate-y-[22%] text-center font-display text-[24vw] font-bold leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_color-mix(in_oklab,var(--color-lime)_40%,transparent)] lg:text-[18rem]">
          codixen
        </p>
      </div>
    </footer>
  );
}
