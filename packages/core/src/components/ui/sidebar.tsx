"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/components/hooks/use-mobile"
import { cn } from "@/components/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "luth-group/sidebar-wrapper has-data-[variant=inset]:luth-bg-sidebar luth-flex luth-min-h-svh luth-w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "luth-bg-sidebar luth-text-sidebar-foreground luth-flex luth-h-full luth-w-(--sidebar-width) luth-flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="luth-bg-sidebar luth-text-sidebar-foreground luth-w-(--sidebar-width) luth-p-0 [&>button]:luth-hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="luth-sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="luth-flex luth-h-full luth-w-full luth-flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="luth-group luth-peer luth-text-sidebar-foreground luth-hidden md:luth-block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "luth-relative luth-w-(--sidebar-width) luth-bg-transparent luth-transition-[width] luth-duration-200 luth-ease-linear",
          "group-data-[collapsible=offcanvas]:luth-w-0",
          "group-data-[side=right]:luth-rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:luth-w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:luth-w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "luth-fixed luth-inset-y-0 luth-z-10 luth-hidden luth-h-svh luth-w-(--sidebar-width) luth-transition-[left,right,width] luth-duration-200 luth-ease-linear md:luth-flex",
          side === "left"
            ? "luth-left-0 group-data-[collapsible=offcanvas]:luth-left-[calc(var(--sidebar-width)*-1)]"
            : "luth-right-0 group-data-[collapsible=offcanvas]:luth-right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "luth-p-2 group-data-[collapsible=icon]:luth-w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:luth-w-(--sidebar-width-icon) group-data-[side=left]:luth-border-r group-data-[side=right]:luth-border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="luth-bg-sidebar group-data-[variant=floating]:luth-border-sidebar-border luth-flex luth-h-full luth-w-full luth-flex-col group-data-[variant=floating]:luth-rounded-lg group-data-[variant=floating]:luth-border group-data-[variant=floating]:luth-shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("luth-size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="luth-sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:luth-bg-sidebar-border luth-absolute luth-inset-y-0 luth-z-20 luth-hidden luth-w-4 luth--translate-x-1/2 luth-transition-all luth-ease-linear group-data-[side=left]:luth--right-4 group-data-[side=right]:luth-left-0 after:luth-absolute after:luth-inset-y-0 after:luth-left-1/2 after:luth-w-[2px] sm:luth-flex",
        "in-data-[side=left]:luth-cursor-w-resize in-data-[side=right]:luth-cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:luth-cursor-e-resize [[data-side=right][data-state=collapsed]_&]:luth-cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:luth-bg-sidebar group-data-[collapsible=offcanvas]:luth-translate-x-0 group-data-[collapsible=offcanvas]:after:luth-left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:luth--right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:luth--left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "luth-bg-background luth-relative luth-flex luth-w-full luth-flex-1 luth-flex-col",
        "md:peer-data-[variant=inset]:luth-m-2 md:peer-data-[variant=inset]:luth-ml-0 md:peer-data-[variant=inset]:luth-rounded-xl md:peer-data-[variant=inset]:luth-shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:luth-ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("luth-bg-background luth-h-8 luth-w-full luth-shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("luth-flex luth-flex-col luth-gap-2 luth-p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("luth-flex luth-flex-col luth-gap-2 luth-p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("luth-bg-sidebar-border luth-mx-2 luth-w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "luth-flex luth-min-h-0 luth-flex-1 luth-flex-col luth-gap-2 luth-overflow-auto group-data-[collapsible=icon]:luth-overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("luth-relative luth-flex luth-w-full luth-min-w-0 luth-flex-col luth-p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "luth-text-sidebar-foreground/70 luth-ring-sidebar-ring luth-flex luth-h-8 luth-shrink-0 luth-items-center luth-rounded-md luth-px-2 luth-text-xs luth-font-medium luth-outline-hidden luth-transition-[margin,opacity] luth-duration-200 luth-ease-linear focus-visible:luth-ring-2 [&>svg]:luth-size-4 [&>svg]:luth-shrink-0",
        "group-data-[collapsible=icon]:luth--mt-8 group-data-[collapsible=icon]:luth-opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "luth-text-sidebar-foreground luth-ring-sidebar-ring hover:luth-bg-sidebar-accent hover:luth-text-sidebar-accent-foreground luth-absolute luth-top-3.5 luth-right-3 luth-flex luth-aspect-square luth-w-5 luth-items-center luth-justify-center luth-rounded-md luth-p-0 luth-outline-hidden luth-transition-transform focus-visible:luth-ring-2 [&>svg]:luth-size-4 [&>svg]:luth-shrink-0",
        // Increases the hit area of the button on mobile.
        "after:luth-absolute after:luth--inset-2 md:after:luth-hidden",
        "group-data-[collapsible=icon]:luth-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("luth-w-full luth-text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("luth-flex luth-w-full luth-min-w-0 luth-flex-col luth-gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("luth-group/menu-item luth-relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "luth-peer/menu-button luth-flex luth-w-full luth-items-center luth-gap-2 luth-overflow-hidden luth-rounded-md luth-p-2 luth-text-left luth-text-sm luth-outline-hidden luth-ring-sidebar-ring luth-transition-[width,height,padding] hover:luth-bg-sidebar-accent hover:luth-text-sidebar-accent-foreground focus-visible:luth-ring-2 active:luth-bg-sidebar-accent active:luth-text-sidebar-accent-foreground disabled:luth-pointer-events-none disabled:luth-opacity-50 luth-group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:luth-pointer-events-none aria-disabled:luth-opacity-50 data-[active=true]:luth-bg-sidebar-accent data-[active=true]:luth-font-medium data-[active=true]:luth-text-sidebar-accent-foreground data-[state=open]:hover:luth-bg-sidebar-accent data-[state=open]:hover:luth-text-sidebar-accent-foreground group-data-[collapsible=icon]:luth-size-8! group-data-[collapsible=icon]:luth-p-2! [&>span:last-child]:luth-truncate [&>svg]:luth-size-4 [&>svg]:luth-shrink-0",
  {
    variants: {
      variant: {
        default: "hover:luth-bg-sidebar-accent hover:luth-text-sidebar-accent-foreground",
        outline:
          "luth-bg-background luth-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:luth-bg-sidebar-accent hover:luth-text-sidebar-accent-foreground hover:luth-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "luth-h-8 luth-text-sm",
        sm: "luth-h-7 luth-text-xs",
        lg: "luth-h-12 luth-text-sm group-data-[collapsible=icon]:luth-p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "luth-text-sidebar-foreground luth-ring-sidebar-ring hover:luth-bg-sidebar-accent hover:luth-text-sidebar-accent-foreground luth-peer-hover/menu-button:text-sidebar-accent-foreground luth-absolute luth-top-1.5 luth-right-1 luth-flex luth-aspect-square luth-w-5 luth-items-center luth-justify-center luth-rounded-md luth-p-0 luth-outline-hidden luth-transition-transform focus-visible:luth-ring-2 [&>svg]:luth-size-4 [&>svg]:luth-shrink-0",
        // Increases the hit area of the button on mobile.
        "after:luth-absolute after:luth--inset-2 md:after:luth-hidden",
        "luth-peer-data-[size=sm]/menu-button:top-1",
        "luth-peer-data-[size=default]/menu-button:top-1.5",
        "luth-peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:luth-hidden",
        showOnHover &&
          "luth-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground luth-group-focus-within/menu-item:opacity-100 luth-group-hover/menu-item:opacity-100 data-[state=open]:luth-opacity-100 md:luth-opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "luth-text-sidebar-foreground luth-pointer-events-none luth-absolute luth-right-1 luth-flex luth-h-5 luth-min-w-5 luth-items-center luth-justify-center luth-rounded-md luth-px-1 luth-text-xs luth-font-medium luth-tabular-nums luth-select-none",
        "luth-peer-hover/menu-button:text-sidebar-accent-foreground luth-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "luth-peer-data-[size=sm]/menu-button:top-1",
        "luth-peer-data-[size=default]/menu-button:top-1.5",
        "luth-peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:luth-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("luth-flex luth-h-8 luth-items-center luth-gap-2 luth-rounded-md luth-px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="luth-size-4 luth-rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="luth-h-4 luth-max-w-(--skeleton-width) luth-flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "luth-border-sidebar-border luth-mx-3.5 luth-flex luth-min-w-0 luth-translate-x-px luth-flex-col luth-gap-1 luth-border-l luth-px-2.5 luth-py-0.5",
        "group-data-[collapsible=icon]:luth-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("luth-group/menu-sub-item luth-relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "luth-text-sidebar-foreground luth-ring-sidebar-ring hover:luth-bg-sidebar-accent hover:luth-text-sidebar-accent-foreground active:luth-bg-sidebar-accent active:luth-text-sidebar-accent-foreground [&>svg]:luth-text-sidebar-accent-foreground luth-flex luth-h-7 luth-min-w-0 luth--translate-x-px luth-items-center luth-gap-2 luth-overflow-hidden luth-rounded-md luth-px-2 luth-outline-hidden focus-visible:luth-ring-2 disabled:luth-pointer-events-none disabled:luth-opacity-50 aria-disabled:luth-pointer-events-none aria-disabled:luth-opacity-50 [&>span:last-child]:luth-truncate [&>svg]:luth-size-4 [&>svg]:luth-shrink-0",
        "data-[active=true]:luth-bg-sidebar-accent data-[active=true]:luth-text-sidebar-accent-foreground",
        size === "sm" && "luth-text-xs",
        size === "md" && "luth-text-sm",
        "group-data-[collapsible=icon]:luth-hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
