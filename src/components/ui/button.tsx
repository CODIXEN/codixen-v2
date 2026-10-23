import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",

  {
    variants: {
      variant: {
        primary:
          "bg-lime text-forest hover:bg-lime-2 hover:-translate-y-0.5 shadow-brand",
        dark:
          "bg-forest text-white hover:bg-[#173022] hover:-translate-y-0.5 shadow-brand",
        secondary:
          "border border-line-strong bg-transparent text-fg hover:bg-surface-2 hover:-translate-y-0.5",
        ghost:
          "text-fg-muted hover:text-fg hover:bg-surface-2",
        outline:
          "border border-line-strong text-fg hover:border-fg/40 hover:bg-surface-2",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

/** Anchor styled as a button — avoids nesting <button> inside <a>. */
export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
ButtonLink.displayName = "ButtonLink";
