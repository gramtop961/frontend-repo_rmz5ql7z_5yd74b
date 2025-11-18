import { useEffect, useState } from "react";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "dryfruits", label: "Dry Fruits" },
  { key: "spices", label: "Spices" },
  { key: "combos", label: "Combo Packs" },
  { key: "gifting", label: "Gifting" },
];

export default function ProductGrid({ onAdd }) {
  const [category, setCategory] = useState("all");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function load() {
      setLoading(true);
      const url = `${backend}/products${category !== 'all' ? `?category=${category}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
      setLoading(false);
    }
    load();
  }, [category, backend]);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-brown-900">Our Products</h2>
        <div className="flex gap-2">
          {CATEGORIES.map((c) => (
            <button key={c.key} onClick={() => setCategory(c.key)} className={`px-4 py-2 rounded-full border text-sm ${category===c.key ? 'bg-amber-600 text-white border-amber-600' : 'border-amber-300 text-amber-800 hover:bg-amber-50'}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-16 text-center text-amber-800">Loading...</div>
      ) : (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="dryfruits">
          {items.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white border border-amber-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img src={p.image_url || '/images/placeholder.jpg'} alt={p.title} className="w-full h-56 object-cover" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-semibold">
                  ₹{p.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brown-900">{p.title}</h3>
                <p className="text-sm text-brown-800/70 line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.category==='spices' ? 'bg-rose-50 text-rose-700' : p.category==='dryfruits' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{p.category}</span>
                  <button onClick={() => onAdd(p)} className="px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
