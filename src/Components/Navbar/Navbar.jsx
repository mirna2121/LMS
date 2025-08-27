import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useLinks } from '../../Store/Zustand';
import logo from "../../assets/logo.png"
export default function Navbar() {
  const navigate = useNavigate();
  const {teacherLinks, studentLinks, commonLinks} = useLinks();

  return (
    <div className=' bg-white shadow-md shadow-cyan-300 rounded-b-4xl flex fixed justify-center items-center w-full h-[90px] z-10'>
        <div className='header w-full flex justify-between px-3 flex-row items-center bg-white rounded-b-4xl'>
            <div className='w-[350px] h-[90px] relative flex items-center'>
              <img className='w-[150px] h-[100px] object-cover pt-4' src={logo} alt="" />
              <h1 className='text-2xl text-purple-600 font-serif font-bold relative bottom-1 right-9'>Al Faried</h1>
            </div>
            <div className='navbar h-[60px] w-[70%]   rounded-2xl flex justify-around items-center'>
            {studentLinks.map((el, index) => {
                return(
                    <Link
                    key={el.path}
                    to={el.path}
                    className={`p-3 w-full hover:translate-y-1.5 rounded-md text-purple-500 font-bold items-center flex flex-col font-serif`}>
                    {el.name}
                    </Link>
                )
            })}
        </div>
        </div>
    </div>
  )
}
