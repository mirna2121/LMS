import React from "react";
import banner from "../../assets/integration.png";
import Integrationdetails from "./Integrationdetails";
import Footer from "../../Components/HomeComp/Footer/Footer";

export default function Integration() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[500px] flex-row relative top-15 bg-cyan-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-around">
        <img className="w-[550px] h-[400px] object-cover" src={banner} alt="" />
        <div className=" w-[40%] h-full flex flex-col items-center justify-center">
          <h1 className="text-6xl w-[700px] text-white text-center pt-12 pr-38">
            Applications that can help you
          </h1>
        </div>
      </div>
      <div className="pb-10">
        <Integrationdetails />
      </div>
      <Footer />
    </div>
  );
}
