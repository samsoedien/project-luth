'use client'

import * as React from 'react'
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons'
import * as MenubarPrimitive from '@radix-ui/react-menubar'

import { cn } from '@/utils'

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'luth-flex luth-h-9 luth-items-center luth-space-x-1 luth-rounded-md luth-border luth-bg-background luth-p-1 luth-shadow-sm',
      className,
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-px-3 luth-py-1 luth-text-sm luth-font-medium luth-outline-none focus:luth-bg-accent focus:luth-text-accent-foreground data-[state=open]:luth-bg-accent data-[state=open]:luth-text-accent-foreground',
      className,
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-none focus:luth-bg-accent focus:luth-text-accent-foreground data-[state=open]:luth-bg-accent data-[state=open]:luth-text-accent-foreground',
      inset && 'luth-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="luth-ml-auto luth-h-4 luth-w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'luth-z-50 luth-min-w-[8rem] luth-overflow-hidden luth-rounded-md luth-border luth-bg-popover luth-p-1 luth-text-popover-foreground luth-shadow-lg data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        'luth-z-50 luth-min-w-[12rem] luth-overflow-hidden luth-rounded-md luth-border luth-bg-popover luth-p-1 luth-text-popover-foreground luth-shadow-md data-[state=open]:luth-animate-in data-[state=closed]:luth-fade-out-0 data-[state=open]:luth-fade-in-0 data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-95 data-[side=bottom]:luth-slide-in-from-top-2 data-[side=left]:luth-slide-in-from-right-2 data-[side=right]:luth-slide-in-from-left-2 data-[side=top]:luth-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-px-2 luth-py-1.5 luth-text-sm luth-outline-none focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      inset && 'luth-pl-8',
      className,
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-py-1.5 luth-pl-8 luth-pr-2 luth-text-sm luth-outline-none focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="luth-absolute luth-left-2 luth-flex luth-h-3.5 luth-w-3.5 luth-items-center luth-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="luth-h-4 luth-w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'luth-relative luth-flex luth-cursor-default luth-select-none luth-items-center luth-rounded-sm luth-py-1.5 luth-pl-8 luth-pr-2 luth-text-sm luth-outline-none focus:luth-bg-accent focus:luth-text-accent-foreground data-[disabled]:luth-pointer-events-none data-[disabled]:luth-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="luth-absolute luth-left-2 luth-flex luth-h-3.5 luth-w-3.5 luth-items-center luth-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <DotFilledIcon className="luth-h-4 luth-w-4 luth-fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      'luth-px-2 luth-py-1.5 luth-text-sm luth-font-semibold',
      inset && 'luth-pl-8',
      className,
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('luth--mx-1 luth-my-1 luth-h-px luth-bg-muted', className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
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
MenubarShortcut.displayname = 'MenubarShortcut'

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
