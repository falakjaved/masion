import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              New Collection 2026
            </p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Elevated living starts at home
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Discover our curated selection of premium home goods and lifestyle essentials,
              thoughtfully designed to transform your everyday spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">Our Story</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-lg bg-muted">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                alt="Modern living room with curated home decor"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-card p-4 shadow-lg sm:p-6">
              <p className="text-sm font-medium text-muted-foreground">Featured</p>
              <p className="mt-1 font-serif text-lg font-medium text-card-foreground">Artisan Ceramics</p>
              <p className="mt-1 text-sm text-accent">From $48</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
