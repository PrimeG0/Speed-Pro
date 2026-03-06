'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
import BackgroundCarousel from './components/BackgroundCarousel'
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ShoeSlider from "./components/Shoeslider";





export default function Home() {
  return (
    <>
    <div className=" h-[10%] inset-0 flex flex-col items-center m-10px z-600 top-5 ">
          <Navbar />
        </div>

    <div className="flex min-h-screen items-center justify-center">
<BackgroundCarousel/>

    </div>
    <div>
    <Products/>
    </div >
    <div className="m-[1rem]">
<ShoeSlider/>
    </div>
    
    <Footer/>
    </>
  );
}
