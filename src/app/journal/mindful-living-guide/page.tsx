"use client";
import Link from "next/link";
import Image from "next/image";

export default function MindfulLivingGuidePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <Link href="/journal" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Journal
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mb-6">
        The Art of Mindful Living: A Guide to Intentional Spaces
      </h1>

      <time dateTime="2026-01-28" className="text-xs text-muted-foreground uppercase tracking-wide mb-4 block">
        January 28, 2026 | Lifestyle
      </time>

      <div className="relative h-100 md:h-125 mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"
          alt="The Art of Mindful Living"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-foreground leading-relaxed mb-6">
        Discover how thoughtful design choices can transform your everyday environment into a sanctuary of calm and purpose.
      </p>

      <p className="text-foreground leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec eros eget velit vehicula convallis.
      </p>

      <p className="text-foreground leading-relaxed">
        Aliquam erat volutpat. Curabitur at orci vitae odio feugiat eleifend. Phasellus eu ligula id sapien dignissim.
      </p>
    </main>
  );
}
