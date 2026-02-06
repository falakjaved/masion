"use client";
import Link from "next/link";
import Image from "next/image";

export default function ArtisanPartnersPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <Link href="/journal" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Journal
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mb-6">
        Behind the Scenes: Our Artisan Partners
      </h1>

      <time dateTime="2026-01-15" className="text-xs text-muted-foreground uppercase tracking-wide mb-4 block">
        January 15, 2026 | Stories
      </time>

      <div className="relative h-100 md:h-125 mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
          alt="Artisan Partners"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-foreground leading-relaxed mb-6">
        Meet the skilled craftspeople who bring our designs to life with traditional techniques passed down through generations.
      </p>
    </main>
  );
}
