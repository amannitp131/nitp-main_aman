



import React from "react";
import Sidebar from "../components/Sidebar";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-24 mt-10 w-full mb-8">
      {/* Sidebar Section */}
      <div className="mt-6 mb-12 md:mt-10 md:w-1/4">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="mt-8 text-base text-gray-700 md:w-3/4">
        <h3 className="font-bold text-red-700 text-xl md:text-2xl mb-4">
          The prime objectives of this SoP are as follows:
        </h3>

        <ul className="list-disc list-inside space-y-4">
          <li className="text-justify text-lg">
            <span className="font-medium text-gray-900">
              Helping the students of NIT Patna in their physical and psychological
              health issues or those concerned about a friend's health find competent
              treatments.
            </span>
          </li>

          <li className="text-justify text-lg">
            <span className="font-medium text-gray-900">
              To advise the officials of the Health Centre, Hostels, and other stakeholders
              of the Institute on how to handle situations related to students' physical
              or psychological health or emergencies.
            </span>
          </li>

          <li className="text-justify text-lg">
            <span className="font-medium text-gray-900">
              To uphold the commitment of the Institute in providing personalized
              counseling, health support, and safety to all students.
            </span>
          </li>

          <li className="text-justify text-lg">
            <span className="font-medium text-gray-900">
              To promote and foster a positive and inclusive campus culture among
              the students of the Institute.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

