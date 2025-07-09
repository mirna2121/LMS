import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'


export default function FifthSection() {
  return (
    <div className='w-full h-[110vh] flex flex-row '>
        <div className='w-full flex flex-col items-center h-full'>
              <div className='w-full h-[260px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#583101" fill-opacity="1" d="M0,192L18.5,186.7C36.9,181,74,171,111,144C147.7,117,185,75,222,69.3C258.5,64,295,96,332,133.3C369.2,171,406,213,443,197.3C480,181,517,107,554,101.3C590.8,96,628,160,665,186.7C701.5,213,738,203,775,213.3C812.3,224,849,256,886,240C923.1,224,960,160,997,144C1033.8,128,1071,160,1108,197.3C1144.6,235,1182,277,1218,250.7C1255.4,224,1292,128,1329,101.3C1366.2,75,1403,117,1422,138.7L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
              </div>     
             <div className='about-us w-full h-full '>
                <div className='text h-full w-full  px-4 py-1'>
                    <h1 className='font-bold  text-yellow-950/90 text-3xl pb-6'>About Us</h1>     
                    <h1 className='font-bold  text-yellow-950/90 text-4xl pb-6'>Globally Recognized Interactive Academy Education</h1>  
                    <div className='box-component w-full h-[380px] flex flex-row gap-6'>
                      <LeftComponent/>
                      <RightComponent/>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
