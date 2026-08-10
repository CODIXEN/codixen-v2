"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-cdx pt-3 md:pt-4">
        <nav
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 md:px-5",
            scrolled
              ? "glass shadow-[0_8px_30px_-16px_rgba(11,13,22,0.18)]"
              : "border border-transparent"
          )}
        >
          <a href="#top" aria-label="CODIXEN home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </a>
            <BookCallButton size="sm">
              Book a call
              <ArrowUpRight className="size-4" />
            </BookCallButton>
          </div>

          <button
            className="grid size-10 cursor-pointer place-items-center rounded-xl border border-line-strong text-fg md:hidden"

            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {link.label}
                </a>
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
    </motion.header>
  );
}
