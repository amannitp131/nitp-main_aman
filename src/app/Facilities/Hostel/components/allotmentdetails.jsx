"use client"
import React from 'react';
import { FileText, CheckSquare } from 'lucide-react';

const AllotmentDetails = () => {
  const requirements = [
    'Valid Student ID',
    'Semester Fee Receipt',
    'Residential Proof',
    'Medical Fitness Certificate',
    'Two Passport Size Photographs',
    'Parent/Guardian Contact Details'
  ];

  const process = [
    'Submit online application through student portal',
    'Document verification at hostel office',
    'Room allocation based on availability',
    'Fee payment within 3 working days',
    'Room possession with caretaker'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hostel Allotment</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">Required Documents</h3>
          </div>
          <ul className="space-y-3">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">Allotment Process</h3>
          </div>
          <ol className="space-y-3">
            {process.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AllotmentDetails;