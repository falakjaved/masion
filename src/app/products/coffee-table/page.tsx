"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext";
export default function CoffeeTablePage() {
  const { addItem } = useCart();

  const product = {
    id: "coffee-table-001",
    name: "Round Coffee Table",
    price: 140,
    category: "Living",
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    window.location.href = "/cart";
  };

  return (
    <main className="container mx-auto px-4 py-14">
      <Link href="/shop-all" className="text-sm text-blue-600 hover:underline">← Back to Shop</Link>

      <div className="grid lg:grid-cols-2 gap-10 mt-6">
        <div className="relative h-125 bg-gray-100 rounded-xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" alt="Coffee Table" fill className="object-cover"/>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Round Coffee Table</h1>
          <p className="text-xl mt-2">$140</p>
          <p className="text-sm text-gray-500">Living</p>
          <p className="mt-4 text-gray-600">
            Modern round coffee table perfect for living rooms.
          </p>
          <button
          
          onClick={handleAddToCart}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
