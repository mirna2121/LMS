import { div } from "framer-motion/client";
import Calenderdetails from "./Calenderdetails";
import Footer from "../../Components/HomeComp/Footer/Footer";

export default function Calender() {

  return (
    <div className="w-full flex flex-col gap-16">
      <Calenderdetails/>
      <Footer/>
    </div>
  );
}

