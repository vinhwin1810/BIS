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
      href: "/dashboard/favorites",
    },
    {
      icon: <RefreshCcw size={20} />,
      label: "Order Processing",
      href: "/dashboard/orders",
    },
    {
      icon: <List size={20} />,
      label: "Inventory Management",
      href: "/dashboard/inventory",
      active: true,
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Purchasing/Receiving",
      href: "/dashboard/purchasing",
    },
    {
      icon: <DollarSign size={20} />,
      label: "Accounts Receivable",
      href: "/dashboard/receivable",
    },
    {
      icon: <FileText size={20} />,
      label: "Accounts Payable",
      href: "/dashboard/payable",
    },
    {
      icon: <Factory size={20} />,
      label: "Manufacturing",
      href: "/dashboard/manufacturing",
    },
    {
      icon: <BarChart2 size={20} />,
      label: "Sales Analysis",
      href: "/dashboard/sales",
    },
    {
      icon: <Users size={20} />,
      label: "Customer Service",
      href: "/dashboard/customer",
    },
    {
      icon: <Users size={20} />,
      label: "Admin Maintenance",
      href: "/dashboard/admin",
    },
    {
      icon: <Shield size={20} />,
      label: "Security",
      href: "/dashboard/security",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Menu button container */}
      <div
        className={`flex h-12  bg-[#2d3748] text-white transition-all duration-500 ease-in-out
          ${isOpen ? "w-64 px-4 py-5" : "w-12 m-2 p-3 rounded-md"}`}
      >
        <Menu onClick={toggleSidebar} size={24} className="cursor-pointer" />
      </div>

      {/* Sidebar content */}
      <div
        className={`${
          isOpen ? "w-64" : "w-0"
        } transition-all duration-500 ease-in-out bg-[#2d3748] text-white h-screen flex flex-col overflow-hidden`}
      >
        <div className="flex-1">
          <div className="h-12" /> {/* Spacer to align with menu button */}
          <nav>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-[#3a4a61] transition-colors
                  ${item.active ? "bg-teal-400 text-[#2d3748]" : ""}`}
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm">BIS Computer Solutions</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
