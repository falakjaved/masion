"use client";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const faqs = [
  { question: "How long does shipping take?", answer: "Shipping usually takes 5-7 business days." },
  { question: "Can I return an item?", answer: "Yes, returns are accepted within 30 days of purchase." },
  { question: "Do you ship internationally?", answer: "Yes, we ship worldwide with additional charges." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">FAQ</h1>
        <p className="text-muted-foreground mb-10">
          Find answers to the most frequently asked questions about our products and services.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-4 cursor-pointer bg-background hover:shadow-md transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="font-medium text-lg">{faq.question}</h3>
              {openIndex === index && (
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
