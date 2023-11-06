import React, { useState } from "react";
import Calander from "./Calander";
import Events from "./Events";
import EventShow from "./EventShow";
import { FaCalendar } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([
    {
      date: "2023-11-05",
      title: "Holi Celebration",
      time: "4:00 PM to 6:00 PM",
      Department: "Sales & Marketing",
      Location: "Mumbai",
    },
    {
      date: "2023-11-10",
      title: "Diwali Celebration",
      time: "4:00 PM to 6:00 PM",
      Department: "Sales & Marketing",
      Location: "Navi Mumbai",
    },
    {
      date: "2023-11-16",
      title: "Eid Celebration",
      time: "4:00 PM to 6:00 PM",
      Department: "Sales & Marketing",
      Location: "Thane",
    },
    {
      date: "2023-11-21",
      title: "Christmas Celebration",
      time: "4:00 PM to 5:00 PM",
      Department: "Sales & Marketing",
      Location: "Thane",
    },
    {
      date: "2023-11-18",
      title: "Drinks Celebration",
      time: "4:00 PM to 5:00 PM",
      Department: "Sales & Marketing",
      Location: "Pune",
    },
  ]);

  const [hoveredDate, setHoveredDate] = useState(null);
  const [showEvent, setShowEvent] = useState(false);

  const handleComponent = () => {
    setShowEvent(!showEvent);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div
        className={`container w-[40%] h-[70%] border rounded shadow-inner relative ${
          showEvent ? "flip" : ""
        }`}
      >
        <div className="content">
          <div
            className="card"
            style={{ transform: showEvent ? "rotateY(-180deg)" : "none" }}
          >
            {showEvent ? (
              <Calander events={events} />
            ) : (
              <EventShow events={events} showEvent={showEvent} />
            )}
          </div>
        </div>
        <Events events={events} hoveredDate={hoveredDate} />
        {/* <div className="absolute top-4 right-4 flex flex-row space-x-2">
          <button
            className="transition flex justify-center blue py-2 w-10 bg-white hover:white hover:bg-blue-400 focus:bg-blue-900 focus:text-white border rounded-l"
            onClick={handleComponent}
          >
            <FaCalendar size="1.5em" />
          </button>
          <button
            className="transition flex justify-center black py-2 w-10 rounded-r hover:white bg-white hover:bg-blue-400 focus:bg-blue-900 focus:text-white border"
            onClick={handleComponent}
          >
            <FaList size="1.5em" />
          </button>
        </div> */}
      </div>

      <div className="absolute top-[19%] right-[32%] flex flex-row space-x-2">
        <button
          className="transition flex justify-center blue py-2 w-10 bg-white hover:white hover:bg-blue-400 focus:bg-blue-900 focus:text-white border rounded-l"
          onClick={handleComponent}
        >
          <FaCalendar size="1.5em" />
        </button>
        <button
          className="transition flex justify-center black py-2 w-10 rounded-r hover:white bg-white hover:bg-blue-400 focus:bg-blue-900 focus:text-white border"
          onClick={handleComponent}
        >
          <FaList size="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default App;

// no effect but working correctly.

// import React, { useState } from "react";
// import Calander from "./Calander";
// import Events from "./Events";
// import EventShow from "./EventShow";
// import { FaCalendar } from "react-icons/fa";
// import { FaList } from "react-icons/fa";
// import './App.css';

// const App = () => {
//   const [events, setEvents] = useState([
//     {
//       date: "2023-11-05",
//       title: "Holi Celebration",
//       time: "4:00 PM to 6:00 PM",
//       Department: "Sales & Marketing",
//       Location: "Mumbai",
//     },
//     {
//       date: "2023-11-10",
//       title: "Diwali Celebration",
//       time: "4:00 PM to 6:00 PM",
//       Department: "Sales & Marketing",
//       Location: "Navi Mumbai",
//     },
//     {
//       date: "2023-11-16",
//       title: "Eid Celebration",
//       time: "4:00 PM to 6:00 PM",
//       Department: "Sales & Marketing",
//       Location: "Thane",
//     },
//     {
//       date: "2023-11-21",
//       title: "Christmas Celebration",
//       time: "4:00 PM to 5:00 PM",
//       Department: "Sales & Marketing",
//       Location: "Thane",
//     },
//     {
//       date: "2023-11-18",
//       title: "Drinks Celebration",
//       Department: "Sales & Marketing",
//       Location: "Pune",
//     },
//   ]);

//   const [hoveredDate, setHoveredDate] = useState(null);
//   const [showEvent, setShowEvents] = useState(false);

//   const handleComponent = () => {
//     setShowEvents(!showEvent);
//   };

//   const handleMouseEnter = (date) => {
//     setHoveredDate(date);
//   };

//   return (
//     <>
//       <div className="flex w-[100%] h-screen justify-center items-center">
//         <div className="container flex w-[40%] h-[70%] justify-center items-center border rounded shadow-inner relative">
//           {showEvent ? (
//             <Calander events={events} />
//           ) : (
//             <EventShow events={events} />
//           )}
//           <Events events={events} hoveredDate={hoveredDate} />
//           <div className="absolute top-4 right-4 flex flex-row space-x-2">
//             <button
//               className="transition flex justify-center blue py-2 w-10 bg-white hover:white hover:bg-blue-400 focus:bg-blue-900 focus:text-white border rounded-l"
//               onClick={handleComponent}
//             >
//               <FaCalendar size="1.5em" />
//             </button>
//             <button
//               className="transition flex justify-center black py-2 w-10 rounded-r hover:white bg-white hover:bg-blue-400 focus:bg-blue-900 focus:text-white border"
//               onClick={handleComponent}
//             >
//               <FaList size="1.5em" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );

// };

// export default App;
