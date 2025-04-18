"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "luth-relative luth-flex luth-w-full luth-touch-none luth-items-center luth-select-none data-[disabled]:luth-opacity-50 data-[orientation=vertical]:luth-h-full data-[orientation=vertical]:luth-min-h-44 data-[orientation=vertical]:luth-w-auto data-[orientation=vertical]:luth-flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "luth-bg-muted luth-relative luth-grow luth-overflow-hidden luth-rounded-full data-[orientation=horizontal]:luth-h-1.5 data-[orientation=horizontal]:luth-w-full data-[orientation=vertical]:luth-h-full data-[orientation=vertical]:luth-w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "luth-bg-primary luth-absolute data-[orientation=horizontal]:luth-h-full data-[orientation=vertical]:luth-w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="luth-border-primary luth-bg-background luth-ring-ring/50 luth-block luth-size-4 luth-shrink-0 luth-rounded-full luth-border luth-shadow-sm luth-transition-[color,box-shadow] hover:luth-ring-4 focus-visible:luth-ring-4 focus-visible:luth-outline-hidden disabled:luth-pointer-events-none disabled:luth-opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
