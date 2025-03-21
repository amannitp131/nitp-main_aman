import Link from "next/link";
import React from "react";

const departments = [
  {
    name: "Applied Physics and Materials Engineering",
    link: "Phy",
    icon: "/physics_icon.png",
  },
  {
    name: "Architecture & Planning",
    link: "Archi",
    icon: "/architecture_icon.png",
  },
  {
    name: "Chemical Science and Technology",
    link: "Chem",
    icon: "/chemistry_icon.png",
  },
  {
    name: "Civil Engineering",
    link: "CE",
    icon: "/civil_icon.png",
  },
  {
    name: "Computer Science and Engineering",
    link: "CSE",
    icon: "/computer_icon.png",
  },
  {
    name: "Electrical Engineering",
    link: "EE",
    icon: "/electric_icon.png",
  },
  {
    name: "Electronics And Communication Engineering",
    link: "ECE",
    icon: "/electronics_icon.png",
  },
  {
    name: "Humanities & Social Sciences",
    link: "Humanities",
    icon: "/humanities_icon.png",
  },
  {
    name: "Mathematics and Computing Technology",
    link: "Math",
    icon: "/mathematics-icon.png",
  },
  {
    name: "Mechanical Engineering",
    link: "ME",
    icon: "/mechanical_icon.png",
  },
  {
    name: "Mechatronics & Automation Engineering",
    link: "Mechatronics",
    icon: "/mechatronics_icon.png",
  },
];

const DepartmentPage = () => {
  return (
    <div className="bg-white">
      <div className="bg-red-500 h-48 w-full text-white">
        <h2 className="text-5xl px-20 py-5">Departments</h2>
      </div>
      <div>
        <p className="text-lg bg-white text-black w-[80%] mx-auto text-justify py-5">
          NIT Patna provides science-based engineering education with a view to
          produce quality engineer-scientists. The curriculum provides broad
          based knowledge and simultaneously builds a temper for the life long
          process of learning and exploring. The activities of Departments
          include teaching at all levels and research.
        </p>
      </div>
      <div className="text-lg bg-white text-black px-5 md:px-20 justify-center text-justify py-5 flex gap-5 flex-wrap">
        {departments.map((dept, index) => {
          return (
            <div
              key={index}
              className="w-full sm:w-64 md:w-72 lg:w-80 bg-white rounded-md px-5 py-5 hover:border-2 border-red-700 shadow-2xl flex flex-col items-center"
            >
              <Link href={`Department/${dept.link}`} className="w-full">
                <div className="h-48 w-48 rounded-sm flex items-center justify-center mx-auto overflow-hidden">
                  <img src={`${dept.icon}`} alt={`${dept.icon}`} className="w-full" />
                </div>
                <h2 className="text-center text-xl text-red-700 mt-3">
                  {dept.name}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentPage;
