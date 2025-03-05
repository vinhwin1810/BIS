"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search"; 
import { Plus, Pencil, X, Warehouse, Trash } from "lucide-react";


// Define types for warehouse objects
interface Warehouse {
    loc_code: string;
    name: string;
    city: string;
    state_code: string;
    default_loc: string;
    active_status: string;
    address_line_1: string;
    address_line_2?: string;
    zip: string;
    country: string;
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
    onEditWarehouse: (warehouse: Warehouse) => void;
    onDeleteWarehouse: (loc_code: string) => void; 
}

function WarehouseTable({ warehouses, onEditWarehouse, onDeleteWarehouse }: WarehouseTableProps) { 
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
                        warehouses.map((warehouse) => (
                            <tr key={warehouse.loc_code} className="text-start bg-opacity-50 odd:bg-[#D2E2FF] even:bg-[#B5CBF4]">
                                <td className="px-4 py-3 font-semibold bg-opacity-80 bg-[#ffffff] w-[10rem]">{warehouse.loc_code}</td>
                                <td className="px-4 py-3 font-semibold w-[30rem]">{warehouse.name}</td>
                                <td className="px-4 py-3 font-semibold w-[30rem]">{warehouse.city}</td>
                                <td className="px-4 py-3 font-semibold w-[15rem]">{warehouse.state_code}</td>
                                <td className="px-4 py-3 font-semibold w-[15rem]">{warehouse.default_loc}</td>
                                <td className="px-4 py-3 font-semibold w-[15rem]">{warehouse.active_status}</td>

                                <td className="px-4 py-3 bg-[#ffffff] bg-opacity-80 text-center">
                                    <button 
                                        className="text-gray-600 hover:text-black"
                                        onClick={() => onEditWarehouse(warehouse)}
                                    >
                                        
                                        <Pencil className="w-5"/>
                                    </button>
                                </td>

                                <td className="px-4 py-3 bg-[#ffffff] bg-opacity-80 text-center">
                                    <button 
                                        className="text-gray-600 hover:text-red-600"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onDeleteWarehouse(warehouse.loc_code)
                                        }}
                                    >
                                        <Trash className="w-5"/>
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

    const handleDeleteWarehouse = (loc_code: string) => {
        setWarehouses((prev) => prev.filter((warehouse) => warehouse.loc_code !== loc_code));
    };


    const [newWarehouse, setNewWarehouse] = useState<Warehouse>({
        loc_code: "",
        name: "",
        city: "",
        state_code: "",
        default_loc: "N",
        active_status: "N",
        address_line_1: "",
        address_line_2: "",
        zip: "",
        country: "",
    });

    const [editingWarehouse, setEditingWarehouse] = useState<Warehouse | null>(null);
    
    // Function to handle input changes
    const handleInputChange = (field: keyof Warehouse, value: string) => {
        setNewWarehouse((prev) => ({ ...prev, [field]: value }));
    };

    const handleCheckBoxChange = (field: "default_loc" | "active_status", checked: boolean) => {
        setNewWarehouse((prev) => ({ ...prev, [field]: checked ? "Y" : "N" }));
    };
    
    // Function to add the new warehouse to the list
    const handleAddWarehouse = () => {
        if (isFormValid()) {
            setWarehouses((prev) => [...prev, newWarehouse]); // Update state
            setIsModalOpen(false); // Close modal
            setNewWarehouse({ 
                loc_code: "", 
                name: "", 
                city: "", 
                state_code: "", 
                default_loc: "N", 
                active_status: "N",
                address_line_1: "",
                address_line_2: "",
                zip: "",
                country: "", 
            }); // Reset form
        }
        else {
            alert("Please fill out all required fields before submitting.");
        }
    };

    const handleUpdateWarehouse = () => {
        if (editingWarehouse) {
            setWarehouses((prev) =>
                prev.map((warehouse) =>
                    warehouse.loc_code === editingWarehouse.loc_code ? newWarehouse : warehouse
                )
            );

            setIsModalOpen(false);
            setEditingWarehouse(null);
            setNewWarehouse({
                loc_code: "",
                name: "",
                city: "",
                state_code: "",
                default_loc: "",
                active_status: "",
                address_line_1: "",
                address_line_2: "",
                zip: "",
                country: "",
            });
        }
    };

    const handleEditWarehouse = (warehouse: Warehouse) => {
        setEditingWarehouse(warehouse);
        setNewWarehouse(warehouse);
        setIsModalOpen(true);
    };

    const isFormValid = () => {
        const requiredFields = {...newWarehouse};
        delete requiredFields.address_line_2;
        return Object.values(requiredFields).every((value) => value.trim() !== "");

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
                        <h2 className="text-xl font-bold mb-4">{editingWarehouse ? "Edit Location" : "Add Location"}</h2>
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            <X className="w-5 h-5"/>
                        </button>

                        {/* Form */}
                        <form>
                            {/* Top Section: Loc Code, Name, Default, Active */}
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/4">
                                    <label htmlFor="loc_code" className="block text-sm text-gray-500">
                                        Loc Code
                                    </label>
                                    <input
                                        type="text"
                                        id="loc_code"
                                        value={newWarehouse.loc_code}
                                        onChange={(e) => handleInputChange("loc_code", e.target.value)}
                                        maxLength={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="w-1/4">
                                    <label htmlFor="name" className="block text-sm text-gray-500">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={newWarehouse.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="w-1/4 flex items-center">
                                    <label htmlFor="default_loc" className="text-sm text-gray-500 mr-2">
                                        Default
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="default_loc"
                                        checked={newWarehouse.default_loc === "Y"}
                                        onChange={(e) => handleCheckBoxChange("default_loc", e.target.checked)}
                                        className="w-5 h-5 border rounded-md"
                                    />
                                </div>

                                <div className="w-1/4 flex items-center">
                                    <label htmlFor="active_status" className="text-sm text-gray-500 mr-2">
                                        Active
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="active_status"
                                        checked={newWarehouse.active_status === "Y"}
                                        onChange={(e) => handleCheckBoxChange("active_status", e.target.checked)}
                                        className="w-5 h-5 border rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Address Section: Address Line 1 and Address Line 2 */}
                            <div className="mb-4">
                                <label htmlFor="address_line_1" className="block text-sm text-gray-500">
                                    Address Line 1
                                </label>
                                <input
                                    type="text"
                                    id="address_line_1"
                                    value={newWarehouse.address_line_1}
                                    onChange={(e) => handleInputChange("address_line_1", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="address_line_2" className="block text-sm text-gray-500">
                                    Address Line 2 (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="address_line_2"
                                    value={newWarehouse.address_line_2}
                                    onChange={(e) => handleInputChange("address_line_2", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Bottom Section: City, State Code, Zip, Country */}
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/4">
                                    <label htmlFor="city" className="block text-sm text-gray-500">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={newWarehouse.city}
                                        onChange={(e) => handleInputChange("city", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="w-1/4">
                                    <label htmlFor="state_code" className="block text-sm text-gray-500">
                                        State Code
                                    </label>
                                    <input
                                        type="text"
                                        id="state_code"
                                        value={newWarehouse.state_code}
                                        onChange={(e) => handleInputChange("state_code", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="w-1/4">
                                    <label htmlFor="zip" className="block text-sm text-gray-500">
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        id="zip"
                                        value={newWarehouse.zip}
                                        onChange={(e) => handleInputChange("zip", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="w-1/4">
                                    <label htmlFor="country" className="block text-sm text-gray-500">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        value={newWarehouse.country}
                                        onChange={(e) => handleInputChange("country", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                onClick={editingWarehouse ? handleUpdateWarehouse : handleAddWarehouse}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                {editingWarehouse ? "Update Warehouse" : "Add Warehouse"}
                            </button>
                        </form>
                    </div>
                </div>
            )}


        {/* table */}
        <WarehouseTable 
            warehouses={warehouses} 
            onEditWarehouse={handleEditWarehouse} 
            onDeleteWarehouse={handleDeleteWarehouse}
        />
    </div>
  );
}