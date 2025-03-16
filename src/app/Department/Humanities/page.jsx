import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import DeptNavbar from "@/components/department/DeptNavbar";

const about = `With an interdisciplinary perspective at the heart of its approach, the Department of Humanities and Social Sciences at NIT Patna provides intellectual and cultural foundations for the study of human relations with society interaction and teaching towards problem solving of the nation in contemporary contexts. The Department, with its diverse expertise offers students to various courses like communicative english with language lab, social and professional ethics, professional ethics, universal human value, sociology and building economics, industrial economics and financial management, business environment and Indian economy, intellectual property right etc. in the UG programme that aimed at developing essential skills in critical thinking and writing along with the knowledge of literature, society, economic value, and philosophies of the mind and body. The Department offers Doctoral programmes in Economics, English and Sociology. Department has also actively involved in conducting research projects, publishing research papers in SCI/SCIE/ESCI/Scopus indexed journals, organising expert lecture, workshops, short-term course and FDPs for the students and aspiring participants.`;

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

const HumanitiesPage = () => {
  return (
    <div className="bg-white">
      <DeptNavbar dept="Humanities" />

      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Humanities & Social Sciences
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

export default HumanitiesPage;
