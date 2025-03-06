"use client";
import React from "react";
import { Menu, Home, User, Settings, DollarSign } from "lucide-react"; // Example icons
import Image from "next/image";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeItems: string[];
  setActiveItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Sidebar({
  isOpen,
  toggleSidebar,
  activeItems,
  setActiveItems,
}: SidebarProps) {
  // Define 4 static menu items with icons
  const simpleMenuData: MenuItem[] = [
    { title: "Home", icon: <Home size={24} /> },
    { title: "Profile", icon: <User size={24} /> },
    { title: "Settings", icon: <Settings size={24} /> },
    { title: "Billing", icon: <DollarSign size={24} /> },
  ];

  // Simplified click handler for toggling active state
  const handleItemClick = (menuItem: MenuItem) => {
    setActiveItems((prev) =>
      prev.includes(menuItem.title)
        ? prev.filter((item) => item !== menuItem.title)
        : [...prev, menuItem.title]
    );
  };

  return (
    <aside className="fixed bg-gray-50">
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
            {simpleMenuData.map((item) => (
              <button
                key={item.title}
                className={`flex items-center gap-3 px-5 py-3 transition-colors rounded-3xl ${
                  activeItems.includes(item.title)
                    ? "bg-[#FFC851] text-black"
                    : "hover:bg-[#FFC851]"
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div>{item.icon}</div>
                <span
                  className={`whitespace-nowrap ${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  } transition-all duration-500`}
                >
                  {item.title}
                </span>
              </button>
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