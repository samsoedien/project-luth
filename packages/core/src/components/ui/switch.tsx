'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@/utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'luth-peer luth-inline-flex luth-h-5 luth-w-9 luth-shrink-0 luth-cursor-pointer luth-items-center luth-rounded-full luth-border-2 luth-border-transparent luth-shadow-sm luth-transition-colors focus-visible:luth-outline-none focus-visible:luth-ring-2 focus-visible:luth-ring-ring focus-visible:luth-ring-offset-2 focus-visible:luth-ring-offset-background disabled:luth-cursor-not-allowed disabled:luth-opacity-50 data-[state=checked]:luth-bg-primary data-[state=unchecked]:luth-bg-input',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'luth-pointer-events-none luth-block luth-h-4 luth-w-4 luth-rounded-full luth-bg-background luth-shadow-lg luth-ring-0 luth-transition-transform data-[state=checked]:luth-translate-x-4 data-[state=unchecked]:luth-translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
