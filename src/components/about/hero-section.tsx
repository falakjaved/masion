"use client";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-4 py-24 md:py-32 bg-amber-50">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Our Story
        </span>
        <h1 className="font-serif text-5xl font-medium tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">About Us</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Crafting exceptional experiences through thoughtfully curated products
          and unwavering dedication to our customers.
        </p>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-border" />
            <span className="text-sm text-muted-foreground">Est. 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
}
