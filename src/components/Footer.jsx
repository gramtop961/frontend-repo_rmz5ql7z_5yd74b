import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-extrabold text-brown-900">Priyansh</div>
          <div className="text-xs uppercase tracking-[0.2em] text-amber-700">Dryfruits & Spices</div>
          <p className="mt-4 text-brown-800/80">Premium dry fruits and authentic spices delivered fresh. Hygienically processed and packed with care.</p>
        </div>
        <div>
          <div className="font-semibold text-brown-900 mb-3">Store Info</div>
          <ul className="text-brown-800/80 space-y-1 text-sm">
            <li>123 Premium Street, Ahmedabad</li>
            <li>+91 12345 67890</li>
            <li>hello@priyanshfoods.com</li>
            <li>Mon–Sat: 9:00 AM – 8:00 PM</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-brown-900 mb-3">Follow Us</div>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-amber-300 flex items-center justify-center text-amber-800 hover:bg-amber-50"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-amber-300 flex items-center justify-center text-amber-800 hover:bg-amber-50"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-amber-300 flex items-center justify-center text-amber-800 hover:bg-amber-50"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-brown-800/60 border-t border-amber-200">© {new Date().getFullYear()} Priyansh Dryfruits & Spices. All rights reserved.</div>
    </footer>
  );
}
