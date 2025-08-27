import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'


export default function FifthSection() {
  return (
    <div className='w-full h-[80vh] flex flex-row bg-purple-950/10 py-14'>
        <div className='w-full flex flex-col items-center h-full'>
                
             <div className='about-us w-full h-full '>
                <div className='text h-full w-full  px-12 py-1'>
                    <h1 className='font-bold  text-black font-serif text-3xl pb-6'>About Us</h1>     
                    <h1 className='font-bold  text-black font-serif text-4xl pb-8'>Globally Recognized Interactive Academy Education</h1>  
                    <div className='box-component w-full h-[340px] flex flex-row gap-6'>
                      <LeftComponent/>
                      <RightComponent/>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
