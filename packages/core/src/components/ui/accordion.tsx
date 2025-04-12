"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("luth-border-b last:luth-border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="luth-flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 luth-flex luth-flex-1 luth-items-start luth-justify-between luth-gap-4 luth-rounded-md luth-py-4 luth-text-left luth-text-sm luth-font-medium luth-transition-all luth-outline-none hover:luth-underline focus-visible:luth-ring-[3px] disabled:luth-pointer-events-none disabled:luth-opacity-50 [&[data-state=open]>svg]:luth-rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="luth-text-muted-foreground luth-pointer-events-none luth-size-4 luth-shrink-0 luth-translate-y-0.5 luth-transition-transform luth-duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:luth-animate-accordion-up data-[state=open]:luth-animate-accordion-down luth-overflow-hidden luth-text-sm"
      {...props}
    >
      <div className={cn("luth-pt-0 luth-pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
