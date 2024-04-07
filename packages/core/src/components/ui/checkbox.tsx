"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "luth-peer luth-h-4 luth-w-4 luth-shrink-0 luth-rounded-sm luth-border luth-border-primary luth-shadow focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-cursor-not-allowed disabled:luth-opacity-50 data-[state=checked]:luth-bg-primary data-[state=checked]:luth-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("luth-flex luth-items-center luth-justify-center luth-text-current")}
    >
      <CheckIcon className="luth-h-4 luth-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
