import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center rounded-md bg-lime">
        <span className="font-display text-sm font-bold italic text-forest">C</span>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        CODIXEN
      </span>
    </span>
  );
}
