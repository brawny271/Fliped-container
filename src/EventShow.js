import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import "./arrow.css";

const EventShow = ({ events, showEvent }) => {
  const [isRotated, setIsRotated] = useState(Array(events.length).fill(false));
  const [isOpen, setIsOpen] = useState(null);

  const toggleInfo = (index) => {
    setIsOpen(isOpen === index ? null : index);

    setIsRotated((prevIsRotated) => {
      const newIsRotated = [...prevIsRotated];
      newIsRotated[index] = !newIsRotated[index];
      return newIsRotated;
    });
  };

  return (
    <div
      className={`${
        showEvent ? "content-transition" : ""
      } transition-transform w-[100%] h-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 rounded`}
    >
      <div className="h-[100%] w-[100%] flex justify-center items-center flex-col">
        <div className="flex w-[100%] h-[20%] justify-start items-center pl-6">
          <h1 className="text-3xl font-semibold text-blue-900 border-l-4 rounded border-orange-600 pl-2">
            Events
          </h1>
        </div>
        <div className="w-[100%] h-[80%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 rounded">
          {events
            .map((item, index) => {
              return (
                <div className="w-[100%] px-2 py-1" key={item.id}>
                  <div className="flex flex-row h-auto w-full items-start gap-1 px-2 py-3 border-b">
                    <div className="arrow flex justify-start items-start pt-2 h-10">
                      <BiSolidRightArrow
                        className={`w-4 transition transform ${
                          isRotated[index] ? "rotate-90" : ""
                        } text-${
                          isOpen === index ? "orange-900" : "text-orange-600"
                        } hover:text-orange-400 text-orange-600`}
                        onClick={() => toggleInfo(index)}
                      />
                    </div>
                    <div className="w-[100%]">
                      <h1 className="text-lg font-medium">{item.title}</h1>

                      <p className="font-medium text-gray-800 flex">
                        {item.date}
                        <span>
                          {" "}
                          <p className="font-medium text-gray-500">
                            - {item.time}
                          </p>{" "}
                        </span>
                      </p>

                      {isOpen === index && (
                        <div>
                          <p className="font-medium">
                            Department:{" "}
                            <span className="text-gray-400">{item.Department}</span>{" "}
                          </p>
                          <p className="font-medium">
                            Location:{" "}
                            <span className="text-gray-400">{item.Location}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default EventShow;


// import React, { useState } from "react";
// import { BiSolidRightArrow } from "react-icons/bi";
// import "./arrow.css";

// const EventShow = ({ events, showEvent }) => {
//   const [isRotated, setIsRotated] = useState(Array(events.length).fill(false));
//   const [event, setEvents] = useState(events);
//   const [isOpen, setIsOpen] = useState(null);

//   const toggleInfo = (index) => {
//     setIsOpen(isOpen === index ? null : index);

//     setIsRotated((prevIsRotated) => {
//       const newIsRotated = [...prevIsRotated];
//       newIsRotated[index] = !newIsRotated[index];
//       return newIsRotated;
//     });
//   };

//   return (
//     <>
//       <div
//         className={`${
//           showEvent ? "content-transition" : ""
//         } transition-transform w-[100%] h-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 rounded`}
//       >
//         <div className="h-[100%] w-[100%] flex justify-center items-center flex-col">
//           <div className="flex w-[100%] h-[20%] justify-start items-center pl-6">
//             <h1 className="text-3xl font-semibold  text-blue-900 border-l-4 rounded  border-orange-600 pl-2">
//               Events
//             </h1>
//           </div>
//           <div className="w-[100%] h-[80%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 rounded">
//             {event.map((item, index) => {
//               return (
//                 <div className="w-[100%] px-2 py-1" key={item.id}>
//                   <div className="flex flex-row h-auto w-full items-start gap-1 px2 py-3 border-b">
//                     <div className="arro flex justify-start items-start pt-2 h-10 ">
//                       <BiSolidRightArrow
//                         className={`w-4 transition transform ${
//                           isRotated[index] ? "rotate-90" : ""
//                         } text-${
//                           isOpen === index ? "orange-900" : "text-orange-600"
//                         } hover:text-orange-400 text-orange-600`}
//                         onClick={() => toggleInfo(index)}
//                       />
//                     </div>
//                     <div className="w-[100%]">
//                       <h1 className="text-lg font-medium">{item.title}</h1>

//                       <p className="font-medium text-gray-800 flex">
//                         {item.date}
//                         <span>
//                           {" "}
//                           <p className=" font-medium text-gray-500 ">
//                             - {item.time}
//                           </p>{" "}
//                         </span>
//                       </p>

//                       {isOpen === index && (
//                         <div>
//                           <p className=" font-medium">
//                             Department:{" "}
//                             <span className=" text-gray-400">
//                               {item.Department}
//                             </span>{" "}
//                           </p>
//                           <p className="font-medium">
//                             Location:{" "}
//                             <span className="text-gray-400">
//                               {item.Location}
//                             </span>
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EventShow;
