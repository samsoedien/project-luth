import { cn } from '@/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('luth-animate-pulse luth-rounded-md luth-bg-primary/10', className)}
      {...props}
    />
  )
}

export { Skeleton }
