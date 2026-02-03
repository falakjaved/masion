"use client";

import { cn } from "@/lib/Utils";
import * as React from "react";


type SheetContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextType | null>(null);

function useSheet() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within <Sheet />");
  }
  return context;
}

/* -------------------- ROOT -------------------- */

export function Sheet({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

/* -------------------- TRIGGER -------------------- */

export function SheetTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setOpen } = useSheet();

  return (
    <button onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

/* -------------------- CONTENT -------------------- */

export function SheetContent({
  children,
  side = "right",
  className,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}) {
  const { open, setOpen } = useSheet();

  if (!open) return null;

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
          side === "right"
            ? "right-0 translate-x-0"
            : "left-0 translate-x-0",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

/* -------------------- HEADER -------------------- */

export function SheetHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-border px-4 py-4", className)}>
      {children}
    </div>
  );
}

/* -------------------- TITLE -------------------- */

export function SheetTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>
      {children}
    </h2>
  );
}

/* -------------------- DESCRIPTION -------------------- */

export function SheetDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}
