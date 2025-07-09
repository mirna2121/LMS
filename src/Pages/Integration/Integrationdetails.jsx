import Word from "../../assets/Word.png";
import Excel from "../../assets/Excel.png";
import Powerpoint from "../../assets/Powerpoint.png";
import Length from "../../assets/Len.png";
import Doc from "../../assets/Doc.png";
import Drive from "../../assets/Drive.png";

export default function Integrationdetails() {
  return (
    <div className="w-full flex flex-col p-14 pt-32 items-center">
         <h1 className="text-yellow-950/90 h-8 py-2 px-2 text-5xl font-serif pb-24">Integrations you can use</h1>
        <div className="h-[80vh] w-full bg-yellow-50/20 border-10 border-yellow-950/90 flex px-4 flex-wrap rounded-4xl py-4 items-center justify-between">
        
          <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center xl:items-center items-center rounded-4xl h-[48%] shadow-lg shadow-yellow-950/90 border-4 border-yellow-950/70">
            <img className="w-40 h-40 p-1 object-cover" src={Drive} alt="" />
            <button className="p-[15px] w-[400px] h-[50px] bg-yellow-950/70 shadow-lg shadow-yellow-950/60 font-serif text-[20px] hover:translate-y-2 text-amber-50 rounded-2xl cursor-pointer flex justify-center items-center">
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[48%] shadow-lg shadow-yellow-950/90  border-4 border-yellow-950/70">
            <img className="w-40 h-40 p-1 object-cover" src={Length} alt="" />
            <button className="p-[15px] w-[400px] h-[50px] bg-yellow-950/70 shadow-lg shadow-yellow-950/60 font-serif text-[20px] hover:translate-y-2 text-amber-50 rounded-2xl cursor-pointer flex justify-center items-center">
              <a
                href="https://lens.google"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[48%] shadow-lg shadow-yellow-950/90  border-4 border-yellow-950/70">
            <img className="w-50 h-40 p-1 object-cover" src={Doc} alt="" />
            <button className="p-[15px] w-[400px] h-[50px] bg-yellow-950/70 shadow-lg shadow-yellow-950/60 font-serif text-[20px] hover:translate-y-2 text-amber-50 rounded-2xl cursor-pointer flex justify-center items-center">
              <a
                href="https://docs.google.com/document"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
        
        
          <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[48%] shadow-lg shadow-yellow-950/90  border-4 border-yellow-950/70">
            <img className="w-50 h-40 p-1 object-cover" src={Word} alt="" />
            <button className="p-[15px] w-[400px] h-[50px] bg-yellow-950/70 shadow-lg shadow-yellow-950/60 font-serif text-[20px] hover:translate-y-2 text-amber-50 rounded-2xl cursor-pointer flex justify-center items-center">
              <a
                href="https://www.office.com/launch/word"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[48%] shadow-lg shadow-yellow-950/90  border-4 border-yellow-950/70">
            <img className="w-60 h-40 p-1 object-cover" src={Powerpoint} alt="" />
            <button className="p-[15px] w-[400px] h-[50px] bg-yellow-950/70 shadow-lg shadow-yellow-950/60 font-serif text-[20px] hover:translate-y-2 text-amber-50 rounded-2xl cursor-pointer flex justify-center items-center">
              <a
                href="https://www.office.com/launch/powerpoint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[48%] shadow-lg shadow-yellow-950/90  border-4 border-yellow-950/70">
            <img className="w-60 h-40 p-1 object-cover" src={Excel} alt="" />
            <button className="p-[15px] w-[400px] h-[50px] bg-yellow-950/70 shadow-lg shadow-yellow-950/60 font-serif text-[20px] hover:translate-y-2 text-amber-50 rounded-2xl cursor-pointer flex justify-center items-center">
              <a
                href="https://www.office.com/launch/excel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
        
      </div>
    </div>
  )
}
