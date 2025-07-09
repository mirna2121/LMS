import React from 'react'
import Choosegrade from './Choosegrade'
import Categories from './CoursesCate'
import CoursesCate from './CoursesCate'
import Footer from '../../Components/HomeComp/Footer/Footer'
import { div } from 'framer-motion/client'

export default function Courses() {
  return (
   <div className='w-full flex flex-col gap-20'>
    <div className='w-full flex px-10 justify-center items-center flex-col pt-30 gap-14'>
       <h1 className='text-5xl font-serif text-yellow-950/70'>All Courses</h1>
      <Choosegrade/>
      <CoursesCate/>
    </div>
    <Footer/>
   </div>
  )
}
