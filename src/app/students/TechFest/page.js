// src/app/Student/TechFest/page.js
"use client";
import React from 'react';

const events = [
  {
    title: "Hackathon",
    description: "24-hour coding competition to build innovative solutions to real-world problems.",
    category: "Technical"
  },
  {
    title: "Robo Wars",
    description: "Robot fighting competition where teams build robots to battle in an arena.",
    category: "Technical"
  },
  {
    title: "Tech Talks",
    description: "Guest lectures and panel discussions by industry experts and academicians.",
    category: "Technical"
  },
  {
    title: "Project Exhibition",
    description: "Showcase of student projects and innovations from various engineering disciplines.",
    category: "Technical"
  },
  {
    title: "Coding Contest",
    description: "Competitive programming contest to solve complex algorithmic problems.",
    category: "Technical"
  },
  {
    title: "Technical Quiz",
    description: "Quiz competition testing knowledge of technology, science, and engineering concepts.",
    category: "Technical"
  }
];

export default function TechFest() {
  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Tech Fest
        </h1>
        
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-10 shadow-lg">
          <img 
            src="https://www.nitp.ac.in/static/7d76c7606b144e4d1e66709cd7787ee1/a9821/coronapic.png" 
            alt="Tech Fest Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Corona 2023</h2>
            <p className="text-lg">Annual Technical Festival of NIT Patna</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-red-900">About the Tech Fest</h2>
            <p className="text-gray-700 mb-4">
              Corona is the annual technical festival of NIT Patna that showcases the technical prowess and innovative spirit of students. It brings together participants from various colleges across the country to compete, collaborate, and celebrate technology and engineering.
            </p>
            <p className="text-gray-700">
              The festival features a wide range of events including competitions, workshops, exhibitions, and lectures by renowned experts, providing a platform for students to demonstrate their skills and learn from peers and professionals.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-red-900">Highlights</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Participation from over 50 colleges nationwide</li>
              <li>Prize pool worth ₹5 Lakhs+</li>
              <li>Industry-sponsored challenges and events</li>
              <li>Networking opportunities with industry professionals</li>
              <li>Workshops on cutting-edge technologies</li>
              <li>Cultural performances and DJ nights</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-6 text-red-900 text-center">Featured Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">{event.category}</span>
              <h3 className="text-lg font-bold mb-2 text-red-800">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-bold mb-4 text-red-900">Registration</h2>
          <p className="text-gray-700 mb-6">
            Registrations for Corona 2023 will open soon. Stay tuned for announcements.
          </p>
          <button className="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors text-lg font-medium">
            Register Interest
          </button>
        </div> */}
      </div>
    </div>
  );
}