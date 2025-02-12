// src/app/dashboard/layout.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar"; // Update this path

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
      <div className="flex flex-col flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
}
