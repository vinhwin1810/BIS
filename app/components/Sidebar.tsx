"use client";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { menuData } from "./constants/constant";

import {useEffect} from "react";
import { usePathname } from "next/navigation"; 

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  showSubmenu: boolean;
  setShowSubmenu: (value: boolean) => void;
  showThirdMenu: boolean;
  setShowThirdMenu: (value: boolean) => void;
  activeItem: string | null;
  setActiveItem: (value: string | null) => void;
}

export default function Sidebar({
  isOpen,
  toggleSidebar,
  showSubmenu,
  setShowSubmenu,
  showThirdMenu,
  setShowThirdMenu,
  activeItem,
  setActiveItem
}: SidebarProps) {
  const pathname = usePathname();

  // Clicking "Inventory Management" opens submenu + keeps highlight
  const handleItemClick = (menuItem: any) => {
    if (menuItem.title === "Inventory Management") {
      if (activeItem === "Inventory Management") {
        setShowSubmenu(false);
        setShowThirdMenu(false);
        setActiveItem(null);
      } else {
        setShowSubmenu(true);
        setShowThirdMenu(false);
        setActiveItem("Inventory Management");
      }
      return;
    }

    if (menuItem.submenus) {
      setShowSubmenu(true);
      setShowThirdMenu(false);
    } else {
      setShowSubmenu(false);
      setShowThirdMenu(false);
    }

    const newActiveItem = activeItem === menuItem.title ? null : menuItem.title;
    setActiveItem(newActiveItem);


  };

  // Clicking "Maintenance" opens third sidebar and keeps first submenu open
  const handleSubmenuClick = (submenu: any) => {
    if (submenu.title === "Maintenance") {
      setActiveItem("Maintenance");
      setShowThirdMenu(true);
    } else {
      setShowThirdMenu(false);
    }
  };

  // Clicking "Item Maintenance" collapses everything, including main sidebar
  const handleThirdMenuClick = (item: string) => {
    if (item === "Item Maintenance") {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      setActiveItem(null);
      toggleSidebar();
    } else {
      setActiveItem(item);
    }
  };


  useEffect(() => {
    if (pathname === "./dashboard/item-maintenance/page") {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      toggleSidebar();
    }
  }, [pathname]);

  return (
    <aside className={`fixed`}>
      <div
        className={`p-5 rounded-tr-xl bg-[#1B3487] text-white transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-16"}`}
      >
        {/* Now using toggleSidebar directly as requested */}
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
              <React.Fragment key={item.title}>
                <button
                  className={`flex items-center gap-3 px-5 py-3 transition-colors rounded-3xl ${
                    activeItem === item.title ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851]"
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
                {["All Favorites", "Customer Service"].includes(item.title) && (
                  <hr className="border-white-600 mx-4 my-2" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer (Restored BIS Logo and Text) */}
        <div
          className={`flex items-center p-5 ${
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

      {/* First Submenu (Inventory Management -> Maintenance + other items) */}
      {showSubmenu && (
        <div className="absolute left-64 top-[150px] bg-white shadow-lg rounded-3xl p-3 w-60 flex flex-col">
          {menuData.find((item) => item.title === "Inventory Management")?.submenus?.map((submenu) => (
            <React.Fragment key={submenu.title}>
              <button
                className={`text-left p-3 rounded-3xl transition-colors ${
                  activeItem === submenu.title ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
                }`}
                onClick={() => handleSubmenuClick(submenu)}
              >
                {submenu.title}
              </button>
              {/* Ensure all submenu items appear */}
              {submenu.items?.map((item) => (
                <button
                  key={item}
                  className={`text-left p-3 rounded-3xl transition-colors ${
                    activeItem === item ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
                  }`}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Third-Level Sidebar (Maintenance -> Item Maintenance + components) */}
      {showThirdMenu && (
        <div className="absolute left-[490px] top-[150px] bg-white shadow-lg rounded-3xl p-3 w-96 flex flex-col">
          {/* Scrollable & Properly Aligned Container */}
          <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex flex-col space-y-2 p-2">
            {menuData.find((item) => item.title === "Inventory Management")
              ?.submenus?.find((submenu) => submenu.title === "Maintenance")
              ?.nextMenu && (
                <>
                  <button
                    className={`text-left p-3 rounded-3xl transition-colors ${
                      activeItem === "Item Maintenance"
                        ? "bg-[#FFC851] text-black"
                        : "hover:bg-[#FFC851] text-black rounded-3xl"
                    }`}
                    onClick={() => handleThirdMenuClick("Item Maintenance")}
                  >
                    Item Maintenance
                  </button>
                  {menuData
                    .find((item) => item.title === "Inventory Management")
                    ?.submenus?.find((submenu) => submenu.title === "Maintenance")
                    ?.nextMenu?.items?.map((item, index) => (
                      <button
                        key={index}
                        className={`text-left p-3 rounded-3xl transition-colors ${
                          activeItem === item
                            ? "bg-[#FFC851] text-black"
                            : "hover:bg-[#FFC851] text-black rounded-3xl"
                        }`}
                        onClick={() => handleThirdMenuClick(item)}
                      >
                        {item}
                      </button>
                    ))}
                </>
              )}
          </div>
        </div>
      )}

      
    </aside>
  );
}
