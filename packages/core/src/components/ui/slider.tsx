"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "luth-relative luth-flex luth-w-full luth-touch-none luth-select-none luth-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="luth-relative luth-h-1.5 luth-w-full luth-grow luth-overflow-hidden luth-rounded-full luth-bg-primary/20">
      <SliderPrimitive.Range className="luth-absolute luth-h-full luth-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="luth-block luth-h-4 luth-w-4 luth-rounded-full luth-border luth-border-primary/50 luth-bg-background luth-shadow luth-transition-colors focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-pointer-events-none disabled:luth-opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
