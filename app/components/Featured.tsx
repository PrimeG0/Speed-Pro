import React from 'react'
import Link from 'next/link';

const Featured = () => {
  return (
    <div className='justify-center '>
        <div className='come w-[95%] h-[100%] sm:h-[80vh] rounded-[30px] md:rounded-[50px] p-[1.5rem] md:p-[3rem] flex flex-col sm:flex-row  bg-white gap-6'>
            
<img className='rounded-[50px] w-[100%] sm:w-[50%]  object-cover m-[0.5rem] transition-all ease-in-out duration-[0.2s] hover:scale-[1.05]  ' src="/shoe6.png" alt="" />
<div>
  <div className='text-[1rem] m-[1rem] p-[5px] text-black-500 bg-gray-100 text-center w-[40%] rounded-[20px]'>
      ✦ bestseller
    </div>
  <div className='m-[1rem] font-semibold text text-[3rem]'>
    Nike Quest 6
    </div>
    <div>
    <div className='text-black-100 text-[1.5rem] m-[1rem]'>
      Men's Road Running Shoes
    </div>
    <div className='m-[1rem] font-semibold text text-[3rem]'>
      ₹7,095
    </div>
<Link href='/shoe'>
    <button className='bg-black text-white p-[1rem] w-[100%] rounded-[40px] my-[2rem] transition-all ease-in-out duration-[0.2s] hover:scale-[1.05] hover:bg-black-200 '> 
      Add to Cart
    </button>
    </Link>
  </div>
</div>
            

        </div>
    </div>
  )
}

export default Featured