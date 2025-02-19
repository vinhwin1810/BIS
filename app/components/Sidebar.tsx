"use client";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { menuData } from "./constants/constant";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside className="fixed">
      {/* Menu button container */}
      <div
        className={`p-5 rounded-tr-xl bg-[#1B3487] text-white transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-16"}`}
      >
        <Menu onClick={toggleSidebar} size={24} className="cursor-pointer" />
      </div>

      {/* Sidebar content */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } rounded-br-xl transition-all duration-500 ease-in-out bg-[#1B3487] text-white min-h-screen overflow-hidden`}
      >
        <div className="flex flex-col">
          <div className="h-7" />
          <nav>
            {menuData.map((item) => (
              <React.Fragment key={item.label}>
                <div
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-5 py-3 transition-colors
                    ${item.active ? "bg-[#FFD942] rounded-lg " : ""}`}
                >
                  <div>{item.icon}</div>
                  <span
                    className={`whitespace-nowrap ${
                      isOpen ? "opacity-100" : "opacity-0 w-0"
                    } transition-all duration-500`}
                  >
                    {item.title}
                  </span>
                </div>
                {["All Favorites", "Customer Service"].includes(item.title) && (
                  <hr className="border-white-600 mx-4 my-2" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div
          className={`flex items-center ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        >
          <Image src="/bis.png" alt="BIS" width={100} height={100} />
          <div className={`ml-2 ${isOpen ? "opacity-100" : "opacity-0 w-0"}`}>
            <span className="text-sm">BIS Computer Solutions</span>
            <span className="text-xs text-gray-400 mt-1 flex">
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
