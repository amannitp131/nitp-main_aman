import React from 'react';
import { CheckCircle } from 'lucide-react';

const Rules = () => {
  const rules = [
    'Students must carry their ID cards at all times',
    'Strict adherence to hostel timings is mandatory',
    'Visitors are allowed only in designated areas during visiting hours',
    'Smoking and alcohol consumption is strictly prohibited',
    'Maintain cleanliness in rooms and common areas',
    'No electrical appliances without prior permission',
    'Report any maintenance issues to the caretaker immediately',
    'Follow mess timings and maintain discipline in dining area',
    'No ragging in any form will be tolerated',
    'Permission required for overnight stay outside hostel'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hostel Rules</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;