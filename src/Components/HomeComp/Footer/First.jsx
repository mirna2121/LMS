import Logo from "../../../assets/LOGO.png"
import img1 from "../../../assets/footerimg.png"

export default function First() {
  return (
    <div className='w-[30%]'>
      <div className='w-full h-[400px] pl-8 flex flex-col rounded-4xl'>
         <img className="w-[150px] h-[150px] object-cover" src={Logo} alt="" />
         <h1 className="text-orange-100 text-2xl font-bold pb-6">Al Faried Academy</h1>
         <h1 className="text-orange-100 text-[18px] pb-6">A degital educational platform for online classes</h1>
         <img className="w-[130px] h-[130px] object-contain" src={img1} alt="" />
      </div>
    </div>
  )
}
