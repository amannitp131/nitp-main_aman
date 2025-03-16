import Image from "next/image";
import React from "react";

const DepartmentCounter = ({ counts }) => {
  return (
    <div className="text-lg bg-white text-black px-5 md:px-20 justify-center text-justify py-5 flex gap-5 flex-wrap">
      {counts.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-64 md:w-48 sm:h-64 md:h-48 bg-white rounded-md px-5 py-5 shadow-2xl flex flex-col items-center text-red-700"
          >
            <div className="w-24 h-24 bg-black rounded-full overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src={`${item.icon}`}
                alt={`${item.icon}`}
                className="w-full"
              />
            </div>
            <div className="text-5xl">{item.count}+</div>
            <h2 className="2xl">{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentCounter;
