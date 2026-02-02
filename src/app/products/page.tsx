"use client"

import { ProductCard } from "@/components/about/products-card"
import { useState, useMemo } from "react"


const categories = ["All", "Electronics", "Clothing", "Home & Garden", "Sports", "Books"]

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
]

const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    description: "Premium audio experience with active noise cancellation and 30-hour battery life.",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviewCount: 2547,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Cotton Crew Neck T-Shirt",
    description: "Comfortable everyday essential made from 100% organic cotton.",
    price: 34.99,
    rating: 4.5,
    reviewCount: 1823,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    category: "Clothing",
    inStock: true,
  },
  {
    id: 3,
    name: "Smart Home Security Camera",
    description: "1080p HD video with night vision, two-way audio, and motion detection.",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.3,
    reviewCount: 945,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 4,
    name: "Minimalist Ceramic Plant Pot",
    description: "Modern design ceramic pot perfect for indoor plants and succulents.",
    price: 24.99,
    rating: 4.7,
    reviewCount: 632,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    category: "Home & Garden",
    inStock: true,
  },
  {
    id: 5,
    name: "Professional Yoga Mat",
    description: "Extra thick, non-slip surface with alignment marks for perfect form.",
    price: 68.00,
    rating: 4.9,
    reviewCount: 3201,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80",
    category: "Sports",
    inStock: false,
  },
  {
    id: 6,
    name: "Bestselling Novel Collection",
    description: "Curated collection of award-winning contemporary fiction titles.",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviewCount: 789,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    category: "Books",
    inStock: true,
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    description: "Double-wall insulated bottle keeps drinks cold for 24 hours.",
    price: 29.99,
    rating: 4.4,
    reviewCount: 1456,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    category: "Sports",
    inStock: true,
  },
  {
    id: 8,
    name: "Linen Blend Blazer",
    description: "Lightweight summer blazer with a relaxed fit and natural texture.",
    price: 159.00,
    rating: 4.2,
    reviewCount: 324,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "Clothing",
    inStock: true,
  },
  {
    id: 9,
    name: "Smart LED Desk Lamp",
    description: "Adjustable color temperature and brightness with USB charging port.",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewCount: 867,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    category: "Home & Garden",
    inStock: true,
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with 360° sound and 12-hour playtime.",
    price: 89.99,
    rating: 4.7,
    reviewCount: 2134,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 11,
    name: "Classic Running Sneakers",
    description: "Lightweight mesh upper with responsive cushioning for all-day comfort.",
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.6,
    reviewCount: 1987,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    category: "Sports",
    inStock: true,
  },
   {
    id: 12,
    name: "Modern Art Print Collection",
    description: "Set of three minimalist art prints on premium archival paper.",
    price: 75.0,
    rating: 4.8,
    reviewCount: 456,
    image: "/new-season-collection.png",
    category: "Home & Garden",
    inStock: true,
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
  )
}

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const productsPerPage = 8

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Availability filter
    if (showInStockOnly) {
      result = result.filter((p) => p.inStock)
    }

    // Sorting
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
      default:
        result.sort((a, b) => b.id - a.id)
    }

    return result
  }, [selectedCategory, sortBy, priceRange, showInStockOnly])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage)
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const handleClearFilters = () => {
    setSelectedCategory("All")
    setPriceRange([0, 500])
    setShowInStockOnly(false)
    setCurrentPage(1)
  }

  const hasActiveFilters = selectedCategory !== "All" || priceRange[0] > 0 || priceRange[1] < 500 || showInStockOnly

  const FilterSidebar = () => (
    <aside className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentPage(1)
              }}
              className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
          Price Range
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label htmlFor="min-price" className="sr-only">Minimum price</label>
              <input
                id="min-price"
                type="number"
                min={0}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => {
                  setPriceRange([Number(e.target.value), priceRange[1]])
                  setCurrentPage(1)
                }}
                className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Min"
              />
            </div>
            <span className="text-muted-foreground">—</span>
            <div className="flex-1">
              <label htmlFor="max-price" className="sr-only">Maximum price</label>
              <input
                id="max-price"
                type="number"
                min={priceRange[0]}
                max={500}
                value={priceRange[1]}
                onChange={(e) => {
                  setPriceRange([priceRange[0], Number(e.target.value)])
                  setCurrentPage(1)
                }}
                className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Max"
              />
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={500}
            value={priceRange[1]}
            onChange={(e) => {
              setPriceRange([priceRange[0], Number(e.target.value)])
              setCurrentPage(1)
            }}
            className="w-full accent-primary"
            aria-label="Maximum price slider"
          />
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
          Availability
        </h3>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => {
              setShowInStockOnly(e.target.checked)
              setCurrentPage(1)
            }}
            className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
          />
          <span className="text-sm text-muted-foreground">In Stock Only</span>
        </label>
      </div>

      {hasActiveFilters && (
        <button
          onClick={handleClearFilters}
          className="w-full rounded-md border border-border py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Products
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Discover our curated collection of premium products, carefully selected to elevate your everyday life.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Mobile filter button */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <FilterIcon className="h-5 w-5" />
            Filters
            {hasActiveFilters && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                !
              </span>
            )}
          </button>
          <div className="relative">
            <label htmlFor="mobile-sort" className="sr-only">Sort products</label>
            <select
              id="mobile-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-md border border-border bg-card py-2 pl-3 pr-10 text-sm text-card-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Mobile filter overlay */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-foreground/25 backdrop-blur-sm"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-card shadow-xl">
              <div className="flex items-center justify-between border-b border-border px-4 py-4">
                <h2 className="text-lg font-semibold text-card-foreground">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-md p-1 text-muted-foreground hover:text-foreground"
                >
                  <XMarkIcon className="h-6 w-6" />
                  <span className="sr-only">Close filters</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <FilterSidebar />
              </div>
            </div>
          </div>
        )}

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            {/* Desktop sort & results count */}
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {Math.min((currentPage - 1) * productsPerPage + 1, filteredAndSortedProducts.length)}
                </span>
                –
                <span className="font-medium text-foreground">
                  {Math.min(currentPage * productsPerPage, filteredAndSortedProducts.length)}
                </span>{" "}
                of{" "}
                <span className="font-medium text-foreground">{filteredAndSortedProducts.length}</span>{" "}
                products
              </p>
              <div className="relative">
                <label htmlFor="desktop-sort" className="sr-only">Sort products</label>
                <select
                  id="desktop-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-md border border-border bg-card py-2 pl-3 pr-10 text-sm text-card-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Products grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg font-medium text-foreground">No products found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-md text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-foreground hover:bg-muted"
                      }`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
