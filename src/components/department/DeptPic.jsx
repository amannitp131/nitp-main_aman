import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const DeptPic = ({ pictures }) => {
  const [picture, setPicture] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPicture(pictures[idx]);
      setIdx(idx + 1);
      if (idx == pictures.length - 1) {
        setIdx(0);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [idx]);

  return (
    <div className="bg-white">
      <div className="flex flex-col mr-4 max-sm:mr-0">
        <Image
          src={`${picture}`}
          className="h-[420px] bg-gray-400 rounded-lg max-sm:rounded-none shadow-lg "
          alt="Logo"
          width={700}
          height={1000}
        />
        <div className="flex justify-center relative top-[-40px] space-x-1">
          <button
            onClick={() => {
              setIdx(0);
            }}
            className={`h-[18px] w-[18px] border ${
              idx == 0 ? "bg-black" : "bg-slate-400"
            } rounded-full`}
          ></button>
          <button
            onClick={() => {
              setIdx(1);
            }}
            className={`h-[18px] w-[18px] border ${
              idx == 1 ? "bg-black" : "bg-slate-400"
            } rounded-full`}
          ></button>
          <button
            onClick={() => {
              setIdx(2);
            }}
            className={`h-[18px] w-[18px] border ${
              idx == 2 ? "bg-black" : "bg-slate-400"
            } rounded-full`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default DeptPic;
