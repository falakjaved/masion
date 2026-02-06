"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/CartContext";
import { useSearchParams } from "next/navigation";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineCheckCircle } from "react-icons/ai";

export default function CartPage() {
  const { items, removeItem, clearCart, getTotal, updateQuantity } = useCart();
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  if (!items || items.length === 0) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <AiOutlineShoppingCart className="text-8xl text-gray-300 mb-6" />
        <h1 className="text-4xl font-serif mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-serif mb-6">Your Cart</h1>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2 animate-fadeIn">
          <AiOutlineCheckCircle className="text-green-600 text-xl" />
          <span className="text-green-800 font-medium">Your order was added successfully!</span>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center p-4 border border-border rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 w-full sm:w-2/3">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
              <div>
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p className="text-sm text-muted-foreground">${item.price}</p>
                {item.customer && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    <p><strong>Name:</strong> {item.customer.name}</p>
                    <p><strong>Address:</strong> {item.customer.address}</p>
                    <p><strong>City:</strong> {item.customer.city}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              {/* Quantity controls */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
                  disabled={item.quantity <= 1}
                >
                  <AiOutlineMinus />
                </button>
                <span className="px-4 py-1">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <AiOutlinePlus />
                </button>
              </div>

              {/* Subtotal */}
              <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart summary */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={clearCart}
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          Clear Cart
        </button>
        <p className="text-xl font-semibold">Total: ${getTotal().toFixed(2)}</p>
        <Link
          href="/checkout"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </main>
  );
}
