import Img1 from "../../assets/feature-1.svg"
import Img2 from "../../assets/feature-2.svg"
import Img3 from "../../assets/feature-3.svg"
import Img4 from "../../assets/feature-4.svg"

export default function FourthSection() {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
        <div className='w-full flex flex-col items-center h-[300px] p-1'>
            <h1 className='font-bold text-black font-serif text-5xl pb-20'>Building Good Foundation Of Knowledge</h1>
            <div className='container-elements flex flex-row w-full h-[650px] justify-between px-4 p-4'>
              <div className="img-container  rounded-tr-4xl rounded-bl-4xl  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img1} alt="" />
                <h1 className="font-bold font-sans  text-black text-center text-2xl">High Standards For Security And Safety</h1>
              </div>
              <div className="img-container  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img2} alt="" />
                <h1 className="font-bold font-sans text-black text-center text-2xl">Kids Are Free To Use Their Imaginations</h1>
              </div>
              <div className="img-container  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img3} alt="" />
                <h1 className="font-bold font-sans  text-black text-center text-2xl">Enhance Reading And Reasoning Skills</h1>
              </div>
              <div className="img-container  w-[350px] h-[250px] flex flex-col gap-6 justify-center items-center ">
                <img className="w-[150px] h-[150px] rounded-3xl" src={Img4} alt="" />
                <h1 className="font-bold font-sans text-black text-center text-2xl">Clear Communication With Parents</h1>
              </div>
            </div>
        </div>
  
    </div>
  )
}
