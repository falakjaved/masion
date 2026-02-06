"use client";

import { useCart } from "@/lib/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { clearCart } = useCart();
  const router = useRouter();

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-6">Checkout</h1>

      <button
        onClick={() => {
          clearCart();
          router.push("/cart?success=true");
        }}
        className="mt-8 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
      >
        Place Order
      </button>
    </main>
  );
}
