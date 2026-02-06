"use client";

import { useCart } from "@/lib/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addItem({
      id: Number(params.id),
      name: "Sample Product", // baad me dynamic kar sakti ho
      price: 200,
      quantity: 1,
      customer: form,
    });

    alert("Order added to cart ✅");
    router.push("/cart");
  };

  return (
    <main className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-serif mb-6">Order Details</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Your Name"
          required
          className="w-full border p-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Address"
          required
          className="w-full border p-3"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          placeholder="City"
          required
          className="w-full border p-3"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <button className="w-full bg-black text-white py-3">
          Submit Order
        </button>
      </form>
    </main>
  );
}
