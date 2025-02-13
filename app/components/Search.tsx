"use client";

import { useState } from "react";
import { Search, Star, StarOff } from "lucide-react";
import { JSX } from "react/jsx-runtime";

interface SearchProps {
  menuData: { title: string; icon: JSX.Element }[];
  onSelect: (selectedItem: string) => void;
}

export default function SearchBar({ menuData, onSelect }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({}); // Track favorite items

  // Toggle favorite status
  const toggleFavorite = (title: string) => {
    setFavorites((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Filter menu items based on search input
  const filteredMenu = menuData.filter((menu) =>
    menu.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-9 bg-gray-800 text-white rounded-lg outline-none border border-gray-600 focus:border-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Search Results with Favorite Icon */}
      <div className="max-h-64 overflow-y-auto">
        {filteredMenu.map((menu, i) => (
          <div key={i} className="flex items-center justify-between">
            <button
              className="w-full flex items-center gap-2 text-left p-2 rounded-lg hover:bg-gray-700 text-white"
              onClick={() => onSelect(menu.title)}
            >
              {menu.icon}
              {menu.title}
            </button>
            {/* Favorite Icon */}
            <button onClick={() => toggleFavorite(menu.title)} className="ml-2">
              {favorites[menu.title] ? <Star size={16} className="text-yellow-400" /> : <StarOff size={16} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

