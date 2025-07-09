import book from "../../assets/Math.png"
import { MdFileDownload } from "react-icons/md";

export default function Booksdeteils() {
  return (
    <div className='w-[200px] h-[300px] border-3 hover:translate-y-4 border-yellow-950/70 flex flex-col p-2 rounded-4xl'>
      <img className="w-full h-[70%] rounded-4xl  object-cover" src={book} alt="" />
      <p className="text-[20px] text-yellow-950/70 font-serif">Science</p>
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-[20px] text-yellow-950/70 font-serif">100 LE</p>
        <MdFileDownload className="text-2xl text-yellow-950/70" />
      </div>
    </div>
  )
}
