"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext";
export default function ModernLampPage() {
  const { addItem } = useCart();

  const product = {
    id: "modern-lamp-001",
    name: "Modern Lamp",
    price: 150,
    category: "Lighting",
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    window.location.href = "/cart";
  };

  return (
    <main className="container mx-auto px-4 py-14">
      <Link href="/shop-all" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="relative w-full h-125 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
            alt="Modern Lamp"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Modern Lamp</h1>
          <p className="text-xl font-semibold text-gray-700">$150</p>
          <p className="text-sm text-gray-500">Category: Lighting</p>
          <p className="mt-4 text-gray-600">
            Contemporary lamp designed to illuminate your space beautifully. Adds style and brightness.
          </p>

          <button 
           onClick={handleAddToCart}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
