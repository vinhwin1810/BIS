"use client";

import { useState } from "react";
import { Building2, MapPinHouse, Search, Star } from "lucide-react";
import User from "./User";

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = "Last, First" }: HeaderProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <header className="bg-white text-[#333333] shadow-sm">
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

          {/* User Profile */}
          <User userName={userName} />
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





