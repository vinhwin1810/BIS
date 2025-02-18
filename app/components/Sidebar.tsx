import React, { useEffect } from "react";
import { useState } from "react" ;
import { usePathname } from "next/navigation";

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
  // Get current path correctly in App Router 
  const pathname = usePathname();

  // State to track the currently active menu item 
  const [activeItem, setActiveItem] = useState<string | null>(null);
  // State to track whether the submenu should be visible 
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  // State to track whether the third submenu should be visible 
  const[showThirdMenu, setShowThirdMenu] = useState<boolean>(false);
  // Controls main sidebar collapse 
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false); // Starts expanded
  // State to control the physical inventory sidebar 
  const [showPhysicalInventory, setShowPhysicalInventory] = useState<boolean>(false);


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
      href: "#",
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

  // Submenu items (New Smaller sidebar)
  const submenuItems = [
    {label: "Maintenance", href: "#"}, 
    {label: "Physical Inventory", href: "#"},
    {label: "Transaction Processing", href: "#"},
    {label: "Reports", href: "#"},
  ];

  //New third sidebar items 
  const thirdMenuItems = [
    {label: "Item Maintenance", href: "/dashboard/item-maintenance"}, // Now, this opens the item-maintenance page 
    {label:"Reason Codes", href:"#"},
    {label:"Transaction Types", href:"#"},
    {label:"Warehouses", href:"#"},
    {label:"Item Images", href:"#"},
    {label:"Department Code Maintenance", href:"#"},
    {label:"Inventory Price/Vendor Cost Loading", href:"#"},
    {label:"Classes", href:"#"},
    {label:"UOM Maintenance", href:"#"},
    {label:"Cross References", href:"#"},
    {label:"Unit References", href:"#"},
    {label: "Unit Conversion Factors", href:"#"},
    {label:"Item Images Query", href:"#"},
    {label:"Pricing Level Maintenance", href:"#"},
  ];



  // Function to handle main sidebar item clicks 
  const handleItemClick = (label: string) => {
    if (label === "Inventory Management") {
      setShowSubmenu(!showSubmenu); // Toggle the submenu visibility 
      setShowThirdMenu(false); // Closes third sidebar
      setShowPhysicalInventory(false); // Closes physical inv sidebar 
    } else {
      setShowSubmenu(false);
      setShowThirdMenu(false);
      setShowPhysicalInventory(false);
    }
    setActiveItem((prev) => (prev === label ? null : label)) ; // Click again to remove highlight
  };

  // Function to handle submenu clicks (Second white sidebar)
  const handleSubmenuClick = (label: string) => {
    setActiveItem((prev) => (prev === label ? null : label)); // Ensures highlight effect
    if (label === "Maintenance"){
      setShowThirdMenu(!showThirdMenu); // Toggle third sidebar
      setShowPhysicalInventory(false); // Closes the Physical inv sidebar 
    }
  };

  // Function to handle third sidebar clicks
  const handleThirdMenuClick = (label: string, href:string)=> {
    setActiveItem((prev) => (prev === label ? null : label)); // Ensures highlight effect
    if(href !== "#"){
      setShowSubmenu(false);
      setShowThirdMenu(false);
      setIsCollapsed(true); // Auto-collapses main-sidebar
      setShowPhysicalInventory(false);
    }
  };
  // Function to handle the physical inventory sidebar 

  const handlePhysicalInventory = (label: string) => {
    setActiveItem((prev) => (prev === label ? null : label)); // Ensures teh highligth effect 
    if (label === "Physical Inventory"){
      setShowPhysicalInventory(!showPhysicalInventory);
    }
  };

  // Auto-collapses main-sidebar when navigating '/dashboard/item-maintenance'
  useEffect(()=> {
    if(pathname === "/dashboard/item-maintenance"){
      setShowSubmenu(false);
      setShowThirdMenu(false);
      setIsCollapsed(true); // Auto-collapses sidebar
    }
  
  }, [pathname]);

  return (
    <div className= "flex">
      {/* Main Sidebar*/}
      <div className="flex flex-col">
        {/* Menu button container */}
        <div
          className={`flex h-12 p-3 rounded-tr-xl bg-[#2d3748] text-white transition-all duration-500 ease-in-out
             ${isCollapsed ? "w-12" : "w-64"}`}>
          <Menu onClick={() => setIsCollapsed(!isCollapsed)} size={24} className="cursor-pointer" />
      </div>

      {/* Sidebar content */}
      <div className={`${isCollapsed ? "w-12" : "w-64"} rounded-br-xl transition-all duration-500 ease-in-out bg-[#2d3748] text-white h-screen flex flex-col overflow-hidden`}>
        <div className="flex-1">
          <nav>
            {menuItems.map((item) => (
              <React.Fragment key={item.label}>
                {/* Clickable Sidebar Items */}
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-5 py-3 transition-colors rounded-lg
                    ${
                    activeItem === item.label
                    ? "bg-teal-400 text-white"
                    : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleItemClick(item.label)}
                >
                  <div>{item.icon}</div>
                  {/*Hide text when sidebar is collapsed*/}
                  <span className={`${isCollapsed ? "hidden" : "opacity-100"} transition-all duration-500`}></span>
                  <span
                    className={`whitespace-nowrap ${
                      isOpen ? "opacity-100" : "opacity-0 w-0"
                    } transition-all duration-500`}
                  >
                    {item.label}
                  </span>
                </Link>

                {/*Horizontal line separators*/}
                {item.label === "All Favorites" && (
                  <hr className="border-white-600 mx-4 my-2 " />
                )}
                {item.label === "Customer Service" && (
                  <hr className="border-white-600 mx-4 my-2" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Footer section*/}
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

    {/* New Submenu Sidebar (Appears when clicking Inventory Management) */}
    {showSubmenu && (
      <div 
      className="absolute left-64 top-[160px] bg-white shadow-lg rounded-xl p-3 w-48 flex flex-col"
      style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"}} // Greyish shadow 
      >
          {submenuItems.map((submenu) => (
            <Link
              key={submenu.label}
              href={submenu.href}
              className={`p-3 rounded-lg transition-colors ${
                activeItem === submenu.label ? "bg-teal-400 text-white" : "hover:bg-gray-100 text-black"
              }`}
              onClick={() => handleSubmenuClick(submenu.label)}
            >
              {submenu.label}
            </Link>
          ))}
        </div>
      )}

      {/* Third Sidebar (Now Scrollable with Proper Alignment) */}
      {showThirdMenu && (
        <div className="absolute left-[450px] top-[160px] bg-white shadow-lg rounded-xl p-3 w-60 flex flex-col">
          <div className="relative flex items-stretch"> 
            {/* Third Sidebar Content (Now Properly Aligned) */}
            <div className="flex-1 overflow-y-auto max-h-[300px] flex flex-col space-y-2">
              {thirdMenuItems.map((thirdItem) => (
                <Link key={thirdItem.label} href={thirdItem.href}
                  className={`p-3 rounded-lg transition-colors block
                    ${activeItem === thirdItem.label ? "bg-teal-400 text-white" : "hover:bg-gray-100 text-black"}`}
                  onClick={() => handleThirdMenuClick(thirdItem.label, thirdItem.href)}
                >
                  {thirdItem.label}
                </Link>
              ))}
            </div>

            {/* Scrollable Greyish Rectangle (Now Properly Positioned) */}
            <div className="w-2 bg-gray-300 rounded-r-lg h-[300px] overflow-y-auto"></div>
          </div>
        </div>
      )}


    </div>)}