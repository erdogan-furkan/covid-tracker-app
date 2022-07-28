import React from "react";

function Error({ message }) {
  return (
    <div className="bg-gray-300 p-5 text-gray-500 rounded">
      <span className="bg-gray-500 rounded-full w-5 h-5 hidden sm:flex justify-center items-center text-gray-300 absolute select-none">
        !
      </span>
      <p>{message}</p>
    </div>
  );
}

export default Error;
