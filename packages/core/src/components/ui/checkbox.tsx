"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "luth-peer luth-border-input dark:luth-bg-input/30 data-[state=checked]:luth-bg-primary data-[state=checked]:luth-text-primary-foreground dark:data-[state=checked]:luth-bg-primary data-[state=checked]:luth-border-primary focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive luth-size-4 luth-shrink-0 luth-rounded-[4px] luth-border luth-shadow-xs luth-transition-shadow luth-outline-none focus-visible:luth-ring-[3px] disabled:luth-cursor-not-allowed disabled:luth-opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="luth-flex luth-items-center luth-justify-center luth-text-current luth-transition-none"
      >
        <CheckIcon className="luth-size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
