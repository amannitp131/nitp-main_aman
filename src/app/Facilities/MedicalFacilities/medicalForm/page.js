// // "use client";

// // import React from 'react';
// // import Sidebar from '../components/Sidebar';

// // const content = [
// //   {
// //     "Downloads": "Medical Claim Form",
// //     "DLink": "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk",
// //   },
// //   {
// //     "Downloads": "Medical Certificate (A) : Patients who are not admitted to hospital for treatment)",
// //     "DLink": "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk",
// //     "Office order": ""
// //   },
// //   {
// //     "Downloads": "Medical Certificate (B) : Patients who are admitted to hospital for treatment)",
// //     "DLink": "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk",
// //     "Office order": ""
// //   },
// //   {
// //     "Downloads": "Medical Emergency Certificate",
// //     "DLink": "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk",
// //     "Office order": ""
// //   },
// //   {
// //     "Downloads": "Medical Nursing Certificate",
// //     "DLink": "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk",
// //     "Office order": ""
// //   },
// // ];

// // const DownloadsPage = () => {
// //   return (
// //     <div className="mx-auto p-4 text-neutral-600 bg-white/70 flex flex-col md:flex-row">
// //       <div className="md:mt-14 md:mb-12 md:ml-14">
// //         <Sidebar />
// //       </div>
// //       <div className="mt-6 md:mt-4 w-full">
// //         <h1 className="text-2xl md:text-3xl font-bold mb-6 text-red-900 text-center">
// //           Medical Claim Form
// //         </h1>
// //         <div className="overflow-x-auto">
// //           <table className="table-auto border-collapse border border-gray-300 w-full">
// //             <thead>
// //               <tr>
// //                 <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">Name</th>
// //                 <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">Download Form</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {content.map((item, index) => (
// //                 <tr key={index}>
// //                   <td className="border border-gray-300 px-4 py-2 text-xs md:text-sm">
// //                     {item.Downloads}
// //                   </td>
// //                   <td className="border border-gray-300 px-4 py-2 text-center">
// //                     {item.DLink ? (
// //                       <a
// //                         href={item.DLink}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-xs md:text-sm"
// //                       >
// //                         Download
// //                       </a>
// //                     ) : (
// //                       <span className="text-gray-400 italic">N/A</span>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DownloadsPage;



// "use client";

// import React from "react";
// import Sidebar from "../components/Sidebar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// const content = [
//   {
//     Downloads: "Medical Claim Form",
//     DLink:
//       "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk",
//   },
//   {
//     Downloads:
//       "Medical Certificate (A) : Patients who are not admitted to hospital for treatment",
//     DLink:
//       "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk",
//   },
//   {
//     Downloads:
//       "Medical Certificate (B) : Patients who are admitted to hospital for treatment",
//     DLink:
//       "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk",
//   },
//   {
//     Downloads: "Medical Emergency Certificate",
//     DLink:
//       "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk",
//   },
//   {
//     Downloads: "Medical Nursing Certificate",
//     DLink:
//       "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk",
//   },
// ];

// const DownloadsPage = () => {
//   return (
//     <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen font-sans">
//       <div className="md:w-1/4 p-6 bg-white shadow-md">
//         <Sidebar />
//       </div>
//       <div className="md:w-3/4 p-8 flex flex-col items-center">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide uppercase text-center">
//           Download Forms
//         </h1>
//         <Card className="w-full shadow-lg rounded-lg overflow-hidden border border-gray-300 bg-white">
//           <CardContent className="p-6">
//             <Table className="w-full text-left border border-gray-300 rounded-lg">
//               <TableHeader>
//                 <TableRow className="bg-blue-700 text-white">
//                   <TableHead className="p-4 text-lg font-semibold">Name</TableHead>
//                   <TableHead className="p-4 text-lg font-semibold">Download</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {content.map((item, index) => (
//                   <TableRow key={index} className="border-t hover:bg-gray-100 transition">
//                     <TableCell className="p-4 text-gray-800 text-md font-medium">
//                       {item.Downloads}
//                     </TableCell>
//                     <TableCell className="p-4 text-center">
//                       {item.DLink ? (
//                         <Button asChild className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-medium">
//                           <a href={item.DLink} target="_blank" rel="noopener noreferrer">
//                             Download
//                           </a>
//                         </Button>
//                       ) : (
//                         <span className="text-gray-400 italic">N/A</span>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DownloadsPage;


"use client";

import React from "react";
import Sidebar from "../components/Sidebar";

const content = [
  {
    Downloads: "Medical Claim Form",
    DLink:
      "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk",
  },
  {
    Downloads:
      "Medical Certificate (A) : Patients who are not admitted to hospital for treatment",
    DLink:
      "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk",
  },
  {
    Downloads:
      "Medical Certificate (B) : Patients who are admitted to hospital for treatment",
    DLink:
      "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk",
  },
  {
    Downloads: "Medical Emergency Certificate",
    DLink:
      "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk",
  },
  {
    Downloads: "Medical Nursing Certificate",
    DLink:
      "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk",
  },
];

const DownloadsPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar Section */}
      <div className="md:w-1/4 p-6 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="md:w-3/4 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Download Forms</h1>

        {/* Table Container */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4 text-gray-800">{item.Downloads}</td>
                  <td className="p-4 text-center">
                    {item.DLink ? (
                      <a
                        href={item.DLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
