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

/** Tracks which nav section is currently in the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const onTop = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header className="animate-nav-in fixed inset-x-0 top-0 z-50">
      <div className="container-cdx pt-3 md:pt-4">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 md:px-5",
            scrolled || open
              ? "glass shadow-[0_8px_30px_-16px_rgba(11,13,22,0.18)]"
              : "border border-transparent"
          )}
        >
          <a href="#top" aria-label="CODIXEN home" className="rounded-md">
            <Logo priority />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-sm transition-colors hover:text-fg",
                      isActive ? "text-fg" : "text-fg-muted"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <ButtonLink href="#contact" variant="ghost" size="sm">
              Contact
            </ButtonLink>
            <BookCallButton size="sm" className="group">
              Book a call
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </BookCallButton>
          </div>

          <button
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-xl border border-line-strong text-fg md:hidden"
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
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass mt-2 origin-top overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.25 }}
                  className="block rounded-xl px-4 py-3 text-base text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {link.label}
                </motion.a>
              ))}
              <BookCallButton
                className="mt-1 w-full"
                onClick={() => setOpen(false)}
              >
                Book a discovery call
              </BookCallButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
