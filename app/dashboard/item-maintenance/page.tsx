"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search";
import MaintenanceSection from "@/app/components/MaintenanceSection";
import FormField from "@/app/components/FormField";

export default function ItemMaintenance() {
  const [formData, setFormData] = useState({
    invCode: "",
    invClass: "",
    listPrice: "",
    uom: "",
    taxable: "false",
    active: "false",
    description: "",
    descriptionInt: "",
    minSupplierQty: "",
    palletCount: "",
    palletRows: "",
    billOfLadingCode: "",
    season: "",
    glCode: "",
    molderLaborCost: "",
    promoCode: "",
    bulk: "",
    itemStateExclusionCode: "",
    saCode: "",
    maxPercentage: "",
    productionOverage: "",
    recycleFee: "",
    ropPercentage: "",
    tariffCode: "",
    voc: "",
    atCode: "",
    cubeFt: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    netWeight: "",
    custStockCode: "",
    vendorCode: "",
    packQty: "",
    purchaseUom: "",
    leadTimeWeeks: "",
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 text-[rgb(51,51,51)] flex items-center justify-between gap-4 mb-6">
        <SearchBar />
        <User />
      </div>

      <div className="px-6">
        <div className="flex gap-6">
          {/* Left side - Two main boxes */}
          <div className="flex-1 flex flex-col gap-6">
            {/* First main box */}
            <MaintenanceSection title="Header">
              <div className="col-span-2">
                <FormField
                  label="Inv Code"
                  value={formData.invCode}
                  onChange={handleChange("invCode")}
                />
                <FormField
                  label="Inv Class"
                  type="select"
                  options={["Class A", "Class B", "Class C"]}
                  value={formData.invClass}
                  onChange={handleChange("invClass")}
                  className="mt-4"
                />
                <FormField
                  label="List Price"
                  value={formData.listPrice}
                  onChange={handleChange("listPrice")}
                  className="mt-4"
                />
                <FormField
                  label="UOM"
                  value={formData.uom}
                  onChange={handleChange("uom")}
                  className="mt-4"
                />
                <div className="flex gap-8 mt-4">
                  <FormField
                    label="Taxable"
                    type="checkbox"
                    value={formData.taxable}
                    onChange={handleChange("taxable")}
                  />
                  <FormField
                    label="Active"
                    type="checkbox"
                    value={formData.active}
                    onChange={handleChange("active")}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <FormField
                  label="Description"
                  value={formData.description}
                  onChange={handleChange("description")}
                  className="h-32"
                />
                <FormField
                  label="Description (International)"
                  value={formData.descriptionInt}
                  onChange={handleChange("descriptionInt")}
                  className="mt-4 h-32"
                />
              </div>
            </MaintenanceSection>

            {/* Second main box */}
            <MaintenanceSection title="Header">
              <div className="col-span-3 grid grid-cols-3 gap-6">
                <FormField
                  label="Bill of Lading Code"
                  value={formData.billOfLadingCode}
                  onChange={handleChange("billOfLadingCode")}
                />
                <FormField
                  label="Season"
                  value={formData.season}
                  onChange={handleChange("season")}
                />
                <FormField
                  label="GL Code"
                  value={formData.glCode}
                  onChange={handleChange("glCode")}
                />
                {/* ... other fields in the second box */}
              </div>
            </MaintenanceSection>
          </div>

          {/* Right side - Two smaller boxes */}
          <div className="w-80 flex flex-col gap-6">
            {/* First small box */}
            <MaintenanceSection title="Header">
              <div className="col-span-3 flex flex-col gap-4">
                <FormField
                  label="Min Supplier QTY"
                  value={formData.minSupplierQty}
                  onChange={handleChange("minSupplierQty")}
                />
                <FormField
                  label="Pallet Count"
                  value={formData.palletCount}
                  onChange={handleChange("palletCount")}
                />
                <FormField
                  label="Pallet Rows"
                  value={formData.palletRows}
                  onChange={handleChange("palletRows")}
                />
              </div>
            </MaintenanceSection>

            {/* Second small box */}
            <MaintenanceSection title="Header">
              <div className="col-span-3 flex flex-col gap-4">
                <FormField
                  label="Cub FT"
                  value={formData.cubeFt}
                  onChange={handleChange("cubeFt")}
                />
                <FormField
                  label="Length"
                  value={formData.length}
                  onChange={handleChange("length")}
                />
                <FormField
                  label="Width"
                  value={formData.width}
                  onChange={handleChange("width")}
                />
                <FormField
                  label="Height"
                  value={formData.height}
                  onChange={handleChange("height")}
                />
                <FormField
                  label="Weight"
                  value={formData.weight}
                  onChange={handleChange("weight")}
                />
                <FormField
                  label="Net Weight"
                  value={formData.netWeight}
                  onChange={handleChange("netWeight")}
                />
                <FormField
                  label="Cust Stock Code"
                  value={formData.custStockCode}
                  onChange={handleChange("custStockCode")}
                />
                <FormField
                  label="Vendor Code"
                  value={formData.vendorCode}
                  onChange={handleChange("vendorCode")}
                />
                <FormField
                  label="Pack QTY"
                  value={formData.packQty}
                  onChange={handleChange("packQty")}
                />
                <FormField
                  label="Purchase UOM"
                  value={formData.purchaseUom}
                  onChange={handleChange("purchaseUom")}
                />
                <FormField
                  label="Lead Time (wks)"
                  value={formData.leadTimeWeeks}
                  onChange={handleChange("leadTimeWeeks")}
                />
              </div>
            </MaintenanceSection>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6 mb-8">
          <button className="px-8 py-2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-50">
            Delete
          </button>
          <button className="px-8 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

