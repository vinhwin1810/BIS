"use client";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { menuData } from "./constants/constant";

interface Submenu {
  title: string;
  items?: string[];  // Assuming each submenu can have a list of items
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;  // The type for icons can be `ReactNode` since it's JSX
  active?: boolean;
  submenus?: Submenu[];
}

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
  const handleItemClick = (menuItem: MenuItem) => {
    
    // Toggle highlight for all items except "Inventory Management"
    setActiveItems((prev) => {
      if (menuItem.title === "Inventory Management") {
        if (prev.includes("Inventory Management")) {
          setShowSubmenu(false);
          setShowThirdMenu(false);
          return [];
        } else {
          setShowSubmenu(true);
          setShowThirdMenu(false);
          return ["Inventory Management"];
        }
      }
      
      // Close any open submenus when clicking on an item
      setShowSubmenu(false);
      setShowThirdMenu(false);
      
      return prev.includes(menuItem.title)
        ? prev.filter((item) => item !== menuItem.title)
        : [menuItem.title]; // Ensures only one item is active at a time
    });
  };

  // Clicking "Maintenance" opens third sidebar and keeps first submenu open
  const handleSubmenuClick = (submenu: Submenu) => {
    setActiveItems([submenu.title]);  
    
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
    setActiveItems([item]);
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
  // This ensures that clickign an icon when the sidebra is collapsed opens it again
  const handleIconClick =() => {
    if (!isOpen) {
      toggleSidebar();
    }
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
          <nav >
            {menuData.map((item) => (
              <React.Fragment key={item.title}>
                <button
                  className={`flex items-center gap-3 px-5 py-2  transition-colors rounded-3xl ${
                    activeItems.includes(item.title) 
                    ? "bg-[#FFC851] text-black "  
                    :isOpen 
                    ? "hover:bg-[#FFC851] hover:text-black"
                    :""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <div
                    className = {`flex items-center justify-center transition-colors duration-300 ${!isOpen ? "hover:text-[#FFC851] text-white" : "hover:text-black " }`}
                    onClick={handleIconClick} // Ensures clicking icon opens the sidebra when collapsed 
                    
                  >
                    {item.icon}
                  </div>
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
        <div className="absolute left-64 top-[140px] bg-white shadow-lg rounded-3xl p-2 w-60 flex flex-col">
          {menuData.find((item) => item.title === "Inventory Management")?.submenus?.map((submenu) => (
            <React.Fragment key={submenu.title}>
              <button
                className={`text-left p-2 rounded-3xl transition-colors ${
                  activeItems.includes(submenu.title) ? "bg-[#FFC851] text-black" : "hover:bg-[#FFC851] text-black"
                }`}
                onClick={() => handleSubmenuClick(submenu)}
              >
                {submenu.title}
              </button>
              {submenu.items?.map((item) => (
                <button
                  key={item}
                  className={`text-left p-2.5 rounded-3xl transition-colors ${
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
        <div className="absolute left-[490px] top-[134px] bg-white shadow-lg rounded-3xl p-2 w-96 flex flex-col">
          <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex flex-col space-y-1 p-1">
            {menuData.find((item) => item.title === "Inventory Management")
              ?.submenus?.find((submenu) => submenu.title === "Maintenance")
              ?.nextMenu && (
                <>
                  {/* Restored "Item Maintenance" button */}
                  <button
                    className={`text-left p-2 rounded-3xl transition-colors ${
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
                        className={`text-left p-2 rounded-3xl transition-colors ${
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


