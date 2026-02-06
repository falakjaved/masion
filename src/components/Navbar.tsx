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
  {href: "/contact", label: "contact"}
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          STORE
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={(value: boolean) => setOpen(value)}>
          <SheetTrigger asChild>
            <Button asChild={true} variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 sm:w-80">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/" className="text-xl font-bold" onClick={() => setOpen(false)}>
                STORE
              </Link>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent",
                      pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
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
