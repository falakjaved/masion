import { Suspense } from "react";
import CartClient from "./CartClient";

export default function CartPage() {
  return (
    <main>
      <h1 className="text-4xl font-serif mb-6 text-center">Your Cart</h1>
      <Suspense fallback={<p className="text-center">Loading cart...</p>}>
        <CartClient />
      </Suspense>
    </main>
  );
}
