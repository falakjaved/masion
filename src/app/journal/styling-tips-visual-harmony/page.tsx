"use client";
import Link from "next/link";
import Image from "next/image";

export default function StylingTipsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <Link href="/journal" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Journal
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mb-6">
        Styling Tips: Creating Visual Harmony at Home
      </h1>

      <time dateTime="2026-01-02" className="text-xs text-muted-foreground uppercase tracking-wide mb-4 block">
        January 2, 2026 | Design
      </time>

      <div className="relative h-100 md:h-125 mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&h=600&fit=crop"
          alt="Styling Tips"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-foreground leading-relaxed mb-6">
        Expert advice on arranging furniture, selecting colors, and curating objects that speak to your personal aesthetic.
      </p>
    </main>
  );
}
