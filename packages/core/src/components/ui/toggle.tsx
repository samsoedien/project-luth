'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const toggleVariants = cva(
  'luth-inline-flex luth-items-center luth-justify-center luth-rounded-md luth-text-sm luth-font-medium luth-transition-colors hover:luth-bg-muted hover:luth-text-muted-foreground focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-pointer-events-none disabled:luth-opacity-50 data-[state=on]:luth-bg-accent data-[state=on]:luth-text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'luth-bg-transparent',
        outline:
          'luth-border luth-border-input luth-bg-transparent luth-shadow-sm hover:luth-bg-accent hover:luth-text-accent-foreground',
      },
      size: {
        default: 'luth-h-9 luth-px-3',
        sm: 'luth-h-8 luth-px-2',
        lg: 'luth-h-10 luth-px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
