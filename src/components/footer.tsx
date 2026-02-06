import Link from "next/link"

const pageLinks = [
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

const supportLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/cart", label: "Cart" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              STORE
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover curated collections and timeless pieces for every season.
            </p>
          </div>

          {/* Explore Pages */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2">
              {pageLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Pages */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-2">
              {pageLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} STORE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
