import React from "react";
import CountUp from "react-countup";

function Card({ header, description, value, date }) {
  return (
    <div className="flex flex-col bg-gray-600 text-white text-left rounded p-3 hover:scale-105 transition duration-300">
      <div className="flex justify-between items-center p-1">
        <h2 className="font-bold">{header}</h2>
        <span
          className="hovertext rounded-full h-5 w-5 bg-gray-900 text-gray-600 flex justify-center items-center select-none font-bold"
          data-hover={description}
        >
          i
        </span>
      </div>
      <p className="text-xl">{<CountUp end={value} separator="," />}</p>
      <hr className="my-2 border-gray-500" />
      <p className="text-gray-200">
        {new Date(date).toLocaleDateString("em-US", { hour: "numeric" })}
      </p>
    </div>
  );
}

export default Card;
