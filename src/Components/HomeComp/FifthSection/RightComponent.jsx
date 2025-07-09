import Img1 from "../../../assets/succesgirl.jpg"
import Img2 from "../../../assets/sadgirl.jpg"
import Img3 from "../../../assets/vedio2.mp4"
import Img4 from "../../../assets/girlStudy.webp"

export default function RightComponent() {
  return (
    <div className="w-[50%]  h-[330px] flex flex-col p-2 ">
        <div className="top flex w-full flex-row h-[50%] pb-4">
            <img className="w-[40%]  h-full object-cover  pr-3 rounded-tl-4xl rounded-br-4xl" src={Img1} alt="" />
            <img className="w-[60%] h-fukk object-cover rounded-tr-4xl rounded-bl-4xl"  src={Img2} alt="" />
        </div>
        <div className="bottom flex w-full flex-row h-[50%]">
             <video className="w-[60%] h-full object-cover pr-3 rounded-tr-4xl rounded-bl-4xl" src={Img3} alt=""  />
             <img className="w-[40%] h-full object-cover rounded-tl-4xl rounded-br-4xl " src={Img4} alt="" />
        </div>
        
       
    </div>
  )
}
