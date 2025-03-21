import DepartmentCounter from "@/components/department/DeptCounter";
import React from "react";

const about = `Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors, including aviation, electronics, automotive, manufacturing, oil and gas, mining, transportation, defense, robotics, and aerospace industries, as well as pursue advanced degrees. A meticulously designed curriculum aims to enhance self-reliance, soft skills, and leadership qualities, empowering our graduates to build successful careers and emerge as ethical entrepreneurs serving the nation and society. It is tailored to keep pace with rapidly changing technologies and industrial environments, considering both global and Indian contexts.

The Department maintains strong industrial interactions and significantly contributes to the industry by providing consultancy services and undertaking sponsored research projects. The increasing number of patents and publications in leading multidisciplinary journals highlights the department's thriving research environment.`;

const counts = [
  {
    name: "Undergraduate Students",
    icon: "/students_icon.png",
    count: 456,
    color: "#FFCDD2", // Soft Red
  },
  {
    name: "Postgraduate Students",
    icon: "/students_icon.png",
    count: 123,
    color: "#BBDEFB", // Soft Blue
  },
  {
    name: "Ph.D. Students",
    icon: "/students_icon.png",
    count: 49,
    color: "#D1C4E9", // Soft Purple
  },
  {
    name: "Faculty",
    icon: "/faculty_icon.png",
    count: 25,
    color: "#FFECB3", // Soft Yellow
  },
  {
    name: "Journal",
    icon: "/journal_icon.png",
    count: 25,
    color: "#C8E6C9", // Soft Green
  },
  {
    name: "Conferences",
    icon: "/conference_icon.png",
    count: 78,
    color: "#FFCCBC", // Soft Orange
  },
  {
    name: "Projects",
    icon: "/projects_icon.png",
    count: 49,
    color: "#D7CCC8", // Soft Brown
  },
  {
    name: "Research",
    icon: "/research_icon.png",
    count: 123,
    color: "#B2DFDB", // Soft Teal
  },
  {
    name: "Patents",
    icon: "/patents_icon.png",
    count: 123,
    color: "#F8BBD0", // Soft Pink
  },
];

const Aboutpage = () => {
  return (
    <div className="">
      {/* About the department */}
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] lg:w-[80%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              About The Department
            </h2>
            <div className="w-[100%] mx-auto px-2 py-5 text-justify text-black">
              {about.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <DepartmentCounter counts={counts} />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
