import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ShippingReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Shipping & Returns</h1>
        <p className="text-muted-foreground mb-10">
          Learn about our shipping times, costs, and hassle-free return policy.
        </p>

        {/* Shipping Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Standard shipping: 5-7 business days</li>
            <li>Express shipping: 2-3 business days</li>
            <li>Free shipping on orders over $100</li>
          </ul>
        </section>

        {/* Returns Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Returns</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Returns accepted within 30 days of purchase</li>
            <li>Items must be in original condition</li>
            <li>Refund processed within 5 business days</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
