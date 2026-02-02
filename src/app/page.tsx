import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"

import { Newsletter } from "@/components/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/features-products"
import { Testimonials } from "@/components/testimoniais"

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
      </main>
      <Footer />
    </>
  )
}
