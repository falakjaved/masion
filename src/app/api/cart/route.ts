import { NextResponse } from "next/server";

// Dummy in-memory cart items
const cartItems = [
  { id: 1, name: "Modern Chair", qty: 1 },
  { id: 2, name: "Luxury Sofa", qty: 1 },
];

export async function GET() {
  // Always return items as array inside object
  return NextResponse.json({ items: cartItems });
}
