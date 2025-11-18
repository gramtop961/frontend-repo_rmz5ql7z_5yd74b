import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import InformationalSections from "./components/InformationalSections";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL;

  // Seed demo products (idempotent)
  useEffect(() => {
    fetch(`${backend}/seed`, { method: 'POST' }).catch(()=>{});
  }, [backend]);

  const addToCart = (p) => {
    setCart((prev) => {
      const idx = prev.findIndex((x) => x.title === p.title);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const inc = (p) => setCart((prev) => prev.map((x) => x.title === p.title ? { ...x, qty: x.qty + 1 } : x));
  const dec = (p) => setCart((prev) => prev.flatMap((x) => x.title === p.title ? (x.qty > 1 ? [{ ...x, qty: x.qty - 1 }] : []) : [x]));

  const checkout = async ({ subtotal, tax, total }) => {
    const payload = {
      customer_name: "Guest",
      customer_email: "guest@example.com",
      shipping_address: "N/A",
      items: cart.map(c => ({ product_id: c.title, title: c.title, quantity: c.qty, price: c.price })),
    };
    const res = await fetch(`${backend}/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json();
    alert(`Order placed! Total: ₹${total}. Order ID: ${data.order_id || 'N/A'}`);
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,white,rgba(255,248,231,0.5))] text-brown-900">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <Hero />
      <ProductGrid onAdd={addToCart} />
      <InformationalSections />
      <Footer />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onInc={inc} onDec={dec} onCheckout={checkout} />
    </div>
  );
}

export default App;
