"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"

const categories = [
  "All Categories",
  "Furniture",
  "Lighting",
  "Decor",
  "Textiles",
  "Kitchen",
]

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "Over $200", min: 200, max: Infinity },
]

const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
]

const products = [
  {
    id: 1,
    name: "Modern Ceramic Vase",
    price: 89.00,
    originalPrice: 120.00,
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop",
    category: "Decor",
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Table Lamp",
    price: 145.00,
    rating: 4,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    category: "Lighting",
  },
  {
    id: 3,
    name: "Handwoven Throw Blanket",
    price: 78.00,
    rating: 5,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "Textiles",
    isNew: true,
  },
  {
    id: 4,
    name: "Wooden Accent Chair",
    price: 299.00,
    originalPrice: 350.00,
    rating: 4,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
    category: "Furniture",
  },
  {
    id: 5,
    name: "Artisan Coffee Mug Set",
    price: 45.00,
    rating: 5,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    category: "Kitchen",
  },
  {
    id: 6,
    name: "Pendant Ceiling Light",
    price: 189.00,
    rating: 4,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    category: "Lighting",
    isNew: true,
  },
  {
    id: 7,
    name: "Linen Cushion Cover",
    price: 38.00,
    rating: 4,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    category: "Textiles",
  },
  {
    id: 8,
    name: "Oak Side Table",
    price: 175.00,
    originalPrice: 220.00,
    rating: 5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&h=400&fit=crop",
    category: "Furniture",
  },
  {
    id: 9,
    name: "Ceramic Planter Set",
    price: 62.00,
    rating: 4,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    category: "Decor",
  },
  {
    id: 10,
    name: "Copper Kitchen Utensils",
    price: 55.00,
    rating: 5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "Kitchen",
  },
  {
    id: 11,
    name: "Wall Art Print",
    price: 95.00,
    rating: 4,
    reviews: 112,
    image: "/wall-art-paint.avif",
    category: "Decor",
  },
  {
    id: 12,
    name: "Velvet Dining Chair",
    price: 245.00,
    rating: 5,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop",
    category: "Furniture",
    isNew: true,
  },
]

const ITEMS_PER_PAGE = 8

export function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All Categories" || product.category === selectedCategory
      const priceMatch =
        product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
      return categoryMatch && priceMatch
    })

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        filtered.sort((a, b) => b.id - a.id)
    }

    return filtered
  }, [selectedCategory, selectedPriceRange, sortBy])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePriceChange = (range: (typeof priceRanges)[0]) => {
    setSelectedPriceRange(range)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setCurrentPage(1)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Shop
          </h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
            Discover our curated collection of premium home goods, designed to bring warmth and elegance to your space.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-md text-sm font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`w-full lg:w-64 shrink-0 ${
              mobileFiltersOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
              <h2 className="font-semibold text-foreground mb-4">Filter Templates</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="w-4 h-4 border-2 border-border rounded-full text-primary focus:ring-ring focus:ring-offset-0 cursor-pointer"
                      />
                      <span
                        className={`text-sm transition-colors ${
                          selectedCategory === category
                            ? "text-foreground font-medium"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label
                      key={range.label}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange.label === range.label}
                        onChange={() => handlePriceChange(range)}
                        className="w-4 h-4 border-2 border-border rounded-full text-primary focus:ring-ring focus:ring-offset-0 cursor-pointer"
                      />
                      <span
                        className={`text-sm transition-colors ${
                          selectedPriceRange.label === range.label
                            ? "text-foreground font-medium"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {paginatedProducts.length}
                </span>{" "}
                of{" "}
                <span className="font-medium text-foreground">
                  {filteredAndSortedProducts.length}
                </span>{" "}
                products
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-muted-foreground">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {paginatedProducts.length === 0 && (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h3 className="text-lg font-medium text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                className="flex items-center justify-center gap-2 mt-12"
                aria-label="Pagination"
              >
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md border border-border bg-card hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card hover:bg-secondary"
                    }`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md border border-border bg-card hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
