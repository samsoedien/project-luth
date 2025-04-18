"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 luth-fixed luth-inset-0 luth-z-50 luth-bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "luth-group/drawer-content luth-bg-background luth-fixed luth-z-50 luth-flex luth-h-auto luth-flex-col",
          "data-[vaul-drawer-direction=top]:luth-inset-x-0 data-[vaul-drawer-direction=top]:luth-top-0 data-[vaul-drawer-direction=top]:luth-mb-24 data-[vaul-drawer-direction=top]:luth-max-h-[80vh] data-[vaul-drawer-direction=top]:luth-rounded-b-lg data-[vaul-drawer-direction=top]:luth-border-b",
          "data-[vaul-drawer-direction=bottom]:luth-inset-x-0 data-[vaul-drawer-direction=bottom]:luth-bottom-0 data-[vaul-drawer-direction=bottom]:luth-mt-24 data-[vaul-drawer-direction=bottom]:luth-max-h-[80vh] data-[vaul-drawer-direction=bottom]:luth-rounded-t-lg data-[vaul-drawer-direction=bottom]:luth-border-t",
          "data-[vaul-drawer-direction=right]:luth-inset-y-0 data-[vaul-drawer-direction=right]:luth-right-0 data-[vaul-drawer-direction=right]:luth-w-3/4 data-[vaul-drawer-direction=right]:luth-border-l data-[vaul-drawer-direction=right]:sm:luth-max-w-sm",
          "data-[vaul-drawer-direction=left]:luth-inset-y-0 data-[vaul-drawer-direction=left]:luth-left-0 data-[vaul-drawer-direction=left]:luth-w-3/4 data-[vaul-drawer-direction=left]:luth-border-r data-[vaul-drawer-direction=left]:sm:luth-max-w-sm",
          className
        )}
        {...props}
      >
        <div className="luth-bg-muted luth-mx-auto luth-mt-4 luth-hidden luth-h-2 luth-w-[100px] luth-shrink-0 luth-rounded-full luth-group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("luth-flex luth-flex-col luth-gap-1.5 luth-p-4", className)}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("luth-mt-auto luth-flex luth-flex-col luth-gap-2 luth-p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("luth-text-foreground luth-font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("luth-text-muted-foreground luth-text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
