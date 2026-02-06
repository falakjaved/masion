"use client";

import { useEffect, useState } from "react";

type CartItem = { id: number; name: string; qty: number };

export default function AccountPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cart from API
    fetch("/api/cart")
      .then(res => res.json())
      .then(data => {
        // Check if API returned items array
        if (Array.isArray(data.items)) {
          setCart(data.items);
        } else {
          setCart([]); // fallback if items missing
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">My Account</h1>

        <h2 className="text-xl font-semibold mb-4">Cart Items</h2>

        {loading ? (
          <p>Loading cart...</p>
        ) : Array.isArray(cart) && cart.length > 0 ? (
          <ul className="space-y-3">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex justify-between p-3 border rounded hover:bg-gray-50 transition"
              >
                <span>{item.name}</span>
                <span>Qty: {item.qty}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
