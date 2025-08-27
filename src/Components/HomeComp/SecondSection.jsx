import {motion} from "framer-motion";
import Courses from "../../Javascript/Courses";
import { useRef , useEffect ,useState } from "react";

export default function SecondSection() {
  const [width , setWidth] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
}, []);
  return (
    <div>
        <div className="w-full h-[90vh] flex gap-8 justify-center px-10 flex-col items-center overflow-hidden bg-purple-950/10">
           <h1 className="text-5xl text-black font-serif">Our Courses</h1>
           <div className="contetnt-carousel  h-[65vh] flex items-center rounded-4xl p-4 w-full">
               <motion.div ref={carouselRef} className="carousel overflow-hidden cursor-grab " whileTap={{cursor: "grabbing"}}>
               <motion.div drag="x" dragConstraints={{right: 0 , left: -width }} className="inner-carousel flex w-max gap-6">
                 {Courses.map((Courses)=>(
               <motion.div className="item bg-purple-400 rounded-tr-4xl  rounded-bl-4xl h-[22rem] flex flex-col items-center w-[22rem] py-[20px] px-[20px]" key={Courses}>
                  <img className="w-[18rem] h-[18rem] rounded-[2rem] pointer-events-none object-cover" src={Courses} alt="carousel-img"/>
                  <h1 className="text-4xl relative bottom-22 text-white font-sans">Biology</h1>
               </motion.div>
                 ))}
               </motion.div>
               </motion.div>
           </div>
       </div>
    </div>
  )
}
