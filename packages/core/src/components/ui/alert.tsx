import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const alertVariants = cva(
  'luth-relative luth-w-full luth-rounded-lg luth-border luth-px-4 luth-py-3 luth-text-sm [&>svg+div]:luth-translate-y-[-3px] [&>svg]:luth-absolute [&>svg]:luth-left-4 [&>svg]:luth-top-4 [&>svg]:luth-text-foreground [&>svg~*]:luth-pl-7',
  {
    variants: {
      variant: {
        default: 'luth-bg-background luth-text-foreground',
        destructive:
          'luth-border-destructive/50 luth-text-destructive dark:luth-border-destructive [&>svg]:luth-text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('luth-mb-1 luth-font-medium luth-leading-none luth-tracking-tight', className)}
      {...props}
    />
  ),
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('luth-text-sm [&_p]:luth-leading-relaxed', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
