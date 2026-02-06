"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext";
export default function KitchenStoolPage() {
  const { addItem } = useCart();

  const product = {
    id: "kitchen-stool-001",
    name: "Kitchen Stool",
    price: 75,
    category: "Kitchen",
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
          <Image src="https://images.unsplash.com/photo-1567016526105-22c2b0c1c02d?auto=format&fit=crop&w=800&q=80" alt="Kitchen Stool" fill className="object-cover"/>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Kitchen Stool</h1>
          <p className="text-xl mt-2">$75</p>
          <p className="text-sm text-gray-500">Kitchen</p>
          <p className="mt-4 text-gray-600">
            Simple and sturdy kitchen stool for daily use.
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
