import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-7xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}
