"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "luth-bg-popover luth-text-popover-foreground luth-flex luth-h-full luth-w-full luth-flex-col luth-overflow-hidden luth-rounded-md",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="luth-sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="luth-overflow-hidden luth-p-0">
        <Command className="[&_[cmdk-group-heading]]:luth-text-muted-foreground **:data-[slot=command-input-wrapper]:luth-h-12 [&_[cmdk-group-heading]]:luth-px-2 [&_[cmdk-group-heading]]:luth-font-medium [&_[cmdk-group]]:luth-px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:luth-pt-0 [&_[cmdk-input-wrapper]_svg]:luth-h-5 [&_[cmdk-input-wrapper]_svg]:luth-w-5 [&_[cmdk-input]]:luth-h-12 [&_[cmdk-item]]:luth-px-2 [&_[cmdk-item]]:luth-py-3 [&_[cmdk-item]_svg]:luth-h-5 [&_[cmdk-item]_svg]:luth-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="luth-flex luth-h-9 luth-items-center luth-gap-2 luth-border-b luth-px-3"
    >
      <SearchIcon className="luth-size-4 luth-shrink-0 luth-opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:luth-text-muted-foreground luth-flex luth-h-10 luth-w-full luth-rounded-md luth-bg-transparent luth-py-3 luth-text-sm luth-outline-hidden disabled:luth-cursor-not-allowed disabled:luth-opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "luth-max-h-[300px] luth-scroll-py-1 luth-overflow-x-hidden luth-overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="luth-py-6 luth-text-center luth-text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "luth-text-foreground [&_[cmdk-group-heading]]:luth-text-muted-foreground luth-overflow-hidden luth-p-1 [&_[cmdk-group-heading]]:luth-px-2 [&_[cmdk-group-heading]]:luth-py-1.5 [&_[cmdk-group-heading]]:luth-text-xs [&_[cmdk-group-heading]]:luth-font-medium",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("luth-bg-border luth--mx-1 luth-h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:luth-bg-accent data-[selected=true]:luth-text-accent-foreground [&_svg:not([class*=text-])]:luth-text-muted-foreground luth-relative luth-flex luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-hidden luth-select-none data-[disabled=true]:luth-pointer-events-none data-[disabled=true]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "luth-text-muted-foreground luth-ml-auto luth-text-xs luth-tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
