"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "luth-border-input data-[placeholder]:luth-text-muted-foreground [&_svg:not([class*=text-])]:luth-text-muted-foreground focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 aria-invalid:luth-ring-destructive/20 dark:aria-invalid:luth-ring-destructive/40 aria-invalid:luth-border-destructive dark:luth-bg-input/30 dark:hover:luth-bg-input/50 luth-flex luth-w-fit luth-items-center luth-justify-between luth-gap-2 luth-rounded-md luth-border luth-bg-transparent luth-px-3 luth-py-2 luth-text-sm luth-whitespace-nowrap luth-shadow-xs luth-transition-[color,box-shadow] luth-outline-none focus-visible:luth-ring-[3px] disabled:luth-cursor-not-allowed disabled:luth-opacity-50 data-[size=default]:luth-h-9 data-[size=sm]:luth-h-8 *:data-[slot=select-value]:luth-line-clamp-1 *:data-[slot=select-value]:luth-flex *:data-[slot=select-value]:luth-items-center *:data-[slot=select-value]:luth-gap-2 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="luth-size-4 luth-opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2 luth-relative luth-z-50 luth-max-h-(--radix-select-content-available-height) luth-min-w-[8rem] luth-origin-(--radix-select-content-transform-origin) luth-overflow-x-hidden luth-overflow-y-auto luth-rounded-md luth-border luth-shadow-md",
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
              "luth-h-[var(--radix-select-trigger-height)] luth-w-full luth-min-w-[var(--radix-select-trigger-width)] luth-scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("luth-text-muted-foreground luth-px-2 luth-py-1.5 luth-text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:luth-bg-accent focus:luth-text-accent-foreground [&_svg:not([class*=text-])]:luth-text-muted-foreground luth-relative luth-flex luth-w-full luth-cursor-default luth-items-center luth-gap-2 luth-rounded-sm luth-py-1.5 luth-pr-8 luth-pl-2 luth-text-sm luth-outline-hidden luth-select-none data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50 [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4 *:[span]:last:luth-flex *:[span]:last:luth-items-center *:[span]:last:luth-gap-2",
        className
      )}
      {...props}
    >
      <span className="luth-absolute luth-right-2 luth-flex luth-size-3.5 luth-items-center luth-justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="luth-size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("luth-bg-border luth-pointer-events-none luth--mx-1 luth-my-1 luth-h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "luth-flex luth-cursor-default luth-items-center luth-justify-center luth-py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="luth-size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "luth-flex luth-cursor-default luth-items-center luth-justify-center luth-py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="luth-size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
