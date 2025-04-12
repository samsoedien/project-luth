"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/utils"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("luth-p-3", className)}
      classNames={{
        months: "luth-flex luth-flex-col sm:luth-flex-row luth-gap-2",
        month: "luth-flex luth-flex-col luth-gap-4",
        caption: "luth-flex luth-justify-center luth-pt-1 luth-relative luth-items-center luth-w-full",
        caption_label: "luth-text-sm luth-font-medium",
        nav: "luth-flex luth-items-center luth-gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "luth-size-7 luth-bg-transparent luth-p-0 luth-opacity-50 hover:luth-opacity-100"
        ),
        nav_button_previous: "luth-absolute luth-left-1",
        nav_button_next: "luth-absolute luth-right-1",
        table: "luth-w-full luth-border-collapse luth-space-x-1",
        head_row: "luth-flex",
        head_cell:
          "luth-text-muted-foreground luth-rounded-md luth-w-8 luth-font-normal luth-text-[0.8rem]",
        row: "luth-flex luth-w-full luth-mt-2",
        cell: cn(
          "luth-relative luth-p-0 luth-text-center luth-text-sm focus-within:luth-relative focus-within:luth-z-20 [&:has([aria-selected])]:luth-bg-accent [&:has([aria-selected].day-range-end)]:luth-rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:luth-rounded-r-md [&:has(>.day-range-start)]:luth-rounded-l-md first:[&:has([aria-selected])]:luth-rounded-l-md last:[&:has([aria-selected])]:luth-rounded-r-md"
            : "[&:has([aria-selected])]:luth-rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "luth-size-8 luth-p-0 luth-font-normal aria-selected:luth-opacity-100"
        ),
        day_range_start:
          "luth-day-range-start aria-selected:luth-bg-primary aria-selected:luth-text-primary-foreground",
        day_range_end:
          "luth-day-range-end aria-selected:luth-bg-primary aria-selected:luth-text-primary-foreground",
        day_selected:
          "luth-bg-primary luth-text-primary-foreground hover:luth-bg-primary hover:luth-text-primary-foreground focus:luth-bg-primary focus:luth-text-primary-foreground",
        day_today: "luth-bg-accent luth-text-accent-foreground",
        day_outside:
          "luth-day-outside luth-text-muted-foreground aria-selected:luth-text-muted-foreground",
        day_disabled: "luth-text-muted-foreground luth-opacity-50",
        day_range_middle:
          "aria-selected:luth-bg-accent aria-selected:luth-text-accent-foreground",
        day_hidden: "luth-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeftIcon className={cn("luth-size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRightIcon className={cn("luth-size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}

export { Calendar }
