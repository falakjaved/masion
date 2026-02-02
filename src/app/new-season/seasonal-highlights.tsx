"use client";

import Image from "next/image";

const highlights = [
  {
    id: 1,
    title: "The Quiet Luxury Edit",
    description:
      "Understated elegance meets exceptional craftsmanship. Pieces designed to transcend seasons.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
    cta: "Shop the Edit",
  },
  {
    id: 2,
    title: "Elevated Essentials",
    description:
      "Thoughtfully designed wardrobe foundations. Premium fabrics, timeless silhouettes.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    cta: "Discover More",
  },
  {
    id: 3,
    title: "The Accessories Collection",
    description:
      "Statement pieces and finishing touches to complete every ensemble with distinction.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
    cta: "View Collection",
  },
];

export function SeasonalHighlights() {
  return (
    <section className="bg-background px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Seasonal Highlights
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group relative overflow-hidden bg-secondary"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
                <a
                  href="/collections"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 group-hover:gap-4"
                >
                  {highlight.cta}
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
