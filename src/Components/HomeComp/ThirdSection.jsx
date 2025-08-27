import {motion} from "framer-motion";
import Teams from "../../Javascript/Teams"
import { useRef , useEffect ,useState } from "react";


export default function ThirdSection() {
     const [width , setWidth] = useState(0);
      const carouselRef = useRef();
      useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }, []);
  return (
    <div>
         <div className="w-full h-[106vh] flex gap-10 pt-4 px-10 flex-col items-center overflow-hidden bg-purple-950/10">
           <h1 className="text-5xl text-black font-serif">Our Team</h1>
           <div className="contetnt-carousel  h-[74vh] flex items-center rounded-4xl p-4 w-full">
               <motion.div ref={carouselRef} className="carousel overflow-hidden cursor-grab " whileTap={{cursor: "grabbing"}}>
               <motion.div drag="x" dragConstraints={{right: 0 , left: -width }} className="inner-carousel flex w-max gap-6">
                 {Teams.map((Teams)=>(
               <motion.div className="item h-[470px] flex flex-row  bg-white/80 w-[27rem] py-[40px] px-[20px] justify-center rounded-tr-4xl rounded-bl-4xl " key={Teams}>
                  <div className="teacher-details  w-full h-full flex flex-col justify-center">
                    <img className="w-full h-[360px]  rounded-[2rem] object-cover pointer-events-none" src={Teams} alt="carousel-img"/>
                    <div className="teacher-details-text  w-full">
                      <h1 className="text-black px-3 py-2 font-serif text-2xl">Miss Mirna</h1>
                      <h1 className="text-black px-3  text-2xl">Science Teacher</h1>
                     
                    </div>
                  </div>
               </motion.div>
                 ))}
               </motion.div>
               </motion.div>
           </div>
       </div>
    </div>
  )
}
