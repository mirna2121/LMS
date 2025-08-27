import banner from "../../assets/banner-home.png"

import { useLinks } from '../../Store/Zustand';

export default function FirstSection() {
  return (
    <div className='container w-full h-[94vh] relative flex'>
       <div className='w-full h-full p-6 bg-cyan-400 flex flex-row items-center relative top-16'>
        <div className="h-[600px] w-[600px] bg-amber-100/30 rounded-[50%] flex items-center justify-center"><img className="object-cover w-full h-full" src={banner} alt="" /></div>
        <div className="w-[60%] h-full flex flex-col gap-10 items-center justify-center">
          <h1 className="text-5xl text-center text-white font-sans font-bold">Improve Your Online Learning Experience Better Instantly</h1>
          <div className="h-[80px] w-[400px] bg-white rounded-4xl hover:translate-y-1 cursor-pointer flex items-center justify-center">
            <h1 className="text-2xl text-purple-500 font-sans font-bold">Tap here to start your journey !</h1>
          </div>
        </div>
       </div>
       
    </div>
  )
}
