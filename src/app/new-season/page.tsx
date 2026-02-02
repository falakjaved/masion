import type { Metadata } from "next";
import { HeroSection } from "./hero-seaction";
import { SeasonalHighlights } from "./seasonal-highlights";
import { WhyYoullLove } from "./why-youll-love";
import { FinalCta } from "./final-cta";
import { ProductCard } from "./components/products-card";

export const metadata: Metadata = {
  title: "New Season | Premium Fashion Collection",
  description:
    "Discover the latest arrivals and trends for the new season. Fresh styles, premium quality, and limited editions await.",
};

const products = [
  {
    id: 1,
    name: "Cashmere Blend Overcoat",
    price: 389.0,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Tailored Wool Blazer",
    price: 275.0,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 3,
    name: "Silk Midi Dress",
    price: 195.0,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 4,
    name: "Merino Wool Sweater",
    price: 145.0,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: 225.0,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 6,
    name: "Pleated Wide-Leg Trousers",
    price: 165.0,
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 7,
    name: "Cotton Poplin Shirt",
    price: 95.0,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 8,
    name: "Suede Ankle Boots",
    price: 285.0,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
    isNew: true,
  },
];

export default function NewSeasonPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Just Arrived
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
              New Arrivals
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/shop"
              className="inline-block border border-foreground bg-transparent px-12 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      <SeasonalHighlights />
      <WhyYoullLove />
      <FinalCta />
    </main>
  );
}
