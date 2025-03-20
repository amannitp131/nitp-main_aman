import React from "react";

export const ProgramCard = ({ item }) => {
  return (
    <div className="bg-gray-500 rounded-md w-64 h-fit text-white">
      <h2 className="text-center text-2xl px-2">{item.name}</h2>
      <hr />
      <div className="text-xl text-center h-32 tracking-tighter px-2">
        <h3>
          {item.degree}
          <br />({item.duration} Years)
        </h3>
        {item.specialization.map((it, index) => (
          <h3 key={index}>{it}</h3>
        ))}
      </div>
      <hr />
      <div className="mb-2">
        <a className="px-2 underline" href="http://">
          Time Table
        </a>
        <br />
        <a className="px-2 underline" href="http://">
          Syllabus
        </a>
      </div>
    </div>
  );
};

const AcadProgram = ({ acadProgrammes }) => {
  // console.log(acadProgrammes);
  return (
    <div className="text-lg text-black px-5 justify-between text-justify py-5 flex gap-5 flex-wrap">
      {acadProgrammes.map((item, index) => {
        return <ProgramCard item={item} key={index} />;
      })}
    </div>
  );
};

export default AcadProgram;
