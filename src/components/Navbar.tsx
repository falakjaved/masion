import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-amber-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LEFT SIDE - LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium text-amber-800">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/collections" className="hover:underline">Collections</Link>
          <Link href="/journal" className="hover:underline">Journal</Link>
          <Link href="/explore-collections" className="hover:underline">
            Explore
          </Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/new-season" className="hover:underline">
            New Season
          </Link>
        </div>

        {/* RIGHT SIDE - LOGO (ONLY CHANGE HERE) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.avif"
            alt="Website Logo"
            width={32}
            height={32}
            className="rounded-full blur-[0.8px] opacity-90 transition-all duration-300 hover:blur-0 hover:opacity-100"
          />
          <span className="text-sm font-extrabold text-amber-800">
            MyBrand
          </span>
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;
