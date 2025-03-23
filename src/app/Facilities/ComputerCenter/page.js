import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-row px-4 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-4 w-full mb-8">
      {/* Sidebar - Stays on Extreme Left */}
      <div className="mt-6 mb-12 md:mt-0">
        <Sidebar />
      </div>

      {/* Right-Side Content */}
      <div className="flex flex-col md:w-3/4">
        <div>
          <span className="text-xl font-semibold border-b-2 pb-2 border-red-800">
            Centre for Computing and Information Services (CCIS)
          </span>
        </div>

        {/* Carousel on Left & Text Content on Right */}
        <div className="mt-8 md:w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Side - Carousel */}
          <div className="w-full md:w-1/2">
            <Carousel />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 text-base text-gray-500 mx-4">
            <p className="text-justify">
              A state-of-the-art Computer Centre started its operation on 27th
              November 2011. It serves as the central computing facility for the
              students, research scholars, and teachers of the institute. The
              Centre is well-equipped with modern Computers (190 in number),
              air-conditioned labs, and a stabilized uninterrupted power supply
              among other facilities.  

              <br /><br />

              The Centre has seven labs for all students and one lab exclusively
              for PhD scholars of the institute. All labs are equipped with IP
              cameras to monitor the activities remotely. The Centre has **1 Gbps,
              24x7 internet connectivity** on optical fiber under National Knowledge
              Network, Govt. of India.  

              <br /><br />

              The Centre also has a **Virtual Class Room and Desktop Video
              Conferencing facility**. It operates from **8:30 AM to 5:30 PM**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Centre for Computing and Information Services | NIT Patna",
  };
}
