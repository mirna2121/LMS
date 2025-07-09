import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Second() {
  return (
    <div className='w-[30%]'>
        <div className='w-full h-[400px] p-6 pl-28 flex flex-col  rounded-4xl'>
          <div className='intouch w-full flex flex-col h-[400px]'>
            <h1 className='text-orange-100 text-2xl font-bold pt-6 pb-12'>Get In Touch</h1>
            <div className='box-details-intouch w-full flex flex-col'>
              <h1 className='text-orange-100 text-[18px] pb-6 '>E-Mail : mirafaried@icloud.com</h1>
              <h1 className='text-orange-100 text-[18px] pb-2 '>Call Us : 01154753197</h1>
            </div>
          </div>
          <h1 className="text-orange-100 text-2xl font-bold pb-10 pt-4">Social Media</h1>
           <div className='w-full flex flex-row justify-betwen gap-5'>
            <CiFacebook className='w-[35px] h-[35px] object-cover text-orange-100'/>
            <FaInstagram className='w-[35px] h-[35px] object-cover text-orange-100'/>
            <FaWhatsapp className='w-[35px] h-[35px] object-cover text-orange-100'/>
           </div>
        </div>
    </div>
  )
}
