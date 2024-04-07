"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "luth-flex luth-h-9 luth-w-full luth-items-center luth-justify-between luth-whitespace-nowrap luth-rounded-md luth-border luth-border-input luth-bg-transparent luth-px-3 luth-py-2 luth-text-sm luth-shadow-sm luth-ring-offset-background placeholder:luth-text-muted-foreground focus:luth-outline-none focus:luth-ring-1 focus:luth-ring-ring disabled:luth-cursor-not-allowed disabled:luth-opacity-50 [&>span]:luth-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="luth-h-4 luth-w-4 luth-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "luth-flex luth-cursor-default luth-items-center luth-justify-center luth-py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "luth-flex luth-cursor-default luth-items-center luth-justify-center luth-py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "luth-relative luth-z-50 luth-max-h-96 luth-min-w-[8rem] luth-overflow-hidden luth-rounded-md luth-border luth-bg-popover luth-text-popover-foreground luth-shadow-md data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:luth-translate-y-1 data-[side=left]:luth--translate-x-1 data-[side=right]:luth-translate-x-1 data-[side=top]:luth--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "luth-p-1",
          position === "popper" &&
            "luth-h-[var(--radix-select-trigger-height)] luth-w-full luth-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("luth-px-2 luth-py-1.5 luth-text-sm luth-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "luth-relative luth-flex luth-w-full luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-py-1.5 luth-pl-2 luth-pr-8 luth-text-sm luth-outline-none focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50",
      className
    )}
    {...props}
  >
    <span className="luth-absolute luth-right-2 luth-flex luth-h-3.5 luth-w-3.5 luth-items-center luth-justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="luth-h-4 luth-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("luth--mx-1 luth-my-1 luth-h-px luth-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
