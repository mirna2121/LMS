import exam from "../../assets/exam.png"


export default function Exam() {
  return (
   <div className="w-full flex flex-col gap-16">
         <div className="w-full h-[500px] flex-row gap-18 relative top-15 bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center">
          <div className=" w-[60%] h-full flex flex-col items-center justify-center gap-4">

           <h1 className='text-6xl w-[700px] text-white'>Test what you have learned now to know your level</h1>
          </div>
           <img className="w-[500px] p-6 relative left-0" src={exam} alt="" />
         </div>
        
       </div>
  )
}
