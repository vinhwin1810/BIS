"use client";

import { useState } from "react";
import { Building2, MapPinHouse, Search, Star, ChevronDown } from "lucide-react";
import User from "./User";
import Image from "next/image"; // Import for the company logo

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = "Last, First" }: HeaderProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility

  return (
    <header className="bg-white text-[#333333] shadow-sm relative">
      <div className="p-4">
        {/* Top Section: Company & Location Dropdowns */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            {/* Company Dropdown */}
            <div className="relative inline-block">
              <Building2 className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <select className="flex space-x-2 p-2 pl-9 border-[#A4A4A4] border rounded-xl min-w-[200px]">
                <option>Company</option>
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="relative inline-block">
              <MapPinHouse className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <select className="flex space-x-2 p-2 pl-9 border-[#A4A4A4] border rounded-xl min-w-[200px]">
                <option>Location</option>
              </select>
            </div>
          </div>

          {/* User Profile (Company Logo Clickable for Dropdown) */}
          <div className="relative flex items-center gap-2">
            <span>{userName}</span>

            {/* Company Logo (Restored & Clickable) */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="focus:outline-none relative"
            >
              <Image
                src="/company-logo.png" // Replace with actual image path
                alt="Company Logo"
                width={30}
                height={30}
                className="rounded-full cursor-pointer"
              />
            </button>

            {/* White Dropdown (Now Appears Below Company Logo) */}
            {showDropdown && (
              <div className="absolute right-0 mt-10 w-48 bg-white rounded-2xl shadow-lg z-50 p-2 border border-gray-200">
                <ul>
                  <li className="p-2 hover:bg-gray-100 hover:font-bold cursor-pointer">Change Password</li>
                  <li className="p-2 hover:bg-gray-100 hover:font-bold cursor-pointer">Log Out</li>
                  <li className="p-2 hover:bg-gray-100 hover:font-bold cursor-pointer">Help</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar & Favorite Icon Section */}
        <div className="flex items-center justify-between relative">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-9 border border-gray-300 rounded-xl outline-none focus:border-orange-500"
            />
          </div>

          {/* Favorite Icon */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="ml-4 p-2 focus:outline-none"
          >
            <Star
              size={24}
              className={`transition-all ${
                isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400 fill-transparent"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}








