"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search"; 
import { Plus } from "lucide-react";
import { Pencil } from "lucide-react";


function AddEntryButton() {
    return (
        <button className="flex items-center px-6 py-3 bg-[#D2E2FF] text-black rounded-2xl hover:bg-[#B5CBF4]">
            <Plus className="w-5 h-5 mr-2"/>
            Add Location
        </button>
    );
}

function WarehouseTable({ warehouses }) { 
    return (
        <div className="pl-5 pr-3 overflow-x-auto">
            <table className="bg-[#EDEDED] bg-opacity-55 w-full max-w-[calc(100%-2rem)]">
                <thead className="border-b-4 border-[#c3c1c1]">
                    <tr className="text-left">
                        <th className="px-4 py-3 font-bold">Loc Code</th>
                        <th className="px-4 py-3 font-bold">Name</th>
                        <th className="px-4 py-3 font-bold">City</th>
                        <th className="px-4 py-3 font-bold">State Code</th>
                        <th className="px-4 py-3 font-bold">Default Loc</th>
                        <th className="px-4 py-3 font-bold">Active Status</th>
                    </tr>
                </thead>
                <tbody>
                    {warehouses.map((warehouse, index) => (
                        <tr key={index} className="text-start bg-opacity-50 odd:bg-[#D2E2FF] even:bg-[#B5CBF4]">
                            <td className="px-4 py-3 font-semibold bg-opacity-80 bg-[#ffffff] w-[10rem]">{warehouse.loc_code}</td>
                            <td className="px-4 py-3 font-semibold w-[30rem]">{warehouse.name}</td>
                            <td className="px-4 py-3 font-semibold w-[30rem]">{warehouse.city}</td>
                            <td className="px-4 py-3 font-semibold w-[15rem]">{warehouse.state_code}</td>
                            <td className="px-4 py-3 font-semibold w-[15rem]">{warehouse.default_loc}</td>
                            <td className="px-4 py-3 font-semibold w-[15rem]">{warehouse.active_status}</td>

                            <td className="px-4 py-3 bg-[#ffffff] bg-opacity-80 text-center">
                                <button className="text-gray-600 hover:text-black">
                                    <Pencil className="w-5"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default function Warehouses() {
    const [warehouses, setWarehouses] = useState([
        { loc_code: "-", name: "-", city: "-", state_code: "-", default_loc: "-", active_status: "-" },
    ]);

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

        {/* table */}
        <WarehouseTable warehouses={warehouses} />

      
    </div>
  );
}