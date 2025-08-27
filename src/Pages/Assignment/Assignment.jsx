import Footer from "../../Components/HomeComp/Footer/Footer";
import Assignmentdetails from "./Assignmentdetails";
import banner from "../../assets/assignment.png";

export default function Assignment() {
  return (
    <div className="w-full flex flex-col gap-28">
      <div className="w-full h-[500px] flex-row relative top-15 bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center">
        <img className="w-[400px] h-[400px] object-cover" src={banner} alt="" />
        <div className=" w-[60%] h-full flex flex-col items-center justify-center">
          <h1 className="text-6xl w-[700px] text-white text-center pt-12">
            Send your Assignment here easly
          </h1>
        </div>
      </div>
      <div className="pt-14 pl-24 pr-24">
        <Assignmentdetails />
      </div>
      <Footer />
    </div>
  );
}
