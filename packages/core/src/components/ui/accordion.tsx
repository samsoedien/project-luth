'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('luth-border-b', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="luth-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'luth-flex luth-flex-1 luth-items-center luth-justify-between luth-py-4 luth-text-sm luth-font-medium luth-transition-all hover:luth-underline [&[data-state=open]>svg]:luth-rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="luth-h-4 luth-w-4 luth-shrink-0 luth-text-muted-foreground luth-transition-transform luth-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="luth-overflow-hidden luth-text-sm data-[state=closed]:luth-animate-accordion-up data-[state=open]:luth-animate-accordion-down"
    {...props}
  >
    <div className={cn('luth-pb-4 luth-pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
