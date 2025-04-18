import * as React from "react"

import { cn } from "@/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:luth-text-foreground placeholder:luth-text-muted-foreground selection:luth-bg-primary selection:luth-text-primary-foreground dark:luth-bg-input/30 luth-border-input luth-flex luth-h-9 luth-w-full luth-min-w-0 luth-rounded-md luth-border luth-bg-transparent luth-px-3 luth-py-1 luth-text-base luth-shadow-xs luth-transition-[color,box-shadow] luth-outline-none file:luth-inline-flex file:luth-h-7 file:luth-border-0 file:luth-bg-transparent file:luth-text-sm file:luth-font-medium disabled:luth-pointer-events-none disabled:luth-cursor-not-allowed disabled:luth-opacity-50 md:luth-text-sm",
        "focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 focus-visible:luth-ring-[3px]",
        "aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
