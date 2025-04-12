import * as React from "react"

import { cn } from "@/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "luth-border-input placeholder:luth-text-muted-foreground focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive dark:luth-bg-input/30 luth-flex luth-field-sizing-content luth-min-h-16 luth-w-full luth-rounded-md luth-border luth-bg-transparent luth-px-3 luth-py-2 luth-text-base luth-shadow-xs luth-transition-[color,box-shadow] luth-outline-none focus-visible:luth-ring-[3px] disabled:luth-cursor-not-allowed disabled:luth-opacity-50 md:luth-text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
