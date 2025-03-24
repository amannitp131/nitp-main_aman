
// src/app/students/Antiragging/page.js
"use client";
import React from 'react';
import { Download } from 'lucide-react';

const documents = [
  {name: "Office Order_Anti Ragging Committee", link: "https://drive.google.com/file/d/1xHhiYd1qPxxMeI_QVQwM7y6L_scU6MjO/view?usp=drivesdk"},
  {name: "Notification_Anti Ragging Squad", link: "https://drive.google.com/file/d/1S0W5gZLyGZ_8oApw3MtIJCDf-f6DAt5W/view?usp=drivesdk"},
  {name: "Colleges, University, Institution_Website_Information", link: "https://drive.google.com/file/d/1luRKbPj5R8GI0QksvgXvZav7NwOIazev/view?usp=drivesdk"},
];

export default function AntiRagging() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-red-800 py-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Anti Ragging
        </h1>
      </div>

      <div className="mx-auto px-4 py-4 max-w-7xl">
        <div className="bg-red-800 text-white p-4 rounded-t-lg grid grid-cols-6 font-semibold">
          <div className="col-span-4">Document</div>
          <div className="col-span-2 text-center">Download</div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {documents.map((item, index) => (
            <div 
              key={index}
              className={`grid grid-cols-6 p-4 hover:bg-red-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="col-span-4 text-gray-800">{item.name}</div>
              <div className="col-span-2 text-center">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-red-800">Anti-Ragging Policy</h2>
          <p className="text-gray-700 mb-4">
            NIT Patna has a zero-tolerance policy against ragging in any form. Ragging is strictly prohibited within the premises of the college, hostels, and all other places, public or private, associated with the institution.
          </p>
          <p className="text-gray-700 mb-4">
            Any student found guilty of ragging or abetting ragging, actively or passively, or being part of a conspiracy to promote ragging, will face severe consequences as per institutional rules and regulations.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold text-red-800 mb-2">Anti-Ragging Helpline</h3>
            <p className="text-gray-700">National Anti-Ragging Helpline: <span className="font-medium">1800-180-5522</span></p>
            <p className="text-gray-700">Email: <span className="font-medium">helpline@antiragging.in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}