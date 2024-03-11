'use client'

import * as React from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Command as CommandPrimitive } from 'cmdk'

import { cn } from '@/utils'
import { Dialog, DialogContent } from '@/core/ui/dialog'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'luth-flex luth-h-full luth-w-full luth-flex-col luth-overflow-hidden luth-rounded-md luth-bg-popover luth-text-popover-foreground',
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="luth-overflow-hidden luth-p-0">
        <Command className="[&_[cmdk-group-heading]]:luth-px-2 [&_[cmdk-group-heading]]:luth-font-medium [&_[cmdk-group-heading]]:luth-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:luth-pt-0 [&_[cmdk-group]]:luth-px-2 [&_[cmdk-input-wrapper]_svg]:luth-h-5 [&_[cmdk-input-wrapper]_svg]:luth-w-5 [&_[cmdk-input]]:luth-h-12 [&_[cmdk-item]]:luth-px-2 [&_[cmdk-item]]:luth-py-3 [&_[cmdk-item]_svg]:luth-h-5 [&_[cmdk-item]_svg]:luth-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="luth-flex luth-items-center luth-border-b luth-px-3" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="luth-mr-2 luth-h-4 luth-w-4 luth-shrink-0 luth-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'luth-flex luth-h-10 luth-w-full luth-rounded-md luth-bg-transparent luth-py-3 luth-text-sm luth-outline-none placeholder:luth-text-muted-foreground disabled:luth-cursor-not-allowed disabled:luth-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('luth-max-h-[300px] luth-overflow-y-auto luth-overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="luth-py-6 luth-text-center luth-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'luth-overflow-hidden luth-p-1 luth-text-foreground [&_[cmdk-group-heading]]:luth-px-2 [&_[cmdk-group-heading]]:luth-py-1.5 [&_[cmdk-group-heading]]:luth-text-xs [&_[cmdk-group-heading]]:luth-font-medium [&_[cmdk-group-heading]]:luth-text-muted-foreground',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('luth--mx-1 luth-h-px luth-bg-border', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-none aria-selected:luth-bg-accent aria-selected:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      className,
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'luth-ml-auto luth-text-xs luth-tracking-widest luth-text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

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
