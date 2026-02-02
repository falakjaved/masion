"use client"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import { Input } from "./ui/input"
import { Button } from "./ui/button"


export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-foreground   px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-medium text-background sm:text-4xl">Join our community</h2>
        <p className="mt-4 text-background/70">
          Subscribe to receive 10% off your first order, exclusive updates, and inspiration delivered to your inbox.
        </p>

        {isSubmitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-background">
            <Check className="h-5 w-5" /> Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
            <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 rounded-lg border-0 bg-background/10 pr-4 text-background placeholder:text-background/50 sm:rounded-r-none"/>
            <Button type="submit" size="lg" className="h-12 rounded-lg bg-background text-foreground hover:bg-background/90 sm:rounded-l-none">
              Subscribe <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </form>
        )}
        <p className="mt-4 text-xs text-background/50">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
      </div>
    </section>
  )
}
