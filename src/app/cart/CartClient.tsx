"use client";

import { useSearchParams } from "next/navigation";
import { useCart } from "@/lib/context/CartContext";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineCheckCircle } from "react-icons/ai";

export default function CartClient() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const { items, removeItem, clearCart, updateQuantity, getTotal } = useCart();

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <AiOutlineShoppingCart className="text-8xl text-gray-300 mb-6" />
        <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-16 max-w-5xl mx-auto flex flex-col gap-6">
      {success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2">
          <AiOutlineCheckCircle className="text-green-600 text-xl" />
          <span className="text-green-800 font-medium">Your order was added successfully!</span>
        </div>
      )}

      {items.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-xl">
          <div className="flex items-center gap-4 w-full sm:w-2/3">
            {item.image && <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />}
            <div>
              <h2 className="font-medium text-lg">{item.name}</h2>
              <p className="text-sm text-muted-foreground">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                <AiOutlineMinus />
              </button>
              <span className="px-4">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <AiOutlinePlus />
              </button>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:underline text-sm">
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button onClick={clearCart} className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600">
          Clear Cart
        </button>
        <p className="text-xl font-semibold">Total: ${getTotal().toFixed(2)}</p>
        <Link href="/checkout" className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
