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

function WarehouseTable() {
    const [warehouses, setWarehouses] = useState([
        { loc_code: "0", name: "-", city: "-", state_code: "-", default_loc: "-", active_status: "-" },
])};

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


    {/* table of warehouses  (bg-opacity-30) <= for the first and last col's!!!!!  */}
    <div className="pl-5 pr-3 overflow-x-auto">
        <table className="bg-[#EDEDED] w-full max-w-[calc(100%-2rem)]">
            <thead className="border-b-4 border-[#c3c1c1]">
                <tr>
                    <th>Location Code</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>State Code</th>
                    <th>Default Location</th>
                    <th>Active Status</th>
                </tr>
            </thead>
        </table>
    </div>
        
      
    </div>
  );
}