import * as React from 'react'

import { cn } from '@/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'luth-flex luth-h-9 luth-w-full luth-rounded-md luth-border luth-border-input luth-bg-transparent luth-px-3 luth-py-1 luth-text-sm luth-shadow-sm luth-transition-colors file:luth-border-0 file:luth-bg-transparent file:luth-text-sm file:luth-font-medium placeholder:luth-text-muted-foreground focus-visible:luth-outline-none focus-visible:luth-ring-1 focus-visible:luth-ring-ring disabled:luth-cursor-not-allowed disabled:luth-opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
