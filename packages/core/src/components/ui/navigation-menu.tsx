import * as React from "react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "luth-relative luth-z-10 luth-flex luth-max-w-max luth-flex-1 luth-items-center luth-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "luth-group luth-flex luth-flex-1 luth-list-none luth-items-center luth-justify-center luth-space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "luth-group luth-inline-flex luth-h-9 luth-w-max luth-items-center luth-justify-center luth-rounded-md luth-bg-background luth-px-4 luth-py-2 luth-text-sm luth-font-medium luth-transition-colors hover:luth-bg-accent hover:luth-text-accent-foreground focus:luth-bg-accent focus:luth-text-accent-foreground focus:luth-outline-none disabled:luth-pointer-events-none disabled:luth-opacity-50 data-[active]:luth-bg-accent/50 data-[state=open]:luth-bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "luth-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="luth-relative luth-top-[1px] luth-ml-1 luth-h-3 luth-w-3 luth-transition luth-duration-300 group-data-[state=open]:luth-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "luth-left-0 luth-top-0 luth-w-full data-[motion^=from-]:luth-animate-in data-[motion^=to-]:luth-animate-out data-[motion^=from-]:luth-fade-in data-[motion^=to-]:luth-fade-out data-[motion=from-end]:luth-slide-in-from-right-52 data-[motion=from-start]:luth-slide-in-from-left-52 data-[motion=to-end]:luth-slide-out-to-right-52 data-[motion=to-start]:luth-slide-out-to-left-52 md:luth-absolute md:luth-w-auto luth-",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("luth-absolute luth-left-0 luth-top-full luth-flex luth-justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "luth-origin-top-center luth-relative luth-mt-1.5 luth-h-[var(--radix-navigation-menu-viewport-height)] luth-w-full luth-overflow-hidden luth-rounded-md luth-border luth-bg-popover luth-text-popover-foreground luth-shadow data-[state=open]:luth-animate-in data-[state=closed]:luth-animate-out data-[state=closed]:luth-zoom-out-95 data-[state=open]:luth-zoom-in-90 md:luth-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "luth-top-full luth-z-[1] luth-flex luth-h-1.5 luth-items-end luth-justify-center luth-overflow-hidden data-[state=visible]:luth-animate-in data-[state=hidden]:luth-animate-out data-[state=hidden]:luth-fade-out data-[state=visible]:luth-fade-in",
      className
    )}
    {...props}
  >
    <div className="luth-relative luth-top-[60%] luth-h-2 luth-w-2 luth-rotate-45 luth-rounded-tl-sm luth-bg-border luth-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
