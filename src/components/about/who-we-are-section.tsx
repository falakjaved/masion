"use client";

export function WhoWeAreSection() {
  return (
    <section className="px-4 py-20 md:py-28 bg-amber-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Building trust through excellence
              </span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are more than just an online store. We are a passionate team
              dedicated to bringing you the finest products from around the
              world. Our commitment to quality, authenticity, and customer
              satisfaction sets us apart.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every product in our collection is carefully selected to meet our
              high standards. We believe in transparency, fair pricing, and
              building lasting relationships with our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
