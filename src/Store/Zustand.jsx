import { create } from "zustand";
import { MdDashboard, MdOutlineAssignment } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { IoLibrary } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiMastercardLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { PiNewspaperBold } from "react-icons/pi";

export const useLinks = create(() => ({
    teacherLinks : [
      
      {
      name: "Dashboard",
      icon: <MdDashboard className="h-5 w-5 text-amber-100" />,
      path: "/TeacherDashboard",
    },
    {
      name: "Courses",
      icon: <GoStarFill className="h-5 w-5 text-amber-100 " />,
      path: "/courses",
    },
    {
      name: "Calender",
      icon: <SlCalender className="h-5 w-5 text-amber-100 " />,
      path: "/Calender",
    },
    {
      name: "Exams",
      icon: <SiGoogleclassroom className="h-5 w-5 text-amber-100 " />,
      path: "/TeacherExams",
    },
    {
      name: "library",
      icon: <IoLibrary className="h-5 w-5 text-amber-100 " />,
      path: "/library",
    },
    {
      name: "Classrooms",
      icon: <SiGoogleclassroom className="h-5 w-5 text-amber-100 " />,
      path: "/TeacherClassroom",
    },
    
    ],
    studentLinks: [
    {
      name: "Home",
      icon: <IoHome className="h-5 w-5 text-purple-500 " />,
      path: "/",
    },
    {
      name: "Dashboard",
      icon: <MdDashboard className="h-5 w-5 text-purple-500  " />,
      path: "/dashboard",
    },
    {
      name: "Courses",
      icon: <GoStarFill className="h-5 w-5 text-purple-500  " />,
      path: "/courses",
    },
    {
      name: "Library",
      icon: <IoLibrary className="h-5 w-5 text-purple-500 " />,
      path: "/library",
    },
    {
      name: "Exam",
      icon: <PiNewspaperBold className="h-5 w-5 text-purple-500 " />,
      path: "/exam",
    },
    {
      name: "Calender",
      icon: <SlCalender className="h-5 w-5 text-purple-500 " />,
      path: "/calender",
    },
    {
      name: "Assignments",
      icon: <MdOutlineAssignment className="h-5 w-5 text-purple-500 " />,
      path: "/assignment",
    },
    {
      name: "Integrations",
      icon: <RiMastercardLine className="h-5 w-5 text-purple-500 " />,
      path: "/integration",
    },
    
  ],
}))