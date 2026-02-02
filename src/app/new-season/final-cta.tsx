export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-foreground px-6 py-24 md:px-12 lg:px-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-background blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-background blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-background/60">
          Ready for the New Season?
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-background md:text-4xl lg:text-5xl">
          <span className="text-balance">
            Refresh your wardrobe for the new season
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-background/70">
          Discover pieces that blend timeless elegance with modern sophistication. 
          Your next favorite outfit is waiting.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="/shop"
            className="inline-block bg-background px-12 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
          >
            Shop All Products
          </a>
          <a
            href="/collections"
            className="inline-block border border-background/40 bg-transparent px-12 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:border-background hover:bg-background hover:text-foreground"
          >
            View Collections
          </a>
        </div>
      </div>
    </section>
  );
}
