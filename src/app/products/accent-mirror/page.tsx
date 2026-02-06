"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/context/CartContext";

export default function AccentMirrorPage() {
  const { addItem } = useCart(); // Cart context
  const router = useRouter(); // For redirect

  const handleAddToCart = () => {
    // Item cart me add karna
    addItem({
      id: 1,
      name: "Accent Mirror",
      price: 130,
      quantity: 1,
    });

    // Cart page par redirect
    router.push("/cart");
  };

  return (
    <main className="container mx-auto px-4 py-14">
      <Link href="/shop-all" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="relative w-full h-125 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
            alt="Accent Mirror"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Accent Mirror</h1>
          <p className="text-xl font-semibold text-gray-700">$130</p>
          <p className="text-sm text-gray-500">Category: Decor</p>
          <p className="mt-4 text-gray-600">
            Decorative accent mirror to enhance your space with elegance and style. Perfect for walls or entryways.
          </p>

          <button
            onClick={handleAddToCart} // Add this handler
            className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
