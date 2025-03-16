import React from "react";
import DeptartmentCounter from "@/components/department/counter";

const about = `The Department of Civil Engineering is the oldest and vibrant department of the institute, which was established along with the inception of the Institute in the year 1924. The Institute was formerly known as the Bihar College of Engineering Patna, a constituent engineering college under Patna University, until 27thJan 2004. It was rechristened to National Institute of Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD, Govt. of India.

The Department of Civil Engineering is committed to provide quality teaching and research opportunities toits undergraduate, postgraduate and doctoral students. Apart from UG programme, the department also offers M. Tech and Doctoralprogrammes in the areas of Structural Engineering, Transportation Engineering, Water Resource Engineering,Environmental Engineering and Geotechnical Engineering. The intake strength of the Civil Engineering Department is 92 for undergraduate (BTech)and 112forpostgraduate (MTech). Presently, 25 PhD scholars are enrolled with the department for pursuing their doctoral researchprogram.The teaching and education is directed towards their successful career in International and National Industries/ Institutions, Public and Private sectors,and enable them to qualify various competitive examinations such as IES, IAS, GATE examinations etc.

The Department is actively involved in international and national research projects, and high valued consultancy works for the Government, Private Sector and Industries.The department also offers its expertise in various consultancy works and research projects fordifferent industries and organisations in the locale. The Department supports in upbringing of society and other educational institutes by providing training, workshops, technology transfer, capacity building, and awareness programs.`;

const counts = [
  {
    name: "Students",
    icon: "/students_icon.png",
    count: 456,
  },
  {
    name: "Faculty",
    icon: "/faculty_icon.png",
    count: 25,
  },
  {
    name: "Journal",
    icon: "/journal_icon.png",
    count: 25,
  },
  {
    name: "Conferences",
    icon: "/conference_icon.png",
    count: 78,
  },
  {
    name: "Projects",
    icon: "/projects_icon.png",
    count: 49,
  },
  {
    name: "Research",
    icon: "/research_icon.png",
    count: 123,
  },
];

const CEPage = () => {
  return (
    <div className="bg-white">
      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Civil Engineering
      </h2>

      <div className="mt-2 w-[80%] mx-auto py-5 text-justify text-black">
        {about.split("\n").map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
      </div>

      <DeptartmentCounter counts={counts} />
    </div>
  );
};

export default CEPage;
