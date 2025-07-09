import books from "../../assets/Books.jpg"
import Footer from "../../Components/HomeComp/Footer/Footer"
import Categories from "./Categories"
export default function Library() {
  return (
    <div className='container w-full relative top-[90px] flex flex-col items-center'>
           <div className='w-full h-full '>
              <img src={books} alt="" className="w-full h-full object-cover" />
           </div>
             <h1 className='text-5xl font-serif text-yellow-950/70 pb-4 pt-12'>My Library</h1>
           <div className="container w-full p-10">
            <Categories/>
           </div>
         <div className="w-full pt-14">
          <Footer/>
         </div>
    </div>
  )
}
