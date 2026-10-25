import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-orange-600">
          Restro
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/menu">Menu</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}