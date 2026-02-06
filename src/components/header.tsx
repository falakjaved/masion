"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // dummy (backend later)
  const cartCount = 2
  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur bg-white supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Maison
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-x-2">
          
          {/* 🔍 Search */}
          <Button asChild variant="ghost" size="icon">
            <Link href="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          {/* 👤 User */}
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
          >
            <Link href={isLoggedIn ? "/account" : "/login"}>
              <User className="h-5 w-5" />
            </Link>
          </Button>

          {/* 🛍️ Cart */}
          <Button asChild variant="ghost" size="icon" className="relative">
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
