"use client"
import React from "react";
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
function DirectorCard() {
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
    <div className="flex flex-col md:flex-row ring-2 ring-gray-700 bg-black/40 backdrop-blur-sm text-white rounded-2xl shadow-xl max-w-4xl mx-auto md:p-6">
      <div className="flex flex-col items-center text-center md:w-1/3 border-r border-gray-600 p-6">
        <Image
          src="/PkJain.jpg"
          alt="Director's Image"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-400 shadow-lg"
        />
        <h3 className="text-2xl font-bold mt-4 text-white">Pradip K. Jain</h3>
        <h4 className="text-lg text-gray-300">Director, NIT Patna</h4>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href="mailto:director@nitp.ac.in"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Email
          </a>
          <a
            href="https://www.nitp.ac.in/director-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Visit Profile
          </a>
        </div>
      </div>
      <div className="md:w-2/3 p-6">
        <h2 className="bg-white/20 text-white text-2xl font-semibold text-center md:text-left py-2 px-4 rounded-lg">
          Director's Message
        </h2>
        <p className="mt-4 text-gray-100 text-sm text-justify">
          Prof. Pradip K. Jain joined as a Lecturer of Electronics Engineering at the Institute of Technology, Banaras Hindu University in 1981, and became Professor in the Year 2001. He has made significant contributions in the areas of analysis, modeling, and development of high-power microwave tubes and gyrotron devices. Currently, he is the Director of the National Institute of Technology, Patna.
        </p>
        <h4 className="mt-6 text-xl font-semibold text-gray-200">Director's Message</h4>
        <p className="text-gray-100 text-sm text-justify">
          It is my pleasure to introduce one of the oldest Technological Institutes of North India, National Institute of Technology Patna, whose history goes back to 1876 when four survey schools were established in Dacca, Hoogly, Cuttack, and Patna. The schools at Hoogly and Cuttack failed but those at Dacca and Patna continued to prosper. In 1882, a separate institution named Bihar Industrial School was opened in the premises of the survey school in the Patna college campus.
        </p>
        <button className="mt-6 px-6 py-2 bg-white/30 text-white font-semibold rounded-lg hover:bg-white/40 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default DirectorCard;
