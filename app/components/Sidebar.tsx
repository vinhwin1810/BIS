"use client";

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
  Star,
  Bookmark,
} from "lucide-react";
import Image from "next/image";

const menuData = [
  { title: "Order Processing", icon: <ShoppingCart size={16} /> },
  { title: "Inventory Management", icon: <Package size={16} /> },
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col h-screen justify-between">
      <div>
        {/* Burger Menu Icon */}
        <button className="w-full flex items-center gap-2 text-left p-2 hover:bg-gray-700">
          <Menu size={20} />
        </button>

        {/* All Favorites Section */}
        <button
          className={`w-full flex items-center gap-2 text-left p-2 rounded-lg ${
            isFavoriteActive ? "bg-orange-500 text-white" : "hover:bg-gray-700"
          }`}
          onClick={() => setIsFavoriteActive(!isFavoriteActive)}
        >
          <Bookmark size={16} />
          All Favorites
        </button>

        {/* White Line Separator */}
        <div className="border-t border-gray-600 my-2"></div>

        {/* Menu Items */}
        {menuData.map((menu, i) => (
          <button
            key={i}
            className={`w-full flex items-center gap-2 text-left p-2 rounded-lg ${
              activeMenu === menu.title ? "bg-orange-500 text-white" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveMenu(activeMenu === menu.title ? null : menu.title)}
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
              activeMenu === item.title ? "bg-orange-500 text-white" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
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
  );
}











