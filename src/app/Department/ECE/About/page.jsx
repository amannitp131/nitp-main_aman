import DepartmentCounter from "@/components/department/DeptCounter";
import React from "react";

const about = `The Department of Electronics and Communication Engineering at the National Institute of Technology Patna began its journey in 1978 with just 10 undergraduate students. The department is dedicated to providing quality education at both undergraduate (UG) and postgraduate levels. Currently, it offers the following programs:
1. B.Tech in "Electronics & Communication Engineering" with an intake of 161.
2. Dual degree (B.Tech + M.Tech) in "Microelectronics and VLSI System Design" with an intake of 22.
3. M.Tech in:
   (a) "Next Generation Wireless Technologies" with an intake of 22.
   (b) "Microelectronics and VLSI System Design" with an intake of 22.
4. Ph.D. (Full-time and Part-time) in Electronics and Communication Engineering.

All courses are regularly updated by academic and industry experts to meet the needs of today's industry. The undergraduate program is accredited by the National Board of Accreditation (NBA) for six years, from July 2021 to June 2027. The department received a grant of 3.52 Crore from DST under the FIST scheme for upgrading the Antenna Engineering Laboratory. The VLSI Lab has also been upgraded with the support of the SMDP-C2SD project.

The department has a group of young, competent, and dedicated faculty members engaged in quality research in the following areas:
High Power RF / Microwave Devices, Antennas, Filters, Metamaterials and Metasurfaces, Microwave Imaging, Computational Electromagnetics.

Signal Processing, Image Processing, Speech Analysis, Biomedical Signal Processing, Machine Learning, Soft Computing Techniques, Pattern Recognition.

Analog, Digital and Mixed Signal IC Design, FPGA-based System Design, Synthesis and characterization of nanomaterials, Nano-electronics.

Wireless Communications and Networks, Quantum Cryptographic Algorithms, Physical Layer, Cognitive Radio Network (CRN), Optical Fiber Communication.`;

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
