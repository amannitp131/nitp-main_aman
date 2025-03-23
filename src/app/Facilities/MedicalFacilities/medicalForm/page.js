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
