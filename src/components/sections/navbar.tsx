"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

const MENU_ID = "mobile-menu";
const NAV_HREFS = new Set<string>(NAV_LINKS.map((l) => l.href));

/**
 * Tracks which nav section is in the middle of the viewport. Every page
 * section is observed, so scrolling into one without a nav link clears the
 * highlight instead of leaving a stale one.
 */
function useActiveSection() {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "main > section, footer"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const href = `#${(entry.target as HTMLElement).id}`;
          setActive(NAV_HREFS.has(href) ? href : null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Transparent over the light hero; a solid white bar once the page scrolls
  // (or the mobile menu opens).
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "animate-nav-in fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        solid
          ? "glass border-b border-line shadow-[0_8px_30px_-20px_rgba(12,26,18,0.25)]"
          : "border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-cdx flex h-[4.5rem] items-center justify-between gap-6"
      >
        <a href="#top" aria-label="CODIXEN home" className="shrink-0 rounded-md">
          <Logo priority />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden
                    className="absolute inset-x-3 -bottom-[0.95rem] h-0.5 rounded-full bg-brand-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative block rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors hover:text-fg",
                    isActive ? "text-fg" : "text-fg-muted"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="#contact" variant="outline" size="sm" className="h-10 px-5">
            Contact us
          </ButtonLink>
          <BookCallButton size="sm" className="group h-10 px-5">
            Book a call
            <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </BookCallButton>
        </div>

        <button
          type="button"
          className="grid size-11 cursor-pointer place-items-center rounded-xl border border-line-strong text-fg lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={MENU_ID}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id={MENU_ID}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="container-cdx flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {link.label}
                </a>
              ))}
              <BookCallButton
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Book a discovery call
              </BookCallButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
