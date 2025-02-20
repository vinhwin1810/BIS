"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { menuData } from "./constants/constant"; // Import menuData

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [submenuItems, setSubmenuItems] = useState<any[]>([]);
  const [thirdMenuItems, setThirdMenuItems] = useState<any[]>([]);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const [showThirdMenu, setShowThirdMenu] = useState<boolean>(false);

  // Handle clicking on the main sidebar items
  const handleItemClick = (menuItem: any) => {
    if (menuItem.submenus) {
      // Extract all submenu items (including "Maintenance" and its `items`)
      const expandedSubmenus = menuItem.submenus.flatMap((submenu) => {
        if (submenu.items) {
          return [{ ...submenu }, ...submenu.items.map((item) => ({ title: item }))];
        }
        return [submenu];
      });

      setSubmenuItems(expandedSubmenus); // ✅ Set all extracted submenu items
      setShowSubmenu(true);
      setShowThirdMenu(false);
    } else {
      setShowSubmenu(false);
      setShowThirdMenu(false);
    }

    setActiveItem((prev) => (prev === menuItem.title ? null : menuItem.title));
  };


  // Handle clicking on submenu items (like "Maintenance")
  const handleSubmenuClick = (submenu: any) => {
    setActiveItem(submenu.title);
    if (submenu.items) {
      setThirdMenuItems(submenu.nextMenu.items);
      setShowThirdMenu(true);
    } else {
      setShowThirdMenu(false);
    }
  };

  // Handle clicking on third-level menu items
  const handleThirdMenuClick = (item: string) => {
    setActiveItem(item);
    setShowSubmenu(false);
    setShowThirdMenu(false);
    toggleSidebar(); // Collapse sidebar after selecting an option
  };

  // Close all submenus when clicking the burger menu
  const handleSidebarToggle = () => {
    toggleSidebar();
    setShowSubmenu(false);
    setShowThirdMenu(false);
    setActiveItem(null);
  };

  useEffect(() => {
    if (pathname === "/dashboard/item-maintenance/page") {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      toggleSidebar();
    }
  }, [pathname]);

  return (
    <aside className={`fixed ${poppins.className}`}>
      {/* Menu button container */}
      <div
        className={`p-5 rounded-tr-xl bg-[#1B3487] text-white transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-16"}`}
      >
        <Menu onClick={handleSidebarToggle} size={24} className="cursor-pointer" />
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

        {/* Sidebar Footer */}
        <div
          className={`flex items-center  ${
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

      {/* Submenu Sidebar (Opens when clicking "Inventory Management") */}
      {showSubmenu && (
        <div className="absolute left-64 top-[150px] bg-white shadow-lg rounded-3xl p-3 w-60 flex flex-col">
          {submenuItems.map((submenu) => (
            <button
              key={submenu.title}
              className={`text-left p-3 rounded-3xl transition-colors ${
                activeItem === submenu.title ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
              }`}
              onClick={() => handleSubmenuClick(submenu)}
            >
              {submenu.title}
            </button>
          ))}
        </div>
      )}

      {/* Third-Level Sidebar (Opens when clicking "Maintenance" in submenu) */}
      {showThirdMenu && (
        <div className="absolute left-[490px] top-[150px] bg-white shadow-lg rounded-3xl p-3 w-96 flex flex-col">
          <div className="relative flex flex-col space-y-2 overflow-y-auto max-h-[300px] rounded-3xl">
            {thirdMenuItems.map((item, index) => (
              <button
                key={index}
                className={`text-left p-3 rounded-3xl transition-colors ${
                  activeItem === item ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black rounded-3xl"
                }`}
                onClick={() => handleThirdMenuClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
