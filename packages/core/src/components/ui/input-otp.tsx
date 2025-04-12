"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:luth-cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("luth-flex luth-items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:luth-border-ring data-[active=true]:luth-ring-ring/50 data-[active=true]:aria-invalid:luth-ring-destructive/20 dark:data-[active=true]:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive data-[active=true]:aria-invalid:luth-border-destructive dark:luth-bg-input/30 luth-border-input luth-relative luth-flex luth-h-9 luth-w-9 luth-items-center luth-justify-center luth-border-y luth-border-r luth-text-sm luth-shadow-xs luth-transition-all luth-outline-none first:luth-rounded-l-md first:luth-border-l last:luth-rounded-r-md data-[active=true]:luth-z-10 data-[active=true]:luth-ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="luth-pointer-events-none luth-absolute luth-inset-0 luth-flex luth-items-center luth-justify-center">
          <div className="luth-animate-caret-blink luth-bg-foreground luth-h-4 luth-w-px luth-duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
