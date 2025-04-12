"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "luth-bg-border luth-shrink-0 data-[orientation=horizontal]:luth-h-px data-[orientation=horizontal]:luth-w-full data-[orientation=vertical]:luth-h-full data-[orientation=vertical]:luth-w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
