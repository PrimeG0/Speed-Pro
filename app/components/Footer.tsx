"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        

        <div className="space-y-4">
          <h2 className="text-2xl font-black italic tracking-tighter uppercase">SPEED PRO</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining your stride with the most exclusive drops of 2026. Join the movement.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="hover:text-gray-400 cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-gray-400 cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-gray-400 cursor-pointer transition-colors" />
            <Youtube size={20} className="hover:text-gray-400 cursor-pointer transition-colors" />
          </div>
        </div>

   
        <div>
          <h3 className="font-bold uppercase mb-6 tracking-widest text-xs text-gray-500">Shop</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:translate-x-2 transition-transform"><Link href="/products">All Shoes</Link></li>
            <li className="hover:translate-x-2 transition-transform"><Link href="/products">Running</Link></li>
            <li className="hover:translate-x-2 transition-transform"><Link href="/products">Lifestyle</Link></li>
            <li className="hover:translate-x-2 transition-transform"><Link href="/products">Limited Drops</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold uppercase mb-6 tracking-widest text-xs text-gray-500">Support</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:translate-x-2 transition-transform"><Link href="/about">Our Story</Link></li>
            <li className="hover:translate-x-2 transition-transform"><Link href="/contact">Contact Us</Link></li>
            <li className="hover:translate-x-2 transition-transform"><Link href="/shipping">Shipping Info</Link></li>
            <li className="hover:translate-x-2 transition-transform"><Link href="/returns">Returns</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500">Stay Updated</h3>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-white/40 transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full hover:scale-105 transition-transform">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
        <p>© 2026 SPEED PRO. ALL RIGHTS RESERVED. PrimeG . </p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
