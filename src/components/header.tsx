"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const navLinks = [
  { name: "Shop", href: "#" },
  { name: "Collections", href: "#" },
  { name: "About", href: "#" },
  { name: "Journal", href: "#" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur bg-white supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Maison
          </Link>
        </div>

        <div className="flex items-center gap-x-2">
          <Button variant="ghost" size="icon"><Search className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex"><User className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] text-background">2</span>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
