"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search"; 
import { Plus, Pencil, X, Warehouse } from "lucide-react";
import MaintenanceSection from "@/app/components/MaintenanceSection";
import FormField from "@/app/components/FormField"; 

// Define types for warehouse objects
interface Warehouse {
    loc_code: string;
    name: string;
    city: string;
    state_code: string;
    default_loc: string;
    active_status: string;
  }

interface AddEntryButtonProps {
    setIsModalOpen: (value: boolean) => void;
}

function AddEntryButton({ setIsModalOpen }: AddEntryButtonProps) {
    return (
        <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-6 py-3 bg-[#D2E2FF] text-black rounded-2xl hover:bg-[#B5CBF4]"
        >
            <Plus className="w-5 h-5 mr-2"/>
            Add Location
        </button>
    );
}

interface WarehouseTableProps {
    warehouses: Warehouse[];
}

function WarehouseTable({ warehouses }: WarehouseTableProps) { 
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
                    {warehouses.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="text-center py-4 text-gray-500">
                                No warehouses available.
                            </td>
                        </tr>
                    ) : ( 
                        warehouses.map((warehouse, index) => (
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
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}


export default function Warehouses() {
    // starts with an empty array 
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    const [newWarehouse, setNewWarehouse] = useState<Warehouse>({
        loc_code: "",
        name: "",
        city: "",
        state_code: "",
        default_loc: "",
        active_status: "",
    });
    
    // Function to handle input changes
    const handleInputChange = (field: keyof Warehouse, value: string) => {
        setNewWarehouse((prev) => ({ ...prev, [field]: value }));
    };
    
    // Function to add the new warehouse to the list
    const handleAddWarehouse = () => {
        if (isFormValid()) {
            setWarehouses((prev) => [...prev, newWarehouse]); // Update state
            setIsModalOpen(false); // Close modal
            setNewWarehouse({ loc_code: "", name: "", city: "", state_code: "", default_loc: "", active_status: "" }); // Reset form
        }
        else {
            alert("Please fill out all fields before submitting.");
        }
    };

    const isFormValid = () => {
        return Object.values(newWarehouse).every((value) => value.trim() !== "");
    };

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
            <AddEntryButton setIsModalOpen={setIsModalOpen} />
        </div>

        {/* Modal */}
        {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Location</h2>
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            <X className="w-5 h-5"/>
                        </button>

                        <MaintenanceSection>
                            <FormField 
                                label="Loc Code"
                                value={newWarehouse.loc_code}
                                onChange={(e) => handleInputChange("loc_code", e)}
                                type="text"
                                maxLength={3}
                            />
                            <FormField
                                label="Name"
                                value={newWarehouse.name}
                                onChange={(e) => handleInputChange("name", e)}
                            />

                            <FormField
                                label="City"
                                value={newWarehouse.city}
                                onChange={(e) => handleInputChange("city", e)}
                            />

                            <FormField
                                label="State Code"
                                value={newWarehouse.state_code}
                                onChange={(e) => handleInputChange("state_code", e)}
                                maxLength={2}
                            />

                            <FormField
                                label="Default Loc"
                                value={newWarehouse.default_loc}
                                onChange={(e) => handleInputChange("default_loc", e)}
                            />

                            <FormField
                                label="Active Status"
                                value={newWarehouse.active_status}
                                onChange={(e) => handleInputChange("active_status", e)}
                            />
                        </MaintenanceSection>

                        {/*  Submit Button to Add Warehouse */}
                        <button 
                            onClick={handleAddWarehouse} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            disabled={!isFormValid()}
                        >
                            Add Warehouse
                        </button>
                        
                    </div>
                </div>
            )}


        {/* table */}
        <WarehouseTable warehouses={warehouses} />

      
    </div>
  );
}