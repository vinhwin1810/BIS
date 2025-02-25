"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search"; 
import { Plus } from "lucide-react";


function AddEntryButton() {
    return (
        <button className="flex items-center px-6 py-3 bg-[#D2E2FF] text-black rounded-2xl hover:bg-[#B5CBF4]">
            <Plus className="w-5 h-5 mr-2"/>
            Add Location
        </button>
    );
}

export default function Warehouses() {
  return (
    <div>
        {/* searchbar and user */}
        <div className="flex justify-between p-4">
            <div className="flex-grow">
                <SearchBar />
            </div>
            <div>
                <User />
            </div>
        </div>

        {/* add entry button */}
        <div className="flex justify-start p-4">
            <AddEntryButton />
        </div>

        
      
    </div>
  );
}