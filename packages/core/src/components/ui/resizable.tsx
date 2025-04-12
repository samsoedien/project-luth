"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "luth-flex luth-h-full luth-w-full data-[panel-group-direction=vertical]:luth-flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "luth-bg-border focus-visible:luth-ring-ring luth-relative luth-flex luth-w-px luth-items-center luth-justify-center after:luth-absolute after:luth-inset-y-0 after:luth-left-1/2 after:luth-w-1 after:luth--translate-x-1/2 focus-visible:luth-ring-1 focus-visible:luth-ring-offset-1 focus-visible:luth-outline-hidden data-[panel-group-direction=vertical]:luth-h-px data-[panel-group-direction=vertical]:luth-w-full data-[panel-group-direction=vertical]:after:luth-left-0 data-[panel-group-direction=vertical]:after:luth-h-1 data-[panel-group-direction=vertical]:after:luth-w-full data-[panel-group-direction=vertical]:after:luth--translate-y-1/2 data-[panel-group-direction=vertical]:after:luth-translate-x-0 [&[data-panel-group-direction=vertical]>div]:luth-rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="luth-bg-border luth-z-10 luth-flex luth-h-4 luth-w-3 luth-items-center luth-justify-center luth-rounded-xs luth-border">
          <GripVerticalIcon className="luth-size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
