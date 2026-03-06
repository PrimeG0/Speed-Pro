"use client";
import { useCart } from '../components/CartContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';


export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((acc: number, item: any) => acc + (parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar forceBlack={true} />
      <div className="max-w-4xl mx-auto pt-32 pb-16 px-4">
        <h1 className="text-4xl font-black uppercase mb-8">Your Bag</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">Your cart is empty.</p>
            <Link href="/" className="bg-black text-white px-8 py-3 rounded-full font-bold">Shop Now</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item: any) => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                  <img src={item.img} className="w-24 h-24 object-cover rounded-2xl" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    <p className="font-black mt-1">{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs mt-2 underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border h-fit">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between border-b pb-4 mb-4">
                <span>Subtotal</span>
                <span className="font-bold">₹{total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
