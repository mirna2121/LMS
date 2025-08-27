import React from 'react'
import Mybooks from './Mybooks'
import Footer from '../../../Components/HomeComp/Footer/Footer'

export default function Mylibrary() {
  return (
    <div className='w-full flex px-10 justify-center items-center flex-col pt-8'>
            <h1 className='text-5xl font-serif text-black pb-16 '>My Books</h1>
          <div className='w-full h-[500px] bg-cyan-400/10 flex flex-col border-4 border-cyan-400 rounded-[50px] px-4 py-6'>
            <div className='scrol-div w-full h-full flex flex-col gap-8 px-4 overflow-auto'>
              <Mybooks/>
              <Mybooks/>
              <Mybooks/>
            </div>
          </div>
          
     </div>
  )
}
