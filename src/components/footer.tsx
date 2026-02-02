import Link from "next/link"

const footerLinks = {
  shop: ["All Products","New Arrivals","Best Sellers","Sale"],
  company: ["Our Story","Sustainability","Press","Careers"],
  support: ["Contact Us","FAQs","Shipping & Returns","Care Guide"]
}

export function Footer() {
  return (
    <footer className="bg-background bg-amber-50 px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl font-medium text-foreground">Maison</Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We dream up products that bring comfort and style to your home. Thoughtfully designed, sustainably made.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase text-foreground">Shop</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => <li key={link}><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{link}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => <li key={link}><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{link}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase text-foreground">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => <li key={link}><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{link}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Maison. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
