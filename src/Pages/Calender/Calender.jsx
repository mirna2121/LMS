import { div } from "framer-motion/client";
import Calenderdetails from "./Calenderdetails";
import Footer from "../../Components/HomeComp/Footer/Footer";
import calenderwall from "../../assets/calender.png";
import kawkp from "../../assets/kawkb.png";
import book from "../../assets/book.pic.svg";

export default function Calender() {
  return (
    <div className="w-full flex flex-col gap-16">
      <div className="w-full h-[500px] flex-row gap-18 relative top-15 bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center">
        <img
          className="w-[400px] p-6 relative left-0"
          src={calenderwall}
          alt=""
        />
        <div className=" w-[60%] h-full flex flex-col gap-4">
          <img
            className="w-[400px] relative top-20 left-120"
            src={kawkp}
            alt=""
          />
          <img
            className="w-[200px] relative top-60 left-170"
            src={book}
            alt=""
          />
          <h1 className="text-6xl w-[700px] text-white">
            Manage your time for better study with us
          </h1>
        </div>
      </div>
      <Calenderdetails />

      <Footer />
    </div>
  );
}
