import Word from "../../assets/Word.png";
import Excel from "../../assets/Excel.png";
import Powerpoint from "../../assets/Powerpoint.png";
import Length from "../../assets/Len.png";
import Doc from "../../assets/Doc.png";
import Drive from "../../assets/Drive.png";

export default function Integrationdetails() {
  return (
    <div className="w-full flex flex-col p-14 pt-32 items-center">
      <h1 className="text-black h-8 px-2 text-5xl font-serif pb-28">
        Applications you can use
      </h1>
      <div className="h-[86vh] w-full border-6 border-dotted border-black flex px-8 flex-wrap rounded-4xl py-6 items-center justify-between">
        <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center xl:items-center items-center rounded-4xl h-[47%]  border-4 border-black">
          <img
            className="w-[100px] h-[150px] p-1 object-cover"
            src={Drive}
            alt=""
          />
          <button className="p-[15px] w-[150px] h-[50px] shadow-md shadow-green-900 font-serif text-[20px] hover:translate-y-2 text-black rounded-2xl cursor-pointer flex justify-center items-center">
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </button>
        </div>
        <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[47%] border-4 border-black">
          <img
            className="w-[120px] h-[150px] p-1 object-cover"
            src={Length}
            alt=""
          />
          <button className="p-[15px] w-[150px] h-[50px] shadow-md shadow-green-900 font-serif text-[20px] hover:translate-y-2 text-black rounded-2xl cursor-pointer flex justify-center items-center">
            <a
              href="https://lens.google"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </button>
        </div>
        <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[47%] border-4 border-black">
          <img
            className="w-[100px] h-[150px] p-1 object-cover"
            src={Doc}
            alt=""
          />
          <button className="p-[15px] w-[150px] h-[50px] shadow-md shadow-green-900 font-serif text-[20px] hover:translate-y-2 text-black rounded-2xl cursor-pointer flex justify-center items-center">
            <a
              href="https://docs.google.com/document"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </button>
        </div>

        <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[47%] border-4 border-black">
          <img
            className="w-[120px] h-[170px] p-1 object-cover"
            src={Word}
            alt=""
          />
          <button className="p-[15px] w-[150px] h-[50px] shadow-md shadow-green-900 font-serif text-[20px] hover:translate-y-2 text-black rounded-2xl cursor-pointer flex justify-center items-center">
            <a
              href="https://www.office.com/launch/word"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </button>
        </div>
        <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[47%] border-4 border-black">
          <img
            className="w-[100px] h-[150px] p-1 object-cover"
            src={Powerpoint}
            alt=""
          />
          <button className="p-[15px] w-[150px] h-[50px] shadow-md shadow-green-900 font-serif text-[20px] hover:translate-y-2 text-black rounded-2xl cursor-pointer flex justify-center items-center">
            <a
              href="https://www.office.com/launch/powerpoint"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </button>
        </div>
        <div className="xl:w-[32%] lg:w-[30%] md:w-[30%] w-full flex flex-col justify-center items-center rounded-4xl h-[47%] border-4 border-black">
          <img
            className="w-[120px] h-[150px] p-1 object-cover"
            src={Excel}
            alt=""
          />
          <button className="p-[15px] w-[150px] h-[50px] shadow-md shadow-green-900 font-serif text-[20px] hover:translate-y-2 text-black rounded-2xl cursor-pointer flex justify-center items-center">
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
  );
}
