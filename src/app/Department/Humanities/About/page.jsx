import DepartmentCounter from "@/components/department/DeptCounter";
import React from "react";

const about = `With an interdisciplinary perspective at the heart of its approach, the Department of Humanities and Social Sciences at NIT Patna provides intellectual and cultural foundations for the study of human relations with society interaction and teaching towards problem solving of the nation in contemporary contexts. The Department, with its diverse expertise offers students to various courses like communicative english with language lab, social and professional ethics, professional ethics, universal human value, sociology and building economics, industrial economics and financial management, business environment and Indian economy, intellectual property right etc. in the UG programme that aimed at developing essential skills in critical thinking and writing along with the knowledge of literature, society, economic value, and philosophies of the mind and body. The Department offers Doctoral programmes in Economics, English and Sociology. Department has also actively involved in conducting research projects, publishing research papers in SCI/SCIE/ESCI/Scopus indexed journals, organising expert lecture, workshops, short-term course and FDPs for the students and aspiring participants.`;

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
