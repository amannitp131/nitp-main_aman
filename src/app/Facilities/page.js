import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

import "./style.css";


const FacilitiesResources = [
  {
    title: "Computer Centre",
    image: "https://i.postimg.cc/GtxQLHLj/Computer64.png", 
    link: "/Facilities/ComputerCenter",
  },
  {
    title: "IT Service Unit",
    image: "https://i.postimg.cc/5tHMkF1T/IT64.png", 
    link: "/Facilities/ComputerCenter",
  },
  {
    title: "TEQUIP",
    image: "https://i.postimg.cc/htZBr0FV/technical-skills64.png", 
    link: "/Facilities/TEQUIP",
  },
  {
    title: "Library",
    image: "https://i.postimg.cc/YCC7YsPp/library64.png", 
    link: "/Facilities/Library",
  },
  {
    title: "Medical Facilities",
    image: "https://i.postimg.cc/Nf4YycpJ/medical64.png", 
    link: "/Facilities/MedicalFacilities",
  },
  {
    title: "Sports Facilities",
    image: "https://i.postimg.cc/4nJb6TsX/sports64.png",
    link: "/Facilities/SportsFacilities",
  },
  {
    title: "Incubation Center",
    image: "https://i.postimg.cc/GtnrD3WN/Incubation64.png", 
    link: "/Facilities/IncubationCenter",
  },
  {
    title: "Hostel & Mess",
    image: "https://i.postimg.cc/C1qSdnQk/hostel64.png",
    link: "/Facilities/Hostel",
  },
  {
    title: "Laboratories",
    image: "https://i.postimg.cc/tgf9XN29/labs64.png", 
    link: "/Facilities/Laboratories",
  },
  {
    title: "Bank",
    image: "https://i.postimg.cc/VN5YQV97/bank64.png", 
    link: "/Facilities/Bank", 
  },
  {
    title: "Women Cell",
    image: "https://i.postimg.cc/yYzYgnBd/woman64.png", 
    link: "/Facilities/WomanCell",
  },
  {
    title: "SC/ST Cell",
    image: "https://i.postimg.cc/y6R88tMt/scst64.png", 
    link: "/Facilities/SCST",
  },
  {
    title: "EMU",
    image: "https://i.postimg.cc/mgLLVDPW/EMU64.png", 
    link: "/Facilities/Emu",
  },
  {
    title: "ESU",
    image: "https://i.postimg.cc/DzYwSTyk/ESU64.png", 
    link: "/Facilities/Esu",
  },
];

const FacilitiesResourcesPage = () => {
  return (
    <div className="mx-auto px-5 md:px-40 py-8 bg-white bg-opacity-60">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Facilities of NIT Patna</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-5 md:gap-6 items-center justify-center mx-auto">
        {FacilitiesResources.map((resource) => (
          <Link key={resource.title} href={resource.link} className="group">
            <div className="mx-auto my-auto relative bg-white bg-clip-padding p-3 bg-opacity-80 rounded-md border-2 border-red-100 shadow-md transition duration-300 w-11/12 h-32 cardFacilities">
              <div className="relative h-16 w-16 mx-auto">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={64} 
                  height={64} 
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="text-center mt-1">
                <h2 className="text-[12px] md:text-sm font-bold text-neutral-500 group-hover:text-red-900 transition duration-300">
                  {resource.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesResourcesPage;

export async function generateMetadata() {
  return {
    title: 'Facilities | NIT Patna',
  };
}
