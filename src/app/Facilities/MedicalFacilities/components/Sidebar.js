// "use client";
// import React, { useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { FaHome, FaUserFriends, FaPhotoVideo } from 'react-icons/fa';

// const Sidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [showOptions, setShowOptions] = useState(false);

//   const handleNavigation = (path, query = {}) => {
//     const queryString = new URLSearchParams(query).toString();
//     router.push(`${path}${queryString ? `?${queryString}` : ''}`);
//   };

//   const basePath = '/Facilities/MedicalFacilities';
//   const baseRoute = pathname.replace(basePath, '');

//   return (
//     <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
//       <ul className="space-y-3 md:space-y-4">
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(basePath)}
//         >
//           <FaHome className="mr-2 md:mr-3" />
//           <span className="font-semibold">Home</span>
//         </li>
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '/objectives' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(`${basePath}/objectives`)}
//         >
//           <FaPhotoVideo className="mr-2 md:mr-3" />
//           <span>Objectives</span>
//         </li>
//         <li
//           className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
//           onClick={() => setShowOptions((prev) => !prev)} 
//         >
//           <FaUserFriends className="mr-2 md:mr-3" />
//           <span>Doctor Timing</span>
//         </li>
//         {showOptions && ( 
//           <ul className="pl-6 space-y-2">
//             <li
//               className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-red-400"
//               onClick={() => handleNavigation(`${basePath}/components/patnacampus`, { option: 'patnacampus' })}
//             >
//               <FaUserFriends className="mr-2 md:mr-3" />
//               <span>Patna Campus</span>
//             </li>
//             <li
//               className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-red-400"
//               onClick={() => handleNavigation(`${basePath}/components/bihtacampus`, { option: 'bihtacampus' })}
//             >
//               <FaUserFriends className="mr-2 md:mr-3" />
//               <span>Bihta Campus</span>
//             </li>
//           </ul>
//         )}
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '/medicalForm' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(`${basePath}/medicalForm`)}
//         >
//           <FaUserFriends className="mr-2 md:mr-3" />
//           <span>Medical Form</span>
//         </li>
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '/notice' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(`${basePath}/notice`)}
//         >
//           <FaPhotoVideo className="mr-2 md:mr-3" />
//           <span>Notice</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaUserFriends, FaPhotoVideo } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  const handleNavigation = (path, query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    router.push(`${path}${queryString ? `?${queryString}` : ""}`);
  };

  const basePath = "/Facilities/MedicalFacilities";

  return (
    <div className="sticky top-4 w-64 bg-white shadow-xl p-5 border border-gray-300 rounded-lg transition-all">
      <ul className="space-y-3">
        <SidebarItem
          icon={<FaHome />}
          text="Home"
          isActive={pathname === basePath}
          onClick={() => handleNavigation(basePath)}
        />
        <SidebarItem
          icon={<FaPhotoVideo />}
          text="Objectives"
          isActive={pathname === `${basePath}/objectives`}
          onClick={() => handleNavigation(`${basePath}/objectives`)}
        />
        <li
          className="flex items-center p-3 rounded-lg cursor-pointer transition hover:bg-gray-200"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <FaUserFriends className="mr-3" />
          <span>Doctor Timing</span>
        </li>
        {showOptions && (
          <ul className="pl-6 space-y-2">
            <SidebarItem
              icon={<FaUserFriends />}
              text="Patna Campus"
              onClick={() =>
                handleNavigation(`${basePath}/components/patnacampus`, {
                  option: "patnacampus",
                })
              }
            />
            <SidebarItem
              icon={<FaUserFriends />}
              text="Bihta Campus"
              onClick={() =>
                handleNavigation(`${basePath}/components/bihtacampus`, {
                  option: "bihtacampus",
                })
              }
            />
          </ul>
        )}
        <SidebarItem
          icon={<FaUserFriends />}
          text="Medical Form"
          isActive={pathname === `${basePath}/medicalForm`}
          onClick={() => handleNavigation(`${basePath}/medicalForm`)}
        />
        <SidebarItem
          icon={<FaPhotoVideo />}
          text="Notice"
          isActive={pathname === `${basePath}/notice`}
          onClick={() => handleNavigation(`${basePath}/notice`)}
        />
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, text, isActive, onClick }) => {
  return (
    <li
      className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
        isActive
          ? "bg-red-500 text-white font-semibold"
          : "hover:bg-gray-200 text-gray-800"
      }`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </li>
  );
};

export default Sidebar;
