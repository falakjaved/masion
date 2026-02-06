"use client";
import Link from "next/link";
import Image from "next/image";

export default function SustainableLuxuryPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <Link href="/journal" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Journal
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mb-6">
        Sustainable Luxury: Our Commitment to the Planet
      </h1>

      <time dateTime="2026-01-08" className="text-xs text-muted-foreground uppercase tracking-wide mb-4 block">
        January 8, 2026 | Sustainability
      </time>

      <div className="relative h-100 md:h-125 mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
          alt="Sustainable Luxury"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-foreground leading-relaxed mb-6">
        Learn about our journey towards more sustainable practices and how we're reducing our environmental footprint.
      </p>
    </main>
  );
}
