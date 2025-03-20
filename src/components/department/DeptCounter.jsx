import Image from "next/image";
import React from "react";

export const CounterCard = ({ item }) => {
  return (
    <div
      className={`w-48 lg:w-32 xl:w-48 h-32 xs:h-48 md:h-32 rounded-md px-5 py-2 shadow-xl shadow-gray-300 hover:scale-105 flex flex-col items-center justify-center text-red-700`}
      style={{ backgroundColor: item.color }}
    >
      {/* <div className="w-16 h-16 bg-black rounded-full overflow-hidden shrink-0 flex items-center justify-center">
      <img
        src={`${item.icon}`}
        alt={`${item.icon}`}
        className="w-full"
      />
    </div> */}
      <div className="text-5xl">{item.count}+</div>
      <h2 className="xl text-center">{item.name}</h2>
    </div>
  );
};

const DepartmentCounter = ({ counts }) => {
  return (
    <div className="text-lg text-black px-5 justify-evenly items-start text-justify py-5 flex gap-5 flex-wrap">
      {counts.map((item, index) => {
        return <CounterCard key={index} item={item} />;
      })}
    </div>
  );
};

export default DepartmentCounter;
