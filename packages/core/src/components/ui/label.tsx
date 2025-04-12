"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "luth-flex luth-items-center luth-gap-2 luth-text-sm luth-leading-none luth-font-medium luth-select-none group-data-[disabled=true]:luth-pointer-events-none group-data-[disabled=true]:luth-opacity-50 peer-disabled:luth-cursor-not-allowed peer-disabled:luth-opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
