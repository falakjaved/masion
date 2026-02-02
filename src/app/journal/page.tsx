import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BlogCard } from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Journal | Stories, Updates & Trends",
  description:
    "Explore our curated collection of stories, style guides, and the latest trends from our world.",
}

const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Living: A Guide to Intentional Spaces",
    excerpt:
      "Discover how thoughtful design choices can transform your everyday environment into a sanctuary of calm and purpose.",
    date: "2026-01-28",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    slug: "mindful-living-guide",
    category: "Lifestyle",
    featured: true,
  },
  {
    id: 2,
    title: "Spring Collection: Nature's Palette",
    excerpt:
      "Our latest collection draws inspiration from the organic textures and earthy tones found in nature's most serene landscapes.",
    date: "2026-01-22",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    slug: "spring-collection-natures-palette",
    category: "Collections",
    featured: false,
  },
  {
    id: 3,
    title: "Behind the Scenes: Our Artisan Partners",
    excerpt:
      "Meet the skilled craftspeople who bring our designs to life with traditional techniques passed down through generations.",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    slug: "artisan-partners",
    category: "Stories",
    featured: false,
  },
  {
    id: 4,
    title: "Sustainable Luxury: Our Commitment to the Planet",
    excerpt:
      "Learn about our journey towards more sustainable practices and how we're reducing our environmental footprint.",
    date: "2026-01-08",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    slug: "sustainable-luxury",
    category: "Sustainability",
    featured: false,
  },
  {
    id: 5,
    title: "Styling Tips: Creating Visual Harmony at Home",
    excerpt:
      "Expert advice on arranging furniture, selecting colors, and curating objects that speak to your personal aesthetic.",
    date: "2026-01-02",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&h=600&fit=crop",
    slug: "styling-tips-visual-harmony",
    category: "Design",
    featured: false,
  },
  {
    id: 6,
    title: "The Heritage of Japanese Joinery",
    excerpt:
      "Exploring the ancient craft of interlocking wood joints and their influence on our furniture collection.",
    date: "2025-12-28",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
    slug: "japanese-joinery-heritage",
    category: "Craft",
    featured: false,
  },
]

const featuredPost = blogPosts.find((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
              Journal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stories, updates, and trends from our world. Discover the
              inspiration behind our collections and the artisans who bring them
              to life.
            </p>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/journal/${featuredPost.slug}`}
              className="group block md:grid md:grid-cols-2"
            >
              <div className="relative aspect-4/3 md:aspect-auto overflow-hidden bg-muted">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
                <span className="text-xs tracking-widest uppercase text-accent mb-4">
                  Featured
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight text-balance group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <time
                    dateTime={featuredPost.date}
                    className="text-xs tracking-wide text-muted-foreground uppercase"
                  >
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-sm text-foreground font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article
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
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Latest Stories
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {regularPosts.length} articles
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {regularPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-border bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Stay Inspired
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive stories, early access to
              new collections, and curated content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-foreground text-background font-medium hover:bg-accent transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
