"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "luth-bg-background luth-flex luth-h-9 luth-items-center luth-gap-1 luth-rounded-md luth-border luth-p-1 luth-shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground data-[state=open]:luth-bg-accent data-[state=open]:luth-text-accent-foreground luth-flex luth-items-center luth-rounded-sm luth-px-2 luth-py-1 luth-text-sm luth-font-medium luth-outline-hidden luth-select-none",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-z-50 luth-min-w-[12rem] luth-origin-(--radix-menubar-content-transform-origin) luth-overflow-hidden luth-rounded-md luth-border luth-p-1 luth-shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground data-[variant=destructive]:luth-text-destructive data-[variant=destructive]:focus:luth-bg-destructive/10 dark:data-[variant=destructive]:focus:luth-bg-destructive/20 data-[variant=destructive]:focus:luth-text-destructive data-[variant=destructive]:*:[svg]:luth-!text-destructive [&_svg:not([class*=text-])]:luth-text-muted-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 data-[inset]:luth-pl-8 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-xs luth-py-1.5 luth-pr-2 luth-pl-8 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="luth-pointer-events-none luth-absolute luth-left-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="luth-size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-xs luth-py-1.5 luth-pr-2 luth-pl-8 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    >
      <span className="luth-pointer-events-none luth-absolute luth-left-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="luth-size-2 luth-fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "luth-px-2 luth-py-1.5 luth-text-sm luth-font-medium data-[inset]:luth-pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("luth-bg-border luth--mx-1 luth-my-1 luth-h-px", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "luth-text-muted-foreground luth-ml-auto luth-text-xs luth-tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground data-[state=open]:luth-bg-accent data-[state=open]:luth-text-accent-foreground luth-flex luth-cursor-default luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-none luth-select-none data-[inset]:luth-pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="luth-ml-auto luth-h-4 luth-w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-z-50 luth-min-w-[8rem] luth-origin-(--radix-menubar-content-transform-origin) luth-overflow-hidden luth-rounded-md luth-border luth-p-1 luth-shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
