"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ forceBlack = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    
    { name: "About Us", path: "/about" },
    { name: "Cart", path: "/cart" },
  ];

  useEffect(() => {
    const handleScroll = () => {
  
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const isBlackMode = forceBlack || isScrolled;
  const textColor = isBlackMode ? "text-black" : "text-white";
  const pillBg = isBlackMode 
    ? "bg-white/80 border-black/10 shadow-lg" 
    : "bg-transparent border-white/40 shadow-md";

  return (
    <>
     
      <div className={`fixed top-5 left-1/2 -translate-x-1/2 flex items-center justify-center min-w-[60px] md:min-w-max px-[15px] md:px-[35px] py-[10px] md:py-[15px] rounded-[50px] backdrop-blur-[30px] border z-[999] transition-all duration-500 ${pillBg}`}>
        
        
        <ul className={`hidden md:flex gap-10 transition-colors duration-500 font-medium ${textColor}`}>
          {navLinks.map((link) => (
            <li key={link.name} className='hover:scale-105 hover:opacity-70 transition-all duration-200 cursor-pointer'>
              <Link href={link.path}>
                <button>{link.name}</button>
              </Link>
            </li>
          ))}
        </ul>

        <button 
          className={`md:hidden flex items-center justify-center hover:opacity-70 transition-all ${textColor}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-[30px] z-[998] flex flex-col items-center justify-center md:hidden transition-all duration-300">
          <ul className="flex flex-col gap-10 text-white text-4xl font-black text-center uppercase tracking-tighter">
            {navLinks.map((link) => (
              <li 
                key={link.name}
                className="hover:scale-110 hover:text-gray-400 transition-all cursor-pointer"
              >
                <Link href={link.path} onClick={() => setIsOpen(false)}>
                  <button>{link.name}</button>
                </Link>
              </li>
            ))}
          </ul>
          
          
        </div>
      )}
    </>
  );
};

export default Navbar;
