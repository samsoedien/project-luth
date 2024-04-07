import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const buttonVariants = cva(
  "luth-inline-flex luth-items-center luth-justify-center luth-whitespace-nowrap luth-rounded-md luth-text-sm luth-font-medium luth-transition-colors focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-pointer-events-none disabled:luth-opacity-50",
  {
    variants: {
      variant: {
        default:
          "luth-bg-primary luth-text-primary-foreground luth-shadow hover:luth-bg-primary/90",
        destructive:
          "luth-bg-destructive luth-text-destructive-foreground luth-shadow-sm hover:luth-bg-destructive/90",
        outline:
          "luth-border luth-border-input luth-bg-background luth-shadow-sm hover:luth-bg-accent hover:luth-text-accent-foreground",
        secondary:
          "luth-bg-secondary luth-text-secondary-foreground luth-shadow-sm hover:luth-bg-secondary/80",
        ghost: "hover:luth-bg-accent hover:luth-text-accent-foreground",
        link: "luth-text-primary luth-underline-offset-4 hover:luth-underline",
      },
      size: {
        default: "luth-h-9 luth-px-4 luth-py-2",
        sm: "luth-h-8 luth-rounded-md luth-px-3 luth-text-xs",
        lg: "luth-h-10 luth-rounded-md luth-px-8",
        icon: "luth-h-9 luth-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
