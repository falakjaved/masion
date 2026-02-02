"use client";

import { Target, Eye } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="bg-card px-4 py-20 md:py-28 bg-amber-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Purpose
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Mission & Vision</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Target className="h-6 w-6 text-foreground" />
            </div>
            <div className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              01
            </div>
            <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">
              Our Mission
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              To provide exceptional products that enhance everyday life while
              delivering an unmatched shopping experience. We strive to make
              quality accessible to everyone.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Eye className="h-6 w-6 text-foreground" />
            </div>
            <div className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              02
            </div>
            <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">
              Our Vision
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              To become the most trusted e-commerce destination, known for our
              curated selection, sustainable practices, and commitment to
              customer satisfaction worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
