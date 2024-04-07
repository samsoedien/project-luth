import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const badgeVariants = cva(
  "luth-inline-flex luth-items-center luth-rounded-md luth-border luth-px-2.5 luth-py-0.5 luth-text-xs luth-font-semibold luth-transition-colors focus:luth-outline-none focus:luth-ring-2 focus:luth-ring-ring focus:luth-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "luth-border-transparent luth-bg-primary luth-text-primary-foreground luth-shadow hover:luth-bg-primary/80",
        secondary:
          "luth-border-transparent luth-bg-secondary luth-text-secondary-foreground hover:luth-bg-secondary/80",
        destructive:
          "luth-border-transparent luth-bg-destructive luth-text-destructive-foreground luth-shadow hover:luth-bg-destructive/80",
        outline: "luth-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
