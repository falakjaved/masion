"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// TypeScript types
export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // New: optional image for advanced CartPage
  customer?: {
    name: string;
    address: string;
    city: string;
  };
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number | string) => void;
  clearCart: () => void;
  getTotal: () => number;
  updateQuantity: (id: number | string, quantity: number) => void; // New
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    // Check if item already exists
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
      setItems(
        items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      );
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (id: number | string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  };

  // New: update quantity of an item
  const updateQuantity = (id: number | string, quantity: number) => {
    if (quantity <= 0) {
      // Remove if quantity is 0 or less
      removeItem(id);
      return;
    }
    setItems(
      items.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, getTotal, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
