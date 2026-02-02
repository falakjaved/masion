import Link from "next/link"

const categories = [
  { name: "Living", products: "42 products", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80" },
  { name: "Kitchen", products: "38 products", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { name: "Bedroom", products: "27 products", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { name: "Decor", products: "56 products", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
]

export function Categories() {
  return (
    <section className="bg-card px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-card-foreground sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our thoughtfully curated collections designed to elevate every corner of your home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} href="#" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-3/4 overflow-hidden bg-muted">
                <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-card/80">{category.products}</p>
                <h3 className="mt-1 font-serif text-xl font-medium text-card">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
