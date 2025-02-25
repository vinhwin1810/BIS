"use client"
import { useState, useEffect, useRef } from "react";


interface UserProps {
  userName?: string;
}

import Image from "next/image";

export default function User({ userName = "Last, First" }: UserProps) {
  // State to control the visibility of the dropdown sidebar
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  // Ref to detect clicks outside and close the sidebar
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Toggle function for user menu
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // Close the user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={userMenuRef}>
      {/* User Icon (Click to Open Sidebar) */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggleUserMenu}>
        <span className="text-sm">{userName}</span>
        <Image
          className="text-gray-500 rounded-full"
          src="/bis-logo.png"
          alt="BIS Computer Solutions"
          width={30}
          height={30}
        />
      </div>

      {/* User Dropdown Sidebar (Appears Below the User Icon) */}
      {showUserMenu && (
        <div className="absolute right-0 top-10 w-48 bg-white shadow-lg rounded-xl p-3 flex flex-col z-50">
          <button className="p-3 rounded-lg hover:bg-gray-100 hover:font-bold text-black transition-all">
            Change Password
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 hover:font-bold text-black transition-all">
            Log Out
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 hover:font-bold text-black transition-all">
            Help
          </button>
        </div>
      )}
    </div>
  );
}
