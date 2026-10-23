import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main
      id="main"
      className="grain relative isolate flex flex-1 flex-col items-center justify-center overflow-hidden px-5 py-32 text-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50 mask-fade-b" />
      <Logo priority />
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
        Error 404
      </p>
      <h1 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-balance md:text-6xl">
        This page <span className="text-gradient">didn&rsquo;t ship</span>
      </h1>
      <p className="mt-5 max-w-md text-fg-muted">
        The link may be broken or the page may have moved. Let&rsquo;s get you
        back on track.
      </p>
      <ButtonLink href="/" size="lg" className="mt-9">
        <ArrowLeft />
        Back to home
      </ButtonLink>
    </main>
  );
}
