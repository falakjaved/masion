"use client";

import { Truck, Award, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Swift and reliable shipping to your doorstep. Track your orders in real-time.",
  },
  {
    icon: Award,
    title: "Best Quality",
    description:
      "Premium products sourced from trusted manufacturers with rigorous quality checks.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Your transactions are protected with industry-leading encryption technology.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated team is always here to help you with any questions or concerns.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="px-4 py-20 md:py-28 bg-amber-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Advantages
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Why Choose Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We go above and beyond to ensure your shopping experience is nothing
            short of exceptional.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <div className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                0{index + 1}
              </div>
              <h3 className="mb-2 font-serif text-xl font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
