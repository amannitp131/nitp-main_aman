

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
