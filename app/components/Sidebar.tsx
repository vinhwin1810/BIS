"use client";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { menuData } from "./constants/constant";

import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  showSubmenu: boolean;
  setShowSubmenu: (value: boolean) => void;
  showThirdMenu: boolean;
  setShowThirdMenu: (value: boolean) => void;
  activeItems: string[]; // Supports multiple active items
  setActiveItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Sidebar({
  isOpen,
  toggleSidebar,
  showSubmenu,
  setShowSubmenu,
  showThirdMenu,
  setShowThirdMenu,
  activeItems,
  setActiveItems,
}: SidebarProps) {
  

  // Clicking "Inventory Management" opens submenu + keeps highlight
  const handleItemClick = (menuItem: any) => {
    if (menuItem.title === "Inventory Management") {
      if (activeItems.includes("Inventory Management")) {
        setShowSubmenu(false);
        setShowThirdMenu(false);
        setActiveItems([]); //  Clear all active items
      } else {
        setShowSubmenu(true);
        setShowThirdMenu(false);
        setActiveItems(["Inventory Management"]); //  Set "Inventory Management" as active
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

    // Allow multiple active items instead of replacing the value
    setActiveItems((prev) =>
      prev.includes(menuItem.title)
        ? prev.filter((item) => item !== menuItem.title)
        : [...prev, menuItem.title]
    );
  };

  // Clicking "Maintenance" opens third sidebar and keeps first submenu open
  const handleSubmenuClick = (submenu: any) => {
    if (submenu.title === "Maintenance") {
      setShowThirdMenu(true);

      // Ensure both "Inventory Management" and "Maintenance" are active
      setActiveItems((prev) => {
        const updatedItems = new Set(prev);
        updatedItems.add("Inventory Management");
        updatedItems.add("Maintenance");
        return Array.from(updatedItems);
      });
      return;
    }

    setShowThirdMenu(false);

    // Keep "Inventory Management" highlighted even when clicking other submenu items
    setActiveItems((prev) => {
      const updatedItems = new Set(prev);
      updatedItems.add("Inventory Management");
      updatedItems.add(submenu.title);
      return Array.from(updatedItems);
    });
  };

  // Clicking "Item Maintenance" collapses everything, including main sidebar
  const handleThirdMenuClick = (item: string) => {
    if (item === "Item Maintenance") {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      setActiveItems([]); // Reset all active items
      toggleSidebar();
    } else {
      setActiveItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    }
  };


  return (
    <aside className="fixed">
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
              <React.Fragment key={item.title}>
                <button
                  className={`flex items-center gap-3 px-5 py-3 transition-colors rounded-3xl ${
                    activeItems.includes(item.title) ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851]"
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

      {/* First Submenu (Inventory Management -> Maintenance + other items) */}
      {showSubmenu && (
        <div className="absolute left-64 top-[150px] bg-white shadow-lg rounded-3xl p-3 w-60 flex flex-col">
          {menuData.find((item) => item.title === "Inventory Management")?.submenus?.map((submenu) => (
            <React.Fragment key={submenu.title}>
              <button
                className={`text-left p-3 rounded-3xl transition-colors ${
                  activeItems.includes(submenu.title) ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
                }`}
                onClick={() => handleSubmenuClick(submenu)}
              >
                {submenu.title}
              </button>
              {submenu.items?.map((item) => (
                <button
                  key={item}
                  className={`text-left p-3 rounded-3xl transition-colors ${
                    activeItems.includes(item) ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
                  }`}
                  onClick={() => handleThirdMenuClick(item)}
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
          <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex flex-col space-y-2 p-2">
            {menuData.find((item) => item.title === "Inventory Management")
              ?.submenus?.find((submenu) => submenu.title === "Maintenance")
              ?.nextMenu && (
                <>
                  {/* Restored "Item Maintenance" button */}
                  <button
                    className={`text-left p-3 rounded-3xl transition-colors ${
                      activeItems.includes("Item Maintenance")
                        ? "bg-[#FFC851] text-black"
                        : "hover:bg-[#FFC851] text-black rounded-3xl"
                    }`}
                    onClick={() => handleThirdMenuClick("Item Maintenance")}
                  >
                    Item Maintenance
                  </button>

                  {/* Restored all missing third-level submenu items */}
                  {menuData
                    .find((item) => item.title === "Inventory Management")
                    ?.submenus?.find((submenu) => submenu.title === "Maintenance")
                    ?.nextMenu?.items?.map((item, index) => (
                      <button
                        key={index}
                        className={`text-left p-3 rounded-3xl transition-colors ${
                          activeItems.includes(item) ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
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


