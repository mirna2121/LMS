import React from 'react'

export default function Third() {
  return (
    <div className='w-[30%]'>
        <div className='w-full h-[400px] pl-34 p-6 flex flex-col items-center justify-between rounded-4xl '>
          <div className='intouch w-full flex flex-col h-[400px]'>
            <h1 className='text-orange-100 text-2xl font-bold pt-6 pb-12'>Support</h1>
            <div className='box-details-intouch w-full flex flex-col'>
              <h1 className='text-orange-100 text-[18px] pb-4 '>Our Courses</h1>
              <h1 className='text-orange-100 text-[18px] pb-4 '>Our Library</h1>
              <h1 className='text-orange-100 text-[18px] pb-4 '>Our Teachers</h1>
              <h1 className='text-orange-100 text-[18px] pb-4 '>Become A Teacher</h1>
              <h1 className='text-orange-100 text-[18px] pb-4'>Become A Student</h1>
            </div>
          </div>
        </div>
    </div>
  )
}
