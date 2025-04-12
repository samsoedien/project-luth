import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "luth-group/navigation-menu luth-relative luth-flex luth-max-w-max luth-flex-1 luth-items-center luth-justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "luth-group luth-flex luth-flex-1 luth-list-none luth-items-center luth-justify-center luth-gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("luth-relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "luth-group luth-inline-flex luth-h-9 luth-w-max luth-items-center luth-justify-center luth-rounded-md luth-bg-background luth-px-4 luth-py-2 luth-text-sm luth-font-medium hover:luth-bg-accent hover:luth-text-accent-foreground focus:luth-bg-accent focus:luth-text-accent-foreground disabled:luth-pointer-events-none disabled:luth-opacity-50 data-[state=open]:hover:luth-bg-accent data-[state=open]:luth-text-accent-foreground data-[state=open]:focus:luth-bg-accent data-[state=open]:luth-bg-accent/50 focus-visible:luth-ring-ring/50 luth-outline-none luth-transition-[color,box-shadow] focus-visible:luth-ring-[3px] focus-visible:luth-outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "luth-group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="luth-relative luth-top-[1px] luth-ml-1 luth-size-3 luth-transition luth-duration-300 group-data-[state=open]:luth-rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:luth-animate-in data-[motion^=to-]:luth-animate-out data-[motion^=from-]:luth-fade-in data-[motion^=to-]:luth-fade-out data-[motion=from-end]:luth-slide-in-from-right-52 data-[motion=from-start]:luth-slide-in-from-left-52 data-[motion=to-end]:luth-slide-out-to-right-52 data-[motion=to-start]:luth-slide-out-to-left-52 luth-top-0 luth-left-0 luth-w-full luth-p-2 luth-pr-2.5 md:luth-absolute md:luth-w-auto",
        "luth-group-data-[viewport=false]/navigation-menu:bg-popover luth-group-data-[viewport=false]/navigation-menu:text-popover-foreground luth-group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in luth-group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out luth-group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 luth-group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 luth-group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 luth-group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 luth-group-data-[viewport=false]/navigation-menu:top-full luth-group-data-[viewport=false]/navigation-menu:mt-1.5 luth-group-data-[viewport=false]/navigation-menu:overflow-hidden luth-group-data-[viewport=false]/navigation-menu:rounded-md luth-group-data-[viewport=false]/navigation-menu:border luth-group-data-[viewport=false]/navigation-menu:shadow luth-group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:luth-ring-0 **:data-[slot=navigation-menu-link]:focus:luth-outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "luth-absolute luth-top-full luth-left-0 luth-isolate luth-z-50 luth-flex luth-justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "luth-origin-top-center luth-bg-popover luth-text-popover-foreground data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-90 luth-relative luth-mt-1.5 luth-h-[var(--radix-navigation-menu-viewport-height)] luth-w-full luth-overflow-hidden luth-rounded-md luth-border luth-shadow md:luth-w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:luth-bg-accent data-[active=true]:hover:luth-bg-accent data-[active=true]:luth-bg-accent/50 data-[active=true]:luth-text-accent-foreground hover:luth-bg-accent hover:luth-text-accent-foreground focus:luth-bg-accent focus:luth-text-accent-foreground focus-visible:luth-ring-ring/50 [&_svg:not([class*=text-])]:luth-text-muted-foreground luth-flex luth-flex-col luth-gap-1 luth-rounded-sm luth-p-2 luth-text-sm luth-transition-all luth-outline-none focus-visible:luth-ring-[3px] focus-visible:luth-outline-1 [&_svg:not([class*=size-])]:luth-size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:luth-animate-in data-[state=hidden]:luth-animate-out data-[state=hidden]:luth-fade-out data-[state=visible]:luth-fade-in luth-top-full luth-z-[1] luth-flex luth-h-1.5 luth-items-end luth-justify-center luth-overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="luth-bg-border luth-relative luth-top-[60%] luth-h-2 luth-w-2 luth-rotate-45 luth-rounded-tl-sm luth-shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
