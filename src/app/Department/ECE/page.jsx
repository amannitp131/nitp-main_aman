import React from "react";
import DeptartmentCounter from "@/components/department/counter";

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

Wireless Communications and Networks, Quantum Cryptographic Algorithms, Physical Layer, Cognitive Radio Network (CRN), Optical Fiber Communication.
`;

const counts = [
  {
    name: "Students",
    icon: "/students_icon.png",
    count: 432,
  },
  {
    name: "Faculty",
    icon: "/faculty_icon.png",
    count: 15,
  },
  {
    name: "Journal",
    icon: "/journal_icon.png",
    count: 15,
  },
  {
    name: "Conferences",
    icon: "/conference_icon.png",
    count: 72,
  },
  {
    name: "Projects",
    icon: "/projects_icon.png",
    count: 25,
  },
  {
    name: "Research",
    icon: "/research_icon.png",
    count: 79,
  },
];

const ECEPage = () => {
  return (
    <div className="bg-white">
      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Electronics And Communication Engineering
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

export default ECEPage;
