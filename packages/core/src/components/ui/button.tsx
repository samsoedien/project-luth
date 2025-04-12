import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const buttonVariants = cva(
  "luth-inline-flex luth-items-center luth-justify-center luth-gap-2 luth-whitespace-nowrap luth-rounded-md luth-text-sm luth-font-medium luth-transition-all disabled:luth-pointer-events-none disabled:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg:not([class*=size-])]:luth-size-4 luth-shrink-0 [&_svg]:luth-shrink-0 luth-outline-none focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 focus-visible:luth-ring-[3px] aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive",
  {
    variants: {
      variant: {
        default:
          "luth-bg-primary luth-text-primary-foreground luth-shadow-xs hover:luth-bg-primary/90",
        destructive:
          "luth-bg-destructive luth-text-white luth-shadow-xs hover:luth-bg-destructive/90 focus-visible:luth-ring-destructive/20 dark:focus-visible:luth-ring-destructive/40 dark:luth-bg-destructive/60",
        outline:
          "luth-border luth-bg-background luth-shadow-xs hover:luth-bg-accent hover:luth-text-accent-foreground dark:luth-bg-input/30 dark:luth-border-input dark:hover:luth-bg-input/50",
        secondary:
          "luth-bg-secondary luth-text-secondary-foreground luth-shadow-xs hover:luth-bg-secondary/80",
        ghost:
          "hover:luth-bg-accent hover:luth-text-accent-foreground dark:hover:luth-bg-accent/50",
        link: "luth-text-primary luth-underline-offset-4 hover:luth-underline",
      },
      size: {
        default: "luth-h-9 luth-px-4 luth-py-2 has-[>svg]:luth-px-3",
        sm: "luth-h-8 luth-rounded-md luth-gap-1.5 luth-px-3 has-[>svg]:luth-px-2.5",
        lg: "luth-h-10 luth-rounded-md luth-px-6 has-[>svg]:luth-px-4",
        icon: "luth-size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
