"use client";

import { X } from "lucide-react";

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

interface WarehouseModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  newWarehouse: Warehouse;
  editingWarehouse: Warehouse | null;
  handleInputChange: (field: keyof Warehouse, value: string) => void;
  handleCheckBoxChange: (field: "default_loc" | "active_status", checked: boolean) => void;
  handleAddWarehouse: () => void;
  handleUpdateWarehouse: () => void;
}

export default function WarehouseModal({
  isModalOpen,
  setIsModalOpen,
  newWarehouse,
  editingWarehouse,
  handleInputChange,
  handleCheckBoxChange,
  handleAddWarehouse,
  handleUpdateWarehouse,
}: WarehouseModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">{editingWarehouse ? "Edit Location" : "Add Location"}</h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <form>
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
  );
}