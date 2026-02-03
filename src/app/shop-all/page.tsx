import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/Utils"

export const metadata: Metadata = {
  title: "Shop All",
  description: "Discover our full collection of premium products",
}

const products = [
  {
    id: 1,
    name: "Minimal Chair",
    price: "$120",
    category: "Furniture",
    href: "/products/minimal-chair",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    id: 2,
    name: "Modern Lamp",
    price: "$150",
    category: "Lighting",
    href: "/products/modern-lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
  },
  {
    id: 3,
    name: "Wooden Table",
    price: "$180",
    category: "Furniture",
    href: "/products/wooden-table",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  },
  {
    id: 4,
    name: "Comfort Sofa",
    price: "$200",
    category: "Living",
    href: "/products/comfort-sofa",
    image: "https://images.unsplash.com/photo-1582582429416-5c1c4c6c1b9b",
  },
  {
    id: 5,
    name: "Elegant Shelf",
    price: "$95",
    category: "Decor",
    href: "/products/elegant-shelf",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  },
  {
    id: 6,
    name: "Designer Armchair",
    price: "$170",
    category: "Furniture",
    href: "/products/designer-armchair",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },
]

export default function ShopAllPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Shop All Products</h1>
        <p className="mt-3 text-muted-foreground">
          Carefully curated pieces to elevate your space with timeless design
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className="group"
          >
            <div
              className={cn(
                "rounded-xl border border-border bg-background overflow-hidden",
                "transition hover:shadow-lg"
              )}
            >
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold tracking-tight">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-medium">{product.price}</p>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition">
                    View Product →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
