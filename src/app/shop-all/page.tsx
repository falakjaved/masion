import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse our complete premium collection",
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
    price: "$220",
    category: "Living",
    href: "/products/comfort-sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
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
  {
    id: 7,
    name: "Round Coffee Table",
    price: "$140",
    category: "Living",
    href: "/products/coffee-table",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 8,
    name: "Luxury Bed",
    price: "$320",
    category: "Bedroom",
    href: "/products/luxury-bed",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 9,
    name: "Wall Clock",
    price: "$60",
    category: "Decor",
    href: "/products/wall-clock",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  },
  {
    id: 10,
    name: "Cozy Armchair",
    price: "$200",
    category: "Furniture",
    href: "/products/cozy-armchair",
    image: "https://images.unsplash.com/photo-1739980153522-23e9fbca080b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y296eS1hcm1jaGFpcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    name: "Glass Coffee Table",
    price: "$130",
    category: "Living",
    href: "/products/glass-coffee-table",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
  },
  {
    id: 12,
    name: "Compact Bookshelf",
    price: "$180",
    category: "Storage",
    href: "/products/compact-bookshelf",
    image: "https://images.unsplash.com/photo-1663061840897-0d7d03b4a95e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFjdC1ib29rc2hlbGZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    name: "Wool Area Rug",
    price: "$250",
    category: "Decor",
    href: "/products/wool-area-rug",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  },
  {
    id: 14,
    name: "Modern Cabinet",
    price: "$260",
    category: "Storage",
    href: "/products/modern-cabinet",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  {
    id: 15,
    name: "Floor Lamp",
    price: "$110",
    category: "Lighting",
    href: "/products/floor-lamp",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
  },
  {
    id: 16,
    name: "Accent Mirror",
    price: "$130",
    category: "Decor",
    href: "/products/accent-mirror",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 17,
    name: "Dining Set",
    price: "$450",
    category: "Dining",
    href: "/products/dining-set",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 18,
    name: "Side Table",
    price: "$90",
    category: "Living",
    href: "/products/side-table",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
  },
  {
    id: 19,
    name: "Hanging Light",
    price: "$145",
    category: "Lighting",
    href: "/products/hanging-light",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    id: 20,
    name: "Minimal Bench",
    price: "$160",
    category: "Furniture",
    href: "/products/minimal-bench",
    image: "https://images.unsplash.com/photo-1583845112203-29329902332e",
  },
]

export default function ShopAllPage() {
  return (
    <main className="container mx-auto px-4 py-14">
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">
          Shop All Products
        </h1>
        <p className="mt-3 text-muted-foreground">
          Discover thoughtfully designed pieces for modern living
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={product.href} className="group">
            <div className="rounded-xl border overflow-hidden bg-background transition hover:shadow-xl">
              <div className="relative h-105 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                  {product.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-medium">{product.price}</p>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition">
                    View →
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
