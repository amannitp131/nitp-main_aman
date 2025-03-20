"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Users,
  Award,
  FileText,
  Briefcase,
  BarChart2,
} from "lucide-react";
import getNavItems from "./DeptNavItems";

export default function DepartmentSidebar({ dept, items = [] }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navItems = getNavItems(dept);

  const sidebarItems = items.length > 0 ? items : navItems;

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div className="bg-[#F8F0EE] border-r border-[#E8D0CB] h-full min-h-[500px] w-full md:w-64">
      <div className="p-4 bg-red-700 text-white">
        <h3 className="font-bold text-lg">Department Menu</h3>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center justify-between w-full p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </span>
                    {openSubmenu === item.name ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  <ul
                    className={`
                      ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-200",
                      ${openSubmenu === item.name ? "max-h-40" : "max-h-0"}`}
                  >
                    {item.dropdown.map((subitem) => (
                      <li key={subitem.name}>
                        <Link
                          href={subitem.url}
                          className="block p-2 rounded-md hover:bg-[#E8D0CB] text-[#8B3A32]"
                        >
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={item.url}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
