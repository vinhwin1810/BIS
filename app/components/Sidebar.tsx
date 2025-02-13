import React from "react";
// components/Sidebar.tsx
("use client");

import { useState } from "react";
import {
  Menu,
  ShoppingCart,
  DollarSign,
  Users,
  Package,
  Shield,
  FileText,
  Database,
  Briefcase,
  Lock,
  Settings,
  Bookmark,
} from "lucide-react";
import Image from "next/image";

const menuData = [
  {
    title: "Inventory Management",
    icon: <Package size={16} />,
    submenus: [
      {
        title: "Maintenance",
        items: ["Physical Inventory", "Transaction Processing", "Reports"],
        nextMenu: {
          title: "Item Maintenance",
          items: [
            "Reason Codes",
            "Transaction Types",
            "Warehouses",
            "Item Images",
            "Department Code Maintenance",
            "Inventory Price/Vendor Cost Loading",
            "Classes",
            "UOM Maintenance",
            "Cross References",
            "Unit References",
            "Unit Conversion Factors",
            "Item Images Query",
            "Pricing Level Maintenance",
          ],
        },
      },
    ],
  },
  { title: "Order Processing", icon: <ShoppingCart size={16} /> },
  { title: "Purchasing/Receiving", icon: <FileText size={16} /> },
  { title: "Accounts Receivable", icon: <DollarSign size={16} /> },
  { title: "Accounts Payable", icon: <Users size={16} /> },
  { title: "Manufacturing", icon: <Database size={16} /> },
  { title: "Sales Analysis", icon: <Briefcase size={16} /> },
  { title: "Customer Service", icon: <Shield size={16} /> },
];

const adminItems = [
  { title: "Admin Maintenance", icon: <Settings size={16} /> },
  { title: "Security", icon: <Lock size={16} /> },
];

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);

  return (
    <div className="flex">
      {/* Dark Blue Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col h-screen justify-between">
        <div>
          {/* Burger Menu Icon */}
          <button className="w-full flex items-center gap-2 text-left p-2 hover:bg-gray-700">
            <Menu size={20} />
          </button>

          {/* All Favorites Section */}
          <button
            className={`w-full flex items-center gap-2 text-left p-2 rounded-lg ${
              isFavoriteActive
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setIsFavoriteActive(!isFavoriteActive)}
          >
            <Bookmark size={16} />
            All Favorites
          </button>

          {/* White Line Separator */}
          <div className="border-t border-gray-600 my-2"></div>

          {/* Main Menu Items */}
          {menuData.map((menu, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-2 text-left p-2 rounded-lg ${
                activeMenu === i
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveMenu(activeMenu === i ? null : i);
                setActiveSubmenu(null);
                setActiveItem(null);
              }}
            >
              {menu.icon}
              {menu.title}
            </button>
          ))}

          {/* White Line Separator */}
          <div className="border-t border-gray-600 my-2"></div>

          {/* Admin & Security Section */}
          {adminItems.map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-2 text-left p-2 rounded-lg ${
                activeMenu === menuData.length + i
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() =>
                setActiveMenu(
                  activeMenu === menuData.length + i
                    ? null
                    : menuData.length + i
                )
              }
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>

        {/* BIS Logo & All Rights Reserved */}
        <div className="text-center text-xs mt-4">
          <Image
            src="/bis-logo.png"
            alt="BIS Computer Solutions"
            width={80}
            height={40}
            className="mx-auto mb-2"
          />
          <p className="text-gray-400">BIS Computer Solutions</p>
          <p className="text-gray-400">All rights reserved</p>
        </div>
      </aside>

      {/* Second Sidebar (Scrollable) */}
      {activeMenu !== null && menuData[activeMenu]?.submenus && (
        <aside className="w-64 bg-white text-black p-4 shadow-lg overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {menuData[activeMenu]?.submenus?.map((submenu, j) => (
            <div key={j}>
              <ul>
                <button
                  className={`w-full text-left p-2 rounded-lg ${
                    activeSubmenu === j
                      ? "bg-orange-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    setActiveSubmenu(activeSubmenu === j ? null : j)
                  }
                >
                  {submenu.title}
                </button>

                {submenu.items.map((item, k) => (
                  <li
                    key={k}
                    className={`p-2 rounded-lg cursor-pointer ${
                      activeItem === item
                        ? "bg-orange-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      setActiveItem(activeItem === item ? null : item)
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      )}

      {/* Third Sidebar (Scrollable) */}
      {activeMenu !== null &&
        activeSubmenu !== null &&
        menuData[activeMenu]?.submenus?.[activeSubmenu]?.nextMenu && (
          <aside className="w-64 bg-white text-black p-4 shadow-lg overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <ul>
              <button
                className={`w-full text-left p-2 rounded-lg ${
                  activeItem === "Item Maintenance"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() =>
                  setActiveItem(
                    activeItem === "Item Maintenance"
                      ? null
                      : "Item Maintenance"
                  )
                }
              >
                Item Maintenance
              </button>

              {menuData[activeMenu]?.submenus?.[
                activeSubmenu
              ]?.nextMenu?.items.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 rounded-lg cursor-pointer ${
                    activeItem === item
                      ? "bg-orange-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() =>
                    setActiveItem(activeItem === item ? null : item)
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        )}
      {/* Sidebar content */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } rounded-br-xl transition-all duration-500 ease-in-out bg-[#2d3748] text-white h-screen flex flex-col overflow-hidden`}
      >
        <div className="flex-1">
          <div className="h-7" />
          <nav>
            {menuItems.map((item) => (
              <React.Fragment key={item.label}>
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-5 py-3 transition-colors
                    ${item.active ? "bg-teal-400 rounded-lg " : ""}`}
                >
                  <div>{item.icon}</div>
                  <span
                    className={`whitespace-nowrap ${
                      isOpen ? "opacity-100" : "opacity-0 w-0"
                    } transition-all duration-500`}
                  >
                    {item.label}
                  </span>
                </Link>
                {item.label === "All Favorites" && (
                  <hr className="border-white-600 mx-4 my-2" />
                )}
                {item.label === "Customer Service" && (
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
          <div className={` ml-2 ${isOpen ? "opacity-100" : "opacity-0 w-0"}`}>
            <span className="text-sm">BIS Computer Solutions</span>
            <span className="text-xs text-gray-400 mt-1 flex">
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
