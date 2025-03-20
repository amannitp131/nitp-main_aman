import DepartmentCounter from "@/components/department/DeptCounter";
import React from "react";

const about = `
The Department of Architecture was established in the Bihar College of Engineering (BCE) Patna in the year 1979 under Patna University. It was the first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as National Institute of Technology Patna on 28th January 2004, it came under the control of Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP), Master of Architecture (Sustainable Architecture) and Ph.D. in Architecture and Planning.

The B.Arch. course, apart from fulfilling the functional requirements, leads towards creativity, innovation and aesthetics in the approach for design of buildings and its environments. The postgraduate course in Master of Urban and Regional Planning, which commenced from 2012-13, imparts knowledge of urban and regional planning, green infrastructure, environment planning, sustainability and energy-efficient aspects in urban and regional planning. It emphasizes on creating new ideas and innovative concepts of physical/spatial planning in the present scenario. The nomenclature of the Department of Architecture was changed to the Department of Architecture and Planning in the year 2020. This course is affiliated with the Institute of Town Planners, India.

The M.Arch. programme started in 2019-2020, and the nomenclature of this postgraduate programme was changed to Master of Architecture (Sustainable Architecture) from session 2022-23. The course content focuses more on environmental issues related to the built environment, ecology, energy-conscious built structures, Artificial Intelligence, Building Simulation, and different means of passive architectural methods. The Ph.D. programme started in the year 2009 with research areas in Architecture, Urban Planning, Regional Planning, Environmental Planning, Transport Planning, Architectural Conservation, Landscape, Housing, Healthcare Architecture, and Construction Planning Management, etc.
`;

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
