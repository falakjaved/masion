import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/Utils"

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse all products available in our store",
}

const products = [
  {
    id: 1,
    name: "Minimal Chair",
    price: "$120",
    href: "/products/minimal-chair",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    id: 2,
    name: "Modern Lamp",
    price: "$150",
    href: "/products/modern-lamp",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
  },
  {
    id: 3,
    name: "Wooden Table",
    price: "$180",
    href: "/products/wooden-table",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  },
  {
    id: 4,
    name: "Comfort Sofa",
    price: "$200",
    href: "/products/comfort-sofa",
    image:
      "https://images.unsplash.com/photo-1582582429416-5c1c4c6c1b9b",
  },
]

export default function ShopAllPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Shop All</h1>
        <p className="text-muted-foreground mt-2">
          Explore all available products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className={cn(
              "group rounded-lg border border-border p-4 transition",
              "hover:border-accent hover:bg-accent/30"
            )}
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-md bg-muted mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <h3 className="font-medium text-base group-hover:text-accent-foreground">
              {product.name}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {product.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
