const testimonials = [
  {
    quote: "The quality of their products exceeded my expectations. Every piece I've purchased feels thoughtfully made and brings so much warmth to my home.",
    name: "Sarah Mitchell",
    role: "Interior Designer"
  }
]

export function Testimonials() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24 bg-card ">
      <div className="mx-auto max-w-3xl text-center">
        {testimonials.map((t, idx) => (
          <div key={idx}>
            <p className="text-lg text-foreground/80 italic">"{t.quote}"</p>
            <p className="mt-4 font-medium text-card-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
