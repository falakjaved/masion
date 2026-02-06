// src/components/cart/CartPreview.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/lib/context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartPreview() {
  const { items, getTotal } = useCart();

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 flex flex-col items-center gap-2">
        <AiOutlineShoppingCart className="text-6xl text-gray-300" />
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <h2 className="text-lg font-medium mb-4">Cart Summary</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>${getTotal().toFixed(2)}</span>
      </div>
      <Link
        href="/cart"
        className="mt-4 block text-center bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
      >
        Go to Cart
      </Link>
    </div>
  );
}
