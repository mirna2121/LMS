import Img1 from "../../assets/shot1.png"
import Img2 from "../../assets/shot2.png"
import Img3 from "../../assets/shot3.png"
import Img4 from "../../assets/shot4.png"

export default function FourthSection() {
  return (
    <div className='w-full h-[90vh] pt-30  flex flex-col'>
        <div className='w-full flex flex-col items-center h-[300px] p-1'>
            <h1 className='font-bold text-yellow-950/90 text-4xl pb-10'>Building Good Foundation Of Knowledge</h1>
            <div className='container-elements flex flex-row w-full h-[650px] justify-between px-4 p-4'>
              <div className="img-container  px-11 rounded-tr-4xl rounded-bl-4xl  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img1} alt="" />
                <h1 className="font-extrabold  text-yellow-950/90 text-2xl">High Standards For Security And Safety</h1>
              </div>
              <div className="img-container  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img2} alt="" />
                <h1 className="font-extrabold px-8 text-yellow-950/90 text-2xl">Kids Are Free To Use Their Imaginations</h1>
              </div>
              <div className="img-container  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img3} alt="" />
                <h1 className="font-extrabold px-7 text-yellow-950/90 text-2xl">Enhance Reading And Reasoning Skills</h1>
              </div>
              <div className="img-container  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img4} alt="" />
                <h1 className="font-extrabold text-yellow-950/90 text-2xl">Clear Communication With Parents</h1>
              </div>
            </div>
        </div>
      <div className='w-full'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#583101" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}
