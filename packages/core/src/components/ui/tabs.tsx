"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("luth-flex luth-flex-col luth-gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "luth-bg-muted luth-text-muted-foreground luth-inline-flex luth-h-9 luth-w-fit luth-items-center luth-justify-center luth-rounded-lg luth-p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:luth-bg-background dark:data-[state=active]:luth-text-foreground focus-visible:luth-border-ring focus-visible:luth-ring-ring/50 focus-visible:luth-outline-ring dark:data-[state=active]:luth-border-input dark:data-[state=active]:luth-bg-input/30 luth-text-foreground dark:luth-text-muted-foreground luth-inline-flex luth-h-[calc(100%-1px)] luth-flex-1 luth-items-center luth-justify-center luth-gap-1.5 luth-rounded-md luth-border luth-border-transparent luth-px-2 luth-py-1 luth-text-sm luth-font-medium luth-whitespace-nowrap luth-transition-[color,box-shadow] focus-visible:luth-ring-[3px] focus-visible:luth-outline-1 disabled:luth-pointer-events-none disabled:luth-opacity-50 data-[state=active]:luth-shadow-sm [&_svg]:luth-pointer-events-none [&_svg]:luth-shrink-0 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("luth-flex-1 luth-outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
