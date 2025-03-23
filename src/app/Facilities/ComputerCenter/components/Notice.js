"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./Details.css";


const dummyNotices = [
  {
    id: 1,
    title: "Guidelines on Information Security Practices for Government Entities",
    timestamp: 0, 
    attachments: [
      {
        typeLink: true,
        url: "https://drive.google.com/file/d/1O1BlKglEEyDOubpP7LmTpJSxN_SbfSs8/view?usp=sharing",
        caption: "View in Detail",
      },
    ],
    important: true,
    isVisible: 1,
  },
  {
    id: 2,
    title: "Cyber Security Guidelines for Government Employees",
    timestamp: 0, 
    attachments: [
      {
        typeLink: true,
        url: "https://drive.google.com/file/d/1s0dp_D7yTvpB6dxkawavzGn-OyREAqIE/view?usp=drive_link",
        caption: "View in Detail",
      },
    ],
    important: true,
    isVisible: 1,
  },
];

// Reusable Loading Spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <svg className="animate-spin h-12 w-12 text-red-600" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
  </div>
);

// Reusable Error Message
const ErrorMessage = () => (
  <div className="text-center text-red-700 font-semibold p-4">
    <p>Something went wrong while fetching data.</p>
  </div>
);

// Notice Card Component
const NoticeCard = ({ title, time, attachments, important, link }) => (
  <div className={`p-4 rounded-lg shadow-md border ${important ? "border-red-700" : "border-gray-300"} mb-4`}>
    <h3 className="text-black text-sm font-medium">{title}</h3>
    {time !== 0 && <p className="text-neutral-500 text-xs">{new Date(time).toLocaleDateString()}</p>}
    {attachments?.length > 0 && (
      <ul className="text-xs text-red-800 mt-2">
        {attachments.map((attachment, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="download-icon"></div>
            <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {attachment.caption}
            </a>
          </li>
        ))}
      </ul>
    )}
    {link && <a href={link} className="text-xs text-blue-600 underline">View Details</a>}
  </div>
);

// Main Notice Component
const Notice = () => {
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [notices, setNotices] = useState([]);

  const fetchNotices = useCallback(() => {
    setTimeout(() => {
      const filteredNotices = dummyNotices.filter((notice) => notice.isVisible === 1);
      if (filteredNotices.length > 0) {
        setNotices(filteredNotices);
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1000);
  }, []);

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  return (
    <div className="p-5 md:p-10 md:px-28">
      <h2 className="text-2xl text-center pb-7 text-red-700 font-bold">Notices</h2>
      
      {status === "loading" && <LoadingSpinner />}
      {status === "error" && <ErrorMessage />}
      
      {status === "success" && notices.length > 0 && (
        <div>
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              title={notice.title}
              time={notice.timestamp}
              attachments={notice.attachments}
              important={notice.important}
              link={notice.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Notice;
