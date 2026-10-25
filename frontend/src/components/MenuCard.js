export default function MenuCard({ item }) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-4">
      <div>
        <p className="font-semibold">
          {item.name}{" "}
          <span className={item.veg ? "text-green-600" : "text-red-600"}>●</span>
        </p>
        <p className="text-sm text-stone-500">{item.description}</p>
        <p className="mt-1 font-medium">₹{item.price}</p>
      </div>
      <button className="rounded-lg border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600">
        Add
      </button>
    </div>
  );
}