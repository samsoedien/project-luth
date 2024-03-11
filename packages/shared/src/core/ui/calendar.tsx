'use client'

import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/utils'
import { buttonVariants } from '@/core/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('luth-p-3', className)}
      classNames={{
        months:
          'luth-flex luth-flex-col sm:luth-flex-row luth-space-y-4 sm:luth-space-x-4 sm:luth-space-y-0',
        month: 'luth-space-y-4',
        caption: 'luth-flex luth-justify-center luth-pt-1 luth-relative luth-items-center',
        caption_label: 'luth-text-sm luth-font-medium',
        nav: 'luth-space-x-1 luth-flex luth-items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'luth-h-7 luth-w-7 luth-bg-transparent luth-p-0 luth-opacity-50 hover:luth-opacity-100',
        ),
        nav_button_previous: 'luth-absolute luth-left-1',
        nav_button_next: 'luth-absolute luth-right-1',
        table: 'luth-w-full luth-border-collapse luth-space-y-1',
        head_row: 'luth-flex',
        head_cell:
          'luth-text-muted-foreground luth-rounded-md luth-w-8 luth-font-normal luth-text-[0.8rem]',
        row: 'luth-flex luth-w-full luth-mt-2',
        cell: cn(
          'luth-relative luth-p-0 luth-text-center luth-text-sm focus-within:luth-relative focus-within:luth-z-20 [&:has([aria-selected])]:luth-bg-accent [&:has([aria-selected].day-outside)]:luth-bg-accent/50 [&:has([aria-selected].day-range-end)]:luth-rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:luth-rounded-r-md [&:has(>.day-range-start)]:luth-rounded-l-md first:[&:has([aria-selected])]:luth-rounded-l-md last:[&:has([aria-selected])]:luth-rounded-r-md'
            : '[&:has([aria-selected])]:luth-rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'luth-h-8 luth-w-8 luth-p-0 luth-font-normal aria-selected:luth-opacity-100',
        ),
        day_range_start: 'luth-day-range-start',
        day_range_end: 'luth-day-range-end',
        day_selected:
          'luth-bg-primary luth-text-primary-foreground hover:luth-bg-primary hover:luth-text-primary-foreground focus:luth-bg-primary focus:luth-text-primary-foreground',
        day_today: 'luth-bg-accent luth-text-accent-foreground',
        day_outside:
          'luth-day-outside luth-text-muted-foreground luth-opacity-50 luth- aria-selected:luth-bg-accent/50 aria-selected:luth-text-muted-foreground aria-selected:luth-opacity-30',
        day_disabled: 'luth-text-muted-foreground luth-opacity-50',
        day_range_middle: 'aria-selected:luth-bg-accent aria-selected:luth-text-accent-foreground',
        day_hidden: 'luth-invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="luth-h-4 luth-w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="luth-h-4 luth-w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
