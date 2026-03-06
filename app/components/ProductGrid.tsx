import React from 'react'
import Card from './Card'
import Link from 'next/link';

const ProductGrid = () => {
  return (
     <div className='my-[100%]  sm:m-[4rem]'>
        <div className='text-[3rem]  font-semibold'>
            Fresh Fits <br /> For you →
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
          <Link href='/shoe'>
      <Card 
        name="Nike Quest 6"
        price="₹7,095"
        mainImage="/shoe6.png"    
        hoverImage="/shoe8.png" 
      />
      </Link>
       <Link href='/shoe'>
      <Card 
        name="Speed Pro Max"
        price="₹10,095"
        mainImage="/shoe10.png"
        hoverImage="/shoe9.png"
      />
      </Link>
       <Link href='/shoe'>
      <Card 
        name="Nike Quest 6"
        price="₹22,305"
        mainImage="/shoe2.png"    
        hoverImage="/shoe8.png" 
      />
      </Link>
       <Link href='/shoe'>
      <Card 
        name="Speed Pro Max"
        price="₹5,305"
        mainImage="/shoe10.png"
        hoverImage="/shoe9.png"
      />
      </Link>
       <Link href='/shoe'>
      <Card 
        name="Nike Quest 6"
        price="₹6,900"
        mainImage="/shoe5.png"    
        hoverImage="/shoe8.png" 
      />
      </Link>
       <Link href='/shoe'>
      <Card 
        name="Speed Pro Max"
        price="₹6,767"
        mainImage="/shoe6.png"
        hoverImage="/shoe9.png"
      />
      </Link>
    </div>
    </div>
  )
}

export default ProductGrid