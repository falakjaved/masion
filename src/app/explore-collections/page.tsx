import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CollectionCard } from "@/components/about/collection-card";

export const metadata: Metadata = {
  title: "Explore Collections | Premium E-Commerce",
  description:
    "Discover our curated collections of premium products designed for modern living.",
};

const collections = [
  {
    id: 1,
    title: "Living Room",
    description:
      "Transform your space with carefully selected pieces that blend comfort and style.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    href: "/collections/living-room",
    itemCount: 42,
  },
  {
    id: 2,
    title: "Bedroom",
    description:
      "Create your personal sanctuary with our serene bedroom collection.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    href: "/collections/bedroom",
    itemCount: 38,
  },
  {
    id: 3,
    title: "Kitchen",
    description:
      "Elevate your culinary space with functional elegance and modern design.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    href: "/collections/kitchen",
    itemCount: 56,
  },
  {
    id: 4,
    title: "Office",
    description:
      "Productivity meets sophistication in our curated workspace essentials.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    href: "/collections/office",
    itemCount: 29,
  },
  {
    id: 5,
    title: "Outdoor",
    description: "Extend your living space with premium outdoor furnishings.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    href: "/collections/outdoor",
    itemCount: 34,
  },
  {
    id: 6,
    title: "Decor",
    description:
      "Finishing touches that bring character and warmth to any room.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    href: "/collections/decor",
    itemCount: 67,
  },
];

export default function ExploreCollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Explore Collections
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Discover thoughtfully curated collections designed to transform
              your space into something extraordinary.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Collections Showcase */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              title={collection.title}
              description={collection.description}
              image={collection.image}
              href={collection.href}
              itemCount={collection.itemCount}
            />
          ))}
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
              alt="New Arrivals Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative px-8 py-20 sm:px-12 sm:py-28 lg:px-16 lg:py-36">
            <div className="max-w-xl">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-card/80">
                Featured Collection
              </span>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-card sm:text-4xl lg:text-5xl text-balance">
                New Arrivals
              </h2>
              <p className="mt-4 text-base leading-relaxed text-card/90 sm:text-lg text-pretty">
                Be the first to discover our latest additions. Fresh designs
                that push boundaries while honoring timeless craftsmanship.
              </p>
              <Link
                href="/collections/new-arrivals"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-card/90 hover:gap-3"
              >
                Shop New Arrivals
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Ready to explore more?
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty bg-amber-50">
              Browse our complete catalog of over 500 carefully selected
              products designed for modern living.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:gap-3 "
            >
              Shop All Products
              <ArrowRight className="h-4 w-4 bg-amber-50" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
