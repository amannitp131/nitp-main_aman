"use client";
import React, { useEffect, useState } from "react";
import { BoldIcon, ChevronDown, Menu, X } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import { Dropdown } from "../navbar";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import getNavItems from "./DeptNavItems";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const DeptNavbar = ({ dept }) => {
  const navItems = getNavItems(dept);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`bg-red-700 w-[90%] xl:w-[80%] text-white backdrop-blur-xl xl:px-6 ${
          isScrolled
            ? "py-1 transition-transform duration-500"
            : "py-2 transition-transform duration-500"
        } md:flex hidden md:gap-0 xl:gap-6 items-center justify-evenly mx-auto rounded-lg shadow-lg backdrop-filter transition duration-300`}
      >
        {navItems.map((item, index) =>
          item.dropdown ? (
            <Dropdown
              key={index}
              title={item.name}
              items={item.dropdown}
              icon={item.icon}
            />
          ) : (
            <Link
              key={index}
              href={item.url}
              className="flex items-center gap-2 hover:opacity-80"
            >
              {item.icon}
              {item.name}
            </Link>
          )
        )}
      </nav>

      <div className="md:hidden flex items-center justify-end bg-red-700 text-white px-4 py-3">
        <button onClick={() => setSideMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-800 text-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSideMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-2 px-6">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <Dropdown
                key={index}
                title={item.name}
                items={item.dropdown}
                icon={item.icon}
                mobile
              />
            ) : (
              <Link
                key={index}
                href={item.url}
                className="flex items-center gap-2 py-2 hover:bg-red-900 rounded-md px-3"
                // onClick={() => setIsMobileMenuOpen(false)}
                onClick={() => setSideMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      {/* <BoldIcon
            onClick={() => setSideMenuOpen(true)} 
            className="cursor-pointer text-3xl md:hidden text-black ml-auto" 
          /> */}
      {isSideMenuOpen && (
        <MobileNav
          closeSideMenu={() => setSideMenuOpen(false)}
          navItems={navItems}
        />
      )}
    </>
  );
};

function MobileNav({ closeSideMenu, navItems }) {
  return (
    <div className="mobile-nav text-black">
      <div className="mobile-nav-content text-black">
        <AiOutlineClose
          onClick={closeSideMenu}
          className="mobile-nav-close text-4xl text-black z-[1000]"
        />
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((item, index) => (
            <SingleNavItem
              key={index}
              item={item}
              closeSideMenu={closeSideMenu}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ item, closeSideMenu }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  return (
    <div ref={animationParent} className="relative px-1 py-3 transition-all">
      <p
        onClick={() => setItemOpen(!isItemOpen)}
        className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black"
      >
        {item.icon}
        <Link href={"#"} onClick={closeSideMenu}>
          {item.name}
        </Link>
        {item.dropdown && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>
      {isItemOpen && item.dropdown && (
        <div className="w-auto flex-col gap-1  bg-neutral-50 py-3 transition-all flex">
          {item.dropdown.map((child, index) => (
            <SubSidemenu key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}
function SubSidemenu({ item, closeSideMenu }) {
  const [isSubItemOpen, setSubItemOpen] = useState(false);
  const [isItemOpen, setItemOpen] = useState(true);
  const handleSubToggle = () => {
    setSubItemOpen(!isSubItemOpen);
  };

  return (
    <div className="relative px-1 py-1 transition-all ">
      <p
        onClick={handleSubToggle}
        className="flex cursor-pointer items-center gap-1 text-neutral-700 group-hover:text-black"
      >
        {item.icon}
        <Link href={item.url ?? "#"} onClick={closeSideMenu}>
          <span>{item.name}</span>
        </Link>
        {item.dropdown && (
          <IoIosArrowDown
            className={`text-xs transition-all ${
              isSubItemOpen && "rotate-180"
            } `}
          />
        )}
      </p>
      {isSubItemOpen && item.dropdown && (
        <div className="w-auto flex-col gap-1 bg-white py-1 transition-all text-sm">
          {item.dropdown.map((subChild, index) => (
            <p key={index} className="flex pl-4">
              {item.icon}
              <Link
                href={subChild.url ?? "#"}
                className="flex cursor-pointer items-center py-1 text-neutral-700 hover:text-black pl-1"
              >
                <span>{subChild.name}</span>
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DeptNavbar;
