import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import DeptNavbar from "@/components/department/DeptNavbar";

const about = `The Department of Mathematics was established in 1924 and department offer several courses that support other engineering departments. Recently a new program Integrated M. Sc. in Mathematics is started and running successfully from the academic year 2015-2016. Current faculty strength of the department is nine and they are experienced in teaching and research in several branches of Mathematics. Department of Mathematics is one of the backbone of the Institution as it is an essential department for engineering courses up to Ph.D level.`;

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

const MathPage = () => {
  return (
    <div className="bg-white">
      <DeptNavbar dept="Math" />

      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Mathematics and Computing Technology
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

export default MathPage;
