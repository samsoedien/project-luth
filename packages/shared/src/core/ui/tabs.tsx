'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'luth-inline-flex luth-h-9 luth-items-center luth-justify-center luth-rounded-lg luth-bg-muted luth-p-1 luth-text-muted-foreground',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'luth-inline-flex luth-items-center luth-justify-center luth-whitespace-nowrap luth-rounded-md luth-px-3 luth-py-1 luth-text-sm luth-font-medium luth-ring-offset-background luth-transition-all focus-visible:luth-outline-none focus-visible:luth-ring-2 focus-visible:luth-ring-ring focus-visible:luth-ring-offset-2 disabled:luth-pointer-events-none disabled:luth-opacity-50 data-[state=active]:luth-bg-background data-[state=active]:luth-text-foreground data-[state=active]:luth-shadow',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'luth-mt-2 luth-ring-offset-background focus-visible:luth-outline-none focus-visible:luth-ring-2 focus-visible:luth-ring-ring focus-visible:luth-ring-offset-2',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
