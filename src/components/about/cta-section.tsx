"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-4 py-20 md:py-28 bg-cyan-400">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Get Started
        </span>
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">
            Join thousands of happy customers
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Discover our curated collection of premium products and experience
          shopping the way it should be.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            Explore Our Shop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
