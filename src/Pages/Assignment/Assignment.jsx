import Footer from "../../Components/HomeComp/Footer/Footer"
import Assignmentdetails from "./Assignmentdetails"

export default function Assignment() {
  return (
    <div className='w-full flex flex-col gap-16'>
      <Assignmentdetails/>
      <Footer/>
    </div>
  )
}
