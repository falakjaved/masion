"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🚀 Here you can integrate your backend API later
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 py-16 md:py-24 max-w-5xl mx-auto">
        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block mb-6 px-5 py-2 bg-foreground text-background rounded-lg hover:bg-accent transition-colors font-medium"
        >
          ← Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Have questions, feedback, or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-background border border-border rounded-xl p-6 shadow-md"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent w-full"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors w-full md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="mt-6 text-green-600 font-medium text-center">
            Thank you! Your message has been sent.
          </div>
        )}

        {/* Optional Contact Info */}
        <section className="mt-16 text-center text-muted-foreground grid gap-2">
          <p>Email: <a href="mailto:support@example.com" className="text-accent hover:underline">support@example.com</a></p>
          <p>Phone: <a href="tel:+923001234567" className="text-accent hover:underline">+92 300 1234567</a></p>
          <p>Address: 123 Street, City, Pakistan</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
