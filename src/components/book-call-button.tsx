"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/content";

export function BookCallButton({ children, ...props }: ButtonProps) {
  return (
    <Button
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      data-magnetic
      {...props}
    >
      {children}
    </Button>
  );
}
