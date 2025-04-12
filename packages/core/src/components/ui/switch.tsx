"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "luth-peer data-[state=checked]:luth-bg-primary data-[state=unchecked]:luth-bg-input focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 dark:data-[state=unchecked]:luth-bg-input/80 luth-inline-flex luth-h-[1.15rem] luth-w-8 luth-shrink-0 luth-items-center luth-rounded-full luth-border luth-border-transparent luth-shadow-xs luth-transition-all luth-outline-none focus-visible:luth-ring-[3px] disabled:luth-cursor-not-allowed disabled:luth-opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "luth-bg-background dark:data-[state=unchecked]:luth-bg-foreground dark:data-[state=checked]:luth-bg-primary-foreground luth-pointer-events-none luth-block luth-size-4 luth-rounded-full luth-ring-0 luth-transition-transform data-[state=checked]:luth-translate-x-[calc(100%-2px)] data-[state=unchecked]:luth-translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
