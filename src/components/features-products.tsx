import Link from "next/link"
import { Button } from "./ui/button"

const products = [
  { name: "Ceramic Vase Set", category: "Decor", price: "$89", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80" },
  { name: "Linen Throw Blanket", category: "Living", price: "$128", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { name: "Marble Serving Board", category: "Kitchen", price: "$64", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { name: "Brass Table Lamp", category: "Living", price: "$195", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80" },
]

export function FeaturedProducts() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-medium text-foreground">Featured Products</h2>
          {/* ✅ Fixed variant */}
          <Button variant="ghost" size="default" asChild>
  <Link href="#">View All Products</Link>
</Button>

        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="rounded-lg bg-card p-4 shadow-sm">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground">{product.category}</p>
              <h3 className="mt-1 font-serif text-lg font-medium text-card-foreground">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-accent">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
