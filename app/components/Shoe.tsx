import React from 'react'
import Size from './Size'
import Proll from './Proll'
import ShoeSlider from './Shoeslider'
import { useCart } from './CartContext'



const Shoe = () => {
     const { addToCart } = useCart();
        const product = { 
        id: 101, 
        name: "Nike Quest 6", 
        price: "₹7,095", 
        img: "/shoe6.png" 
    };
    return (
        <>
        <div >
            <div className='come justify-center w-[95%] h-[100%] sm:h-[80vh] rounded-[30px] md:rounded-[50px] p-[1.5rem] md:p-[3rem] flex flex-col sm:flex-row  bg-white gap-6'>
                <div>
                    <Proll />
                </div>
                <img className='rounded-[50px] w-[100%] sm:w-[50%]  object-cover m-[0.5rem] transition-all ease-in-out duration-[0.2s] hover:scale-[1.05]  ' src="/shoe6.png" alt="" />

                <div>
                    <div className='text-[1rem] m-[1rem] p-[5px] text-black-500 bg-gray-100 text-center w-[40%] rounded-[20px]'>
                        ✦ BESTSELLER
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
                        <div>
                            <Size />
                        </div>
                        <button  onClick={() => {
    alert('Your item has been added to your Cart !');
    addToCart(product);
  }} className='bg-black text-white p-[1rem] w-[100%] rounded-[40px] my-[1rem] transition-all ease-in-out duration-[0.2s] hover:scale-[1.05] hover:bg-black-200 '>
                            Add to Cart 🛒
                        </button>
                        <button className='bg-white text-black border border-black p-[1rem] w-[100%] rounded-[40px] my-[1rem] transition-all ease-in-out duration-[0.2s] hover:scale-[1.05] hover:bg-black-200 '>
                            Favourite ♡
                        </button>
                    </div>

                </div>


            </div>
         

        </div>
        <div className='sm:mt-[10rem]'>
            <ShoeSlider/>
        </div>
        </>
        
    )
}

export default Shoe