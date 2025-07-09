import mission from "../../assets/mission.png"
import vission from "../../assets/vision.png"

export default function Ourmission() {
  return (
    <div className='w-full h-[100vh] bg-orange-100 flex flex-col items-center py-4 '>
        <h1 className='font-bold text-yellow-950/90 text-4xl pb-18 font-serif'>What Makes Our Teaching Unique</h1>
        <div className='container w-full h-[540px] flex flex-col items-center justify-between'>
            <div className='w-[76%] h-[260px] rounded-4xl bg-yellow-950/90 relative left-30'>
            <div className="text w-[80%] h-[80%]  flex flex-col justify-between p-4 ">
                <h1 className="text-4xl font-serif text-orange-100 px-7">Our Mission</h1>
                <h1 className="text-[20px]  text-orange-100 px-7 ">We aim to revolutionise the educational landscape by providing a top-tier individually-tailored online learning environment where learners can thrive academically and professionally.
                   We are more than just an online education centre. We are a platform committed to making quality education accessible and affordable for all, helping our learners achieve excellence</h1>
            </div>
            <img className="relative left-230 bottom-66 object-contain w-[270px] h-[270px] flex flex-row" src={mission} alt="" />
            </div>
        <div className='w-[76%] h-[260px] rounded-4xl bg-yellow-950/90 relative right-30 flex flex-row'>
            <img className="relative left-0 bottom-14 object-contain w-[270px] h-[270px]" src={vission} alt="" />
            <div className="text w-[90%] h-[96%]  flex flex-col justify-between p-4">
                <h1 className="text-4xl font-serif text-orange-100 px-7 pb-4 ">Our Vission</h1>
                <h1 className="text-[20px]  text-orange-100 px-7 ">
                    Excellence Online Academy envisions transforming the educational landscape by providing a top-tier, 
                    individually tailored online learning environment where learners can thrive academically and professionally.
                     The academy is committed to making quality education accessible and affordable for all, helping learners achieve excellence. 
                     Its core values-excellence, innovation, integrity, efficiency, reliability, professionalism, quality, flexibility,
                      and empowerment-guide its operations and client interactions
                </h1>
            </div>
        </div>
        </div>
    </div>
  )
}
