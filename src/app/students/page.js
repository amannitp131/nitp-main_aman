// src/app/students/page.js
import React from 'react';
import Link from 'next/link';
import "./style.css";

const studentResources = [
    {
        "title": "Hostel & Mess",
        "image": "https://i.postimg.cc/2qRn3s0R/admission.png", 
        "link": "/Student/HostelMess",
    },
    {
        "title": "Scholarship",
        "image": "https://i.postimg.cc/2yX8wQf3/scholarship64.png",
        "link": "/Student/Scholarship",
    },
    {
        "title": "Clubs/Societies",
        "image": "https://i.postimg.cc/18Npmmcr/clubs64.png", 
        "link": "/Student/Clubs",
    },
    {
        "title": "Anti Ragging",
        "image": "https://i.postimg.cc/HJwXM6NJ/id-card64.png", 
        "link": "/Student/AntiRagging",
    },
    {
        "title": "Fee Payment",
        "image": "https://i.postimg.cc/YGtgz1cd/payment64.png", 
        "link": "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466",
    },
    {
        "title": "Women Cell",
        "image": "https://i.postimg.cc/4nJb6TsX/sports64.png", 
        "link": "/Student/WomenCell",
    },
    {
        "title": "SC/ST Cell",
        "image": "https://i.postimg.cc/MpSSVPCX/student64.png", 
        "link": "/Student/SCSTCell",
    },
    {
        "title": "Student Activity Center",
        "image": "https://i.postimg.cc/ykGmCg9N/SAC64.png",
        "link": "/Student/SAC",
    },
    {
        "title": "Tech Fest",
        "image": "https://i.postimg.cc/0rcGZHyD/Fest64.png", 
        "link": "/Student/TechFest",
    },
    {
        "title": "NSS@NITP",
        "image": "https://i.postimg.cc/Kk5P60rX/NSS64.png", 
        "link": "/Student/NSS",
    },
    {
        "title": "E-Cell",
        "image": "https://i.postimg.cc/r0TGZB4C/Ecell64.png", 
        "link": "/Student/E-Cell",
    },
    {
        "title": "Unnat Bharat",
        "image": "https://i.postimg.cc/NF0jmNSW/unnant64.png",
        "link": "/Student/UnnatBharat",
    },
    {
        "title": "Student Academic Portal",
        "image": "https://i.postimg.cc/GBGJQL4m/Chankaya64.png", 
        "link": "http://exam.nitp.ac.in:9001/default.aspx?ReturnUrl=%2f",
    }
];

const StudentResourcesPage = () => {
  return (
    <div className="mx-auto px-5 md:px-40 py-8 bg-white bg-opacity-60">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Student Resources</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-5 md:gap-6 items-center justify-center grid-flow-dense mx-auto">
        {studentResources.map((resource) => (
          <Link key={resource.title} href={resource.link} className="group">
            <div className="mx-auto my-auto relative bg-white bg-clip-padding p-3 bg-opacity-80 rounded-md border-2 border-red-100 shadow-md transition duration-300 w-11/12 h-32 cardstudent" >
              <div className="relative h-16 w-16 items-center justify-center mx-auto">
                <img
                  loading='lazy'
                  src={resource.image}
                  alt={resource.title}
                  className="rounded-lg h-11/12 w-11/12"
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

export default StudentResourcesPage;

export async function generateMetadata({ params }) {
  return {
    title: 'Student | NIT Patna',
  }
}