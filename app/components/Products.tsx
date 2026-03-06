import React from 'react'
import Featured from './Featured'
import ProductGrid from './ProductGrid'
const Products = () => {
  return (
    <div className='m-[1rem] sm:m-[5rem]'>
        <div className='text-[3rem] sm:m-[2rem] font-bold'>
        Featured →
        </div>
        <div>
            <Featured/>
            <ProductGrid/>
        </div>

    </div>
  )
}

export default Products