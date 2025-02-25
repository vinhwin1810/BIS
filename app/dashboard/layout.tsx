"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showThirdMenu, setShowThirdMenu] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  //  Ensures clicking the burger menu collapses everything and resets highlights
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    if (isSidebarOpen) {
      setShowSubmenu(false); // Close submenu
      setShowThirdMenu(false); // Close third-level menu
      setActiveItem(null); // Remove all highlights
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar} 
        showSubmenu={showSubmenu}
        setShowSubmenu={setShowSubmenu}
        showThirdMenu={showThirdMenu}
        setShowThirdMenu={setShowThirdMenu}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div
        className={`flex-1 transition-all duration-500 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
