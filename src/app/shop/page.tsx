import type { Metadata } from "next";
import { ShopContent } from "./shop-content";

export const metadata: Metadata = {
  title: "Shop | Premium Collection",
  description:
    "Discover our curated collection of premium products. Shop the latest trends with free shipping on orders over $50.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <ShopContent />
    </main>
  );
}
