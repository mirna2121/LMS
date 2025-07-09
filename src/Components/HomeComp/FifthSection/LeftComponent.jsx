import Img1 from "../../../assets/aboutUs1.png"
import Img2 from "../../../assets/aboutUs2.png"
import Img3 from "../../../assets/aboutUs3.png"
import Img4 from "../../../assets/aboutUs4.png"

export default function LeftComponent() {
  return (
    <div className=' flex flex-wrap gap-8 justify-between  w-[50%]'>
       <div className='content h-[30%] w-[47%] p-2 gap-20  flex flex-row items-center border-4 border-yellow-950/90 rounded-tr-4xl rounded-bl-4xl'>
        <img className="w-[70px] h-[70px] rounded-2xl" src={Img1} alt="" />
        <h1 className='font-bold  text-yellow-950/90 text-[20px]'>Child Friendly Environment</h1>
       </div>
       <div className='content h-[30%] w-[47%] p-2 gap-20  flex flex-row items-center border-4 border-yellow-950/90 rounded-tr-4xl rounded-bl-4xl'>
        <img className="w-[70px] h-[70px] rounded-2xl" src={Img2} alt="" />
        <h1 className='font-bold  text-yellow-950/90 text-[20px]'>Well-Built Infrastructure</h1>
       </div>
       <div className='content h-[30%] w-[47%] p-2 gap-20  flex flex-row items-center border-4 border-yellow-950/90 rounded-tr-4xl rounded-bl-4xl'>
        <img className="w-[70px] h-[70px] rounded-2xl" src={Img3} alt="" />
        <h1 className='font-bold  text-yellow-950/90 text-[20px]'>Professional Staff Members</h1>
       </div>
       <div className='content h-[30%] w-[47%] p-2 gap-20  flex flex-row items-center border-4 border-yellow-950/90 rounded-tr-4xl rounded-bl-4xl'>
        <img className="w-[70px] h-[70px] rounded-2xl" src={Img4} alt="" />
        <h1 className='font-bold  text-yellow-950/90 text-[20px]'>Real-Time Education</h1>
       </div>
    </div>
  )
}
