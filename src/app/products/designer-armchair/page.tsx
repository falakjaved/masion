"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";      // add
import { useCart } from "@/lib/context/CartContext"; // add

export default function DesignerArmchairPage() {
  const router = useRouter();       // for redirect
  const { addItem } = useCart();    // cart context

  // Product data
  const product = {
    id: "designer-armchair-001",   // unique id
    name: "Designer Armchair",
    price: 170,
    category: "Furniture",
  };

  // handle Add to Cart
  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    router.push("/cart");    // go to cart page
  };

  return (
    <main className="container mx-auto px-4 py-14">
      <Link href="/shop-all" className="text-sm text-blue-600 hover:underline">
        ← Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 mt-6">
        <div className="relative h-125 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
            alt="Designer Armchair"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">${product.price}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="mt-4 text-gray-600">
            Premium designer armchair crafted for comfort and modern interiors.
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
