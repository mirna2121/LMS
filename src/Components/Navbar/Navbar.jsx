import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useLinks } from '../../Store/Zustand';
import logo from "../../assets/LOGO.png"
export default function Navbar() {
  const navigate = useNavigate();
  const {teacherLinks, studentLinks, commonLinks} = useLinks();

  return (
    <div className=' bg-yellow-950/90 flex fixed justify-center items-center w-full h-[90px] z-10'>
        <div className='header w-full flex justify-between px-10 flex-row items-center'>
            <div className='w-[150px] h-[90px] flex items-center justify-center relative bottom-2 left-0 rounded-4xl'><img className='w-[150px] h-[110px] ' src={logo} alt="" /></div>
            <div className='navbar h-[60px] w-[70%]   rounded-2xl flex justify-around items-center'>
            {studentLinks.map((el, index) => {
                return(
                    <Link
                    key={el.path}
                    to={el.path}
                    className={`p-3 w-full hover:bg-amber-950/30 rounded-md text-amber-100 font-bold items-center flex flex-col`}>
                    {el.icon}
                    {el.name}
                    </Link>
                )
            })}
        </div>
        </div>
    </div>
  )
}
