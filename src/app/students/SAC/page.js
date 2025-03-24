// src/app/Student/SAC/page.js
"use client";
import React from 'react';

const activities = [
  {
    title: "Cultural Events",
    description: "Annual cultural festivals, performances, and interdepartmental competitions.",
    icon: "🎭"
  },
  {
    title: "Sports Tournaments",
    description: "Inter-college and intra-college sports competitions and events.",
    icon: "🏆"
  },
  {
    title: "Technical Workshops",
    description: "Hands-on sessions on cutting-edge technologies and engineering practices.",
    icon: "💻"
  },
  {
    title: "Leadership Development",
    description: "Programs focused on developing organizational and management skills.",
    icon: "👥"
  },
  {
    title: "Social Initiatives",
    description: "Community service projects and social awareness campaigns.",
    icon: "🌱"
  },
  {
    title: "Recreational Activities",
    description: "Fun events, movie screenings, and informal gatherings.",
    icon: "🎮"
  }
];

export default function ActivityCenter() {
  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Student Activity Center
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <img 
                src="https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg"
                alt="Student Activity Center" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-red-900">About the Center</h2>
            <p className="text-gray-700 mb-4">
              The Student Activity Center at NIT Patna serves as the hub for all extracurricular and co-curricular activities on campus. It provides state-of-the-art facilities and resources to support student initiatives, club activities, and various events.
            </p>
            <p className="text-gray-700">
              The center aims to foster holistic development by encouraging students to participate in diverse activities beyond academics, helping them develop leadership skills, teamwork, and creativity.
            </p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-6 text-red-900 text-center">Activities & Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-red-800">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-red-900">Facilities</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Multi-purpose halls for events and performances</li>
            <li>Meeting rooms for club activities</li>
            <li>Audio-visual equipment for presentations and screenings</li>
            <li>Indoor games area</li>
            <li>Collaborative workspaces</li>
            <li>Music and dance practice rooms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}