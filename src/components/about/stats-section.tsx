"use client";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "10K+", label: "Products" },
  { value: "7+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
];

export function StatsSection() {
  return (
    <section className="bg-primary px-4 py-20 md:py-28 bg-amber-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Numbers That Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl font-medium text-primary-foreground md:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
