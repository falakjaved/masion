import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Internal pages
  const pages = [
    { name: "Home", link: "/", keywords: ["home"] },
    { name: "Shop", link: "/shop", keywords: ["shop"] },
    { name: "Shop All", link: "/shop-all", keywords: ["shop all"] },
    { name: "Products", link: "/products", keywords: ["products"] },
    { name: "Collections", link: "/collections", keywords: ["collections"] },
    { name: "Journal", link: "/journal", keywords: ["journal", "blog"] },
    { name: "About", link: "/about", keywords: ["about"] },
    { name: "Contact Us", link: "/contact", keywords: ["contact", "support"] },
    { name: "FAQ", link: "/faq", keywords: ["faq", "help"] },
    { name: "Shipping & Returns", link: "/shipping", keywords: ["shipping", "returns"] },
    { name: "Size Guide", link: "/size-guide", keywords: ["size", "guide"] },
    { name: "Cart", link: "/cart", keywords: ["cart", "bag"] },
  ];

  // External websites
  const externalLinks = [
    {
      name: "Pinterest – Dress Ideas",
      link: "https://www.pinterest.com/search/pins/?q=dresses",
      keywords: ["dress", "dresses", "fashion"],
    },
    {
      name: "Pinterest – Furniture Ideas",
      link: "https://www.pinterest.com/search/pins/?q=furniture",
      keywords: ["furniture", "sofa", "chair", "table"],
    },
    {
      name: "Google Shopping",
      link: "https://www.google.com/search?tbm=shop&q=fashion",
      keywords: ["shopping", "buy", "products"],
    },
    {
      name: "YouTube – Styling Videos",
      link: "https://www.youtube.com/results?search_query=fashion+styling",
      keywords: ["video", "youtube", "styling"],
    },
    {
      name: "Instagram – Fashion",
      link: "https://www.instagram.com/explore/tags/fashion/",
      keywords: ["instagram", "fashion", "style"],
    },
  ];

  // Match query with keywords
  const match = (item: { keywords: string[] }) =>
    item.keywords.some(k => k.includes(query) || query.includes(k));

  // Map results
  const internalResults = pages.filter(match).map(p => ({
    name: p.name,
    link: p.link,
    type: "internal",
  }));

  const externalResults = externalLinks.filter(match).map(e => ({
    name: e.name,
    link: e.link,
    type: "external",
  }));

  return NextResponse.json([...internalResults, ...externalResults]);
}
