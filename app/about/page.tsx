import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const page = () => {
  return (
    <>
    <div>
            <div className="bg-white pt-20">
        <Navbar forceBlack={true} /> 
        </div>
        <div className='justify-center ' >
<div className=' justify-center text-center text-[3rem] m-[2rem]'>
  ABOUT SPEED PRO
</div>
<div className='w-[90vw] justify-center text-center text-[2rem] m-[2rem]'>
<p>
  Welcome to <strong>SPEED PRO</strong>, where high-speed performance meets precision engineering. We believe that every athlete deserves gear that keeps up with their ambition, which is why we’ve dedicated ourselves to crafting footwear that bridges the gap between <strong>cutting-edge technology</strong> and <strong>street-ready style</strong>. Whether you’re smashing a personal record on the track, dominating the gym, or navigating the pace of urban life, SPEED PRO provides the <strong>responsive cushioning</strong>, lightweight durability, and <strong>unrivaled stability</strong> you need to move faster and further. We aren't just selling shoes; we are fueling a movement of relentless progress and helping you <strong>claim your lead</strong> in every step you take.
</p>
</div>


        </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default page