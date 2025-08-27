import course from "../../assets/logo.png"
import { MdFileDownload } from "react-icons/md";

export default function CourseDetails() {
  return (
     <div className='w-[240px] h-[330px] border-3 hover:translate-y-4 border-cyan-400 flex flex-col p-2 rounded-4xl'>
          <img className="w-full h-[70%] rounded-4xl  object-cover" src={course} alt="" />
          <p className="text-[20px] px-2 text-black font-serif">Physics</p>
          <p className="text-[20px] px-2 text-black font-serif">Miss Mirna</p>
          <div className="w-full flex px-2 flex-row justify-between items-center">
            <p className="text-[20px] text-black font-serif">500 LE/M</p>
            <MdFileDownload className="text-2xl text-cyan-400" />
          </div>
        </div>
  )
}
