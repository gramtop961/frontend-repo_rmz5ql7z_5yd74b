import { useMemo } from "react";

export default function CartDrawer({ open, items, onClose, onInc, onDec, onCheckout }) {
  const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);
  const tax = useMemo(() => +(subtotal * 0.05).toFixed(2), [subtotal]);
  const total = useMemo(() => +(subtotal + tax).toFixed(2), [subtotal, tax]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl border-l border-amber-200 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-amber-200">
          <h3 className="text-xl font-bold text-brown-900">Your Cart</h3>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-220px)]">
          {items.length === 0 ? (
            <div className="text-brown-800/70">Your cart is empty.</div>
          ) : (
            items.map((it) => (
              <div key={it.title} className="flex gap-3 items-center">
                <img src={it.image_url} alt={it.title} className="w-16 h-16 rounded-lg object-cover border border-amber-200" />
                <div className="flex-1">
                  <div className="font-semibold text-brown-900">{it.title}</div>
                  <div className="text-sm text-brown-800/70">₹{it.price}</div>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button onClick={() => onDec(it)} className="w-7 h-7 rounded-full border border-amber-300">-</button>
                    <span className="min-w-6 text-center">{it.qty}</span>
                    <button onClick={() => onInc(it)} className="w-7 h-7 rounded-full border border-amber-300">+</button>
                  </div>
                </div>
                <div className="font-semibold text-brown-900">₹{(it.price * it.qty).toFixed(0)}</div>
              </div>
            ))
          )}
        </div>
        <div className="p-6 border-t border-amber-200 space-y-2">
          <div className="flex justify-between text-sm text-brown-800/80"><span>Subtotal</span><span>₹{subtotal.toFixed(0)}</span></div>
          <div className="flex justify-between text-sm text-brown-800/80"><span>Tax (5%)</span><span>₹{tax.toFixed(0)}</span></div>
          <div className="flex justify-between text-lg font-bold text-brown-900"><span>Total</span><span>₹{total.toFixed(0)}</span></div>
          <button onClick={() => onCheckout({subtotal, tax, total})} className="mt-3 w-full px-5 py-3 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700">Checkout</button>
        </div>
      </div>
    </div>
  );
}
