import React from "react";
// components/Sidebar.tsx
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
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const menuItems = [
    {
      icon: <Star size={20} />,
      label: "All Favorites",
      href: "/dashboard",
    },
    {
      icon: <RefreshCcw size={20} />,
      label: "Order Processing",
      href: "/dashboard",
    },
    {
      icon: <List size={20} />,
      label: "Inventory Management",
      href: "/dashboard/item-maintenance",
      active: true,
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Purchasing/Receiving",
      href: "/dashboard",
    },
    {
      icon: <DollarSign size={20} />,
      label: "Accounts Receivable",
      href: "/dashboard",
    },
    {
      icon: <FileText size={20} />,
      label: "Accounts Payable",
      href: "/dashboard",
    },
    {
      icon: <Factory size={20} />,
      label: "Manufacturing",
      href: "/dashboard",
    },
    {
      icon: <BarChart2 size={20} />,
      label: "Sales Analysis",
      href: "/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "Customer Service",
      href: "/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "Admin Maintenance",
      href: "/dashboard",
    },
    {
      icon: <Shield size={20} />,
      label: "Security",
      href: "/dashboard",
    },
  ];

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
