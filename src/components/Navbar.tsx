"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/Utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop-all", label: "Shop All" },
  { href: "/products", label: "Products" },
  { href: "/collections", label: "Collections" },
  { href: "/explore-collections", label: "Explore Collections" },
  { href: "/new-season", label: "New Season" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
]

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          STORE
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {/* @ts-ignore */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {/* @ts-ignore */}
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-75 sm:w-100">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight mb-4"
                onClick={() => setIsOpen(false)}
              >
                STORE
              </Link>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground",
                      pathname === link.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default Navbar
