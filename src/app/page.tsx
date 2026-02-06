import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Newsletter } from "@/components/newsletter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedProducts } from "@/components/features-products";
import { Testimonials } from "@/components/testimoniais";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />

        <div className="text-center py-16">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
