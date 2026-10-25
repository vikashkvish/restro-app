import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Hungry? Order from Restro</h1>
      <p className="mt-3 text-stone-600">
        Food, tea, coffee and more. Dine in, takeaway or delivery.
      </p>
      <Link
        href="/menu"
        className="mt-6 inline-block rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white"
      >
        View Menu
      </Link>
    </main>
  );
}