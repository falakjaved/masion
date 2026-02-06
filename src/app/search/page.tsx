"use client";

import { useState } from "react";
import Link from "next/link";

type SearchResult = {
  name: string;
  link: string;
  type: "internal" | "external";
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${query}`);
      const data: SearchResult[] = await res.json();
      setResults(data);
    } catch (err) {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search</h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search pages, products, dresses, furniture..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500 mb-2">Searching…</p>}

      <div className="space-y-2">
        {!loading && results.length === 0 && query && (
          <p className="text-gray-500">No results found</p>
        )}

        {!loading &&
          results.map((item) =>
            item.type === "external" ? (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 border rounded hover:bg-gray-100"
              >
                🌐 {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className="block p-2 border rounded hover:bg-gray-100"
              >
                📄 {item.name}
              </Link>
            )
          )}
      </div>
    </div>
  );
}
