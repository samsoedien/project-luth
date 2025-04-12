"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-z-50 luth-max-h-(--radix-dropdown-menu-content-available-height) luth-min-w-[8rem] luth-origin-(--radix-dropdown-menu-content-transform-origin) luth-overflow-x-hidden luth-overflow-y-auto luth-rounded-md luth-border luth-p-1 luth-shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
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

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-py-1.5 luth-pr-2 luth-pl-8 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="luth-pointer-events-none luth-absolute luth-left-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="luth-size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-py-1.5 luth-pr-2 luth-pl-8 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    >
      <span className="luth-pointer-events-none luth-absolute luth-left-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="luth-size-2 luth-fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "luth-px-2 luth-py-1.5 luth-text-sm luth-font-medium data-[inset]:luth-pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("luth-bg-border luth--mx-1 luth-my-1 luth-h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "luth-text-muted-foreground luth-ml-auto luth-text-xs luth-tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground data-[state=open]:luth-bg-accent data-[state=open]:luth-text-accent-foreground luth-flex luth-cursor-default luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-hidden luth-select-none data-[inset]:luth-pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="luth-ml-auto luth-size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-z-50 luth-min-w-[8rem] luth-origin-(--radix-dropdown-menu-content-transform-origin) luth-overflow-hidden luth-rounded-md luth-border luth-p-1 luth-shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
