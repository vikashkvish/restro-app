import { menuItems } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Menu</h1>

      {categories.map((category) => (
        <section key={category} className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-orange-600">{category}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}