import { ShoppingCart, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onCartClick }) {
  const [open, setOpen] = useState(false);
  const linkClass = "text-brown-900/80 hover:text-brown-900 transition";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-amber-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 ring-2 ring-amber-300/70 shadow-md" />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-wide text-brown-900">Priyansh</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber-700">Dryfruits & Spices</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About Us</a>
          <a href="#products" className={linkClass}>Products</a>
          <a href="#dryfruits" className={linkClass}>Dry Fruits</a>
          <a href="#spices" className={linkClass}>Spices</a>
          <a href="#combos" className={linkClass}>Combo Packs</a>
          <a href="#gifting" className={linkClass}>Gifting</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <a href="#reviews" className={linkClass}>Customer Reviews</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+911234567890" className="hidden sm:flex items-center gap-2 text-brown-900/80 hover:text-brown-900">
            <Phone className="w-5 h-5" />
            <span className="text-sm font-medium">+91 12345 67890</span>
          </a>
          <button onClick={onCartClick} className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white shadow hover:bg-amber-700 transition">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-300/60 text-amber-800" onClick={() => setOpen(v=>!v)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-amber-200/60 bg-white/90">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-3">
            {["Home","About Us","Products","Dry Fruits","Spices","Combo Packs","Gifting","Contact","Customer Reviews"].map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(/\s+/g,'')}`} className="text-brown-900/80 hover:text-brown-900 py-2">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
