import React from 'react'
import Mybooks from './Mybooks'
import Footer from '../../../Components/HomeComp/Footer/Footer'

export default function Mylibrary() {
  return (
    <div className='w-full flex px-10 justify-center items-center flex-col pt-10'>
            <h1 className='text-5xl font-serif text-yellow-950/70 pb-10 '>My Books</h1>
          <div className='w-full h-[500px] bg-amber-100/40 flex flex-col border-4 border-yellow-950/70 rounded-[50px] px-4 py-6'>
            <div className='scrol-div w-full h-full flex flex-col gap-8 px-4 overflow-auto'>
              <Mybooks/>
              <Mybooks/>
              <Mybooks/>
            </div>
          </div>
          
     </div>
  )
}
