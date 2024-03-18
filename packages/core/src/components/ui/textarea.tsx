import * as React from 'react'

import { cn } from '@/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'luth-flex luth-min-h-[60px] luth-w-full luth-rounded-md luth-border luth-border-input luth-bg-transparent luth-px-3 luth-py-2 luth-text-sm luth-shadow-sm placeholder:luth-text-muted-foreground focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-cursor-not-allowed disabled:luth-opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
