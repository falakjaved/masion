"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  itemCount?: number;
}

export function CollectionCard({
  title,
  description,
  image,
  href,
  itemCount,
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="relative overflow-hidden rounded-lg bg-card">
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-card tracking-wide">
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
        <div className="p-5">
          {itemCount && (
            <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {itemCount} Products
            </span>
          )}
          <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
