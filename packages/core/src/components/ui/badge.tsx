import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const badgeVariants = cva(
  "luth-inline-flex luth-items-center luth-justify-center luth-rounded-md luth-border luth-px-2 luth-py-0.5 luth-text-xs luth-font-medium luth-w-fit luth-whitespace-nowrap luth-shrink-0 [&>svg]:luth-size-3 luth-gap-1 [&>svg]:luth-pointer-events-none focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 focus-visible:luth-ring-[3px] aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive luth-transition-[color,box-shadow] luth-overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "luth-border-transparent luth-bg-primary luth-text-primary-foreground [a&]:hover:luth-bg-primary/90",
        secondary:
          "luth-border-transparent luth-bg-secondary luth-text-secondary-foreground [a&]:hover:luth-bg-secondary/90",
        destructive:
          "luth-border-transparent luth-bg-destructive luth-text-white [a&]:hover:luth-bg-destructive/90 focus-visible:luth-ring-destructive/20 dark:focus-visible:luth-ring-destructive/40 dark:luth-bg-destructive/60",
        outline:
          "luth-text-foreground [a&]:hover:luth-bg-accent [a&]:hover:luth-text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
