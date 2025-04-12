"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 luth-fixed luth-inset-0 luth-z-50 luth-bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "luth-bg-background data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out luth-fixed luth-z-50 luth-flex luth-flex-col luth-gap-4 luth-shadow-lg luth-transition luth-ease-in-out data-[state=closed]:luth-duration-300 data-[state=open]:luth-duration-500",
          side === "right" &&
            "data-[state=closed]:luth-slide-out-to-right data-[state=open]:luth-slide-in-from-right luth-inset-y-0 luth-right-0 luth-h-full luth-w-3/4 luth-border-l sm:luth-max-w-sm",
          side === "left" &&
            "data-[state=closed]:luth-slide-out-to-left data-[state=open]:luth-slide-in-from-left luth-inset-y-0 luth-left-0 luth-h-full luth-w-3/4 luth-border-r sm:luth-max-w-sm",
          side === "top" &&
            "data-[state=closed]:luth-slide-out-to-top data-[state=open]:luth-slide-in-from-top luth-inset-x-0 luth-top-0 luth-h-auto luth-border-b",
          side === "bottom" &&
            "data-[state=closed]:luth-slide-out-to-bottom data-[state=open]:luth-slide-in-from-bottom luth-inset-x-0 luth-bottom-0 luth-h-auto luth-border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="luth-ring-offset-background focus:luth-ring-ring data-[state=open]:luth-bg-secondary luth-absolute luth-top-4 luth-right-4 luth-rounded-xs luth-opacity-70 luth-transition-opacity hover:luth-opacity-100 focus:luth-ring-2 focus:luth-ring-offset-2 focus:luth-outline-hidden disabled:luth-pointer-events-none">
          <XIcon className="luth-size-4" />
          <span className="luth-sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("luth-flex luth-flex-col luth-gap-1.5 luth-p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("luth-mt-auto luth-flex luth-flex-col luth-gap-2 luth-p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("luth-text-foreground luth-font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("luth-text-muted-foreground luth-text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
