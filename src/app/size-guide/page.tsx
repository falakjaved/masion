import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function SizeGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Size Guide</h1>
        <p className="text-muted-foreground mb-10">
          Use this guide to find the perfect fit for your products.
        </p>

        {/* Size Table */}
        <table className="w-full border-collapse border border-border text-left">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2">Size</th>
              <th className="border border-border px-4 py-2">Chest (in)</th>
              <th className="border border-border px-4 py-2">Waist (in)</th>
              <th className="border border-border px-4 py-2">Length (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Small</td>
              <td className="border border-border px-4 py-2">34-36</td>
              <td className="border border-border px-4 py-2">28-30</td>
              <td className="border border-border px-4 py-2">25</td>
            </tr>
            <tr className="bg-background">
              <td className="border border-border px-4 py-2">Medium</td>
              <td className="border border-border px-4 py-2">38-40</td>
              <td className="border border-border px-4 py-2">32-34</td>
              <td className="border border-border px-4 py-2">26</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Large</td>
              <td className="border border-border px-4 py-2">42-44</td>
              <td className="border border-border px-4 py-2">36-38</td>
              <td className="border border-border px-4 py-2">27</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
}
