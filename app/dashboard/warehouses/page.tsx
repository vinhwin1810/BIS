"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search";
import AddEntryButton from "@/app/dashboard/warehouses/warehouse_components/AddEntryButton";
import WarehouseTable from "@/app/dashboard/warehouses/warehouse_components/WarehouseTable";
import WarehouseModal from "@/app/dashboard/warehouses/warehouse_components/WarehouseModal"; // Optional

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

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleInputChange = (field: keyof Warehouse, value: string) => {
    setNewWarehouse((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckBoxChange = (field: "default_loc" | "active_status", checked: boolean) => {
    setNewWarehouse((prev) => ({ ...prev, [field]: checked ? "Y" : "N" }));
  };

  const handleAddWarehouse = () => {
    if (isFormValid()) {
      setWarehouses((prev) => [...prev, newWarehouse]);
      setIsModalOpen(false);
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
      });
    } else {
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

  const handleDeleteWarehouse = (loc_code: string) => {
    setWarehouses((prev) => prev.filter((warehouse) => warehouse.loc_code !== loc_code));
  };

  const isFormValid = () => {
    const requiredFields = { ...newWarehouse };
    delete requiredFields.address_line_2;
    return Object.values(requiredFields).every((value) => value.trim() !== "");
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex-grow">
          <SearchBar />
        </div>
        <div>
          <User />
        </div>
      </div>

      <div className="flex justify-start p-4">
        <AddEntryButton setIsModalOpen={setIsModalOpen} />
      </div>

      <WarehouseModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newWarehouse={newWarehouse}
        editingWarehouse={editingWarehouse}
        handleInputChange={handleInputChange}
        handleCheckBoxChange={handleCheckBoxChange}
        handleAddWarehouse={handleAddWarehouse}
        handleUpdateWarehouse={handleUpdateWarehouse}
      />

      <WarehouseTable
        warehouses={warehouses}
        onEditWarehouse={handleEditWarehouse}
        onDeleteWarehouse={handleDeleteWarehouse}
      />
    </div>
  );
}