import * as React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      className={`w-full rounded-md border border-gray-300 bg-background px-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground ${className}`}
      ref={ref}
      {...props}
    />
  )
)

Input.displayName = "Input"
