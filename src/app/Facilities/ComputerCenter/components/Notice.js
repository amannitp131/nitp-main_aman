// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import "./Details.css";

// const dummyNotices = [
//   {
//     id: 1,
//     title: "Guidelines on Information Security Practices for Government Entities",
//     // timestamp: 1696281600000,
//     timestamp: 0, 
//     attachments: [
//       {
//         typeLink: true,
//         url: "https://drive.google.com/file/d/1O1BlKglEEyDOubpP7LmTpJSxN_SbfSs8/view?usp=sharing",
//         caption: "View in Detail",
//       },
//     ],
//     important: true,
//     isVisible: 1,
//   },
//    {
//     id: 2,
//     title: "Cyber Security Guidelines for Government Employees",
//     // timestamp: 1696281600000,
//     timestamp: 0, 
//     attachments: [
//       {
//         typeLink: true,
//         url: "https://drive.google.com/file/d/1s0dp_D7yTvpB6dxkawavzGn-OyREAqIE/view?usp=drive_link",
//         caption: "View in Detail",
//       },
//     ],
//     important: true,
//     isVisible: 1,
//   },
  
// ];

// const Noticecard = ({ detail, time, attachments, imp, link }) => (
//   <div className={`notice ${imp ? "important" : ""}`}>
//     <h3 className="text-black md:text-xs text-sm">{detail}</h3>
//     {time !== 0 && (
//       <p className="text-neutral-500 text-xs">
//         {new Date(time).toLocaleDateString()}
//       </p>
//     )}
//     {attachments && attachments.length > 0 && (
//       <ul className=" text-xs text-red-800">
//         {attachments.map((attachment, index) => (
//           <li key={index}>
//             {attachment.typeLink ? (
//               <a href={attachment.url} target="_blank" rel="noopener noreferrer">
//                 <div className="download-icon inline-block"></div>
//                 {attachment.caption}
//               </a>
//             ) : (
//               <a href={attachment.url} download className=" text-xs ">
//                 <div className="download-icon inline-block"></div>
//                 {attachment.caption}
//               </a>
//             )}
//           </li>
//         ))}
//       </ul>
//     )}
//     {link && <a href={link} className="text-xs">View Details</a>}
//   </div>
// );

// const Notice = () => {
//   const [academics, setAcademics] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [fetchError, setFetchError] = useState(false);

//   useEffect(() => {
//     const fetchAcademics = async () => {
//       // Simulate fetching data from API
//       setTimeout(() => {
//         setAcademics(dummyNotices.filter((notice) => notice.isVisible === 1));
//         setIsLoading(false);
//       }, 1000); // Simulate delay
//     };

//     fetchAcademics();
//   }, []);

//   return (
//     <div>
//       <div className="p-5 md:p-10  md:pl-28 md:pr-28">
//         <div className="text-2xl text-center pb-7 md:pb-10 text-red-950 font-bold">
//           <h2>Notice</h2>
//         </div>
//         {isLoading ? (
//           <div className="flex justify-center items-center ">
//             <svg
//               version="1.1"
//               id="L1"
//               height="150px"
//               width="150px"
//               x="0px"
//               y="0px"
//               viewBox="0 0 100 100"
//               enable-background="new 0 0 100 100"
//             >
//               <circle
//                 fill="none"
//                 stroke="#f87171"
//                 stroke-width="6"
//                 stroke-miterlimit="15"
//                 stroke-dasharray="14.2472,14.2472"
//                 cx="50"
//                 cy="50"
//                 r="47"
//               >
//                 <animateTransform
//                   attributeName="transform"
//                   attributeType="XML"
//                   type="rotate"
//                   dur="5s"
//                   from="0 50 50"
//                   to="360 50 50"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//               <circle
//                 fill="none"
//                 stroke="#f87171"
//                 stroke-width="1"
//                 stroke-miterlimit="10"
//                 stroke-dasharray="10,10"
//                 cx="50"
//                 cy="50"
//                 r="39"
//               >
//                 <animateTransform
//                   attributeName="transform"
//                   attributeType="XML"
//                   type="rotate"
//                   dur="5s"
//                   from="0 50 50"
//                   to="-360 50 50"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//               <g fill="#f87171">
//                 <rect x="30" y="35" width="5" height="30">
//                   <animateTransform
//                     attributeName="transform"
//                     dur="1s"
//                     type="translate"
//                     values="0 5 ; 0 -5; 0 5"
//                     repeatCount="indefinite"
//                     begin="0.1"
//                   />
//                 </rect>
//                 <rect x="40" y="35" width="5" height="30">
//                   <animateTransform
//                     attributeName="transform"
//                     dur="1s"
//                     type="translate"
//                     values="0 5 ; 0 -5; 0 5"
//                     repeatCount="indefinite"
//                     begin="0.2"
//                   />
//                 </rect>
//                 <rect x="50" y="35" width="5" height="30">
//                   <animateTransform
//                     attributeName="transform"
//                     dur="1s"
//                     type="translate"
//                     values="0 5 ; 0 -5; 0 5"
//                     repeatCount="indefinite"
//                     begin="0.3"
//                   />
//                 </rect>
//                 <rect x="60" y="35" width="5" height="30">
//                   <animateTransform
//                     attributeName="transform"
//                     dur="1s"
//                     type="translate"
//                     values="0 5 ; 0 -5; 0 5"
//                     repeatCount="indefinite"
//                     begin="0.4"
//                   />
//                 </rect>
//                 <rect x="70" y="35" width="5" height="30">
//                   <animateTransform
//                     attributeName="transform"
//                     dur="1s"
//                     type="translate"
//                     values="0 5 ; 0 -5; 0 5"
//                     repeatCount="indefinite"
//                     begin="0.5"
//                   />
//                 </rect>
//               </g>
//             </svg>
//           </div>
//         ) : fetchError ? (
//           <div className="flex justify-center items-center">
//             <div className="text-center justify-center items-center">
//               <svg
//                 width="120px"
//                 className=" m-auto"
//                 height="120px"
//                 viewBox="0 0 16.00 16.00"
//                 fill="#e85e5e"
//                 stroke="#e85e5e"
//                 stroke-width="0.00016"
//               >
//                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke="#CCCCCC"
//                   stroke-width="0.128"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   <path
//                     d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z"
//                     fill-rule="evenodd"
//                   ></path>
//                 </g>
//               </svg>
//               <p className="text-center text-xl text-neutral-700 p-4">
//                 Something went wrong while fetching data.
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {academics.map((item, index) => (
//               <Noticecard
//                 key={index}
//                 detail={item.title}
//                 time={item.timestamp}
//                 attachments={item.attachments}
//                 imp={item.important}
//                 link={item.link}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Notice;


"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./Details.css";

// Dummy Notices Data
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
