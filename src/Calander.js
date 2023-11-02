import React, { useState } from "react";
import {
  format,
  startOfMonth,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
} from "date-fns";
import { Button, Popover } from "antd";
import './calander.css'

const Calander = ({ events, showEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  const getDaysInMonth = () => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = addDays(start, 41);
    const days = [];
    let day = start;
    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const handleMouseEnter = (date) => {
    setHoveredDate(date);
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth();
    const currentDate = new Date();
    return daysInMonth.map((day, index) => {
      const dayEvents = events.filter(
        (event) =>
          format(new Date(event.date), "yyyy-MM-dd") ===
          format(day, "yyyy-MM-dd")
      );

      const isCurrentDate =
        format(day, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");
      const hasEvents = dayEvents.length > 0;

      return (
        <div
          key={index}
          className={`day ${
            format(day, "MM") !== format(currentMonth, "MM")
              ? "text-gray-400"
              : ""
          } ${
            isCurrentDate
              ? "bg-blue-800 w-6 flex text-white  justify-center rounded border"
              : ""
          } ${
            hasEvents ? "rounded w-6 flex justify-center text-white hover:text-black bg-orange-600" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(day)}
          onMouseLeave={handleMouseLeave}
        >
          {format(day, "d")}
          {dayEvents.length > 0 &&
            hoveredDate &&
            format(hoveredDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd") && (
              <Popover>
                <div className="absolute event-popup bg-white p-2 shadow-md">
                  {dayEvents.map((event, index) => (
                    <div key={index}>{event.title}</div>
                  ))}
                </div>
              </Popover>
            )}
        </div>
      );
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <>
      <div
        className={`${
          showEvent ? "content-transition" : ""
        } transition-transform w-[100%] h-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 rounded`}
      >
        <div className="flex justify-center items-center flex-col h-[100%] w-[100%]">
          <div className="flex w-[100%] h-[15%] justify-start items-center pl-6">
            <h1 className="text-3xl font-semibold text-blue-900 border-l-4 rounded  border-orange-600 pl-2">
              Calander
            </h1>
          </div>
          <div className="calendar-container w=[100%] px-4 pt-4 h-[80%]">
            <div className="calendar pt-4 bg-white rounded-lg">
              <div className="header flex justify-between pb-2 items-center">
                <button
                  className="text-2xl font-semibold"
                  onClick={handlePrevMonth}
                >
                  &lt;
                </button>
                <div className="h-full flex items-center ">
                  <h1 className=" w-full uppercase font-semibold">
                    {format(currentMonth, "MMMM yyyy")}
                  </h1>
                </div>
                <button
                  className="text-2xl font-semibold"
                  onClick={handleNextMonth}
                >
                  &gt;
                </button>
              </div>
              <div className="days border-b border-t font-semibold grid grid-cols-7 justify-items-center items-center gap-2 py-3 mb-6">
                <div className="day">S</div>
                <div className="day">M</div>
                <div className="day">T</div>
                <div className="day">W</div>
                <div className="day">T</div>
                <div className="day">F</div>
                <div className="day">S</div>
              </div>
              <div className="dates grid grid-cols-7 justify-items-center  py-1 font-medium items-center gap-2">
                {renderCalendar()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calander;
