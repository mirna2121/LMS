import React, { useState } from "react";
import "./Calender.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";


export default function Calenderdetails() {

   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Ocober",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState("");
  const [editEvent, setEditEvent] = useState(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDate();

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();
    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
      setEventTime({ hours: "00", minutes: "00" });
      setEventText("");
      setEditEvent(null);
    }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleEventSubmit = () => {
    const newEvent = {
      id: editEvent ? editEvent.id : Date.now(),
      date: selectedDate,
      time: `${eventTime.hours.padStart(2, "0")} :${eventTime.minutes.padStart(
        2,
        "0"
      )}`,
      text: eventText,
    };
    let updatedEvents = [...events];
    if (editEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editEvent.id ? newEvent : event
      );
    } else {
      updatedEvents.push(newEvent);
    }

    updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    setEvents(updatedEvents);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setShowEventPopup(false);
    setEditEvent(null);
  };

  const handleEditEvent = (event) => {
    setSelectedDate(new Date(event.date));
    setEventTime({
      hours: event.time.split(":")[0],
      minutes: event.time.split(":")[1],
    });
    setEventText(event.text);
    setEditEvent(event);
    setShowEventPopup(true);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setEventTime((prevTime) => ({
      ...prevTime,
      [name]: value.padStart(2, "0"),
    }));
  };

  return (
    <div>
       <div className="w-full h-full flex flex-col  items-center overflow-hidden py-3 px-14 pt-28">
      <h1 className="text-yellow-950/90 h-8 py-2 px-2 text-5xl font-serif pb-24">Calender</h1>
      
      <div
        className="Calender rounded-4xl h-[80vh] w-full bg-amber-100/10  flex gap-4 py-2 md:flex-col flex-col border-8 border-yellow-950/90 shadow-lg shadow-yellow-950/40 overflow-hidden md:items-center lg:items-start
       items-center xl:items-start "
      >
        <div className="navigateDate flex xl:gap-9 lg:gap-9 gap-2 motion-reduce: flex-col md:items-center md:gap-2 xl:items-start xl:pl-8">
          <h1 className="Calender xl:text-4xl lg:text-4xl text-3xl pl-4 text-yellow-950 md:text-[30px]  md:h-14 ">
            Calender
          </h1>

          <div className="header-date flex justify-between items-center xl:w-[398px] lg:w-[398px] md:w-[300px] w-[220px] pl-4 md:items-center">
            <div className="flex">
              <h2 className="month xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px]  text-yellow-950/90 font-serif font-bold">
                {monthsOfYear[currentMonth]},
              </h2>
              <h2 className="year xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px]  text-yellow-950/90 font-serif font-bold">
                {currentYear}
              </h2>
            </div>
            <div className="buttons flex gap-1">
              <i
                onClick={prevMonth}
                className="left text-yellow-950/90 rounded-3xl w-5 h-5 bg-yellow-950/40 flex items-center justify-center"
              >
                <IoIosArrowBack />
              </i>
              <i
                onClick={nextMonth}
                className="right text-yellow-950/90 rounded-3xl w-5 h-5 bg-yellow-950/40 flex items-center justify-center"
              >
                <IoIosArrowForward />
              </i>
            </div>
          </div>

          {/* */}

          <div className="weekdays w-full flex xl:gap-5 lg:gap-5 md:gap-5 gap-0.5 text-yellow-950/70 text-[10px] xl:pl-2 lg:pl-2 md:pl-2 pl-0.5 md:h-[5px] ">
            {daysOfWeek.map((day) => (
              <span
                className="xl:w-[39px] ld:w-[39px] md:w-[39px] w-[30px] flex justify-center font-bold  text-[14px]"
                key={day}
              >
                {day}
              </span>
            ))}
          </div>

          <div className="days flex cursor-pointer flex-wrap  xl:gap-[31px] lg:gap-[31px] md:gap-[31px] gap-y-[0px] gap-[2px] md:gap-y-[10px] xl:gap-y-[20px] p-3 xl:w-[430px] lg:w-[430px] md:w-[430px] w-[240px]  text-yellow-950/90 text-[10px]">
            {[...Array(firstDayOfMonth).keys()].map((_, index) => (
              <span
                className="flex justify-center items-center xl:w-7 lg:w-7 md:w-7 w-4 h-7 text-[14px] "
                key={`empty-${index}`}
              />
            ))}
            {[...Array(daysInMonth).keys()].map((day) => (
              <span
                key={day + 1}
                className={`flex justify-center items-center w-7 h-7 text-[14px] + ${
                  day + 1 === currentDate.getDate() &&
                  currentMonth === currentDate.getMonth() &&
                  currentYear === currentDate.getFullYear()
                    ? "current-day"
                    : ""
                }`}
                onClick={() => handleDayClick(day + 1)}
              >
                {day + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="events w-full h-full flex flex-col gap-4 overflow-auto px-6">
          {showEventPopup && (
            <div className="popup flex flex-col justify-center items-center gap-6 absolute xl:w-[420px] lg:w-[420px] md:w-[420px] w-[220px] h-[180px] xl:h-[300px] rounded-[8px] p-4 xl:top-[40%] lg:top-[35%] md:top-[36%] top-[40%] md:h-[200px] xl:left-[60rem] lg:left-[23rem] md:left-[17rem] left-[6rem] bg-abmer-100 border-4 border-yellow-950/90 shadow-lg shadow-slate-900/95 ">
              <div className="time-input flex gap-2 ">
                <div className="events-popup-time w-[4rem]  bg-yellow-950/60 rounded-[1rem]  shadow-md shadow-yellow-950/60  flex justify-center items-center text-amber-100">
                  Time
                </div>
                <input
                  className="hours xl:w-[4rem] lg:w-[4rem] md:w-[4rem] w-[3rem] h-[2rem] text-center bg-transparent border  border-t-2 border-t-yellow-950/90 border-b-yellow-950/90 border-b-2 border-r-transparent border-l-transparent text-amber-950 webkit-appearancess"
                  type="number"
                  name="hours"
                  min={0}
                  max={24}
                  value={eventTime.hours}
                  onChange={handleTimeChange}
                />
                <input
                  className="minutes w-[4rem] h-[2rem] text-center bg-transparent border  border-t-2 border-t-yellow-950/90 border-b-yellow-950/90 border-b-2 border-r-transparent border-l-transparent text-yellow-950"
                  type="number"
                  name="minutes"
                  min={0}
                  max={60}
                  value={eventTime.minutes}
                  onChange={handleTimeChange}
                />
              </div>

              <textarea
                className="xl:w-[20rem] lg:w-[20rem] md:w-[20rem] w-[13rem] resize-none bg-yellow-950/90 text-amber-100 border-none rounded-[4px] p-[1rem] "
                placeholder="Enter event text (Maximum 60 charactors)"
                value={eventText}
                onChange={(e) => {
                  if (e.target.value.length <= 60) {
                    setEventText(e.target.value);
                  }
                }}
              ></textarea>
              <button
                className="events-popup-btn xl:w-[20rem] lg:w-[20rem] md:w-[20rem] w-[13rem] h-[2rem] rounded-[4px] bg-yellow-950/60 shadow-md shadow-yellow-950/60 text-amber-100 font-bold cursor-pointer hover:tracking-wider"
                onClick={handleEventSubmit}
              >
                {editEvent ? "Update Event" : "Add Event"}
              </button>
              <button
                onClick={() => setShowEventPopup(false)}
                className="close-events-popup absolute top-[1rem] right-[1rem] bg-transparent border-none cursor-pointer text-2xl text-yellow-950/90"
              >
                <IoIosClose />
              </button>
            </div>
          )}
          {events.map((event, index) => (
            <div
              className="event w-full h-[5rem] bg-yellow-950/90  md:h-[80px] p-[1rem] gap-4 rounded-2xl flex items-center"
              key={index}
            >
              <div className="event-date-wrapper flex flex-col items-center w-[25%] pr-3 border border-transparent border-r-amber-200 ">
                <div className="event-data xl:text-[20px] lg:text-[18px] md:text-[10px] text-[9px] text-amber-50">
                  {`${
                    monthsOfYear[event.date.getMonth()]
                  } ${event.date.getDate()}, ${event.date.getFullYear()}`}
                </div>
                <div className="event-time xl:text-[20px] lg:text-[18px] md:text-[12px] text-[9px] text-amber-50 font-bold">
                  {event.time}
                </div>
              </div>
              <div className="event-text h-16   text-amber-50 w-[75%] p-1 flex flex-wrap  xl:text-[20px] lg:text-[12px] md:text-[12px] text-[12px] ">
                {event.text}
              </div>
              <div className="event-buttons  w-8  h-12 flex justify-center items-center text-amber-50 cursor-pointer flex-col gap-2">
                <i>
                  <FaRegEdit
                    className="w-5  xl:text-[15px] lg:text-[15px] md:text-[15px] text-[10px]"
                    onClick={() => handleEditEvent(event)}
                  />
                </i>
                <i>
                  <TiDelete
                    className="w-5 xl:text-[19px] lg:text-[19px] md:text-[19px] text-[14px]"
                    onClick={() => handleDeleteEvent(event.id)}
                  />
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
