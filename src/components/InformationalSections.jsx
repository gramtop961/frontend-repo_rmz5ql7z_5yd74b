import { Star } from "lucide-react";

export default function InformationalSections() {
  return (
    <>
      <section id="about" className="bg-gradient-to-b from-white to-amber-50/40 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-brown-900 mb-4">About Us</h2>
            <p className="text-brown-800/80 leading-relaxed">
              At Priyansh, we believe purity is premium. Our dry fruits and spices are sourced from trusted farms, cleaned and processed hygienically, and packed to lock in freshness. From daily wellness to festive gifting, we bring you quality you can taste and trust.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {title:'Hygienic Processing'},
              {title:'Farm-Direct Sourcing'},
              {title:'Freshly Packed'},
              {title:'Quality Assured'},
            ].map((f)=> (
              <div key={f.title} className="p-4 rounded-xl border border-amber-200 bg-white">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                  <Star className="w-4 h-4" />
                </div>
                <div className="text-sm font-semibold text-brown-900">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gifting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-6">Gifting</h2>
        <div className="rounded-3xl overflow-hidden border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-8 flex flex-col sm:flex-row items-center gap-8">
          <img src="/images/spicebox.jpg" alt="Spice box" className="w-full sm:w-72 h-48 object-cover rounded-2xl border border-amber-200" />
          <div>
            <h3 className="text-xl font-semibold text-brown-900">Curated Boxes for Every Occasion</h3>
            <p className="text-brown-800/80 mt-2">Choose from luxurious dry fruit hampers, premium spice assortments, and festive combo packs. Personalization available for corporate orders.</p>
            <a href="#products" className="mt-4 inline-block px-5 py-3 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700">Explore Gifts</a>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-amber-50/40 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Freshness is unmatched!","The spices are so aromatic.","Beautiful packaging, perfect for gifts."].map((text, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm">
                <div className="flex gap-1 text-amber-500 mb-3">{Array.from({length:5}).map((_,i)=> <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-brown-800/80">{text}</p>
                <div className="mt-4 text-sm font-semibold text-brown-900">— Verified Buyer</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl bg-white border border-amber-200 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-lg border border-amber-200" placeholder="Name" />
              <input className="px-4 py-3 rounded-lg border border-amber-200" placeholder="Email" />
            </div>
            <input className="mt-4 w-full px-4 py-3 rounded-lg border border-amber-200" placeholder="Subject" />
            <textarea className="mt-4 w-full px-4 py-3 rounded-lg border border-amber-200" rows="4" placeholder="Message" />
            <button type="button" className="mt-4 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700">Send Message</button>
          </form>
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 p-6">
            <div className="text-brown-900 font-semibold">Priyansh Dryfruits & Spices</div>
            <div className="text-brown-800/80 mt-2">123 Premium Street, Food Park, Ahmedabad, Gujarat</div>
            <div className="text-brown-800/80 mt-1">Phone: +91 12345 67890</div>
            <div className="text-brown-800/80 mt-1">Email: hello@priyanshfoods.com</div>
          </div>
        </div>
      </section>
    </>
  );
}
