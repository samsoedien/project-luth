'use client'

import * as React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('luth-grid luth-gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'luth-aspect-square luth-h-4 luth-w-4 luth-rounded-full luth-border luth-border-primary luth-text-primary luth-shadow focus:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-cursor-not-allowed disabled:luth-opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="luth-flex luth-items-center luth-justify-center">
        <CheckIcon className="luth-h-3.5 luth-w-3.5 luth-fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
