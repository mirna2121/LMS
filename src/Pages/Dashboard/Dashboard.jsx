import rocket from "../../assets/rocket.png"
import Footer from "../../Components/HomeComp/Footer/Footer"
import Library from "../Library/Library"
import Mylibrary from "./Library/Mylibrary"
import Second from "./SecondSection/Second "

export default function Dashboard() {
  return (
    <div className='w-full flex flex-col gap-16 items-center '>
     <div className='w-full h-[100px] px-10  bg-amber-100 relative top-[140px] flex flex-col items-center rounded-[50px] justify-center  gap-8'>
        <div className='w-full h-[150px] rounded-3xl bg-yellow-950/90 shadow-2xl shadow-yellow-950/50 p-4 flex items-center justify-center'>
        <h1 className='text-3xl text-orange-100 font-serif'>Hello, <span className='text-3xl text-orange-100'>This is your learning dashboard will help you to finish your Courses Smoothly</span></h1>
        </div>
     </div>
     <Second/>
     <Mylibrary/>
     <div className="w-full pt-10">
      <Footer/>
     </div>
    </div>
  )
}
