"use client"
import React from 'react';
import { X, Wifi, Coffee, Newspaper } from 'lucide-react';

const HostelDetails=({ hostel, onClose }) => {
  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, name: 'High Speed WiFi' },
    { icon: <Coffee className="w-5 h-5" />, name: 'Hygienic Drinking Water' },
    { icon: <Newspaper className="w-5 h-5" />, name: 'Daily Newspaper' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{hostel.name}</h2>
              <p className="text-gray-600">{hostel.type} Hostel</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      {amenity.icon}
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-gray-700">
                  {hostel.name} is a modern residential facility designed to provide
                  comfortable accommodation for students. With a capacity of {hostel.capacity} students,
                  the hostel offers a perfect blend of academic and social life.
                  The building is equipped with all necessary amenities and follows
                  strict security protocols to ensure student safety.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="grid gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Warden</h4>
                    <div className="flex items-center space-x-4">
                      <img
                        src={hostel.warden.photo}
                        alt={hostel.warden.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{hostel.warden.name}</p>
                        <p className="text-gray-600">{hostel.warden.contact}</p>
                        <p className="text-gray-600">{hostel.warden.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Assistant Warden</h4>
                    <div className="flex items-center space-x-4">
                      <img
                        src={hostel.assistantWarden.photo}
                        alt={hostel.assistantWarden.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{hostel.assistantWarden.name}</p>
                        <p className="text-gray-600">{hostel.assistantWarden.contact}</p>
                        <p className="text-gray-600">{hostel.assistantWarden.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Caretaker</h4>
                    <div className="flex items-center space-x-4">
                      <img
                        src={hostel.caretaker.photo}
                        alt={hostel.caretaker.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{hostel.caretaker.name}</p>
                        <p className="text-gray-600">{hostel.caretaker.contact}</p>
                        <p className="text-gray-600">{hostel.caretaker.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;