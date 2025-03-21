import React from "react";

const AboutDept = ({ about }) => {
  return (
    <div className="w-full">
      <h2 className="text-center text-4xl text-red-700 mt-2">
        About The Department
      </h2>
      <div className="px-2 flex mx-auto gap-2 flex-1 shrink-0">
        <div className="w-[100%] mx-auto px-2 py-5 text-justify text-black">
          {about.split("\n").map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDept;
