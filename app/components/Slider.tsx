import Link from "next/link"



const Slider = () => {
  return (
    <div className="come absolute bottom-10 hidden md:block" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}>
        <div className=" box gap-[10px] p-[10px] rounded-[20px] flex backdrop-blur-sm">
<Link href='/shoe'>
<li className="come list-none m-[10px] transiton-all duration-200 ease-in-out brightness-90 hover:-translate-y-5 hover:scale-105 hover:brightness-100 hover:m-[5px]  ">
    <img className="w-[150] object-cover rounded-[20px] h-[100] " src="/shoe2.png" alt="" />
</li>
</Link>
<Link href='/shoe'>
<li className="come  list-none m-[10px] transiton-all duration-200 ease-in-out brightness-90 hover:-translate-y-4 hover:scale-105 hover:brightness-100 hover:m-[5px]">
    <img className="w-[150] object-cover max-h-[100] rounded-[20px]" src="/shoe6.png" alt="" />
</li>
</Link>
<Link href='/shoe'>
<li className="come list-none m-[10px] transiton-all duration-200 ease-in-out brightness-90 hover:-translate-y-4 hover:scale-105 hover:brightness-100 hover:m-[5px]">
    <img className="h-[100] rounded-[20px]" src="/shoe4.png" alt="" />
</li>
</Link>
<Link href='/shoe'>
<li className="come list-none m-[10px] transiton-all duration-200 ease-in-out brightness-90 hover:-translate-y-4 hover:scale-105 hover:brightness-100 hover:m-[5px]">
    <img className="w-[150] rounded-[20px] max-h-[100] object-cover" src="/shoe5.png" alt="" />
</li>
</Link>


        </div>
    </div>
  )
}

export default Slider