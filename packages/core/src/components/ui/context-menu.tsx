"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground data-[state=open]:luth-bg-accent data-[state=open]:luth-text-accent-foreground luth-flex luth-cursor-default luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-hidden luth-select-none data-[inset]:luth-pl-8 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="luth-ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-z-50 luth-min-w-[8rem] luth-origin-(--radix-context-menu-content-transform-origin) luth-overflow-hidden luth-rounded-md luth-border luth-p-1 luth-shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-z-50 luth-max-h-(--radix-context-menu-content-available-height) luth-min-w-[8rem] luth-origin-(--radix-context-menu-content-transform-origin) luth-overflow-x-hidden luth-overflow-y-auto luth-rounded-md luth-border luth-p-1 luth-shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
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

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-py-1.5 luth-pr-2 luth-pl-8 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="luth-pointer-events-none luth-absolute luth-left-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="luth-size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-py-1.5 luth-pr-2 luth-pl-8 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    >
      <span className="luth-pointer-events-none luth-absolute luth-left-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="luth-size-2 luth-fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "luth-text-foreground luth-px-2 luth-py-1.5 luth-text-sm luth-font-medium data-[inset]:luth-pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("luth-bg-border luth--mx-1 luth-my-1 luth-h-px", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "luth-text-muted-foreground luth-ml-auto luth-text-xs luth-tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
