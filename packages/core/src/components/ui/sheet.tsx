'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'luth-fixed luth-inset-0 luth-z-50 luth-bg-black/80 luth- data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  'luth-fixed luth-z-50 luth-gap-4 luth-bg-background luth-p-6 luth-shadow-lg luth-transition luth-ease-in-out data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-duration-300 data-[state=open]:luth-duration-500',
  {
    variants: {
      side: {
        top: 'luth-inset-x-0 luth-top-0 luth-border-b data-[state=closed]:luth-slide-out-to-top data-[state=open]:luth-slide-in-from-top',
        bottom:
          'luth-inset-x-0 luth-bottom-0 luth-border-t data-[state=closed]:luth-slide-out-to-bottom data-[state=open]:luth-slide-in-from-bottom',
        left: 'luth-inset-y-0 luth-left-0 luth-h-full luth-w-3/4 luth-border-r data-[state=closed]:luth-slide-out-to-left data-[state=open]:luth-slide-in-from-left sm:luth-max-w-sm',
        right:
          'luth-inset-y-0 luth-right-0 luth-h-full luth-w-3/4 luth-border-l data-[state=closed]:luth-slide-out-to-right data-[state=open]:luth-slide-in-from-right sm:luth-max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetPrimitive.Close className="luth-absolute luth-right-4 luth-top-4 luth-rounded-sm luth-opacity-70 luth-ring-offset-background luth-transition-opacity hover:luth-opacity-100 focus:luth-outline-none focus:luth-ring-2 focus:luth-ring-ring focus:luth-ring-offset-2 disabled:luth-pointer-events-none data-[state=open]:luth-bg-secondary">
        <Cross2Icon className="luth-h-4 luth-w-4" />
        <span className="luth-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'luth-flex luth-flex-col luth-space-y-2 luth-text-center sm:luth-text-left',
      className,
    )}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'luth-flex luth-flex-col-reverse sm:luth-flex-row sm:luth-justify-end sm:luth-space-x-2',
      className,
    )}
    {...props}
  />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('luth-text-lg luth-font-semibold luth-text-foreground', className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('luth-text-sm luth-text-muted-foreground', className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
