import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Courses from "./Pages/Courses/Courses";
import Classroom from "./Pages/Classroom/Classroom";
import Library from "./Pages/Library/Library";
import Assignment from "./Pages/Assignment/Assignment";
import Exam from "./Pages/Exam/Exam";
import Integration from "./Pages/Integration/Integration";
import Calender from "./Pages/Calender/Calender";
import Navbar from "./Components/Navbar/Navbar";
import Messages from "./Pages/Messages/Messages";

export default function () {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="classroom" element={<Classroom />} />
        <Route path="library" element={<Library />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="exam" element={<Exam />} />
        <Route path="integration" element={<Integration />} />
        <Route path="message" element={<Messages />} />
        <Route path="calender" element={<Calender />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
    </div>
  );
}
