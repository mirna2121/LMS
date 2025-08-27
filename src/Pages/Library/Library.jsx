import books from "../../assets/boook-removebg-preview.png"
import book from "../../assets/book.pic.svg"
import Footer from "../../Components/HomeComp/Footer/Footer"
import Categories from "./Categories"
export default function Library() {
  return (
    <div className='container w-full relative top-[90px] flex flex-col items-center'>
           <div className='w-full h-[500px] flex-col relative bottom-[30px] bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center'>
             <h1 className="text-5xl text-white text-center relative top-20">Al Faried Library and Learning Technologies</h1>
             <img className="relative top-20" src={books} alt="" />
           </div>
             <h1 className='text-5xl font-serif text-black pb-6 pt-10'>My Library</h1>
           <div className="container w-full p-10">
            <Categories/>
           </div>
         <div className="w-full pt-14">
          <Footer/>
         </div>
    </div>
  )
}
