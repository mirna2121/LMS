import React from 'react'
import course1 from "../../../assets/logo.png"
export default function Mybooks() {
  return (
    <div>
        <div className='w-full h-[200px] border-3 border-cyan-400 rounded-3xl flex flex-row p-8 items-center justify-between'>
                 <img className='w-40 h-40 object-cover rounded-3xl' src={course1} alt="" />
                 <div className='course-details flex flex-col items-center gap-8'>
                  <h1 className='text-2xl text-black font-serif'>Book</h1>
                  <h1 className='text-2xl text-black font-serif'>Biology</h1>
                 </div>
                 <div className='course-details flex flex-col items-center gap-8'>
                  <h1 className='text-2xl text-black font-serif'>Auther</h1>
                  <h1 className='text-2xl text-black font-serif'>Mirna</h1>
                 </div>
                 <div className='course-details flex flex-col items-center gap-8'>
                  <h1 className='text-2xl text-black font-serif'>Slides</h1>
                  <h1 className='text-2xl text-black font-serif'>300</h1>
                 </div>
                 <div className='course-details flex flex-col items-center gap-8'>
                  <h1 className='text-2xl text-black font-serif'>Price</h1>
                  <h1 className='text-2xl text-black font-serif'>400 LE/M</h1>
                 </div>
               </div>
    </div>
  )
}
