import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category?: string
}

export function BlogCard({
  title,
  excerpt,
  date,
  image,
  slug,
  category,
}: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/journal/${slug}`} className="block">
        <div className="relative aspect-4/3 overflow-hidden bg-muted mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          {category && (
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              {category}
            </span>
          )}
          <h3 className="font-serif text-xl lg:text-2xl leading-tight text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center justify-between pt-2">
            <time
              dateTime={date}
              className="text-xs tracking-wide text-muted-foreground uppercase"
            >
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="text-sm text-foreground font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
