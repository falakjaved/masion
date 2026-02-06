"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext";

export default function BookshelfPage() {
  const { addItem } = useCart();

  const product = {
    id: "bookshelf-001",
    name: "Bookshelf",
    price: 190,
    category: "Storage",
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    window.location.href = "/cart";
  };

  return (
    <main className="container mx-auto px-4 py-14">
      <Link href="/shop-all" className="text-sm text-blue-600 hover:underline">
        ← Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 mt-6">
        {/* Image Clickable */}
        <Link href="/products/bookshelf" className="relative h-125 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1663061840897-0d7d03b4a95e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFjdC1ib29rc2hlbGZ8ZW58MHx8MHx8fDA%3D"
            alt={product.name}
            fill
            className="object-cover"
          />
        </Link>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">${product.price}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="mt-4 text-gray-600">
            Wooden bookshelf perfect for books and decor.
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
