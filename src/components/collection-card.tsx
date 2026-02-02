"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
  itemCount?: number;
}

export function CollectionCard({
  name,
  description,
  image,
  href,
  itemCount,
}: CollectionCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-lg">
      <article className="relative aspect-4/5 w-full overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/20 transition-all duration-500 group-hover:bg-foreground/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col  justify-end p-6 text-card">
          {itemCount !== undefined && (
            <span className="mb-2 text-xs font-medium uppercase tracking-widest opacity-80">
              {itemCount} Products
            </span>
          )}
          <h3 className="mb-2 font-serif text-2xl font-medium tracking-tight md:text-3xl">
            {name}
          </h3>
          <p className="mb-4 max-w-xs text-sm leading-relaxed opacity-90">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest opacity-0 transition-all duration-500 group-hover:opacity-100">
            View Collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
