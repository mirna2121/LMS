import React from 'react'
import wallpaper from "../../assets/courses.alfaried.png"
import Choosegrade from './Choosegrade'
import Categories from './CoursesCate'
import CoursesCate from './CoursesCate'
import Footer from '../../Components/HomeComp/Footer/Footer'
import { div } from 'framer-motion/client'

export default function Courses() {
  return (
   <div className='w-full flex flex-col gap-20 '>
    <div className='w-full h-[500px] flex-row gap-18 relative top-15 bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center'>
     <img className='w-[450px]' src={wallpaper} alt="" />
     <h1 className='text-5xl text-white'>Al Faried - LMS Courses</h1>
    </div>
    <div className='w-full flex px-10 justify-center items-center flex-col pt-12 gap-14'>
       <h1 className='text-5xl font-serif text-black'>All Courses</h1>
      <Choosegrade/>
      <CoursesCate/>
    </div>
    <Footer/>
   </div>
  )
}
