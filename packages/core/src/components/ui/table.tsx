"use client"

import * as React from "react"

import { cn } from "@/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="luth-relative luth-w-full luth-overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("luth-w-full luth-caption-bottom luth-text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:luth-border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:luth-border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "luth-bg-muted/50 luth-border-t luth-font-medium [&>tr]:last:luth-border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:luth-bg-muted/50 data-[state=selected]:luth-bg-muted luth-border-b luth-transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "luth-text-foreground luth-h-10 luth-px-2 luth-text-left luth-align-middle luth-font-medium luth-whitespace-nowrap [&:has([role=checkbox])]:luth-pr-0 [&>[role=checkbox]]:luth-translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "luth-p-2 luth-align-middle luth-whitespace-nowrap [&:has([role=checkbox])]:luth-pr-0 [&>[role=checkbox]]:luth-translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("luth-text-muted-foreground luth-mt-4 luth-text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
