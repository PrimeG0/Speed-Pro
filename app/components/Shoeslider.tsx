"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SHOES = [
  { id: 1, name: "Nike Air Max 270", price: "₹12,995", img: "/shoe2.png" },
  { id: 2, name: "Speed Pro Maximillian", price: "₹17,999", img: "/shoe5.png" },
  { id: 3, name: "Jordan Retro High", price: "₹15,495", img: "/shoe10.png" },
  { id: 4, name: "Nike Dunk Low", price: "₹8,295", img: "/shoe6.png" },
  { id: 5, name: "Yeezy Boost 350", price: "₹22,500", img: "/shoe2.png" },
];

const ShoeSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full rounded-3xl max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Must Haves</h2>
          <p className="text-gray-500 font-medium">New Drops 2026</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-gray-100 p-3 rounded-full hover:bg-black hover:text-white transition-all active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-gray-100 p-3 rounded-full hover:bg-black hover:text-white transition-all active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SHOES.map((shoe) => (
     
          <Link 
            href="/shoe" 
            key={shoe.id} 
            className="min-w-[300px] md:min-w-[400px] snap-start group/card cursor-pointer block"
          >
            <div className="relative aspect-[4/5] bg-[#f5f5f5] rounded-3xl overflow-hidden mb-4">
              <img 
                src={shoe.img} 
                alt={shoe.name}
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm text-black">
                Top Seller
              </div>
            </div>

            <div className="space-y-1 px-2">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">{shoe.name}</h3>
              <p className="text-gray-500 font-medium italic">Running Collection</p>
              <p className="text-xl font-black text-black pt-2">{shoe.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShoeSlider;
