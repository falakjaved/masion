"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/cart")
      .then(res => res.json())
      .then(data => setItems(data.items));
  }, []);

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold">Cart</h1>

      <ul className="mt-6 space-y-2">
        {items.map(item => (
          <li key={item.id}>
            {item.name} (x{item.qty})
          </li>
        ))}
      </ul>
    </div>
  );
}
