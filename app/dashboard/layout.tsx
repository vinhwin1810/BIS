"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-500 ${
          isSidebarOpen ? "md:ml-64" : "ml-16"
        }`}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
