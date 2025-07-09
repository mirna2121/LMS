import {motion} from "framer-motion";
import Images from "../../Javascript/Images";
import { useRef , useEffect ,useState } from "react";

export default function SecondSection() {
  const [width , setWidth] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
}, []);
  return (
    <div>
        <div className="w-full h-[89vh] flex gap-10 pt-10 px-10 flex-col items-center overflow-hidden">
           <h1 className="text-4xl text-yellow-950/90 font-serif font-bold">Our Courses</h1>
           <div className="contetnt-carousel  h-[65vh] flex items-center rounded-4xl p-4 w-full">
               <motion.div ref={carouselRef} className="carousel overflow-hidden cursor-grab " whileTap={{cursor: "grabbing"}}>
               <motion.div drag="x" dragConstraints={{right: 0 , left: -width }} className="inner-carousel flex w-max gap-6">
                 {Images.map((Images)=>(
               <motion.div className="item bg-yellow-950/90 rounded-tr-4xl  rounded-bl-4xl h-[26rem] flex flex-row items-center w-[26rem] py-[40px] px-[20px]" key={Images}>
                  <img className="w-[24rem] h-[24rem] rounded-[2rem] pointer-events-none object-cover" src={Images} alt="carousel-img"/>
               </motion.div>
                 ))}
               </motion.div>
               </motion.div>
           </div>
       </div>
    </div>
  )
}
