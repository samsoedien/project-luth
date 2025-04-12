"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("luth-grid luth-gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "luth-border-input luth-text-primary focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive dark:luth-bg-input/30 luth-aspect-square luth-size-4 luth-shrink-0 luth-rounded-full luth-border luth-shadow-xs luth-transition-[color,box-shadow] luth-outline-none focus-visible:luth-ring-[3px] disabled:luth-cursor-not-allowed disabled:luth-opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="luth-relative luth-flex luth-items-center luth-justify-center"
      >
        <CircleIcon className="luth-fill-primary luth-absolute luth-top-1/2 luth-left-1/2 luth-size-2 luth--translate-x-1/2 luth--translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
