import DepartmentCounter from "@/components/department/DeptCounter";
import DeptNavbar from "@/components/department/DeptNavbar";

const about = `The Department of Mechanical Engineering was established in 1952 with B. Tech program during the era of Bihar College of Engineering (BCE) which is well-known since 1924 as the sixth oldest Engineering College in India. In 1978, M. Tech Program was started with specializations in "Thermal Turbo Machinery" and "Refrigeration, Air Conditioning and Heat Transfer". The Bihar College of Engineering was converted to National Institute of Technology Patna in 2004.
The Department has an excellent industrial interaction and contributes to the industry by offering consultancy services and sponsored research projects. Continuously growing numbers of patents and publications in various top multidisciplinary journals is indication of the thriving research environment in the department`;

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

const MEPage = () => {
  return (
    <div className="bg-white">
      <DeptNavbar dept="ME" />

      <h2 className="text-center text-5xl mt-2 text-red-700 uppercase">
        Mechanical Engineering
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

export default MEPage;
