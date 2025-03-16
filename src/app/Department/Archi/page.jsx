import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import DeptNavbar from "@/components/department/DeptNavbar";

const about = `
The Department of Architecture was established in the Bihar College of Engineering (BCE) Patna in the year 1979 under Patna University. It was the first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as National Institute of Technology Patna on 28th January 2004, it came under the control of Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP), Master of Architecture (Sustainable Architecture) and Ph.D. in Architecture and Planning.

The B.Arch. course, apart from fulfilling the functional requirements, leads towards creativity, innovation and aesthetics in the approach for design of buildings and its environments. The postgraduate course in Master of Urban and Regional Planning, which commenced from 2012-13, imparts knowledge of urban and regional planning, green infrastructure, environment planning, sustainability and energy-efficient aspects in urban and regional planning. It emphasizes on creating new ideas and innovative concepts of physical/spatial planning in the present scenario. The nomenclature of the Department of Architecture was changed to the Department of Architecture and Planning in the year 2020. This course is affiliated with the Institute of Town Planners, India.

The M.Arch. programme started in 2019-2020, and the nomenclature of this postgraduate programme was changed to Master of Architecture (Sustainable Architecture) from session 2022-23. The course content focuses more on environmental issues related to the built environment, ecology, energy-conscious built structures, Artificial Intelligence, Building Simulation, and different means of passive architectural methods. The Ph.D. programme started in the year 2009 with research areas in Architecture, Urban Planning, Regional Planning, Environmental Planning, Transport Planning, Architectural Conservation, Landscape, Housing, Healthcare Architecture, and Construction Planning Management, etc.
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

const ArchiPage = () => {
  return (
    <div className="bg-white">
      <DeptNavbar dept="Archi" />
      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Architecture & Planning
      </h2>

      <div className="mt-2 w-[80%] mx-auto py-5 text-justify text-black">
        {about.split("\n").map((line, index) => (
          <p key={index} className="mb-2">{line}</p>
        ))}
      </div>

      <DepartmentCounter counts={counts} />
    </div>
  );
};

export default ArchiPage;
