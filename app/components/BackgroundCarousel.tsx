"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Slider from './Slider';
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/effect-fade';


const BackgroundCarousel = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const images = [
    { src: '/shoe7.png', alt: 'Slide 1' },
    { src: '/shoe8.png', alt: 'Slide 2' },
    { src: '/shoe4.png', alt: 'Slide 3' },
    { src: '/shoe9.png', alt: 'Slide 4' }
  ];

  useGSAP(() => {
    gsap.fromTo(".come",
      {
        scrollTrigger: {
           trigger: 'top' ,
          start: 'top ', 
          end: 'bottom ', 
          
        },
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,    
        y: 0,            
        stagger: 0.1,

        ease: "power2.out"
      }
    );
    gsap.fromTo(".come-top",
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,      
        y: 0,          
        stagger: 0.1,

        ease: "power2.out"
      }
    );
  });


  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
  
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-screen w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div
        className="absolute top-0 left-0 w-full h-32 z-10 backdrop-blur-md"
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
      />


      <div
        className="absolute bottom-0 left-0 w-full h-48 z-10 backdrop-blur-lg"
        style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
      />



      <div className="relative  z-20 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center space-y-4">
          <h1 className="come text-5xl  mix-blend-difference md:text-7xl font-black tracking-tighter uppercase ">
            Speed Pro
          </h1>
          <p className="come text-lg text-gray-300 max-w-md mx-auto">
            Experience ultimate comfort and performance with our latest collection.
          </p>
        </div>


        <Slider />
      </div>
    </section>
  );
};

export default BackgroundCarousel;
