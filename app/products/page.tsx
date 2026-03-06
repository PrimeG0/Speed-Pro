import React from 'react'
import Navbar from '../components/Navbar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import ShoeSlider from '../components/Shoeslider'

const page = () => {
    return (
        <>

            <div className=" lg:pt-20">
                <Navbar forceBlack={true} />
                <div>
                <ProductGrid/>
                
            </div>
            <ShoeSlider/>
            <Footer/>
            </div>
            

        </>
    )
}

export default page