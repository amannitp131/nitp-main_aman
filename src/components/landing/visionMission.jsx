"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
function VisionMission() {
const [containerHeight, setContainerHeight] = useState(null);
   useEffect(() => {
      AOS.init({ duration: 800, once: false, offset: 50 });
  
      const updateHeight = () => {
        const centerContainer = document.getElementById("popup-container");
        if (centerContainer) {
          setContainerHeight(centerContainer.clientHeight);
        }
      };
  
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 p bg-slate-100">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left v">
          <h2 className="text-3xl text-semibold font-bold text-gray-black py-3 px-6 ">
            About NIT Patna
          </h2>
          <div className="relative w-full h-80 mt-6 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/NIT-patna.jpg"
              alt="NIT Patna Campus"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
          National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004.
          </p>
          <Link href="/about-nit-patna">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
              Read More
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {[
            { title: "Vision", content: "To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.", link: "/vision" },
            { title: "Mission", content: "To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes To identify, based on an informed perception of Indian, regional and global needs, areas of specialization. ", link: "/mission" }
          ].map((item, index) => (
            <div key={index} className="text-white p-6 rounded-xl transition-all ring-2 ring-red-700 bg-red-700">
              <h2 className="text-2xl font-bold text-white py-3 px-6 rounded-lg text-center">
                {item.title}
              </h2>
              <p className="mt-4 text-xs md:text-[15px] leading-relaxed text-white">
                {item.content}
              </p>

              {/* <Link href={item.link}>
                <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">
                  Read More
                </button>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
