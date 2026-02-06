"use client"

import * as React from "react"
import { cn } from "@/lib/Utils"

/* -------------------- CONTEXT -------------------- */
type SheetContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextType | null>(null)

function useSheet() {
  const context = React.useContext(SheetContext)
  if (!context) {
    throw new Error("Sheet components must be used within <Sheet />")
  }
  return context
}

/* -------------------- ROOT -------------------- */
interface SheetProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sheet({ children, open: controlledOpen, onOpenChange }: SheetProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = (value: boolean) => {
    if (!isControlled) setInternalOpen(value)
    onOpenChange?.(value)
  }

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

/* -------------------- TRIGGER (FIXED) -------------------- */
interface SheetTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export function SheetTrigger({ children, asChild }: SheetTriggerProps) {
  const { setOpen } = useSheet()

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<any>,
      {
        onClick: () => setOpen(true),
      }
    )
  }

  return (
    <button onClick={() => setOpen(true)}>
      {children}
    </button>
  )
}

/* -------------------- CONTENT -------------------- */
interface SheetContentProps {
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
}

export function SheetContent({
  children,
  side = "right",
  className,
}: SheetContentProps) {
  const { open, setOpen } = useSheet()

  if (!open) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 z-50 h-full w-[85%] max-w-sm bg-background shadow-xl transition-transform duration-300",
          side === "right" ? "right-0" : "left-0",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}

/* -------------------- HEADER -------------------- */
interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

export function SheetHeader({ children, className }: SheetHeaderProps) {
  return (
    <div className={cn("border-b border-border px-4 py-4", className)}>
      {children}
    </div>
  )
}

/* -------------------- TITLE -------------------- */
interface SheetTitleProps {
  children: React.ReactNode
  className?: string
}

export function SheetTitle({ children, className }: SheetTitleProps) {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>
      {children}
    </h2>
  )
}

/* -------------------- DESCRIPTION -------------------- */
interface SheetDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function SheetDescription({ children, className }: SheetDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}
