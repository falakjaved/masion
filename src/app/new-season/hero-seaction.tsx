"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-secondary px-6">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-muted/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p
          className={`mb-6 text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Spring / Summer 2026
        </p>
        <h1
          className={`font-serif text-5xl font-medium leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-balance">New Season</span>
        </h1>
        <p
          className={`mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Discover the latest arrivals and emerging trends. Curated pieces that
          define the season with timeless elegance and modern sophistication.
        </p>
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#arrivals"
            className="inline-block bg-foreground px-12 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90"
          >
            Shop New Arrivals
          </a>
          <a
            href="/collections"
            className="inline-block border border-foreground bg-transparent px-12 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Explore Collections
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-border">
            <div className="h-4 w-px animate-pulse bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
