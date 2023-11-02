import React from "react";

const Events = ({ events, hoveredDate }) => {
  const dayEvents = events.filter((event) => event.date === hoveredDate);


  const event = events;


  if (dayEvents.length === 0) {
    return null;
  }

  return (
    <>
      <h1>Hiiii</h1>
      <div className="event-popup bg-white p-2 shadow-md">
        {dayEvents.map((event, index) => (
          <div key={index}>{event.title}<p>{event.date}</p></div>
        ))}
      </div>
      <div className="h-100% w-100% flex justify-center items-center flex-col">
        <div className="py-2 text-2xl font-semibold flex w-[100%] h-[10%] justify-start items-center mb-4">
          <h1>Events</h1>
        </div>
        <div className="w-[100%] h-[90%] ">
          {event.map((item, index) => {
            return (
              <div className="w-[100%] h-[15%]  py-1 px-2 border" key={index}>
                <h1 className="text-lg font-medium py-2">{item.title}</h1>
                {/* <p>{item.time}</p>
                <p>{item.date}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
