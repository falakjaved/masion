"use client";
import Link from "next/link";
import Image from "next/image";

export default function JapaneseJoineryPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <Link href="/journal" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Journal
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mb-6">
        The Heritage of Japanese Joinery
      </h1>

      <time dateTime="2025-12-28" className="text-xs text-muted-foreground uppercase tracking-wide mb-4 block">
        December 28, 2025 | Craft
      </time>

      <div className="relative h-100 md:h-125 mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
          alt="Japanese Joinery"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-foreground leading-relaxed mb-6">
        Exploring the ancient craft of interlocking wood joints and their influence on our furniture collection.
      </p>
    </main>
  );
}
