'use client'

import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/utils'

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'luth-flex luth-h-full luth-w-full data-[panel-group-direction=vertical]:luth-flex-col',
      className,
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'luth-relative luth-flex luth-w-px luth-items-center luth-justify-center luth-bg-border after:luth-absolute after:luth-inset-y-0 after:luth-left-1/2 after:luth-w-1 after:luth--translate-x-1/2 focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring focus-visible:luth-ring-offset-1 data-[panel-group-direction=vertical]:luth-h-px data-[panel-group-direction=vertical]:luth-w-full data-[panel-group-direction=vertical]:after:luth-left-0 data-[panel-group-direction=vertical]:after:luth-h-1 data-[panel-group-direction=vertical]:after:luth-w-full data-[panel-group-direction=vertical]:after:luth--translate-y-1/2 data-[panel-group-direction=vertical]:after:luth-translate-x-0 [&[data-panel-group-direction=vertical]>div]:luth-rotate-90',
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="luth-z-10 luth-flex luth-h-4 luth-w-3 luth-items-center luth-justify-center luth-rounded-sm luth-border luth-bg-border">
        <DragHandleDots2Icon className="luth-h-2.5 luth-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
