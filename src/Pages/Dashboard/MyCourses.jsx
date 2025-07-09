
import course1 from "../../assets/Biology.png"
import course2 from "../../assets/Chemistry.png"
export default function MyCourses() {
  return (
    <div>
       <div className='w-full h-[200px] border-4 border-yellow-950/70 rounded-3xl flex flex-row p-8 items-center justify-between'>
         <img className='w-40 h-40 object-cover rounded-3xl' src={course1} alt="" />
         <div className='course-details flex flex-col items-center gap-8'>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>Teacher</h1>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>Mirna</h1>
         </div>
         <div className='course-details flex flex-col items-center gap-8'>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>Course</h1>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>Biology</h1>
         </div>
         <div className='course-details flex flex-col items-center gap-8'>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>Duration</h1>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>3 months</h1>
         </div>
         <div className='course-details flex flex-col items-center gap-8'>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>Price</h1>
          <h1 className='text-2xl text-yellow-950/70 font-serif'>400 LE/M</h1>
         </div>
       </div>
    </div>
  )
}
