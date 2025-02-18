"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, Star, RefreshCcw, List, ShoppingCart, DollarSign, FileText, Factory, BarChart2, Users, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  // State management
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const [showThirdMenu, setShowThirdMenu] = useState<boolean>(false);

  // Main Sidebar Items (Restored Icons + White Lines)
  const menuItems = [
    { icon: <Star size={20} />, label: "All Favorites", href: "/dashboard" },
    { icon: <RefreshCcw size={20} />, label: "Order Processing", href: "/dashboard" },
    { icon: <List size={20} />, label: "Inventory Management", href: "#" },
    { icon: <ShoppingCart size={20} />, label: "Purchasing/Receiving", href: "/dashboard" },
    { icon: <DollarSign size={20} />, label: "Accounts Receivable", href: "/dashboard" },
    { icon: <FileText size={20} />, label: "Accounts Payable", href: "/dashboard" },
    { icon: <Factory size={20} />, label: "Manufacturing", href: "/dashboard" },
    { icon: <BarChart2 size={20} />, label: "Sales Analysis", href: "/dashboard" },
    { icon: <Users size={20} />, label: "Customer Service", href: "/dashboard" },
    { icon: <Users size={20} />, label: "Admin Maintenance", href: "/dashboard" },
    { icon: <Shield size={20} />, label: "Security", href: "/dashboard" },
  ];

  // First Submenu Items (Appears when clicking Inventory Management)
  const submenuItems = [
    { label: "Maintenance", href: "#" },
    { label: "Physical Inventory", href: "#" },
    { label: "Transaction Processing", href: "#" },
    { label: "Reports", href: "#" },
  ];

  // Third Sidebar Items (Appears when clicking Maintenance)
  const thirdMenuItems = [
    { label: "Item Maintenance", href: "/dashboard/item-maintenance" },
    { label: "Reason Codes", href: "#" },
    { label: "Transaction Types", href: "#" },
    { label: "Warehouses", href: "#" },
    { label: "Item Images", href: "#" },
    { label: "Department Code Maintenance", href: "#" },
    { label: "Inventory Price/Vendor Cost Loading", href: "#" },
    { label: "Classes", href: "#" },
    { label: "UOM Maintenance", href: "#" },
    { label: "Cross References", href: "#" },
    { label: "Unit References", href: "#" },
    { label: "Unit Conversion Factors", href: "#" },
    { label: "Item Images Query", href: "#" },
    { label: "Pricing Level Maintenance", href: "#" },
  ];

  // Function to handle main sidebar item clicks
  const handleItemClick = (label: string) => {
    if (label === "Inventory Management") {
      setShowSubmenu(!showSubmenu);
      setShowThirdMenu(false);
    } else {
      setShowSubmenu(false);
      setShowThirdMenu(false);
    }
    setActiveItem((prev) => (prev === label ? null : label));
  };

  // Function to handle submenu clicks (White sidebar under Inventory Management)
  const handleSubmenuClick = (label: string) => {
    setActiveItem((prev) => (prev === label ? null : label));
    if (label === "Maintenance") {
      setShowThirdMenu(!showThirdMenu);
    }
  };

  // Function to handle third sidebar clicks (White sidebar under Maintenance)
  const handleThirdMenuClick = (label: string, href?: string) => {
    setActiveItem((prev) => (prev === label ? null : label));
    if (href && href !== "#") {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      toggleSidebar(); // ✅ Collapse sidebar when clicking "Item Maintenance"
    }
  };

  // Function to collapse all sidebars when clicking the burger menu (NEW FEATURE)
  const handleSidebarToggle = () => {
    toggleSidebar();
    setShowSubmenu(false); // ✅ Close submenu when collapsing sidebar
    setShowThirdMenu(false); // ✅ Close third sidebar when collapsing
    setActiveItem(null); // ✅ Remove highlight effect
  };

  // Auto-collapse sidebar when navigating to '/dashboard/item-maintenance'
  useEffect(() => {
    if (pathname === "/dashboard/item-maintenance") {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      toggleSidebar();
    }
  }, [pathname]);

  return (
    <div className="flex flex-col">
      {/* Menu button container (Restored Sidebar Collapse Behavior) */}
      <div
        className={`flex h-12 p-5 rounded-tr-xl bg-[#2d3748] text-white transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-16"}`}
      >
        <Menu onClick={handleSidebarToggle} size={24} className="cursor-pointer" />
      </div>

      {/* Sidebar content */}
      <div
        style={{ top: "46px" }}
        className={`${
          isOpen ? "w-64" : "w-16"
        } rounded-br-xl transition-all duration-500 ease-in-out bg-[#2d3748] text-white min-h-screen flex flex-col overflow-hidden h-full lg:fixed lg:bottom-0 fixed bottom-0 left-0 right-0`}
      >
        <div className="flex-1">
          <nav>
            {menuItems.map((item) => (
              <React.Fragment key={item.label}>
                <button
                  className={`flex items-center gap-3 px-5 py-3 transition-colors rounded-lg ${
                    activeItem === item.label ? "bg-teal-400 text-white" : "hover:bg-gray-700"
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  <div>{item.icon}</div>
                  <span className={`whitespace-nowrap ${isOpen ? "opacity-100" : "opacity-0 w-0"} transition-all duration-500`}>
                    {item.label}
                  </span>
                </button>
                {["All Favorites", "Customer Service"].includes(item.label) && <hr className="border-white-600 mx-4 my-2" />}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Restored Footer (BIS Logo & Text) */}
        <div className={`flex items-center p-3 ${isOpen ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
          <Image src="/bis.png" alt="BIS" width={100} height={100} />
          <div className={`ml-2 ${isOpen ? "opacity-100" : "opacity-0 w-0"}`}>
            <span className="text-sm">BIS Computer Solutions</span>
            <span className="text-xs text-gray-400 mt-1 flex">All rights reserved</span>
          </div>
        </div>
      </div>

      {/* New Submenu Sidebar */}
      {showSubmenu && (
        <div className="absolute left-64 top-[160px] bg-white shadow-lg rounded-xl p-3 w-48 flex flex-col">
          {submenuItems.map((submenu) => (
            <button key={submenu.label} className={`p-3 rounded-lg transition-colors ${activeItem === submenu.label ? "bg-teal-400 text-white" : "hover:bg-gray-100 text-black"}`} onClick={() => handleSubmenuClick(submenu.label)}>
              {submenu.label}
            </button>
          ))}
        </div>
      )}

      {/* Third Sidebar (Now with Scrollable Greyish Rectangle) */}
      {showThirdMenu && (
        <div className="absolute left-[450px] top-[160px] bg-white shadow-lg rounded-xl p-3 w-60 flex flex-col ">
          <div className="relative flex flex-col space-y-2 flex items-stretch overflow-y-auto max-h-[300px]">
            {thirdMenuItems.map((item) => (
              <button key={item.label} className={`p-3 rounded-lg transition-colors ${activeItem === item.label ? "bg-teal-400 text-white" : "hover:bg-gray-100 text-black "}`} onClick={() => handleThirdMenuClick(item.label, item.href)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
