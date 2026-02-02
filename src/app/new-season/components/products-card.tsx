"use client";

import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-3/4 overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        {product.isNew && (
          <span className="absolute left-4 top-4 bg-foreground px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-background">
            New
          </span>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-sans text-sm font-medium tracking-wide text-foreground">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          ${product.price.toFixed(2)}
        </p>
        <button
          type="button"
          className={`w-full border border-foreground bg-transparent py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
