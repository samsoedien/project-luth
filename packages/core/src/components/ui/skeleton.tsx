import { cn } from "@/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("luth-bg-accent luth-animate-pulse luth-rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
