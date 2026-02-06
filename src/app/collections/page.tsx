import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CollectionCard } from "@/components/collection-card";

export const metadata: Metadata = {
  title: "Collections | Premium E-Commerce",
  description:
    "Explore our carefully curated collections of premium products, designed to bring elegance and sophistication to your everyday life.",
  openGraph: {
    title: "Collections | Premium E-Commerce",
    description:
      "Explore our carefully curated collections of premium products.",
    type: "website",
  },
};

// Dummy data for collections
const collections = [
  {
    id: "1",
    name: "Minimalist Living",
    description:
      "Clean lines and thoughtful design for the modern home.",
    image: "/minimalist-living.avif",
    href: "/collections/minimalist-living",
    itemCount: 24,
  },
  {
    id: "2",
    name: "Artisan Ceramics",
    description:
      "Handcrafted pieces that bring warmth to any space.",
    image: "/artisan-ceramics.avif",
    href: "/collections/artisan-ceramics",
    itemCount: 18,
  },
  {
    id: "3",
    name: "Natural Textiles",
    description:
      "Sustainable fabrics woven with care and intention.",
    image: "/natural-textiles.avif",
    href: "/collections/natural-textiles",
    itemCount: 32,
  },
  {
    id: "4",
    name: "Organic Botanicals",
    description:
      "Bring nature indoors with our curated plant collection.",
    image: "/organic-botanicals.webp",
    href: "/collections/organic-botanicals",
    itemCount: 15,
  },
  {
    id: "5",
    name: "Timeless Furniture",
    description:
      "Investment pieces designed to last generations.",
    image: "/timeless-furniture.webp",
    href: "/collections/timeless-furniture",
    itemCount: 28,
  },
  {
    id: "6",
    name: "Ambient Lighting",
    description:
      "Set the mood with our sculptural light designs.",
    image: "/ambient-lighting.webp",
    href: "/collections/ambient-lighting",
    itemCount: 12,
  },
];

const featuredCollection = {
  name: "The New Season Collection",
  tagline: "Curated for Contemporary Living",
  description:
    "Discover our latest selection of premium home essentials. Each piece has been thoughtfully chosen to complement modern interiors while standing the test of time.",
  image: "/new-season-collection.png",
  href: "/collections/new-season",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <header className="px-6 pb-16 pt-24 text-center md:px-12 md:pb-20 md:pt-32 lg:px-24">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          Collections
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Thoughtfully curated selections that bring beauty and function
          together. Each collection tells a story of craftsmanship and design.
        </p>
      </header>

      {/* Collections Grid */}
      <section
        className="px-6 pb-24 md:px-12 lg:px-24"
        aria-labelledby="collections-heading"
      >
        <h2 id="collections-heading" className="sr-only">
          Our Collections
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              name={collection.name}
              description={collection.description}
              image={collection.image}
              href={collection.href}
              itemCount={collection.itemCount}
            />
          ))}
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section
        className="relative overflow-hidden bg-secondary"
        aria-labelledby="featured-heading"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="grid min-h-150 grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Text Content */}
            <div className="order-2 lg:order-1 lg:py-24">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-accent">
                Featured Collection
              </span>
              <h2
                id="featured-heading"
                className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance"
              >
                {featuredCollection.name}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                {featuredCollection.tagline}
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                {featuredCollection.description}
              </p>
              <Link
                href="/new-season"
                className="group mt-8 inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:gap-4 hover:border-accent hover:text-accent"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-4/5 overflow-hidden rounded-lg lg:aspect-auto lg:h-150">
                <Image
                  src={featuredCollection.image || "/placeholder.svg"}
                  alt={featuredCollection.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 text-center md:px-12 md:py-32 lg:px-24">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Can&apos;t decide?
        </p>
        <h2 className="mt-4 font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl text-balance">
          View all products
        </h2>
        <Link
          href="/products"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
        >
          Shop All
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </section>
    </main>
  );
}
