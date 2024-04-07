"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "luth-z-50 luth-overflow-hidden luth-rounded-md luth-bg-primary luth-px-3 luth-py-1.5 luth-text-xs luth-text-primary-foreground luth-animate-in luth-fade-in-0 luth-zoom-in-95 data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=closed]:luth-zoom-out-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
