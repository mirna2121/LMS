import rocket from "../../assets/rocket.png"
import Footer from "../../Components/HomeComp/Footer/Footer"
import Library from "../Library/Library"
import Mylibrary from "./Library/Mylibrary"
import Second from "./SecondSection/Second "
import sabar from "../../assets/sapar.pic.svg"
import book from "../../assets/book.pic.svg"

export default function Dashboard() {
  return (
    <div className='w-full flex flex-col gap-16 items-center '>
      <div className='w-full h-[500px] relative top-[60px] bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center'>
       <div className="w-[1000px] relative left-44 h-[80px] rounded-3xl flex items-center justify-center"> 
        <h1 className='text-5xl text-white font-bold text-center'>This is your learning dashboard will help you to finish your Courses Smoothly</h1>
       </div>
       <img className="w-[250px] relative bottom-12 left-48" src={sabar} alt="" />
       <img className="w-[200px] relative top-38 right-300" src={book} alt="" />
      </div>
     
     <Second/>
     <Mylibrary/>
     <div className="w-full pt-10">
      <Footer/>
     </div>
    </div>
  )
}
