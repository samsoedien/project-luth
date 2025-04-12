"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const toggleVariants = cva(
  "luth-inline-flex luth-items-center luth-justify-center luth-gap-2 luth-rounded-md luth-text-sm luth-font-medium hover:luth-bg-muted hover:luth-text-muted-foreground disabled:luth-pointer-events-none disabled:luth-opacity-50 data-[state=on]:luth-bg-accent data-[state=on]:luth-text-accent-foreground [&_svg]:luth-pointer-events-none [&_svg:not([class*=size-])]:luth-size-4 [&_svg]:luth-shrink-0 focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 focus-visible:luth-ring-[3px] luth-outline-none luth-transition-[color,box-shadow] aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive luth-whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "luth-bg-transparent",
        outline:
          "luth-border luth-border-input luth-bg-transparent luth-shadow-xs hover:luth-bg-accent hover:luth-text-accent-foreground",
      },
      size: {
        default: "luth-h-9 luth-px-2 luth-min-w-9",
        sm: "luth-h-8 luth-px-1.5 luth-min-w-8",
        lg: "luth-h-10 luth-px-2.5 luth-min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
