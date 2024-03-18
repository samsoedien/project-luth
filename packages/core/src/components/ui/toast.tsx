'use client'

import * as React from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'luth-fixed luth-top-0 luth-z-[100] luth-flex luth-max-h-screen luth-w-full luth-flex-col-reverse luth-p-4 sm:luth-bottom-0 sm:luth-right-0 sm:luth-top-auto sm:luth-flex-col md:luth-max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'luth-group luth-pointer-events-auto luth-relative luth-flex luth-w-full luth-items-center luth-justify-between luth-space-x-2 luth-overflow-hidden luth-rounded-md luth-border luth-p-4 luth-pr-6 luth-shadow-lg luth-transition-all data-[swipe=cancel]:luth-translate-x-0 data-[swipe=end]:luth-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:luth-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:luth-transition-none data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[swipe=end]:luth-animate-out data-[state=closed]:luth-fade-out-80 data-[state=closed]:luth-slide-out-to-right-full data-[state=open]:luth-slide-in-from-top-full data-[state=open]:sm:luth-slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'luth-border luth-bg-background luth-text-foreground',
        destructive:
          'luth-destructive luth-group luth-border-destructive luth-bg-destructive luth-text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'luth-inline-flex luth-h-8 luth-shrink-0 luth-items-center luth-justify-center luth-rounded-md luth-border luth-bg-transparent luth-px-3 luth-text-sm luth-font-medium luth-transition-colors hover:luth-bg-secondary focus:luth-outline-none focus:luth-ring-1 focus:luth-ring-ring disabled:luth-pointer-events-none disabled:luth-opacity-50 group-[.destructive]:luth-border-muted/40 group-[.destructive]:hover:luth-border-destructive/30 group-[.destructive]:hover:luth-bg-destructive group-[.destructive]:hover:luth-text-destructive-foreground group-[.destructive]:focus:luth-ring-destructive',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'luth-absolute luth-right-1 luth-top-1 luth-rounded-md luth-p-1 luth-text-foreground/50 luth-opacity-0 luth-transition-opacity hover:luth-text-foreground focus:luth-opacity-100 focus:luth-outline-none focus:luth-ring-1 group-hover:luth-opacity-100 group-[.destructive]:luth-text-red-300 group-[.destructive]:hover:luth-text-red-50 group-[.destructive]:focus:luth-ring-red-400 group-[.destructive]:focus:luth-ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <Cross2Icon className="luth-h-4 luth-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('luth-text-sm luth-font-semibold [&+div]:luth-text-xs', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('luth-text-sm luth-opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
