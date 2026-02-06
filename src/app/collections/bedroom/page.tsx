import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bedroom Collection | Premium E-Commerce",
  description: "Create your personal sanctuary with our serene bedroom collection.",
};

export default function BedroomPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-16 md:py-24 max-w-7xl mx-auto">
        {/* 🔹 Back to Collections Link */}
        <Link
          href="/explore-collections"
          className="text-sm text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Collections
        </Link>
        <div className="relative mb-16">
          <Image
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80"
            alt="Bedroom Collection"
            width={1600}
            height={600}
            className="rounded-xl object-cover w-full h-64 md:h-96"
          />
          <div className="absolute inset-0 bg-foreground/30 rounded-xl" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="font-serif text-4xl md:text-5xl">Bedroom Collection</h1>
            <p className="mt-2 text-lg max-w-md">
              Create your personal sanctuary with our serene bedroom collection.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Collection Highlights</h2>
          <p className="text-muted-foreground mb-6">
            This collection includes 38 items like beds, nightstands, and ambient lighting for a cozy bedroom.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
          >
            Shop This Collection
          </Link>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-xl h-48 flex items-center justify-center text-muted-foreground">
              Product 1
            </div>
            <div className="bg-background border border-border rounded-xl h-48 flex items-center justify-center text-muted-foreground">
              Product 2
            </div>
            <div className="bg-background border border-border rounded-xl h-48 flex items-center justify-center text-muted-foreground">
              Product 3
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
