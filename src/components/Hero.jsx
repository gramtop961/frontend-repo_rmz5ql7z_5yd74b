export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(234,179,8,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(120,53,15,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wider uppercase">Hygienic • Handpicked • Premium</span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-brown-900">
            Fresh. Pure. Premium.
          </h1>
          <p className="mt-4 text-lg text-brown-800/80 max-w-xl">
            Elevate your everyday nutrition with our carefully sourced dry fruits and authentic spices. Packed fresh, sealed for purity, and delivered with care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow">Shop Now</a>
            <a href="#about" className="px-6 py-3 rounded-full border border-amber-300 text-amber-800 font-semibold hover:bg-amber-50">Why Priyansh?</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 p-4 grid grid-cols-3 gap-4">
            {['almonds','cashews','pistachios','walnuts','raisins','cardamom','blackpepper','turmeric','redchilli'].map((img) => (
              <div key={img} className="rounded-2xl bg-white shadow-sm border border-amber-100 overflow-hidden">
                <img src={`/images/${img}.jpg`} alt={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
