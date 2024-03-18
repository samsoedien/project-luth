'use client'

import * as React from 'react'
import { DashIcon } from '@radix-ui/react-icons'
import { OTPInput, SlotProps } from 'input-otp'

import { cn } from '@/utils'

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, ...props }, ref) => (
  <OTPInput ref={ref} containerClassName={cn('flex items-center gap-2', className)} {...props} />
))
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('luth-flex luth-items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  SlotProps & React.ComponentPropsWithoutRef<'div'>
>(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'luth-relative luth-flex luth-h-9 luth-w-9 luth-items-center luth-justify-center luth-border-y luth-border-r luth-border-input luth-text-sm luth-shadow-sm luth-transition-all first:luth-rounded-l-md first:luth-border-l last:luth-rounded-r-md',
        isActive && 'luth-z-10 luth-ring-1 luth-ring-ring',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="luth-pointer-events-none luth-absolute luth-inset-0 luth-flex luth-items-center luth-justify-center">
          <div className="luth-animate-caret-blink luth-h-4 luth-w-px luth-bg-foreground luth-duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <DashIcon />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
