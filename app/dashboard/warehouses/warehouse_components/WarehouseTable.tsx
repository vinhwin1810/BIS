"use client";

import { Pencil, Trash } from "lucide-react";

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

interface WarehouseTableProps {
  warehouses: Warehouse[];
  onEditWarehouse: (warehouse: Warehouse) => void;
  onDeleteWarehouse: (loc_code: string) => void;
}

export default function WarehouseTable({
  warehouses,
  onEditWarehouse,
  onDeleteWarehouse,
}: WarehouseTableProps) {
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
              <tr
                key={warehouse.loc_code}
                className="text-start bg-opacity-50 odd:bg-[#D2E2FF] even:bg-[#B5CBF4]"
              >
                <td className="px-4 py-3 font-semibold bg-opacity-80 bg-[#ffffff] w-[10rem]">
                  {warehouse.loc_code}
                </td>
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
                    <Pencil className="w-5" />
                  </button>
                </td>
                <td className="px-4 py-3 bg-[#ffffff] bg-opacity-80 text-center">
                  <button
                    className="text-gray-600 hover:text-red-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onDeleteWarehouse(warehouse.loc_code);
                    }}
                  >
                    <Trash className="w-5" />
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