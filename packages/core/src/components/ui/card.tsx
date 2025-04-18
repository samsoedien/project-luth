import * as React from "react"

import { cn } from "@/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "luth-bg-card luth-text-card-foreground luth-flex luth-flex-col luth-gap-6 luth-rounded-xl luth-border luth-py-6 luth-shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "luth-@container/card-header luth-grid luth-auto-rows-min luth-grid-rows-[auto_auto] luth-items-start luth-gap-1.5 luth-px-6 has-data-[slot=card-action]:luth-grid-cols-[1fr_auto] [.border-b]:luth-pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("luth-leading-none luth-font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("luth-text-muted-foreground luth-text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "luth-col-start-2 luth-row-span-2 luth-row-start-1 luth-self-start luth-justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("luth-px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("luth-flex luth-items-center luth-px-6 [.border-t]:luth-pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
