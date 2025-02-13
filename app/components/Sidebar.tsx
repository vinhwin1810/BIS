"use client";
import React from "react";
import {
  Star,
  RefreshCcw,
  List,
  ShoppingCart,
  DollarSign,
  FileText,
  Factory,
  BarChart2,
  Users,
  Shield,
  Menu,
} from "lucide-react";
import Image from "next/image";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const menuData = [
  { title: "All Favorites", icon: <Star size={20} /> },
  {
    title: "Inventory Management",
    icon: <List size={20} />,
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
  { title: "Order Processing", icon: <ShoppingCart size={20} /> },
  { title: "Purchasing/Receiving", icon: <FileText size={20} /> },
  { title: "Accounts Receivable", icon: <DollarSign size={20} /> },
  { title: "Accounts Payable", icon: <Users size={20} /> },
  { title: "Manufacturing", icon: <Factory size={20} /> },
  { title: "Sales Analysis", icon: <BarChart2 size={20} /> },
  { title: "Customer Service", icon: <Shield size={20} /> },
  { title: "Admin Maintenance", icon: <Star size={20} /> },
  { title: "Security", icon: <RefreshCcw size={20} /> },
];

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div className="flex flex-col">
      {/* Menu button container */}
      <div
        className={`flex h-12 p-5 rounded-tr-xl bg-[#2d3748] text-white transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-16"}`}
      >
        <Menu onClick={toggleSidebar} size={24} className="cursor-pointer" />
      </div>

      {/* Sidebar content */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } rounded-br-xl transition-all duration-500 ease-in-out bg-[#2d3748] text-white h-screen flex flex-col overflow-hidden`}
      >
        <div className="flex-1">
          <div className="h-7" />
          <nav>
            {menuData.map((item) => (
              <React.Fragment key={item.title}>
                <button
                  key={item.title}
                  className={`flex items-center gap-3 px-5 py-3 transition-colors`}
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
                {item.title === "All Favorites" && (
                  <hr className="border-white-600 mx-4 my-2" />
                )}
                {item.title === "Customer Service" && (
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
