import SecondDiv from '../MyCourses'
import "./Second.css"

export default function Second () {
  return (
    <div className='w-full flex px-10 pt-[120px] justify-center items-center flex-col'>
        <h1 className='text-5xl font-serif text-yellow-950/90 pb-10 '>My Courses</h1>
      <div className='w-full h-[500px] bg-amber-100/40 flex flex-col border-4 border-yellow-950/70 rounded-[50px] px-4 py-6'>
        <div className='scrol-div w-full h-full flex flex-col gap-8 px-4 overflow-auto'>
           <SecondDiv/>
           <SecondDiv/>
           <SecondDiv/>
        </div>
      </div>
    </div>
  )
}
