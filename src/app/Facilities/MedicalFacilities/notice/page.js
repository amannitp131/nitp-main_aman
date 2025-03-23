// "use client";

// import React from 'react';
// import Sidebar from '../components/Sidebar';

// const content = [
//   {
//     "Downloads": "SOP",
//     "DLink": "https://drive.google.com/file/d/1_6KN00R1HR6x9YfgV85XXs3ns9oZqPpY/view?usp=sharing",
//     "Office order": ""
//   },
//   {
//     "Downloads": "List of Empanelled Hospitals",
//     "DLink": "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk",
//     "Office order": ""
//   },
// ];

// const DownloadsPage = () => {
//   return (
//     <div className="flex flex-col md:flex-row mx-auto p-4 text-neutral-600 bg-white/70">
//       {/* Sidebar */}
//       <div className="mb-8 md:mb-0 md:mr-8">
//         <Sidebar />
//       </div>

//       {/* Content Section */}
//       <div className="flex-1">
//         <h1 className="text-2xl md:text-3xl font-bold mb-6 text-red-900 text-center">
//           Medical Claim Form
//         </h1>
        
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-24 py-2 text-left">Name</th>
//                 <th className="border border-gray-300 px-24 py-2 text-center">Download Form</th>
//               </tr>
//             </thead>
//             <tbody>
//               {content.map((item, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2">{item.Downloads}</td>
//                   <td className="border border-gray-300 px-4 py-2 text-center">
//                     {item.DLink ? (
//                       <a
//                         href={item.DLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-sm"
//                       >
//                         Download
//                       </a>
//                     ) : (
//                       <span className="text-gray-500 italic">Unavailable</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DownloadsPage;


// "use client";

// import React from "react";
// import Sidebar from "../components/Sidebar";

// const content = [
//   {
//     Downloads: "SOP",
//     DLink:
//       "https://drive.google.com/file/d/1_6KN00R1HR6x9YfgV85XXs3ns9oZqPpY/view?usp=sharing",
//   },
//   {
//     Downloads: "List of Empanelled Hospitals",
//     DLink:
//       "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk",
//   },
// ];

// const DownloadsPage = () => {
//   return (
//     <div className="flex flex-col md:flex-row mx-auto p-6 text-gray-700 bg-gray-50 min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-full md:w-1/4 mb-6 md:mb-0">
//         <Sidebar />
//       </aside>

//       {/* Content Section */}
//       <main className="flex-1 bg-white shadow-md rounded-lg p-6 border border-gray-200">
//         <h1 className="text-3xl font-semibold mb-6 text-center text-red-800">
//           Medical Claim Form
//         </h1>

//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 text-sm md:text-base">
//             <thead className="bg-gray-200 text-gray-800">
//               <tr>
//                 <th className="border border-gray-300 px-6 py-3 text-left">Name</th>
//                 <th className="border border-gray-300 px-6 py-3 text-center">
//                   Download Form
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {content.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-100 transition duration-200"
//                 >
//                   <td className="border border-gray-300 px-4 py-3">
//                     {item.Downloads}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-3 text-center">
//                     {item.DLink ? (
//                       <a
//                         href={item.DLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
//                       >
//                         Download
//                       </a>
//                     ) : (
//                       <span className="text-gray-500 italic">Unavailable</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DownloadsPage;



"use client";

import React from "react";
import Sidebar from "../components/Sidebar";

const downloadsList = [
  {
    name: "SOP",
    link: "https://drive.google.com/file/d/1_6KN00R1HR6x9YfgV85XXs3ns9oZqPpY/view?usp=sharing",
  },
  {
    name: "List of Empanelled Hospitals",
    link: "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk",
  },
];

const DownloadsPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto p-6 min-h-screen bg-gray-50 text-gray-700">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 mb-6 md:mb-0">
        <Sidebar />
      </aside>

      {/* Content Section */}
      <main className="flex-1 bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-semibold mb-6 text-center text-red-700">
          Medical Claim Form
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="border border-gray-300 px-6 py-3 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-6 py-3 text-center">
                  Download Form
                </th>
              </tr>
            </thead>
            <tbody>
              {downloadsList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="border border-gray-300 px-4 py-3">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Download ${item.name}`}
                        className="bg-red-700 text-white font-medium px-4 py-2 rounded-md hover:bg-red-800 transition text-sm"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-500 italic">Unavailable</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DownloadsPage;
