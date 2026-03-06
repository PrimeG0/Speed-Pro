'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Shoe from '../components/Shoe'



const Page = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
        <Navbar forceBlack={true} />
                <div>
                    <Shoe/>
                </div>
<Footer/>
    </div>
  )
}

export default Page
