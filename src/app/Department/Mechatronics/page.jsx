import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import DeptNavbar from "@/components/department/DeptNavbar";

const about = `Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors, including aviation, electronics, automotive, manufacturing, oil and gas, mining, transportation, defense, robotics, and aerospace industries, as well as pursue advanced degrees. A meticulously designed curriculum aims to enhance self-reliance, soft skills, and leadership qualities, empowering our graduates to build successful careers and emerge as ethical entrepreneurs serving the nation and society. It is tailored to keep pace with rapidly changing technologies and industrial environments, considering both global and Indian contexts.

The Department maintains strong industrial interactions and significantly contributes to the industry by providing consultancy services and undertaking sponsored research projects. The increasing number of patents and publications in leading multidisciplinary journals highlights the department's thriving research environment.
`;

const counts = [
  {
    name: "Students",
    icon: "/students_icon.png",
    count: 325,
  },
  {
    name: "Faculty",
    icon: "/faculty_icon.png",
    count: 20,
  },
  {
    name: "Journal",
    icon: "/journal_icon.png",
    count: 12,
  },
  {
    name: "Conferences",
    icon: "/conference_icon.png",
    count: 59,
  },
  {
    name: "Projects",
    icon: "/projects_icon.png",
    count: 29,
  },
  {
    name: "Research",
    icon: "/research_icon.png",
    count: 73,
  },
];

const MechatronicsPage = () => {
  return (
    <div className="bg-white">
      <DeptNavbar dept="Mechatronics" />

      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Mechatronics and Automation
      </h2>

      <div className="mt-2 w-[80%] mx-auto py-5 text-justify text-black">
        {about.split("\n").map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
      </div>

      <DepartmentCounter counts={counts} />
    </div>
  );
};

export default MechatronicsPage;
