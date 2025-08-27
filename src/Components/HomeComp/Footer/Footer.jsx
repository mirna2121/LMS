import React from 'react'

import Logo from "../../../assets/LOGO.png"
import FooterDecoration from './FooterDecoration'
import First from './First'
import Second from './Second'
import Third from './Third'

export default function Footer() {
  return (
    <div className='w-full h-[64vh] bg-purple-500 p-4'>
         
         <div className='footer-details w-full h-[450px] flex flex-row items-center justify-around'>
           <First/>
           <Second/>
           <Third/>
         </div>
    </div>
  )
}
