'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons'

import { cn } from '@/utils'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-none focus:luth-bg-accent data-[state=open]:luth-bg-accent',
      inset && 'luth-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="luth-ml-auto luth-h-4 luth-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'luth-z-50 luth-min-w-[8rem] luth-overflow-hidden luth-rounded-md luth-border luth-bg-popover luth-p-1 luth-text-popover-foreground luth-shadow-lg data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'luth-z-50 luth-min-w-[8rem] luth-overflow-hidden luth-rounded-md luth-border luth-bg-popover luth-p-1 luth-text-popover-foreground luth-shadow-md',
        'data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-none luth-transition-colors focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      inset && 'luth-pl-8',
      className,
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-py-1.5 luth-pl-8 luth-pr-2 luth-text-sm luth-outline-none luth-transition-colors focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="luth-absolute luth-left-2 luth-flex luth-h-3.5 luth-w-3.5 luth-items-center luth-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="luth-h-4 luth-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-py-1.5 luth-pl-8 luth-pr-2 luth-text-sm luth-outline-none luth-transition-colors focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="luth-absolute luth-left-2 luth-flex luth-h-3.5 luth-w-3.5 luth-items-center luth-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="luth-h-4 luth-w-4 luth-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'luth-px-2 luth-py-1.5 luth-text-sm luth-font-semibold',
      inset && 'luth-pl-8',
      className,
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('luth--mx-1 luth-my-1 luth-h-px luth-bg-muted', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('luth-ml-auto luth-text-xs luth-tracking-widest luth-opacity-60', className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
